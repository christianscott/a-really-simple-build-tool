# A really simple build tool

A simple build tool that implements a subset of the features that Bazel supports. Built as a learning tool to help me understand how Bazel works in a bit more depth.

## Features

1. [Sandboxing](https://github.com/christianscott/a-really-simple-build-tool/blob/master/src/SandboxedActionExecutor.js#L18-L53)
1. Genrules
1. [Building a subset of the graph](https://github.com/christianscott/a-really-simple-build-tool/blob/master/src/main.js#L106-L107) (i.e. specifying a single entrypoint and only building its dependencies)

## Features I'd like to add

1. Remote cache, with a disk cache as a special case
1. Remote execution
1. Parallel builds
1. Executable outputs + runfiles

## Features I probably won't add

I probably won't be adding these because their implementations are not super interesting to me.

1. Persistent action cache (i.e. Bazel without a remote cache or --disk_cache)
1. Config DSL like starlark
1. Support for custom rules, or any rule other than genrules
1. Cross-platform builds
1. Test runner

## Usage

Notice that the output paths do not have the platform-specific sections that they would in bazel. These are elided for the sake of simplicity.

```
# node src/main.js build :one.txt
Executing genrule for one
# find /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/execroot | print-paths-as-tree
private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/execroot
├── sandbox
└── one.txt

0 directories, 0 files

# node src/main.js build :combined.txt
Executing genrule for one
Executing genrule for two
Executing genrule for combined
# find /private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/execroot | print-paths-as-tree
private/var/tmp/_bazel_christian.s/1656c0c543ef2bf12fc92766a305649f/execroot
├── combined.txt
├── two.txt
├── sandbox
└── one.txt

0 directories, 0 files
```
