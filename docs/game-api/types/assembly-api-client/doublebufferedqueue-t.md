---
title: "DoubleBufferedQueue<T>"
description: "class DoubleBufferedQueue<T> in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DoubleBufferedQueue&lt;T&gt;

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Nested types** [`BatchingQueue`](/game-api/types/assembly-api-client/doublebufferedqueue-t-batchingqueue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DoubleBufferedQueue(int lifetimeMs, int maxEntries)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activequeue" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/doublebufferedqueue-t-batchingqueue">{"DoubleBufferedQueue"}</Link>{"<T> activeQueue"}</code> |  |
| <Link id="m-enqueuelock" /><code>{"private readonly object enqueueLock"}</code> |  |
| <Link id="m-primaryqueue" /><code>{"private readonly Queue<T> primaryQueue"}</code> |  |
| <Link id="m-queuemaxentries" /><code>{"private readonly int queueMaxEntries"}</code> |  |
| <Link id="m-queuetimer" /><code>{"private readonly Timer queueTimer"}</code> |  |
| <Link id="m-secondaryqueue" /><code>{"private readonly Queue<T> secondaryQueue"}</code> |  |
| <Link id="m-swaplock" /><code>{"private readonly object swapLock"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-processqueue" /><code>{"Action<IEnumerable<T>> ProcessQueue { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enqueue" /><code>{"void Enqueue(T entry)"}</code> |  |
| <Link id="m-isqueuefull" /><code>{"private bool IsQueueFull(Queue<T> queue)"}</code> |  |
| <Link id="m-onqueueexpired" /><code>{"private void OnQueueExpired(object sender, ElapsedEventArgs e)"}</code> |  |
| <Link id="m-onqueueexpired-2" /><code>{"private void OnQueueExpired()"}</code> |  |
| <Link id="m-swapactivequeue" /><code>{"private void SwapActiveQueue()"}</code> |  |
| <Link id="m-watchactivequeue" /><code>{"private async void WatchActiveQueue()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DoubleBufferedQueue&lt;T>`:

[`ApiBatchRequestService.queue`](/game-api/types/assembly-api-client/apibatchrequestservice#m-queue).
