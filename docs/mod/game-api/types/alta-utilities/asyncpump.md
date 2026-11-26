---
title: "AsyncPump"
description: "Lets main-thread code block on a Task without a deadlock, by running Unity's queued continuations while it waits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AsyncPump

A **static class** in `Root.Township`, `Alta.Utilities`.

Lets main-thread code block on a `Task` without a deadlock, by running Unity's queued continuations while it waits.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Attributes** `Extension`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exec" /><code>{"private static MethodInfo exec"}</code> | <span className="api-desc">Cached reflection handle to the context's private `Exec` method.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-progressalltasks" /><code>{"static void ProgressAllTasks()"}</code> | <span className="api-desc">Runs the queued work on the current Unity `SynchronizationContext` once, by calling its private `Exec` through reflection.</span> |
| <Link id="m-unitywait" /><code>{"static void UnityWait(Task task)"}</code> | <span className="api-desc">Extension: blocks until the task completes, running queued continuations meanwhile. Logs an error and returns if the task was never started.</span> |
