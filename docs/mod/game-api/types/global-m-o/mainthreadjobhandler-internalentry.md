---
title: "MainThreadJobHandler.InternalEntry"
description: "A queued job in MainThreadJobHandler: the function that makes the steps, its running enumerator and the task that completes when it finishes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainThreadJobHandler.InternalEntry

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A queued job in `MainThreadJobHandler`: the function that makes the steps, its running enumerator and the task that completes when it finishes.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MainThreadJobHandler`](/mod/game-api/types/global-m-o/mainthreadjobhandler)
- **Inherits or implements** [`MainThreadJobHandler.Entry`](/mod/game-api/types/global-m-o/mainthreadjobhandler-entry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InternalEntry()"}</code> | <span className="api-desc">Creates a `MainThreadJobHandler.InternalEntry` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cancellationtoken" /><code>{"CancellationToken cancellationToken"}</code> | <span className="api-desc">Checked before the job starts; a cancelled job completes with false.</span> |
| <Link id="m-completionsource" /><code>{"TaskCompletionSource<bool> completionSource"}</code> | <span className="api-desc">Completes when the job finishes or is cancelled.</span> |
| <Link id="m-gettask" /><code>{"Func<IEnumerable> getTask"}</code> | <span className="api-desc">Function returning the job's steps.</span> |
| <Link id="m-index" /><code>{"uint index"}</code> | <span className="api-desc">Running job number.</span> |
| <Link id="m-task" /><code>{"IEnumerator task"}</code> | <span className="api-desc">The job's enumerator, stepped each frame within the time allowance.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getawaiter" /><code>{"override TaskAwaiter<bool> GetAwaiter()"}</code> | <span className="api-desc">Lets callers await the entry; the result is false if it was cancelled.</span> |
| <Link id="m-initialize" /><code>{"void Initialize(uint index, Func<IEnumerable> getTask, CancellationToken cancellationToken = null)"}</code> | <span className="api-desc">Resets the entry for a new job.</span> |

## Used in

Members of other types that take, return or hold a `InternalEntry`:

<div className="api-used-in">

[`MainThreadJobHandler.current`](/mod/game-api/types/global-m-o/mainthreadjobhandler#m-current), [`MainThreadJobHandler.entries`](/mod/game-api/types/global-m-o/mainthreadjobhandler#m-entries), [`MainThreadJobHandler.pool`](/mod/game-api/types/global-m-o/mainthreadjobhandler#m-pool).

</div>
