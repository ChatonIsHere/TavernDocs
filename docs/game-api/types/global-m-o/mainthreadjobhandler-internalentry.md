---
title: "MainThreadJobHandler.InternalEntry"
description: "A queued job in MainThreadJobHandler: the function that makes the steps, its running enumerator and the task that completes when it finishes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainThreadJobHandler.InternalEntry

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A queued job in `MainThreadJobHandler`: the function that makes the steps, its running enumerator and the task that completes when it finishes.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MainThreadJobHandler`](/game-api/types/global-m-o/mainthreadjobhandler)
- **Inherits or implements** [`MainThreadJobHandler.Entry`](/game-api/types/global-m-o/mainthreadjobhandler-entry)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InternalEntry()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cancellationtoken" /><code>{"CancellationToken cancellationToken"}</code> | Checked before the job starts; a cancelled job completes with false. |
| <Link id="m-completionsource" /><code>{"TaskCompletionSource<bool> completionSource"}</code> | Completes when the job finishes or is cancelled. |
| <Link id="m-gettask" /><code>{"Func<IEnumerable> getTask"}</code> | Function returning the job's steps. |
| <Link id="m-index" /><code>{"uint index"}</code> | Running job number. |
| <Link id="m-task" /><code>{"IEnumerator task"}</code> | The job's enumerator, stepped each frame within the time allowance. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getawaiter" /><code>{"override TaskAwaiter<bool> GetAwaiter()"}</code> | Lets callers await the entry; the result is false if it was cancelled. |
| <Link id="m-initialize" /><code>{"void Initialize(uint index, Func<IEnumerable> getTask, CancellationToken cancellationToken = null)"}</code> | Resets the entry for a new job. |

## Used in

Members of other types that take, return or hold a `InternalEntry`:

[`MainThreadJobHandler.current`](/game-api/types/global-m-o/mainthreadjobhandler#m-current), [`MainThreadJobHandler.entries`](/game-api/types/global-m-o/mainthreadjobhandler#m-entries), [`MainThreadJobHandler.pool`](/game-api/types/global-m-o/mainthreadjobhandler#m-pool).
