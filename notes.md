## where are sandboxed actions run?

with this `BUILD.bazel`:
```
genrule(
  name = "one",
  cmd = "echo one: $$(pwd) > /dev/stderr; echo I am one! > $@",
  outs = ["one.txt"],
)
genrule(
  name = "two",
  cmd = "echo two: $$(pwd) > /dev/stderr; echo I am two! > $@",
  outs = ["two.txt"],
)
genrule(
  name = "combined",
  cmd = "echo combined: $$(pwd) > /dev/stderr; cat $(location :one.txt) $(location :two.txt) > $@",
  outs = ["combined.txt"],
  srcs = [":one.txt", ":two.txt"],
)
```

building prints:

```
running with --action_env=bustcache=86a83edbfdc13f629a58af10917311af7ffda5abec0a294a70a821c35d434921
Starting local Bazel server and connecting to it...
INFO: Analyzed 3 targets (5 packages loaded, 12 targets configured).
INFO: Found 3 targets...
INFO: From Executing genrule //:one:
one: /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/sandbox/darwin-sandbox/2/execroot/__main__
INFO: From Executing genrule //:two:
two: /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/sandbox/darwin-sandbox/1/execroot/__main__
INFO: From Executing genrule //:combined:
combined: /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/sandbox/darwin-sandbox/3/execroot/__main__
INFO: Elapsed time: 1.298s, Critical Path: 0.07s
INFO: 4 processes: 1 internal, 3 darwin-sandbox.
INFO: Build completed successfully, 4 total actions
```

they each get a unique dir to run in. the numbers before `execroot/__main__` reset after a `bazel clean --expunge`, `bazel shutdown` but NOT after a plain `bazel clean`. this means that the bazel server stores the state about which number is next. searching for `darwin-sandbox` and clicking around lead me to this, which confirms this theory: https://sourcegraph.com/github.com/bazelbuild/bazel@78dc893592c048083fdc4e651d31dbdf1f110560/-/blob/src/main/java/com/google/devtools/build/lib/exec/AbstractSpawnStrategy.java?L76#tab=references

## what commands are ACTUALLY run by genrules?

```
genrule(
  name = "one",
  cmd = "echo failing on purpose && exit 1",
  outs = ["one.txt"],
)
```

prints:
```
# bazel build :all (bustcache)
running with --action_env=bustcache=62aa5da10832e8fa5ebface703d71be8d750b6c23e141e00c27dfdcc946e7fdd
INFO: Build option --action_env has changed, discarding analysis cache.
INFO: Analyzed target //:one (1 packages loaded, 8 targets configured).
INFO: Found 1 target...
ERROR: /Users/christian.s/Code/github.com/christianscott/a-really-simple-build-tool/BUILD.bazel:1:8: Executing genrule //:one failed: (Exit 1): bash failed: error executing command (from target //:one) /bin/bash -c 'source external/bazel_tools/tools/genrule/genrule-setup.sh; echo failing on purpose && exit 1'

Use --sandbox_debug to see verbose messages from the sandbox and retain the sandbox build root for debugging
failing on purpose
Target //:one failed to build
Use --verbose_failures to see the command lines of failed build steps.
INFO: Elapsed time: 0.083s, Critical Path: 0.02s
INFO: 2 processes: 2 internal.
FAILED: Build did NOT complete successfully
```

so it's:

```
/bin/bash -c 'source external/bazel_tools/tools/genrule/genrule-setup.sh; echo failing on purpose && exit 1'
```

where `external/bazel_tools/tools/genrule/genrule-setup.sh` contains:

```
# cat /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/external/bazel_tools/tools/genrule/genrule-setup.sh
#!/bin/bash

# ... license text ...

# exit immediately if a command or pipeline fails, unless it is in a test expression
set -e

# treat unset variables as errors
set -u

# exit code of a pipeline is 0, or the non-zero exit code of the rightmost failing command
set -o pipefail
```

## what syscalls fire when building the following genrules?

```python
genrule(
    name = "myfile1",
    cmd = "echo 'I am the first file?' > $@",
    outs = ["myfile1.txt"]
)
genrule(
    name = "myfile2",
    cmd = "{ echo 'the contents of myfile1.txt is...:'; cat $(location :myfile1); } > $@",
    srcs = [":myfile1"],
    outs = ["myfile2.txt"]
)
```

```
[pid 25090] <... read resumed>"genrule(\n    name = \"myfile1\",\n "..., 8192) = 283
[pid 25090] <... read resumed>"genrule(\n    name = \"myfile1\",\n "..., 8192) = 283
[pid 25139] unlinkat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", 0) = -1 ENOENT (No such file or directory)
[pid 25143] openat(AT_FDCWD, "bazel-out/aarch64-fastbuild/bin/myfile1.txt", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
[pid 25139] unlinkat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", 0 <unfinished ...>
[pid 25139] renameat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/sandbox/linux-sandbox/1/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt" <unfinished ...>
[pid 25139] newfstatat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", {st_mode=S_IFREG|0644, st_size=21, ...}, AT_SYMLINK_NOFOLLOW) = 0
[pid 25139] fchmodat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", 0555) = 0
[pid 25139] newfstatat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", {st_mode=S_IFREG|0555, st_size=21, ...}, AT_SYMLINK_NOFOLLOW) = 0
[pid 25139] newfstatat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", {st_mode=S_IFREG|0555, st_size=21, ...}, 0) = 0
[pid 25139] openat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", O_RDONLY <unfinished ...>
[pid 25139] unlinkat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile2.txt", 0 <unfinished ...>
[pid 25139] symlinkat("/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt", AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/sandbox/linux-sandbox/2/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile1.txt") = 0
[pid 25146] openat(AT_FDCWD, "bazel-out/aarch64-fastbuild/bin/myfile2.txt", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
[pid 25146] write(1, "the contents of myfile1.txt is.."..., 35 <unfinished ...>
[pid 25147] openat(AT_FDCWD, "bazel-out/aarch64-fastbuild/bin/myfile1.txt", O_RDONLY <unfinished ...>
[pid 25139] newfstatat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/sandbox/linux-sandbox/2/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile2.txt",  <unfinished ...>
[pid 25139] unlinkat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile2.txt", 0 <unfinished ...>
[pid 25139] renameat(AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/sandbox/linux-sandbox/2/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile2.txt", AT_FDCWD, "/home/christian/.cache/bazel/_bazel_christian/a361480a9d82198c58e3bb5ebc99dab3/execroot/__main__/bazel-out/aarch64-fastbuild/bin/myfile2.txt" <unfinished ...>
[pid 25139] unlinkat(41, "myfile1.txt", 0 <unfinished ...>
[pid 25139] newfstatat(AT_FDCWD, "/home/ch
```

In english, with assistance from GPT-4:
1. try to delete `myfile1.txt` in the output directory ($execroot/bazel-out/aarch64-fastbuild/bin/myfile1.txt)
1. create `myfile1.txt`, presumably in the sandbox directory ($execroot/sandbox/1/bazel-out/aarch64-fastbuild/bin/myfile1.txt)
1. move `myfile1.txt` from the sandbox to the output directory
1. open `myfile1.txt` again for some reason (hashing?)
1. try to delete `myfile2.txt` in the output directory ($execroot/bazel-out/aarch64-fastbuild/bin/myfile2.txt)
1. symlink `myfile1.txt` from the output directory into the sandbox directory for the second genrule
1. create `myfile2.txt`, presumably in the sandbox directory ($execroot/sandbox/2/bazel-out/aarch64-fastbuild/bin/myfile2.txt)
1. move `myfile2.txt` from the sandbox to the output directory

## how do other build tools run tasks across multiple worker threads?

`please` runs `queueTargetAsync` in a goroutine for each build target. that function loops over each of its dependencies & waits for them to finish: https://github.com/thought-machine/please/blob/0dc8d00e36c45bcb1c011c7ac824fb0b94e741e3/src/core/state.go#L1133-L1169. This is a cool way to take advantage of the cheapness of goroutines. I don't think this would work unless you had access to something similar (green threads?).

I actually think there might be a way to do something similar with the event loop. `await`ing a promise should be very cheap.

I cannot figure out how bazel does it. The codebase is hard to read at the best of times, but the level of indirection in `AbstractParallelEvaluator` makes it nearly impossible https://sourcegraph.com/github.com/bazelbuild/bazel@952438d4c7c69beec3a1dc643d564c116e0e1542/-/blob/src/main/java/com/google/devtools/build/skyframe/AbstractParallelEvaluator.java?L61

## how do input files from the workspace get into the sandbox?

it looks like input files are first linked into the execroot, and then from the execroot into the sandbox:

```
# ll /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/sandbox/darwin-sandbox/6/execroot/__main__/
total 0
drwxr-xr-x  3 christian.s  wheel    96B  2 Apr 13:56 bazel-out/
drwxr-xr-x  3 christian.s  wheel    96B  2 Apr 13:56 external/
lrwxr-xr-x  1 christian.s  wheel    94B  2 Apr 13:56 who.txt@ -> /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/execroot/__main__/who.txt
# ll /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/sandbox/darwin-sandbox/6/execroot/__main__/who.txt
lrwxr-xr-x  1 christian.s  wheel    94B  2 Apr 13:56 /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/sandbox/darwin-sandbox/6/execroot/__main__/who.txt@ -> /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/execroot/__main__/who.txt
# ll (readlink /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/sandbox/darwin-sandbox/6/execroot/__main__/who.txt)
lrwxr-xr-x  1 christian.s  wheel    84B  2 Apr 13:56 /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/execroot/__main__/who.txt@ -> /Users/christian.s/Code/github.com/christianscott/a-really-simple-build-tool/who.txt
```

## how should an input file from the workspace be resolved?

output files are currently simpler to resolve because we can just iterate all targets and collect output files. input files are a bit less obvious, and will be less obvious once we have to support multiple packages.

let's ignore multiple pacakges for now and solve the simplest case.

simplest option is to try to read the file when it's referenced.

## what does `$(location :label)` return?

relative path to the file, assuming :label "expands" to a single file. note that actions for packages located in subdirectories are not run inside a corresponding subdirectory inside the sandbox. instead, they're run in the sandbox "root" while files inside that package are linked into a nested directory.

say you have these files:

```
- foo/
  - input.txt
  - BUILD.bazel
```

you'll get the following sandbox layout:

```
- sandbox/1
  - foo/input.txt
```

and actions will be run inside `sandbox/1`.