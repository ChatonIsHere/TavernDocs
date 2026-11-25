---
title: "CookingPoint"
description: "The HeatPoint on a cookable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPoint

A **class** in `Root.Township`, `Alta.Cooking`.

The `HeatPoint` on a cookable.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookingPoint()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androidburningeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidBurningEffect"}</code> |
| <Link id="m-androidcookingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidCookingEffect"}</code> |
| <Link id="m-burningeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" burningEffect"}</code> |
| <Link id="m-cookable" /><code>{"private "}<Link to="/game-api/types/alta-crafting/icookablesettings">{"ICookableSettings"}</Link>{" cookable"}</code> |
| <Link id="m-cookingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" cookingEffect"}</code> |
| <Link id="m-iseffectburning" /><code>{"private bool isEffectBurning"}</code> |
| <Link id="m-particles" /><code>{"private "}<Link to="/game-api/types/global-e-h/emissioncontrol">{"EmissionControl"}</Link>{" particles"}</code> |
| <Link id="m-strongemissionmultiplier" /><code>{"private float strongEmissionMultiplier"}</code> |
| <Link id="m-weakemissionmultiplier" /><code>{"private float weakEmissionMultiplier"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-iscountedformelting" /><code>{"override bool IsCountedforMelting { get; }"}</code> |
| <Link id="m-particles-2" /><code><Link to="/game-api/types/global-e-h/emissioncontrol">{"EmissionControl"}</Link>{" Particles { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |
| <Link id="m-showeffects" /><code>{"protected override void ShowEffects()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-removeeffectandresetparticles" /><code>{"private void RemoveEffectAndResetParticles()"}</code> |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> |
| <Link id="m-seteffect" /><code>{"private void SetEffect(bool isBurning)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CookingPoint`:

[`Cookable.cookingPoint`](/game-api/types/alta-crafting/cookable#m-cookingpoint), [`Cookable.CookingPoint`](/game-api/types/alta-crafting/cookable#m-cookingpoint-2), [`CookingLiquid.waterHeatPoint`](/game-api/types/alta-crafting/cookingliquid#m-waterheatpoint).
