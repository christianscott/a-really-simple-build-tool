# A really simple build tool

A simple build tool that implements a subset of the features that Bazel supports. Built as a learning tool to help me understand how Bazel works in a bit more depth.

## Features

1. Sandboxing
1. Genrules
1. Building a subset of the graph (i.e. specifying a single entrypoint and only building its dependencies)

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
