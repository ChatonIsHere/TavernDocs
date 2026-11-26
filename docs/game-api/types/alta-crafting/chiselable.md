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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IChiselable`](/game-api/types/alta-crafting/ichiselable)
- **Derived types** [`ChiselableEvent`](/game-api/types/alta-crafting/chiselableevent), [`ChiselableUnityEvent`](/game-api/types/alta-crafting/chiselableunityevent), [`TimberPieceBase`](/game-api/types/alta-crafting/timberpiecebase), [`CraftingPieceChiselable`](/game-api/types/alta-crafting/craftingpiecechiselable)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Chiselable()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tookdamage" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" tookDamage"}</code> | Event raised with the damage whenever a chisel hits this. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"virtual bool IsEnabled { get; set; }"}</code> | Whether chisels can hit it right now. |
| <Link id="m-triggerhaptics" /><code>{"virtual bool TriggerHaptics { get; }"}</code> | Whether a chisel near it vibrates the controller. False by default. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onhit" /><code>{"event "}<Link to="/game-api/types/alta-crafting/chiselhit">{"ChiselHit"}</Link>{" onHit"}</code> | Raised on every chisel hit with damage, position, direction, tool and collider. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getchiseleable" /><code>{"static "}<Link to="/game-api/types/alta-crafting/ichiselable">{"IChiselable"}</Link>{" GetChiseleable(Collider collider)"}</code> | Finds the chiselable on a collider or its attached rigidbody, or null. |
| <Link id="m-getdirectionleniency" /><code>{"virtual void GetDirectionLeniency(ref float directionMultiplier)"}</code> | Subclass: can adjust the direction multiplier. Does nothing by default. |
| <Link id="m-gethitmultiplier" /><code>{"virtual float GetHitMultiplier(Vector3 hitDirection)"}</code> | How well a hit direction lines up, from 0 to 1. Always 1 by default. |
| <Link id="m-receivedamage" /><code>{"virtual void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Takes a chisel hit and raises the damage and hit events. |

## Used in

Members of other types that take, return or hold a `Chiselable`:

[`DecraftingComponent.currentChiseleable`](/game-api/types/alta-crafting/decraftingcomponent#m-currentchiseleable), [`GenericAssemblyStation.addedChiselables`](/game-api/types/alta-crafting/genericassemblystation#m-addedchiselables).
