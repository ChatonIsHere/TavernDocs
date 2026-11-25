---
title: "CookingSettings"
description: "CookableDecayDuration, MinimumStewingTemperature, DefaultStew, NonRecipeStewPrefab, GlobalStewEffects, MaxNumberOfItemsInStew (the network limit), IsA"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingSettings

A **class** in `Root.Township`, `Alta.Cooking`.

`CookableDecayDuration`, `MinimumStewingTemperature`, `DefaultStew`, `NonRecipeStewPrefab`, `GlobalStewEffects`, `MaxNumberOfItemsInStew` (the network limit), `IsAssumingNoEffectModificationOnMissing` and the dissolve effects.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`GlobalSettings<CookingSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CookingSettings`](/game-api/types/alta-crafting/cookingsettings), [`CookingSettings.Create`](/game-api/types/alta-crafting/cookingsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/cookingsettings-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Cooking](/game-api/game-systems/cooking#cookingsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidboilingparticlesdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidBoilingParticlesDefinition"}</code> |  |
| <Link id="m-boilingparticlesdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" boilingParticlesDefinition"}</code> |  |
| <Link id="m-cookableaddedtostewfadeoutduration" /><code>{"private float cookableAddedToStewFadeoutDuration"}</code> |  |
| <Link id="m-cookabledecayduration" /><code>{"private float cookableDecayDuration"}</code> |  |
| <Link id="m-cookingbubblestransparencybyliquidtransparency" /><code>{"private AnimationCurve cookingBubblesTransparencyByLiquidTransparency"}</code> |  |
| <Link id="m-cookingtemperaturertpc" /><code>{"private RTPC cookingTemperatureRTPC"}</code> |  |
| <Link id="m-defaultstew" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" defaultStew"}</code> |  |
| <Link id="m-globalsteweffects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] globalStewEffects"}</code> |  |
| <Link id="m-ingredientrejectionforce" /><code>{"private float ingredientRejectionForce"}</code> |  |
| <Link id="m-isassumingnoeffectmodificationonmissing" /><code>{"private bool isAssumingNoEffectModificationOnMissing"}</code> |  |
| <Link id="m-isdisplayingheatpointdebugtext" /><code>{"private bool isDisplayingHeatPointDebugText"}</code> |  |
| <Link id="m-maxnumberofitemsinstew" /><code>{"private int maxNumberOfItemsInStew"}</code> |  |
| <Link id="m-minimumstewingtemperature" /><code>{"private float minimumStewingTemperature"}</code> |  |
| <Link id="m-nonrecipestewprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" nonRecipeStewPrefab"}</code> |  |
| <Link id="m-stewingredientdissolveshader" /><code>{"private Shader stewIngredientDissolveShader"}</code> |  |
| <Link id="m-stewingredientdissolvetexture" /><code>{"private Texture stewIngredientDissolveTexture"}</code> |  |
| <Link id="m-stewingredientsfilledeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stewIngredientsFilledEffect"}</code> |  |
| <Link id="m-stewrecipestartedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stewRecipeStartedEffect"}</code> |  |
| <Link id="m-textpopupdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" textPopupDefinition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boilingparticlesdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BoilingParticlesDefinition { get; }"}</code> |  |
| <Link id="m-cookableaddedtostewfadeoutduration-2" /><code>{"float CookableAddedToStewFadeoutDuration { get; }"}</code> |  |
| <Link id="m-cookabledecayduration-2" /><code>{"float CookableDecayDuration { get; }"}</code> |  |
| <Link id="m-cookingbubblestransparencybyliquidtransparency-2" /><code>{"AnimationCurve CookingBubblesTransparencyByLiquidTransparency { get; }"}</code> |  |
| <Link id="m-cookingtemperaturertpc-2" /><code>{"RTPC CookingTemperatureRTPC { get; }"}</code> |  |
| <Link id="m-defaultstew-2" /><code><Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" DefaultStew { get; }"}</code> |  |
| <Link id="m-globalsteweffects-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] GlobalStewEffects { get; }"}</code> |  |
| <Link id="m-isassumingnoeffectmodificationonmissing-2" /><code>{"bool IsAssumingNoEffectModificationOnMissing { get; }"}</code> |  |
| <Link id="m-isdisplayingheatpointdebugtext-2" /><code>{"bool IsDisplayingHeatPointDebugText { get; }"}</code> |  |
| <Link id="m-maxnumberofitemsinstew-2" /><code>{"int MaxNumberOfItemsInStew { get; }"}</code> |  |
| <Link id="m-minimumstewingtemperature-2" /><code>{"float MinimumStewingTemperature { get; }"}</code> |  |
| <Link id="m-nonrecipestewprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" NonRecipeStewPrefab { get; }"}</code> |  |
| <Link id="m-stewingredientdissolveshader-2" /><code>{"Shader StewIngredientDissolveShader { get; }"}</code> |  |
| <Link id="m-stewingredientdissolvetexture-2" /><code>{"Texture StewIngredientDissolveTexture { get; }"}</code> |  |
| <Link id="m-stewingredientsfilledeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" StewIngredientsFilledEffect { get; }"}</code> |  |
| <Link id="m-stewrecipestartedeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" StewRecipeStartedEffect { get; }"}</code> |  |
| <Link id="m-textpopupdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" TextPopupDefinition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateingredientrejectionforce" /><code>{"Vector3 GenerateIngredientRejectionForce()"}</code> |  |
