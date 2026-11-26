---
title: "TaskYield"
description: "Lets a Unity coroutine wait for a Task: yield one and the coroutine resumes when the task finishes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaskYield

A **class** in `Root.Township`, the global namespace.

Lets a Unity coroutine wait for a `Task`: yield one and the coroutine resumes when the task finishes.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `CustomYieldInstruction`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TaskYield(Task task)"}</code> | <span className="api-desc">Creates a `TaskYield` from `task`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keepwaiting" /><code>{"override bool keepWaiting { get; }"}</code> | <span className="api-desc">True until the task completes. Rethrows the task's exception if it failed.</span> |
| <Link id="m-task" /><code>{"Task Task { get; set; }"}</code> | <span className="api-desc">The task being waited on.</span> |
