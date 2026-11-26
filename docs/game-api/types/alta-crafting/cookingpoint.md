---
title: "CookingPoint"
description: "A HeatPoint on cookable food that shows a cooking or burning particle effect based on its temperature and the item's cooking settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPoint

A **class** in `Root.Township`, `Alta.Cooking`.

A `HeatPoint` on cookable food that shows a cooking or burning particle effect based on its temperature and the item's cooking settings.

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

| Member | What it is |
| --- | --- |
| <Link id="m-androidburningeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidBurningEffect"}</code> | Burning effect for the Android build. Not read by this class in the server build. |
| <Link id="m-androidcookingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidCookingEffect"}</code> | Cooking effect for the Android build. Not read by this class in the server build. |
| <Link id="m-burningeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" burningEffect"}</code> | Pooled effect shown when a burnable item is above its burning temperature. |
| <Link id="m-cookable" /><code>{"private "}<Link to="/game-api/types/alta-crafting/icookablesettings">{"ICookableSettings"}</Link>{" cookable"}</code> | Private: the item's cooking settings, from `Awake`. |
| <Link id="m-cookingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" cookingEffect"}</code> | Pooled effect shown while the item is above its weak cooking temperature. |
| <Link id="m-iseffectburning" /><code>{"private bool isEffectBurning"}</code> | Private: whether the shown effect is the burning one. |
| <Link id="m-particles" /><code>{"private "}<Link to="/game-api/types/global-e-h/emissioncontrol">{"EmissionControl"}</Link>{" particles"}</code> | Backing field for `Particles`. |
| <Link id="m-strongemissionmultiplier" /><code>{"private float strongEmissionMultiplier"}</code> | Cooking effect emission at optimal cooking temperature. |
| <Link id="m-weakemissionmultiplier" /><code>{"private float weakEmissionMultiplier"}</code> | Cooking effect emission at weak cooking temperature. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscountedformelting" /><code>{"override bool IsCountedforMelting { get; }"}</code> | Always false, so food heat points are ignored when a smelter works out melting. |
| <Link id="m-particles-2" /><code><Link to="/game-api/types/global-e-h/emissioncontrol">{"EmissionControl"}</Link>{" Particles { get; }"}</code> | The `EmissionControl` of the current cooking or burning effect, or null when none is shown. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Caches the `ICookableSettings` on the same object. |
| <Link id="m-showeffects" /><code>{"protected override void ShowEffects()"}</code> | Picks burning, cooking or no effect from the current temperature against the item's cooking thresholds. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removeeffectandresetparticles" /><code>{"private void RemoveEffectAndResetParticles()"}</code> | Private: removes the active effect and clears `particles`. |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | Copies the temperature to the replacing entity's `CookingPoint`, unless the replace avoids charge. |
| <Link id="m-seteffect" /><code>{"private void SetEffect(bool isBurning)"}</code> | Private: shows the burning or cooking effect, swapping if needed. Cooking smoke scales with how close the food is to optimal temperature. |

</details>

## Used in

Members of other types that take, return or hold a `CookingPoint`:

[`Cookable.cookingPoint`](/game-api/types/alta-crafting/cookable#m-cookingpoint), [`Cookable.CookingPoint`](/game-api/types/alta-crafting/cookable#m-cookingpoint-2), [`CookingLiquid.waterHeatPoint`](/game-api/types/alta-crafting/cookingliquid#m-waterheatpoint).
