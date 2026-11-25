---
title: "PooledDataQueueItem"
description: "class PooledDataQueueItem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledDataQueueItem

A **class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"private PooledDataQueueItem()"}</code> |

</details>

## Fields

| Member |
| --- |
| <Link id="m-queueddata" /><code>{"ArraySegment<byte> queuedData"}</code> |

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dataqueueitempool" /><code>{"private static Stack<"}<Link to="/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{"> dataQueueItemPool"}</code> |
| <Link id="m-maxpoolsize" /><code>{"private const int MaxPoolSize"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/alta-networking/pooleddataqueueitem">{"PooledDataQueueItem"}</Link>{" Get(ArraySegment<byte> queuedData)"}</code> |
| <Link id="m-release" /><code>{"void Release()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-setupitem" /><code>{"private void SetupItem(ArraySegment<byte> queuedData)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PooledDataQueueItem`:

[`QueuedConnectionReceiver.incomingQueue`](/game-api/types/alta-networking/queuedconnectionreceiver#m-incomingqueue).
