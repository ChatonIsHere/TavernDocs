---
title: "Chiselable"
description: "class Chiselable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chiselable

A **class** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IChiselable`](/game-api/types/alta-crafting/ichiselable)
- **Derived types** [`ChiselableEvent`](/game-api/types/alta-crafting/chiselableevent), [`ChiselableUnityEvent`](/game-api/types/alta-crafting/chiselableunityevent), [`TimberPieceBase`](/game-api/types/alta-crafting/timberpiecebase), [`CraftingPieceChiselable`](/game-api/types/alta-crafting/craftingpiecechiselable)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Chiselable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-tookdamage" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" tookDamage"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"virtual bool IsEnabled { get; set; }"}</code> |  |
| <Link id="m-triggerhaptics" /><code>{"virtual bool TriggerHaptics { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onhit" /><code>{"event "}<Link to="/game-api/types/alta-crafting/chiselhit">{"ChiselHit"}</Link>{" onHit"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getchiseleable" /><code>{"static "}<Link to="/game-api/types/alta-crafting/ichiselable">{"IChiselable"}</Link>{" GetChiseleable(Collider collider)"}</code> |  |
| <Link id="m-getdirectionleniency" /><code>{"virtual void GetDirectionLeniency(ref float directionMultiplier)"}</code> |  |
| <Link id="m-gethitmultiplier" /><code>{"virtual float GetHitMultiplier(Vector3 hitDirection)"}</code> |  |
| <Link id="m-receivedamage" /><code>{"virtual void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Chiselable`:

[`DecraftingComponent.currentChiseleable`](/game-api/types/alta-crafting/decraftingcomponent#m-currentchiseleable), [`GenericAssemblyStation.addedChiselables`](/game-api/types/alta-crafting/genericassemblystation#m-addedchiselables).
