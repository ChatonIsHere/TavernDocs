---
title: "BasicDigable"
description: "Something a digging tool can dig up (IDigable)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDigable

A **class** in `Root.Township`, the global namespace.

Something a digging tool can dig up (`IDigable`). The server runs the dug event and sends dig or hit effects to clients in nearby chunks.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IDigable`](/mod/game-api/types/global-i-l/idigable)
- **Derived types** [`HealthBasedDigable`](/mod/game-api/types/global-e-h/healthbaseddigable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDigable()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondighiteffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDigHitEffects"}</code> | Effect for a digging hit, played at this position. |
| <Link id="m-ondugeffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDugEffects"}</code> | Effect for being dug up, played at this position. |
| <Link id="m-ondugserver" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDugServer"}</code> | Server-only event when dug, for the gameplay result. |
| <Link id="m-syncdig" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncDig"}</code> | Network sync for dig effects, sent as an effect request. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dig" /><code>{"virtual void Dig(float diggingDamage)"}</code> | Server: plays dug effects (unless headless), syncs them to clients and invokes `onDugServer`. Virtual. |
| <Link id="m-diggingtoolhit" /><code>{"void DiggingToolHit()"}</code> | Server: plays the hit effect for a dig that didn't finish and syncs it to clients. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync message used to send dig effects. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncdig-2" /><code>{"private void SyncDig("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isDig)"}</code> | Message handler: clients play the dug effect when the flag is true and the hit effect when false. |

</details>
