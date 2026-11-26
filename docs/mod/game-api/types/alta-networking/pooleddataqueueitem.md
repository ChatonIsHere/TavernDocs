---
title: "PooledDataQueueItem"
description: "A pooled wrapper around a received packet's bytes, used by QueuedConnectionReceiver to queue packets for later frames."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledDataQueueItem

A **class** in `Root.Township`, `Alta.Networking.Internal`.

A pooled wrapper around a received packet's bytes, used by `QueuedConnectionReceiver` to queue packets for later frames.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private PooledDataQueueItem()"}</code> | <span className="api-desc">Creates a `PooledDataQueueItem` with default values.</span> |

</details>

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-queueddata" /><code>{"ArraySegment<byte> queuedData"}</code> | <span className="api-desc">The queued packet bytes.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dataqueueitempool" /><code>{"private static Stack<"}<Link to="/mod/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{"> dataQueueItemPool"}</code> | <span className="api-desc">Static pool of free items.</span> |
| <Link id="m-maxpoolsize" /><code>{"private const int MaxPoolSize"}</code> | <span className="api-desc">Pool size limit (100); released items beyond it are dropped.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{" Get(ArraySegment<byte> queuedData)"}</code> | <span className="api-desc">Takes an item from the pool (or makes one) and sets it to hold the given data.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Returns the byte array to `MessageReceivePool` and puts the item back in the pool.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupitem" /><code>{"private void SetupItem(ArraySegment<byte> queuedData)"}</code> | <span className="api-desc">Sets the data the item holds; called by `Get`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PooledDataQueueItem`:

<div className="api-used-in">

[`QueuedConnectionReceiver.incomingQueue`](/mod/game-api/types/alta-networking/queuedconnectionreceiver#m-incomingqueue).

</div>
