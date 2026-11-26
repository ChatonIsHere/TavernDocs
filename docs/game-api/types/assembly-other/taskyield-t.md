---
title: "TaskYield<T>"
description: "Lets a Unity coroutine wait for a Task<T> and then read its result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaskYield&lt;T&gt;

A **class** in `Alta.Coroutines`, no namespace.

Lets a Unity coroutine wait for a `Task<T>` and then read its result.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `CustomYieldInstruction`
- **Documented in** [Threads, coroutines and the timeline](/game-api/console-and-utilities/threads-coroutines-and-timeline#coroutineyields-and-taskyield)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TaskYield(Task<T> task)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keepwaiting" /><code>{"override bool keepWaiting { get; }"}</code> | True until the task completes. Rethrows the task's exception if it failed. |
| <Link id="m-result" /><code>{"T Result { get; }"}</code> | The task's result; read it after the yield returns. |
| <Link id="m-task" /><code>{"Task<T> Task { get; set; }"}</code> | The task being waited on. |
