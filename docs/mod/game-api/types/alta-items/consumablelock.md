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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`Lock`](/mod/game-api/types/alta-items/lock)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsumableLock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | <span className="api-desc">Network animator that plays the `Unlock` trigger.</span> |
| <Link id="m-lockbreakevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" lockBreakEvent"}</code> | <span className="api-desc">Backing field for `LockBreakEvent`.</span> |
| <Link id="m-requesteffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" requestEffect"}</code> | <span className="api-desc">Network message used to send the break to clients.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lockbreakevent-2" /><code><Link to="/mod/game-api/types/alta-items/lockevent">{"LockEvent"}</Link>{" LockBreakEvent { get; }"}</code> | <span className="api-desc">Event fired when the lock breaks, on the server and (through a network message) on clients.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"void Break()"}</code> | <span className="api-desc">Server: fires the break event, tells the chunk's clients, and destroys the lock entity.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network message that plays the break effect on clients.</span> |
| <Link id="m-unlocked" /><code>{"protected override void Unlocked()"}</code> | <span className="api-desc">Removes the key joint, frees the rigidbody and, on the server, breaks the key and fires the `Unlock` trigger.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-networkbreak" /><code>{"private void NetworkBreak("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: fires the break event when the server reports the lock broke.</span> |

</details>
