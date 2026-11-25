---
title: "StewComponent"
description: "On a stew entity in a cooking pot: its tint and effect multipliers, and its own Cookable that turns it into the next stage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewComponent

A **class** in `Root.Township`, `Alta.Cooking`.

On a stew entity in a cooking pot: its tint and effect multipliers, and its own `Cookable` that turns it into the next stage. See the cooking guide.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewComponent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baseeffectsmultiplier" /><code>{"private float baseEffectsMultiplier"}</code> |  |
| <Link id="m-baseliquideffectsmultiplier" /><code>{"private float baseLiquidEffectsMultiplier"}</code> |  |
| <Link id="m-cookable" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookable"}</code> |  |
| <Link id="m-extraeffectsmultiplier" /><code>{"private float extraEffectsMultiplier"}</code> |  |
| <Link id="m-isawardingexperiencestage" /><code>{"private bool isAwardingExperienceStage"}</code> |  |
| <Link id="m-liquidvisualdata" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisualData"}</code> |  |
| <Link id="m-stewcreatedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stewCreatedEffect"}</code> |  |
| <Link id="m-tintcolor" /><code>{"private Color tintColor"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseeffectsmultiplier-2" /><code>{"float BaseEffectsMultiplier { get; }"}</code> | Multiplier on each ingredient's effects. |
| <Link id="m-baseliquideffectsmultiplier-2" /><code>{"float BaseLiquidEffectsMultiplier { get; }"}</code> | Multiplier on the base liquid's effects. |
| <Link id="m-cookable-2" /><code><Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" "}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" { get; }"}</code> | The cookable that moves it to the next stage, or null at the last stage. |
| <Link id="m-cookingpoint" /><code><Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" CookingPoint { get; }"}</code> | The heat point of its cookable. |
| <Link id="m-extraeffectsmultiplier-2" /><code>{"float ExtraEffectsMultiplier { get; }"}</code> | Multiplier on the recipe's extra effects and effect modifiers. |
| <Link id="m-isawardingexperiencestage-2" /><code>{"bool IsAwardingExperienceStage { get; }"}</code> | Whether reaching this stage gives cooking experience, probably. |
| <Link id="m-isfinalstage" /><code>{"bool IsFinalStage { get; }"}</code> | True when there's no cookable, so it won't cook further. |
| <Link id="m-liquidvisualdata-2" /><code><Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" { get; }"}</code> | How the stew looks as a liquid. |
| <Link id="m-stewcreatedeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" StewCreatedEffect { get; }"}</code> | Effect spawned when this stew is made. |
| <Link id="m-tintcolor-2" /><code>{"Color TintColor { get; }"}</code> | Colour tint of the stew. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlecookablestatechange" /><code>{"void HandleCookableStateChange("}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" stewCookedHandler, "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" stewBurntHandler)"}</code> | Subscribes handlers for when it cooks or burns. |
| <Link id="m-replacewithrecipestew" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ReplaceWithRecipeStew(uint stewPrefabHash)"}</code> | Replaces the stew with a recipe's stew prefab, playing the recipe-started effect. |
| <Link id="m-resetcookableprogress" /><code>{"void ResetCookableProgress()"}</code> | Resets the cookable's progress. |
| <Link id="m-stophandlingcookablestatechange" /><code>{"void StopHandlingCookableStateChange("}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" stewCookedHandler, "}<Link to="/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" stewBurntHandler)"}</code> | Unsubscribes those handlers. |

## Used in

Members of other types that take, return or hold a `StewComponent`:

[`CookingPot.RegisterStewToHeatArea`](/game-api/types/alta-crafting/cookingpot#m-registerstewtoheatarea), [`CookingSettings.defaultStew`](/game-api/types/alta-crafting/cookingsettings#m-defaultstew), [`CookingSettings.DefaultStew`](/game-api/types/alta-crafting/cookingsettings#m-defaultstew-2), [`StewContainer.stew`](/game-api/types/alta-crafting/stewcontainer#m-stew), [`StewContentArguments.Stew`](/game-api/types/alta-crafting/stewcontentarguments#m-stew), [`StewManager.GetStewEffects`](/game-api/types/alta-crafting/stewmanager#m-getsteweffects), [`StewManager.stew`](/game-api/types/alta-crafting/stewmanager#m-stew).
