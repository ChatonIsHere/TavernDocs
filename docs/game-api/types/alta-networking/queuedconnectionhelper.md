---
title: "QueuedConnectionHelper"
description: "static class QueuedConnectionHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QueuedConnectionHelper

A **static class** in `Root.Township`, `Alta.Networking.Internal`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-receivers" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-networking/queuedconnectionreceiver">{"QueuedConnectionReceiver"}</Link>{"> receivers"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-istherequeuedmessages" /><code>{"static bool IsThereQueuedMessages { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-finishedallqueues" /><code>{"static event Action FinishedAllQueues"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-deregister" /><code>{"static void Deregister("}<Link to="/game-api/types/alta-networking/queuedconnectionreceiver">{"QueuedConnectionReceiver"}</Link>{" receiver)"}</code> |
| <Link id="m-register" /><code>{"static void Register("}<Link to="/game-api/types/alta-networking/queuedconnectionreceiver">{"QueuedConnectionReceiver"}</Link>{" receiver)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-receiverfinished" /><code>{"private static void ReceiverFinished()"}</code> |

</details>
