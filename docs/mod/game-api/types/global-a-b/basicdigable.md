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
| <Link id="m-ctor" /><code>{"BasicDigable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondighiteffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDigHitEffects"}</code> | <span className="api-desc">Effect for a digging hit, played at this position.</span> |
| <Link id="m-ondugeffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDugEffects"}</code> | <span className="api-desc">Effect for being dug up, played at this position.</span> |
| <Link id="m-ondugserver" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDugServer"}</code> | <span className="api-desc">Server-only event when dug, for the gameplay result.</span> |
| <Link id="m-syncdig" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncDig"}</code> | <span className="api-desc">Network sync for dig effects, sent as an effect request.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dig" /><code>{"virtual void Dig(float diggingDamage)"}</code> | <span className="api-desc">Server: plays dug effects (unless headless), syncs them to clients and invokes `onDugServer`. Virtual.</span> |
| <Link id="m-diggingtoolhit" /><code>{"void DiggingToolHit()"}</code> | <span className="api-desc">Server: plays the hit effect for a dig that didn't finish and syncs it to clients.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync message used to send dig effects.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncdig-2" /><code>{"private void SyncDig("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isDig)"}</code> | <span className="api-desc">Message handler: clients play the dug effect when the flag is true and the hit effect when false.</span> |

</details>
