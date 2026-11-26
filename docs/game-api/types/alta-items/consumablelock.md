---
title: "ConsumableLock"
description: "A lock that is used up: when unlocked it breaks the key and plays an unlock animation, and Break destroys the lock itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsumableLock

A **class** in `Root.Township`, `Alta.Inventory`.

A lock that is used up: when unlocked it breaks the key and plays an unlock animation, and `Break` destroys the lock itself.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Lock`](/game-api/types/alta-items/lock)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsumableLock()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | Network animator that plays the `Unlock` trigger. |
| <Link id="m-lockbreakevent" /><code>{"private "}<Link to="/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" lockBreakEvent"}</code> | Backing field for `LockBreakEvent`. |
| <Link id="m-requesteffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" requestEffect"}</code> | Network message used to send the break to clients. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lockbreakevent-2" /><code><Link to="/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" LockBreakEvent { get; }"}</code> | Event fired when the lock breaks, on the server and (through a network message) on clients. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"void Break()"}</code> | Server: fires the break event, tells the chunk's clients, and destroys the lock entity. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network message that plays the break effect on clients. |
| <Link id="m-unlocked" /><code>{"protected override void Unlocked()"}</code> | Removes the key joint, frees the rigidbody and, on the server, breaks the key and fires the `Unlock` trigger. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-networkbreak" /><code>{"private void NetworkBreak("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: fires the break event when the server reports the lock broke. |

</details>
