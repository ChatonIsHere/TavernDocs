---
title: "TaskLock"
description: "Runs one async task at a time: Run does nothing if a previous task is still going."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaskLock

A **class** in `Root.Township`, the global namespace.

Runs one async task at a time: `Run` does nothing if a previous task is still going. Exceptions are logged, not thrown.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TaskLock(bool shouldLogOnCancel)"}</code> | Creates a `TaskLock` with default values. |
| <Link id="m-ctor-2" /><code>{"TaskLock()"}</code> | Creates a `TaskLock` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> | True while a task started by `Run` is going. |
| <Link id="m-logger" /><code>{"private static Logger Logger"}</code> | NLog logger for this class. |
| <Link id="m-shouldlogoncancel" /><code>{"private bool shouldLogOnCancel"}</code> | If true, `Run` logs an error when it skips a task because one is already running. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"async void Run(Func<Task> task)"}</code> | Starts the task unless one is already running, and logs any exception it throws. |

## Used in

Members of other types that take, return or hold a `TaskLock`:

[`RecentPlayerActionPage.taskLock`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-tasklock).
