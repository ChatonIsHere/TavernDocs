---
title: "DeferredSynchronizeInvoke"
description: "An ISynchronizeInvoke that queues calls from other threads and runs them on the thread that created it when ProcessQueue is called."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeferredSynchronizeInvoke

A **class** in `Root.Township`, the global namespace.

An `ISynchronizeInvoke` that queues calls from other threads and runs them on the thread that created it when `ProcessQueue` is called.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `ISynchronizeInvoke`
- **Nested types** [`UnityAsyncResult`](/mod/game-api/types/global-c-d/deferredsynchronizeinvoke-unityasyncresult)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeferredSynchronizeInvoke()"}</code> | <span className="api-desc">Creates a `DeferredSynchronizeInvoke` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fifotoexecute" /><code>{"private Queue<"}<Link to="/mod/game-api/types/global-c-d/deferredsynchronizeinvoke-unityasyncresult">{"DeferredSynchronizeInvoke.UnityAsyncResult"}</Link>{"> fifoToExecute"}</code> | <span className="api-desc">Queued calls, locked while used.</span> |
| <Link id="m-mainthread" /><code>{"private Thread mainThread"}</code> | <span className="api-desc">The thread that created this object.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-invokerequired" /><code>{"bool InvokeRequired { get; }"}</code> | <span className="api-desc">True when called from a thread other than the creating one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"IAsyncResult BeginInvoke(Delegate method, object[] args)"}</code> | <span className="api-desc">Queues the method to run on the main thread at the next `ProcessQueue`, and returns at once.</span> |
| <Link id="m-endinvoke" /><code>{"object EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Blocks until a queued call has run on the main thread, then returns its result.</span> |
| <Link id="m-invoke" /><code>{"object Invoke(Delegate method, object[] args)"}</code> | <span className="api-desc">Runs the method now if this is the main thread; otherwise queues it and waits for it to run there.</span> |
| <Link id="m-processqueue" /><code>{"void ProcessQueue()"}</code> | <span className="api-desc">Runs all queued calls and stores their results. Throws if not called from the creating thread.</span> |
