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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`GlobalSettings<CookingSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CookingSettings`](/mod/game-api/types/alta-crafting/cookingsettings), [`CookingSettings.Create`](/mod/game-api/types/alta-crafting/cookingsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/cookingsettings-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking#cookingsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidboilingparticlesdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidBoilingParticlesDefinition"}</code> | <span className="api-desc">Boiling particles meant for Android. Nothing exposes it in this build.</span> |
| <Link id="m-boilingparticlesdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" boilingParticlesDefinition"}</code> | <span className="api-desc">Pooled boiling particle effect for hot liquids.</span> |
| <Link id="m-cookableaddedtostewfadeoutduration" /><code>{"private float cookableAddedToStewFadeoutDuration"}</code> | <span className="api-desc">Seconds an ingredient takes to dissolve into a stew.</span> |
| <Link id="m-cookabledecayduration" /><code>{"private float cookableDecayDuration"}</code> | <span className="api-desc">Seconds for a cookable's cooked progress to drop by one full step when decaying.</span> |
| <Link id="m-cookingbubblestransparencybyliquidtransparency" /><code>{"private AnimationCurve cookingBubblesTransparencyByLiquidTransparency"}</code> | <span className="api-desc">Maps a liquid's transparency to the boiling bubbles' transparency.</span> |
| <Link id="m-cookingtemperaturertpc" /><code>{"private RTPC cookingTemperatureRTPC"}</code> | <span className="api-desc">Wwise parameter fed the cooking temperature.</span> |
| <Link id="m-defaultstew" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" defaultStew"}</code> | <span className="api-desc">Stew prefab spawned when a pot starts a new stew.</span> |
| <Link id="m-globalsteweffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] globalStewEffects"}</code> | <span className="api-desc">Effects applied to every stew recipe.</span> |
| <Link id="m-ingredientrejectionforce" /><code>{"private float ingredientRejectionForce"}</code> | <span className="api-desc">Force used to throw a rejected ingredient out of a pot (random, half to full on each axis).</span> |
| <Link id="m-isassumingnoeffectmodificationonmissing" /><code>{"private bool isAssumingNoEffectModificationOnMissing"}</code> | <span className="api-desc">When a stew recipe has no modifier for an effect, use 1 (no change) instead of 0.</span> |
| <Link id="m-isdisplayingheatpointdebugtext" /><code>{"private bool isDisplayingHeatPointDebugText"}</code> | <span className="api-desc">Debug: show heat point text popups.</span> |
| <Link id="m-maxnumberofitemsinstew" /><code>{"private int maxNumberOfItemsInStew"}</code> | <span className="api-desc">Most items a stew can hold; used for network sync sizes.</span> |
| <Link id="m-minimumstewingtemperature" /><code>{"private float minimumStewingTemperature"}</code> | <span className="api-desc">Liquid and ingredient temperature needed before ingredients turn into stew.</span> |
| <Link id="m-nonrecipestewprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" nonRecipeStewPrefab"}</code> | <span className="api-desc">Stew prefab used when the ingredients match no recipe.</span> |
| <Link id="m-stewingredientdissolveshader" /><code>{"private Shader stewIngredientDissolveShader"}</code> | <span className="api-desc">Shader used to dissolve ingredients into a stew.</span> |
| <Link id="m-stewingredientdissolvetexture" /><code>{"private Texture stewIngredientDissolveTexture"}</code> | <span className="api-desc">Noise texture for the ingredient dissolve.</span> |
| <Link id="m-stewingredientsfilledeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stewIngredientsFilledEffect"}</code> | <span className="api-desc">Effect played on the pot surface when the stew's ingredients are filled.</span> |
| <Link id="m-stewrecipestartedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" stewRecipeStartedEffect"}</code> | <span className="api-desc">Effect played when a cookable turns into a recipe stew.</span> |
| <Link id="m-textpopupdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" textPopupDefinition"}</code> | <span className="api-desc">Debug text popup effect.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-boilingparticlesdefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BoilingParticlesDefinition { get; }"}</code> | <span className="api-desc">Pooled boiling particle effect for hot liquid.</span> |
| <Link id="m-cookableaddedtostewfadeoutduration-2" /><code>{"float CookableAddedToStewFadeoutDuration { get; }"}</code> | <span className="api-desc">How long an ingredient takes to dissolve into a stew, in seconds.</span> |
| <Link id="m-cookabledecayduration-2" /><code>{"float CookableDecayDuration { get; }"}</code> | <span className="api-desc">Seconds for a cookable's cooked progress to fall from 1 to 0 once it stops being heated.</span> |
| <Link id="m-cookingbubblestransparencybyliquidtransparency-2" /><code>{"AnimationCurve CookingBubblesTransparencyByLiquidTransparency { get; }"}</code> | <span className="api-desc">Curve mapping the liquid's transparency to the bubbles' transparency.</span> |
| <Link id="m-cookingtemperaturertpc-2" /><code>{"RTPC CookingTemperatureRTPC { get; }"}</code> | <span className="api-desc">Wwise parameter set from the cooking temperature, for sound.</span> |
| <Link id="m-defaultstew-2" /><code><Link to="/mod/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" DefaultStew { get; }"}</code> | <span className="api-desc">The stew prefab spawned when a pot starts stewing.</span> |
| <Link id="m-globalsteweffects-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] GlobalStewEffects { get; }"}</code> | <span className="api-desc">Effects every stew gets, added before ingredient effects.</span> |
| <Link id="m-isassumingnoeffectmodificationonmissing-2" /><code>{"bool IsAssumingNoEffectModificationOnMissing { get; }"}</code> | <span className="api-desc">If true, effects a recipe does not list keep their strength; if false, they drop to 0.</span> |
| <Link id="m-isdisplayingheatpointdebugtext-2" /><code>{"bool IsDisplayingHeatPointDebugText { get; }"}</code> | <span className="api-desc">Debug flag for heat point text. Not read anywhere in this build.</span> |
| <Link id="m-maxnumberofitemsinstew-2" /><code>{"int MaxNumberOfItemsInStew { get; }"}</code> | <span className="api-desc">Most items in a stew, for networking (31). Not read anywhere in this build.</span> |
| <Link id="m-minimumstewingtemperature-2" /><code>{"float MinimumStewingTemperature { get; }"}</code> | <span className="api-desc">Temperature the liquid and an ingredient must pass before the ingredient goes into the stew.</span> |
| <Link id="m-nonrecipestewprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" NonRecipeStewPrefab { get; }"}</code> | <span className="api-desc">Prefab for a stew that matches no recipe.</span> |
| <Link id="m-stewingredientdissolveshader-2" /><code>{"Shader StewIngredientDissolveShader { get; }"}</code> | <span className="api-desc">Shader used while an ingredient dissolves into a stew.</span> |
| <Link id="m-stewingredientdissolvetexture-2" /><code>{"Texture StewIngredientDissolveTexture { get; }"}</code> | <span className="api-desc">Texture used while an ingredient dissolves into a stew.</span> |
| <Link id="m-stewingredientsfilledeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" StewIngredientsFilledEffect { get; }"}</code> | <span className="api-desc">Effect played when a stew's ingredients are all in.</span> |
| <Link id="m-stewrecipestartedeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" StewRecipeStartedEffect { get; }"}</code> | <span className="api-desc">Effect played when a stew matches a recipe.</span> |
| <Link id="m-textpopupdefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" TextPopupDefinition { get; }"}</code> | <span className="api-desc">Pooled debug text popup. Not read anywhere in this build.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateingredientrejectionforce" /><code>{"Vector3 GenerateIngredientRejectionForce()"}</code> | <span className="api-desc">A random force, each axis between half and all of the rejection force, for throwing an ingredient out of a pot.</span> |
