---
title: "EffectDefinitionApplication"
description: "An effect with a strength multiplier and optional duration, as carried by liquids, food and potions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectDefinitionApplication

A **class** in `Root.Township`, `Alta.Alchemy`.

An effect with a strength multiplier and optional duration, as carried by liquids, food and potions. Applies at once or spread over time.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`IEffectDefinition`](/mod/game-api/types/alta-stats-effects/ieffectdefinition)
- **Documented in** [Effects](/mod/game-api/game-systems/effects#effectdefinitionapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectDefinitionApplication("}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify, float strengthMultiplier, int durationInSeconds = 0)"}</code> | <span className="api-desc">Creates an `EffectDefinitionApplication` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"EffectDefinitionApplication()"}</code> | <span className="api-desc">Creates an `EffectDefinitionApplication` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-durationinseconds" /><code>{"private int durationInSeconds"}</code> | <span className="api-desc">Seconds to spread the effect over. 0 applies it at once. Not included in `Serialize`, so it is not synced.</span> |
| <Link id="m-effecttomodify" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify"}</code> | <span className="api-desc">Backing field for `EffectToModify`, the effect this entry applies.</span> |
| <Link id="m-strengthmultiplier" /><code>{"private float strengthMultiplier"}</code> | <span className="api-desc">Backing field for `StrengthMultiplier`. Multiplies the strength passed to the effect. 1 by default.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effecttomodify-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" EffectToModify { get; }"}</code> | <span className="api-desc">The effect definition this applies.</span> |
| <Link id="m-strengthmultiplier-2" /><code>{"float StrengthMultiplier { get; set; }"}</code> | <span className="api-desc">Multiplier on the strength passed in. Settable.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"virtual void CheckApply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Applies the effect now, or over its duration in seconds when that is above 0.</span> |
| <Link id="m-copy" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{" Copy()"}</code> | <span className="api-desc">Returns a copy.</span> |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True when effect, multiplier and duration all match.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash from effect, multiplier and duration.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the effect and multiplier. The duration is not sent.</span> |
| <Link id="m-apply" /><code>{"protected void Apply("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | <span className="api-desc">Applies the effect to a handler at the given strength times the multiplier.</span> |

## Used in

Members of other types that take, return or hold a `EffectDefinitionApplication`:

<div className="api-used-in">

[`CookableItem.effects`](/mod/game-api/types/alta-crafting/cookableitem#m-effects), [`CookableItem.Effects`](/mod/game-api/types/alta-crafting/cookableitem#m-effects-2), [`CookingGarnish.effectMultipliers`](/mod/game-api/types/alta-crafting/cookinggarnish#m-effectmultipliers), [`CookingGarnish.EffectMultipliers`](/mod/game-api/types/alta-crafting/cookinggarnish#m-effectmultipliers-2), [`CookingSettings.globalStewEffects`](/mod/game-api/types/alta-crafting/cookingsettings#m-globalsteweffects), [`CookingSettings.GlobalStewEffects`](/mod/game-api/types/alta-crafting/cookingsettings#m-globalsteweffects-2), [`StewManager.GetStewEffects`](/mod/game-api/types/alta-crafting/stewmanager#m-getsteweffects), [`StewRecipe.CheckForDuplicates`](/mod/game-api/types/alta-crafting/stewrecipe#m-checkforduplicates), [`StewRecipe.effectModifiers`](/mod/game-api/types/alta-crafting/stewrecipe#m-effectmodifiers), [`StewRecipe.EffectModifiers`](/mod/game-api/types/alta-crafting/stewrecipe#m-effectmodifiers-2), [`StewRecipe.extraEffects`](/mod/game-api/types/alta-crafting/stewrecipe#m-extraeffects), [`StewRecipe.ExtraEffects`](/mod/game-api/types/alta-crafting/stewrecipe#m-extraeffects-2), [`StewRecipe.GetStewEffects`](/mod/game-api/types/alta-crafting/stewrecipe#m-getsteweffects), [`StewRecipe.HandleEffectApplication`](/mod/game-api/types/alta-crafting/stewrecipe#m-handleeffectapplication), [`LiquidData.effects`](/mod/game-api/types/alta-stats-effects/liquiddata#m-effects), [`LiquidData.Effects`](/mod/game-api/types/alta-stats-effects/liquiddata#m-effects-2), [`LiquidData.LiquidData`](/mod/game-api/types/alta-stats-effects/liquiddata#m-ctor), [`ConsumptionManager.AreValidEffects`](/mod/game-api/types/global-c-d/consumptionmanager#m-arevalideffects), [`ConsumptionManager.HandleConsumptionEffects`](/mod/game-api/types/global-c-d/consumptionmanager#m-handleconsumptioneffects), [`EdibleObject.consumptionEffects`](/mod/game-api/types/global-e-h/edibleobject#m-consumptioneffects), [`EdibleObject.ConsumptionEffects`](/mod/game-api/types/global-e-h/edibleobject#m-consumptioneffects-2).

</div>
