---
title: "Chiselable"
description: "Something a chisel can carve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chiselable

A **class** in `Root.Township`, `Alta.Carpentry`.

Something a chisel can carve. Passes chisel hits on to events; subclasses decide direction rules.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IChiselable`](/mod/game-api/types/alta-crafting/ichiselable)
- **Derived types** [`ChiselableEvent`](/mod/game-api/types/alta-crafting/chiselableevent), [`ChiselableUnityEvent`](/mod/game-api/types/alta-crafting/chiselableunityevent), [`TimberPieceBase`](/mod/game-api/types/alta-crafting/timberpiecebase), [`CraftingPieceChiselable`](/mod/game-api/types/alta-crafting/craftingpiecechiselable)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Chiselable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tookdamage" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" tookDamage"}</code> | <span className="api-desc">Event raised with the damage whenever a chisel hits this.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"virtual bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether chisels can hit it right now.</span> |
| <Link id="m-triggerhaptics" /><code>{"virtual bool TriggerHaptics { get; }"}</code> | <span className="api-desc">Whether a chisel near it vibrates the controller. False by default.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onhit" /><code>{"event "}<Link to="/mod/game-api/types/alta-crafting/chiselhit">{"ChiselHit"}</Link>{" onHit"}</code> | <span className="api-desc">Raised on every chisel hit with damage, position, direction, tool and collider.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getchiseleable" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/ichiselable">{"IChiselable"}</Link>{" GetChiseleable(Collider collider)"}</code> | <span className="api-desc">Finds the chiselable on a collider or its attached rigidbody, or null.</span> |
| <Link id="m-getdirectionleniency" /><code>{"virtual void GetDirectionLeniency(ref float directionMultiplier)"}</code> | <span className="api-desc">Subclass: can adjust the direction multiplier. Does nothing by default.</span> |
| <Link id="m-gethitmultiplier" /><code>{"virtual float GetHitMultiplier(Vector3 hitDirection)"}</code> | <span className="api-desc">How well a hit direction lines up, from 0 to 1. Always 1 by default.</span> |
| <Link id="m-receivedamage" /><code>{"virtual void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Takes a chisel hit and raises the damage and hit events.</span> |

## Used in

Members of other types that take, return or hold a `Chiselable`:

<div className="api-used-in">

[`DecraftingComponent.currentChiseleable`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-currentchiseleable), [`GenericAssemblyStation.addedChiselables`](/mod/game-api/types/alta-crafting/genericassemblystation#m-addedchiselables).

</div>
