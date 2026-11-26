---
title: "QueuedConnectionHelper"
description: "Tracks all queued connection receivers so code can tell when every queued message has been handled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QueuedConnectionHelper

A **static class** in `Root.Township`, `Alta.Networking.Internal`.

Tracks all queued connection receivers so code can tell when every queued message has been handled.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-receivers" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-networking/queuedconnectionreceiver">{"QueuedConnectionReceiver"}</Link>{"> receivers"}</code> | The tracked receivers. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istherequeuedmessages" /><code>{"static bool IsThereQueuedMessages { get; }"}</code> | True if any tracked receiver still has queued messages. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedallqueues" /><code>{"static event Action FinishedAllQueues"}</code> | Raised when a receiver finishes its queue and no tracked receiver has messages left. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/mod/game-api/types/alta-networking/queuedconnectionreceiver">{"QueuedConnectionReceiver"}</Link>{" receiver)"}</code> | Stops tracking a receiver and checks if all queues are now empty. |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/mod/game-api/types/alta-networking/queuedconnectionreceiver">{"QueuedConnectionReceiver"}</Link>{" receiver)"}</code> | Starts tracking a receiver and listens for its queue finishing. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-receiverfinished" /><code>{"private static void ReceiverFinished()"}</code> | Raises `FinishedAllQueues` if no receiver has a queue left. |

</details>
