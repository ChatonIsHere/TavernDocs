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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"private PooledDataQueueItem()"}</code> |

</details>

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-queueddata" /><code>{"ArraySegment<byte> queuedData"}</code> | The queued packet bytes. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dataqueueitempool" /><code>{"private static Stack<"}<Link to="/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{"> dataQueueItemPool"}</code> | Static pool of free items. |
| <Link id="m-maxpoolsize" /><code>{"private const int MaxPoolSize"}</code> | Pool size limit (100); released items beyond it are dropped. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{" Get(ArraySegment<byte> queuedData)"}</code> | Takes an item from the pool (or makes one) and sets it to hold the given data. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Returns the byte array to `MessageReceivePool` and puts the item back in the pool. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupitem" /><code>{"private void SetupItem(ArraySegment<byte> queuedData)"}</code> | Sets the data the item holds; called by `Get`. |

</details>

## Used in

Members of other types that take, return or hold a `PooledDataQueueItem`:

[`QueuedConnectionReceiver.incomingQueue`](/game-api/types/alta-networking/queuedconnectionreceiver#m-incomingqueue).
