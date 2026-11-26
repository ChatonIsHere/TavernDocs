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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IChiselable`](/game-api/types/alta-crafting/ichiselable)
- **Derived types** [`ChiselableSurfaceDock`](/game-api/types/game-other-namespaces/chiselablesurfacedock)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BasicChiselable()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-brokenclient" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" brokenClient"}</code> | Event fired on clients when the object breaks. |
| <Link id="m-brokenserver" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" brokenServer"}</code> | Event fired on the server when the object breaks. |
| <Link id="m-health" /><code>{"private float health"}</code> | Damage left before the object breaks. Default 1. Not synced or saved. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync used to send the break to clients. |
| <Link id="m-tookdamage" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" tookDamage"}</code> | Event fired with the damage amount on each hit. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | `IChiselable` flag, default true. `ReceiveDamage` checks the component's `enabled` instead, not this. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdirectionleniency" /><code>{"virtual void GetDirectionLeniency(ref float directionMultiplier)"}</code> | Virtual hook to change the chisel direction multiplier. Does nothing here. |
| <Link id="m-gethitmultiplier" /><code>{"virtual float GetHitMultiplier(Vector3 hitDirection)"}</code> | Virtual hook for a per-direction damage multiplier. Returns 1 here. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the break method sync on `SyncB`. |
| <Link id="m-receivedamage" /><code>{"virtual void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Fires `tookDamage` on both sides; on the server, takes damage off health and breaks the object at zero. |
| <Link id="m-onbrokenserver" /><code>{"protected virtual void OnBrokenServer(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Server: tells clients in the chunk the object broke and fires `brokenServer`. Override to add behaviour. |
| <Link id="m-ondamagetakenserver" /><code>{"protected virtual bool OnDamageTakenServer(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Server: virtual check run before damage is applied; return false to ignore the hit. Returns true here. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncbreak" /><code>{"private void SyncBreak("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: fires `brokenClient` when the break message arrives, if there is a local player. |

</details>
