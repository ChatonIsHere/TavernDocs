---
title: "BasicChiselable"
description: "Simple chisel target with a health value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicChiselable

A **class** in `Root.Township`, `Features.Gameplay.Activities.Carpentry`.

Simple chisel target with a health value. The server takes off chisel damage and, when health runs out, fires its broken events on the server and on clients in the chunk.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IChiselable`](/mod/game-api/types/alta-crafting/ichiselable)
- **Derived types** [`ChiselableSurfaceDock`](/mod/game-api/types/game-other-namespaces/chiselablesurfacedock)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicChiselable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-brokenclient" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" brokenClient"}</code> | <span className="api-desc">Event fired on clients when the object breaks.</span> |
| <Link id="m-brokenserver" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" brokenServer"}</code> | <span className="api-desc">Event fired on the server when the object breaks.</span> |
| <Link id="m-health" /><code>{"private float health"}</code> | <span className="api-desc">Damage left before the object breaks. Default 1. Not synced or saved.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync used to send the break to clients.</span> |
| <Link id="m-tookdamage" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" tookDamage"}</code> | <span className="api-desc">Event fired with the damage amount on each hit.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">`IChiselable` flag, default true. `ReceiveDamage` checks the component's `enabled` instead, not this.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdirectionleniency" /><code>{"virtual void GetDirectionLeniency(ref float directionMultiplier)"}</code> | <span className="api-desc">Virtual hook to change the chisel direction multiplier. Does nothing here.</span> |
| <Link id="m-gethitmultiplier" /><code>{"virtual float GetHitMultiplier(Vector3 hitDirection)"}</code> | <span className="api-desc">Virtual hook for a per-direction damage multiplier. Returns 1 here.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the break method sync on `SyncB`.</span> |
| <Link id="m-receivedamage" /><code>{"virtual void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Fires `tookDamage` on both sides; on the server, takes damage off health and breaks the object at zero.</span> |
| <Link id="m-onbrokenserver" /><code>{"protected virtual void OnBrokenServer(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Server: tells clients in the chunk the object broke and fires `brokenServer`. Override to add behaviour.</span> |
| <Link id="m-ondamagetakenserver" /><code>{"protected virtual bool OnDamageTakenServer(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Server: virtual check run before damage is applied; return false to ignore the hit. Returns true here.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncbreak" /><code>{"private void SyncBreak("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: fires `brokenClient` when the break message arrives, if there is a local player.</span> |

</details>
