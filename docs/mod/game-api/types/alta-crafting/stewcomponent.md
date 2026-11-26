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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseeffectsmultiplier" /><code>{"private float baseEffectsMultiplier"}</code> | <span className="api-desc">Backing field for `BaseEffectsMultiplier`, applied to the effects of the stew's ingredients.</span> |
| <Link id="m-baseliquideffectsmultiplier" /><code>{"private float baseLiquidEffectsMultiplier"}</code> | <span className="api-desc">Backing field for `BaseLiquidEffectsMultiplier`, applied to the effects of the liquid base.</span> |
| <Link id="m-cookable" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookable"}</code> | <span className="api-desc">Backing field for `Cookable`. Null on the final stage.</span> |
| <Link id="m-extraeffectsmultiplier" /><code>{"private float extraEffectsMultiplier"}</code> | <span className="api-desc">Backing field for `ExtraEffectsMultiplier`, applied to the recipe's extra effects.</span> |
| <Link id="m-isawardingexperiencestage" /><code>{"private bool isAwardingExperienceStage"}</code> | <span className="api-desc">Backing field for `IsAwardingExperienceStage`.</span> |
| <Link id="m-liquidvisualdata" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" liquidVisualData"}</code> | <span className="api-desc">Backing field for `LiquidVisualData`.</span> |
| <Link id="m-stewcreatedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stewCreatedEffect"}</code> | <span className="api-desc">Backing field for `StewCreatedEffect`.</span> |
| <Link id="m-tintcolor" /><code>{"private Color tintColor"}</code> | <span className="api-desc">Backing field for `TintColor`. Defaults to white.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseeffectsmultiplier-2" /><code>{"float BaseEffectsMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on each ingredient's effects.</span> |
| <Link id="m-baseliquideffectsmultiplier-2" /><code>{"float BaseLiquidEffectsMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on the base liquid's effects.</span> |
| <Link id="m-cookable-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" { get; }"}</code> | <span className="api-desc">The cookable that moves it to the next stage, or null at the last stage.</span> |
| <Link id="m-cookingpoint" /><code><Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" CookingPoint { get; }"}</code> | <span className="api-desc">The heat point of its cookable.</span> |
| <Link id="m-extraeffectsmultiplier-2" /><code>{"float ExtraEffectsMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on the recipe's extra effects and effect modifiers.</span> |
| <Link id="m-isawardingexperiencestage-2" /><code>{"bool IsAwardingExperienceStage { get; }"}</code> | <span className="api-desc">Whether reaching this stage gives cooking experience, probably.</span> |
| <Link id="m-isfinalstage" /><code>{"bool IsFinalStage { get; }"}</code> | <span className="api-desc">True when there's no cookable, so it won't cook further.</span> |
| <Link id="m-liquidvisualdata-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" { get; }"}</code> | <span className="api-desc">How the stew looks as a liquid.</span> |
| <Link id="m-stewcreatedeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" StewCreatedEffect { get; }"}</code> | <span className="api-desc">Effect spawned when this stew is made.</span> |
| <Link id="m-tintcolor-2" /><code>{"Color TintColor { get; }"}</code> | <span className="api-desc">Colour tint of the stew.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlecookablestatechange" /><code>{"void HandleCookableStateChange("}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" stewCookedHandler, "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" stewBurntHandler)"}</code> | <span className="api-desc">Subscribes handlers for when it cooks or burns.</span> |
| <Link id="m-replacewithrecipestew" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ReplaceWithRecipeStew(uint stewPrefabHash)"}</code> | <span className="api-desc">Replaces the stew with a recipe's stew prefab, playing the recipe-started effect.</span> |
| <Link id="m-resetcookableprogress" /><code>{"void ResetCookableProgress()"}</code> | <span className="api-desc">Resets the cookable's progress.</span> |
| <Link id="m-stophandlingcookablestatechange" /><code>{"void StopHandlingCookableStateChange("}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" stewCookedHandler, "}<Link to="/mod/game-api/types/alta-networking/networkentityhandler">{"NetworkEntityHandler"}</Link>{" stewBurntHandler)"}</code> | <span className="api-desc">Unsubscribes those handlers.</span> |

## Used in

Members of other types that take, return or hold a `StewComponent`:

<div className="api-used-in">

[`CookingPot.RegisterStewToHeatArea`](/mod/game-api/types/alta-crafting/cookingpot#m-registerstewtoheatarea), [`CookingSettings.defaultStew`](/mod/game-api/types/alta-crafting/cookingsettings#m-defaultstew), [`CookingSettings.DefaultStew`](/mod/game-api/types/alta-crafting/cookingsettings#m-defaultstew-2), [`StewContainer.stew`](/mod/game-api/types/alta-crafting/stewcontainer#m-stew), [`StewContentArguments.Stew`](/mod/game-api/types/alta-crafting/stewcontentarguments#m-stew), [`StewManager.GetStewEffects`](/mod/game-api/types/alta-crafting/stewmanager#m-getsteweffects), [`StewManager.stew`](/mod/game-api/types/alta-crafting/stewmanager#m-stew).

</div>
