---
title: "DeferredSynchronizeInvoke.UnityAsyncResult"
description: "A queued call in DeferredSynchronizeInvoke and its result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeferredSynchronizeInvoke.UnityAsyncResult

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A queued call in `DeferredSynchronizeInvoke` and its result.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`DeferredSynchronizeInvoke`](/mod/game-api/types/global-c-d/deferredsynchronizeinvoke)
- **Inherits or implements** `IAsyncResult`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnityAsyncResult()"}</code> | <span className="api-desc">Creates a `DeferredSynchronizeInvoke.UnityAsyncResult` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-args" /><code>{"object[] args"}</code> | <span className="api-desc">Arguments for the call.</span> |
| <Link id="m-method" /><code>{"Delegate method"}</code> | <span className="api-desc">The delegate to call.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-asyncstate" /><code>{"object AsyncState { get; set; }"}</code> | <span className="api-desc">The call's return value once it has run.</span> |
| <Link id="m-asyncwaithandle" /><code>{"WaitHandle AsyncWaitHandle { get; internal set; }"}</code> | <span className="api-desc">Wait handle for the call. Note: `ProcessQueue` never sets it, so `EndInvoke` on a pending call waits forever.</span> |
| <Link id="m-completedsynchronously" /><code>{"bool CompletedSynchronously { get; }"}</code> | <span className="api-desc">Same as `IsCompleted`.</span> |
| <Link id="m-iscompleted" /><code>{"bool IsCompleted { get; set; }"}</code> | <span className="api-desc">True once `ProcessQueue` has run the call.</span> |

## Used in

Members of other types that take, return or hold a `UnityAsyncResult`:

<div className="api-used-in">

[`DeferredSynchronizeInvoke.fifoToExecute`](/mod/game-api/types/global-c-d/deferredsynchronizeinvoke#m-fifotoexecute).

</div>
