---
title: "CookingSettings"
description: "Global settings for cooking and stews."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingSettings

A **class** in `Root.Township`, `Alta.Cooking`.

Global settings for cooking and stews. Get it with `GlobalSettings<CookingSettings>.Instance`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`GlobalSettings<CookingSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CookingSettings`](/game-api/types/alta-crafting/cookingsettings), [`CookingSettings.Create`](/game-api/types/alta-crafting/cookingsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/cookingsettings-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Cooking](/game-api/game-systems/cooking#cookingsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookingSettings()"}</code> |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androidboilingparticlesdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidBoilingParticlesDefinition"}</code> |
| <Link id="m-boilingparticlesdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" boilingParticlesDefinition"}</code> |
| <Link id="m-cookableaddedtostewfadeoutduration" /><code>{"private float cookableAddedToStewFadeoutDuration"}</code> |
| <Link id="m-cookabledecayduration" /><code>{"private float cookableDecayDuration"}</code> |
| <Link id="m-cookingbubblestransparencybyliquidtransparency" /><code>{"private AnimationCurve cookingBubblesTransparencyByLiquidTransparency"}</code> |
| <Link id="m-cookingtemperaturertpc" /><code>{"private RTPC cookingTemperatureRTPC"}</code> |
| <Link id="m-defaultstew" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" defaultStew"}</code> |
| <Link id="m-globalsteweffects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] globalStewEffects"}</code> |
| <Link id="m-ingredientrejectionforce" /><code>{"private float ingredientRejectionForce"}</code> |
| <Link id="m-isassumingnoeffectmodificationonmissing" /><code>{"private bool isAssumingNoEffectModificationOnMissing"}</code> |
| <Link id="m-isdisplayingheatpointdebugtext" /><code>{"private bool isDisplayingHeatPointDebugText"}</code> |
| <Link id="m-maxnumberofitemsinstew" /><code>{"private int maxNumberOfItemsInStew"}</code> |
| <Link id="m-minimumstewingtemperature" /><code>{"private float minimumStewingTemperature"}</code> |
| <Link id="m-nonrecipestewprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" nonRecipeStewPrefab"}</code> |
| <Link id="m-stewingredientdissolveshader" /><code>{"private Shader stewIngredientDissolveShader"}</code> |
| <Link id="m-stewingredientdissolvetexture" /><code>{"private Texture stewIngredientDissolveTexture"}</code> |
| <Link id="m-stewingredientsfilledeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stewIngredientsFilledEffect"}</code> |
| <Link id="m-stewrecipestartedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stewRecipeStartedEffect"}</code> |
| <Link id="m-textpopupdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" textPopupDefinition"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boilingparticlesdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BoilingParticlesDefinition { get; }"}</code> | Pooled boiling particle effect for hot liquid. |
| <Link id="m-cookableaddedtostewfadeoutduration-2" /><code>{"float CookableAddedToStewFadeoutDuration { get; }"}</code> | How long an ingredient takes to dissolve into a stew, in seconds. |
| <Link id="m-cookabledecayduration-2" /><code>{"float CookableDecayDuration { get; }"}</code> | Seconds for a cookable's cooked progress to fall from 1 to 0 once it stops being heated. |
| <Link id="m-cookingbubblestransparencybyliquidtransparency-2" /><code>{"AnimationCurve CookingBubblesTransparencyByLiquidTransparency { get; }"}</code> | Curve mapping the liquid's transparency to the bubbles' transparency. |
| <Link id="m-cookingtemperaturertpc-2" /><code>{"RTPC CookingTemperatureRTPC { get; }"}</code> | Wwise parameter set from the cooking temperature, for sound. |
| <Link id="m-defaultstew-2" /><code><Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" DefaultStew { get; }"}</code> | The stew prefab spawned when a pot starts stewing. |
| <Link id="m-globalsteweffects-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] GlobalStewEffects { get; }"}</code> | Effects every stew gets, added before ingredient effects. |
| <Link id="m-isassumingnoeffectmodificationonmissing-2" /><code>{"bool IsAssumingNoEffectModificationOnMissing { get; }"}</code> | If true, effects a recipe does not list keep their strength; if false, they drop to 0. |
| <Link id="m-isdisplayingheatpointdebugtext-2" /><code>{"bool IsDisplayingHeatPointDebugText { get; }"}</code> | Debug flag for heat point text. Not read anywhere in this build. |
| <Link id="m-maxnumberofitemsinstew-2" /><code>{"int MaxNumberOfItemsInStew { get; }"}</code> | Most items in a stew, for networking (31). Not read anywhere in this build. |
| <Link id="m-minimumstewingtemperature-2" /><code>{"float MinimumStewingTemperature { get; }"}</code> | Temperature the liquid and an ingredient must pass before the ingredient goes into the stew. |
| <Link id="m-nonrecipestewprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" NonRecipeStewPrefab { get; }"}</code> | Prefab for a stew that matches no recipe. |
| <Link id="m-stewingredientdissolveshader-2" /><code>{"Shader StewIngredientDissolveShader { get; }"}</code> | Shader used while an ingredient dissolves into a stew. |
| <Link id="m-stewingredientdissolvetexture-2" /><code>{"Texture StewIngredientDissolveTexture { get; }"}</code> | Texture used while an ingredient dissolves into a stew. |
| <Link id="m-stewingredientsfilledeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" StewIngredientsFilledEffect { get; }"}</code> | Effect played when a stew's ingredients are all in. |
| <Link id="m-stewrecipestartedeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" StewRecipeStartedEffect { get; }"}</code> | Effect played when a stew matches a recipe. |
| <Link id="m-textpopupdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" TextPopupDefinition { get; }"}</code> | Pooled debug text popup. Not read anywhere in this build. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateingredientrejectionforce" /><code>{"Vector3 GenerateIngredientRejectionForce()"}</code> | A random force, each axis between half and all of the rejection force, for throwing an ingredient out of a pot. |
