---
title: "TaskLock"
description: "class TaskLock in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaskLock

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TaskLock(bool shouldLogOnCancel)"}</code> |
| <Link id="m-ctor-2" /><code>{"TaskLock()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> |
| <Link id="m-logger" /><code>{"private static Logger Logger"}</code> |
| <Link id="m-shouldlogoncancel" /><code>{"private bool shouldLogOnCancel"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-run" /><code>{"async void Run(Func<Task> task)"}</code> |

## Used in

Members of other types that take, return or hold a `TaskLock`:

[`RecentPlayerActionPage.taskLock`](/game-api/types/global-q-r/recentplayeractionpage#m-tasklock).
