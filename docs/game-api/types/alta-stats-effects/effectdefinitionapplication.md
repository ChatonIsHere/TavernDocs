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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`IEffectDefinition`](/game-api/types/alta-stats-effects/ieffectdefinition)
- **Documented in** [Effects](/game-api/game-systems/effects#effectdefinitionapplication)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectDefinitionApplication("}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify, float strengthMultiplier, int durationInSeconds = 0)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"EffectDefinitionApplication()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-durationinseconds" /><code>{"private int durationInSeconds"}</code> |  |
| <Link id="m-effecttomodify" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify"}</code> |  |
| <Link id="m-strengthmultiplier" /><code>{"private float strengthMultiplier"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effecttomodify-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" EffectToModify { get; }"}</code> | The effect definition this applies. |
| <Link id="m-strengthmultiplier-2" /><code>{"float StrengthMultiplier { get; set; }"}</code> | Multiplier on the strength passed in. Settable. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkapply" /><code>{"virtual void CheckApply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Applies the effect now, or over its duration in seconds when that is above 0. |
| <Link id="m-copy" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{" Copy()"}</code> | Returns a copy. |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True when effect, multiplier and duration all match. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash from effect, multiplier and duration. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the effect and multiplier. The duration is not sent. |
| <Link id="m-apply" /><code>{"protected void Apply("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" target, float strength)"}</code> | Applies the effect to a handler at the given strength times the multiplier. |

## Used in

Members of other types that take, return or hold a `EffectDefinitionApplication`:

[`CookableItem.effects`](/game-api/types/alta-crafting/cookableitem#m-effects), [`CookableItem.Effects`](/game-api/types/alta-crafting/cookableitem#m-effects-2), [`CookingGarnish.effectMultipliers`](/game-api/types/alta-crafting/cookinggarnish#m-effectmultipliers), [`CookingGarnish.EffectMultipliers`](/game-api/types/alta-crafting/cookinggarnish#m-effectmultipliers-2), [`CookingSettings.globalStewEffects`](/game-api/types/alta-crafting/cookingsettings#m-globalsteweffects), [`CookingSettings.GlobalStewEffects`](/game-api/types/alta-crafting/cookingsettings#m-globalsteweffects-2), [`StewManager.GetStewEffects`](/game-api/types/alta-crafting/stewmanager#m-getsteweffects), [`StewRecipe.CheckForDuplicates`](/game-api/types/alta-crafting/stewrecipe#m-checkforduplicates), [`StewRecipe.effectModifiers`](/game-api/types/alta-crafting/stewrecipe#m-effectmodifiers), [`StewRecipe.EffectModifiers`](/game-api/types/alta-crafting/stewrecipe#m-effectmodifiers-2), [`StewRecipe.extraEffects`](/game-api/types/alta-crafting/stewrecipe#m-extraeffects), [`StewRecipe.ExtraEffects`](/game-api/types/alta-crafting/stewrecipe#m-extraeffects-2), [`StewRecipe.GetStewEffects`](/game-api/types/alta-crafting/stewrecipe#m-getsteweffects), [`StewRecipe.HandleEffectApplication`](/game-api/types/alta-crafting/stewrecipe#m-handleeffectapplication), [`LiquidData.effects`](/game-api/types/alta-stats-effects/liquiddata#m-effects), [`LiquidData.Effects`](/game-api/types/alta-stats-effects/liquiddata#m-effects-2), [`LiquidData.LiquidData`](/game-api/types/alta-stats-effects/liquiddata#m-ctor), [`ConsumptionManager.AreValidEffects`](/game-api/types/global-c-d/consumptionmanager#m-arevalideffects), [`ConsumptionManager.HandleConsumptionEffects`](/game-api/types/global-c-d/consumptionmanager#m-handleconsumptioneffects), [`EdibleObject.consumptionEffects`](/game-api/types/global-e-h/edibleobject#m-consumptioneffects), [`EdibleObject.ConsumptionEffects`](/game-api/types/global-e-h/edibleobject#m-consumptioneffects-2).
