---
title: "DoubleBufferedQueue<T>"
description: "Two queues that swap: entries collect in one until a timer runs out or it is full, then it is passed to ProcessQueue and the other takes new entries."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DoubleBufferedQueue&lt;T&gt;

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

Two queues that swap: entries collect in one until a timer runs out or it is full, then it is passed to `ProcessQueue` and the other takes new entries. Used by `ApiBatchRequestService` (30 s, 100 entries).

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Nested types** [`BatchingQueue`](/mod/game-api/types/assembly-api-client/doublebufferedqueue-t-batchingqueue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DoubleBufferedQueue(int lifetimeMs, int maxEntries)"}</code> | Creates a `DoubleBufferedQueue` from `lifetimeMs` and `maxEntries`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activequeue" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/doublebufferedqueue-t-batchingqueue">{"DoubleBufferedQueue"}</Link>{"<T> activeQueue"}</code> | Which queue takes new entries. |
| <Link id="m-enqueuelock" /><code>{"private readonly object enqueueLock"}</code> | Lock held while adding an entry. |
| <Link id="m-primaryqueue" /><code>{"private readonly Queue<T> primaryQueue"}</code> | The first of the two queues. |
| <Link id="m-queuemaxentries" /><code>{"private readonly int queueMaxEntries"}</code> | Entry count above which a queue is flushed early. |
| <Link id="m-queuetimer" /><code>{"private readonly Timer queueTimer"}</code> | Timer that flushes the active queue after the lifetime set in the constructor. |
| <Link id="m-secondaryqueue" /><code>{"private readonly Queue<T> secondaryQueue"}</code> | The second of the two queues. |
| <Link id="m-swaplock" /><code>{"private readonly object swapLock"}</code> | Lock held while swapping and flushing. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-processqueue" /><code>{"Action<IEnumerable<T>> ProcessQueue { get; set; }"}</code> | Callback given the full or expired queue. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enqueue" /><code>{"void Enqueue(T entry)"}</code> | Adds an entry to the active queue, flushing first if it is full, and starts the timer. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isqueuefull" /><code>{"private bool IsQueueFull(Queue<T> queue)"}</code> | True when the queue holds more than `queueMaxEntries`. |
| <Link id="m-onqueueexpired" /><code>{"private void OnQueueExpired(object sender, ElapsedEventArgs e)"}</code> | Swaps the active queue, passes the old one to `ProcessQueue` and stops the timer. Nothing here clears the old queue. |
| <Link id="m-onqueueexpired-2" /><code>{"private void OnQueueExpired()"}</code> | Swaps the active queue, passes the old one to `ProcessQueue` and stops the timer. Nothing here clears the old queue. |
| <Link id="m-swapactivequeue" /><code>{"private void SwapActiveQueue()"}</code> | Switches which queue takes new entries. |
| <Link id="m-watchactivequeue" /><code>{"private async void WatchActiveQueue()"}</code> | Starts the timer if it is not running. |

</details>

## Used in

Members of other types that take, return or hold a `DoubleBufferedQueue&lt;T>`:

[`ApiBatchRequestService.queue`](/mod/game-api/types/assembly-api-client/apibatchrequestservice#m-queue).
