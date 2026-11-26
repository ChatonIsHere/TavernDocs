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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint), [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingPoint()"}</code> | <span className="api-desc">Creates a `CookingPoint` with default values.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidburningeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidBurningEffect"}</code> | <span className="api-desc">Burning effect for the Android build. Not read by this class in the server build.</span> |
| <Link id="m-androidcookingeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidCookingEffect"}</code> | <span className="api-desc">Cooking effect for the Android build. Not read by this class in the server build.</span> |
| <Link id="m-burningeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" burningEffect"}</code> | <span className="api-desc">Pooled effect shown when a burnable item is above its burning temperature.</span> |
| <Link id="m-cookable" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/icookablesettings">{"ICookableSettings"}</Link>{" cookable"}</code> | <span className="api-desc">Private: the item's cooking settings, from `Awake`.</span> |
| <Link id="m-cookingeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" cookingEffect"}</code> | <span className="api-desc">Pooled effect shown while the item is above its weak cooking temperature.</span> |
| <Link id="m-iseffectburning" /><code>{"private bool isEffectBurning"}</code> | <span className="api-desc">Private: whether the shown effect is the burning one.</span> |
| <Link id="m-particles" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/emissioncontrol">{"EmissionControl"}</Link>{" particles"}</code> | <span className="api-desc">Backing field for `Particles`.</span> |
| <Link id="m-strongemissionmultiplier" /><code>{"private float strongEmissionMultiplier"}</code> | <span className="api-desc">Cooking effect emission at optimal cooking temperature.</span> |
| <Link id="m-weakemissionmultiplier" /><code>{"private float weakEmissionMultiplier"}</code> | <span className="api-desc">Cooking effect emission at weak cooking temperature.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscountedformelting" /><code>{"override bool IsCountedforMelting { get; }"}</code> | <span className="api-desc">Always false, so food heat points are ignored when a smelter works out melting.</span> |
| <Link id="m-particles-2" /><code><Link to="/mod/game-api/types/global-e-h/emissioncontrol">{"EmissionControl"}</Link>{" Particles { get; }"}</code> | <span className="api-desc">The `EmissionControl` of the current cooking or burning effect, or null when none is shown.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Caches the `ICookableSettings` on the same object.</span> |
| <Link id="m-showeffects" /><code>{"protected override void ShowEffects()"}</code> | <span className="api-desc">Picks burning, cooking or no effect from the current temperature against the item's cooking thresholds.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removeeffectandresetparticles" /><code>{"private void RemoveEffectAndResetParticles()"}</code> | <span className="api-desc">Private: removes the active effect and clears `particles`.</span> |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | <span className="api-desc">Copies the temperature to the replacing entity's `CookingPoint`, unless the replace avoids charge.</span> |
| <Link id="m-seteffect" /><code>{"private void SetEffect(bool isBurning)"}</code> | <span className="api-desc">Private: shows the burning or cooking effect, swapping if needed. Cooking smoke scales with how close the food is to optimal temperature.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CookingPoint`:

<div className="api-used-in">

[`Cookable.cookingPoint`](/mod/game-api/types/alta-crafting/cookable#m-cookingpoint), [`Cookable.CookingPoint`](/mod/game-api/types/alta-crafting/cookable#m-cookingpoint-2), [`CookingLiquid.waterHeatPoint`](/mod/game-api/types/alta-crafting/cookingliquid#m-waterheatpoint).

</div>
