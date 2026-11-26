---
title: "DeferredSynchronizeInvoke"
description: "An ISynchronizeInvoke that queues calls from other threads and runs them on the thread that created it when ProcessQueue is called."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeferredSynchronizeInvoke

A **class** in `Root.Township`, no namespace.

An `ISynchronizeInvoke` that queues calls from other threads and runs them on the thread that created it when `ProcessQueue` is called.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `ISynchronizeInvoke`
- **Nested types** [`UnityAsyncResult`](/game-api/types/global-c-d/deferredsynchronizeinvoke-unityasyncresult)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DeferredSynchronizeInvoke()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fifotoexecute" /><code>{"private Queue<"}<Link to="/game-api/types/global-c-d/deferredsynchronizeinvoke-unityasyncresult">{"DeferredSynchronizeInvoke.UnityAsyncResult"}</Link>{"> fifoToExecute"}</code> | Queued calls, locked while used. |
| <Link id="m-mainthread" /><code>{"private Thread mainThread"}</code> | The thread that created this object. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-invokerequired" /><code>{"bool InvokeRequired { get; }"}</code> | True when called from a thread other than the creating one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"IAsyncResult BeginInvoke(Delegate method, object[] args)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"object EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"object Invoke(Delegate method, object[] args)"}</code> |  |
| <Link id="m-processqueue" /><code>{"void ProcessQueue()"}</code> | Runs all queued calls and stores their results. Throws if not called from the creating thread. |
