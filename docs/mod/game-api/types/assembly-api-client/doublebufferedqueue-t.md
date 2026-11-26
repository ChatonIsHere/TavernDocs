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
| <Link id="m-ctor" /><code>{"DoubleBufferedQueue(int lifetimeMs, int maxEntries)"}</code> | <span className="api-desc">Creates a `DoubleBufferedQueue` from `lifetimeMs` and `maxEntries`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activequeue" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/doublebufferedqueue-t-batchingqueue">{"DoubleBufferedQueue"}</Link>{"<T> activeQueue"}</code> | <span className="api-desc">Which queue takes new entries.</span> |
| <Link id="m-enqueuelock" /><code>{"private readonly object enqueueLock"}</code> | <span className="api-desc">Lock held while adding an entry.</span> |
| <Link id="m-primaryqueue" /><code>{"private readonly Queue<T> primaryQueue"}</code> | <span className="api-desc">The first of the two queues.</span> |
| <Link id="m-queuemaxentries" /><code>{"private readonly int queueMaxEntries"}</code> | <span className="api-desc">Entry count above which a queue is flushed early.</span> |
| <Link id="m-queuetimer" /><code>{"private readonly Timer queueTimer"}</code> | <span className="api-desc">Timer that flushes the active queue after the lifetime set in the constructor.</span> |
| <Link id="m-secondaryqueue" /><code>{"private readonly Queue<T> secondaryQueue"}</code> | <span className="api-desc">The second of the two queues.</span> |
| <Link id="m-swaplock" /><code>{"private readonly object swapLock"}</code> | <span className="api-desc">Lock held while swapping and flushing.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-processqueue" /><code>{"Action<IEnumerable<T>> ProcessQueue { get; set; }"}</code> | <span className="api-desc">Callback given the full or expired queue.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enqueue" /><code>{"void Enqueue(T entry)"}</code> | <span className="api-desc">Adds an entry to the active queue, flushing first if it is full, and starts the timer.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isqueuefull" /><code>{"private bool IsQueueFull(Queue<T> queue)"}</code> | <span className="api-desc">True when the queue holds more than `queueMaxEntries`.</span> |
| <Link id="m-onqueueexpired" /><code>{"private void OnQueueExpired(object sender, ElapsedEventArgs e)"}</code> | <span className="api-desc">Swaps the active queue, passes the old one to `ProcessQueue` and stops the timer. Nothing here clears the old queue.</span> |
| <Link id="m-onqueueexpired-2" /><code>{"private void OnQueueExpired()"}</code> | <span className="api-desc">Swaps the active queue, passes the old one to `ProcessQueue` and stops the timer. Nothing here clears the old queue.</span> |
| <Link id="m-swapactivequeue" /><code>{"private void SwapActiveQueue()"}</code> | <span className="api-desc">Switches which queue takes new entries.</span> |
| <Link id="m-watchactivequeue" /><code>{"private async void WatchActiveQueue()"}</code> | <span className="api-desc">Starts the timer if it is not running.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DoubleBufferedQueue&lt;T>`:

<div className="api-used-in">

[`ApiBatchRequestService.queue`](/mod/game-api/types/assembly-api-client/apibatchrequestservice#m-queue).

</div>
