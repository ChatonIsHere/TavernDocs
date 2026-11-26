---
title: "DeferredSynchronizeInvoke.UnityAsyncResult"
description: "A queued call in DeferredSynchronizeInvoke and its result."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeferredSynchronizeInvoke.UnityAsyncResult

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A queued call in `DeferredSynchronizeInvoke` and its result.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`DeferredSynchronizeInvoke`](/game-api/types/global-c-d/deferredsynchronizeinvoke)
- **Inherits or implements** `IAsyncResult`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UnityAsyncResult()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-args" /><code>{"object[] args"}</code> | Arguments for the call. |
| <Link id="m-method" /><code>{"Delegate method"}</code> | The delegate to call. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-asyncstate" /><code>{"object AsyncState { get; set; }"}</code> | The call's return value once it has run. |
| <Link id="m-asyncwaithandle" /><code>{"WaitHandle AsyncWaitHandle { get; internal set; }"}</code> | Wait handle for the call. Note: `ProcessQueue` never sets it, so `EndInvoke` on a pending call waits forever. |
| <Link id="m-completedsynchronously" /><code>{"bool CompletedSynchronously { get; }"}</code> | Same as `IsCompleted`. |
| <Link id="m-iscompleted" /><code>{"bool IsCompleted { get; set; }"}</code> | True once `ProcessQueue` has run the call. |

## Used in

Members of other types that take, return or hold a `UnityAsyncResult`:

[`DeferredSynchronizeInvoke.fifoToExecute`](/game-api/types/global-c-d/deferredsynchronizeinvoke#m-fifotoexecute).
