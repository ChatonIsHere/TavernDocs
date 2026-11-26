---
title: "PooledObjectDefinition"
description: "A ScriptableObject asset describing an object pool: which PooledObject prefab to reuse and how many to keep."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectDefinition

A **class** in `Root.Township`, the global namespace.

A ScriptableObject asset describing an object pool: which `PooledObject` prefab to reuse and how many to keep. Call `Get` to take an instance from the pool.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PooledObjectDefinitionBase`](/mod/game-api/types/global-p/pooledobjectdefinitionbase)
- **Derived types** [`PooledMeshReplaceObjectDefinition`](/mod/game-api/types/global-p/pooledmeshreplaceobjectdefinition), [`PooledObjectDefinition.Create`](/mod/game-api/types/global-p/pooledobjectdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/pooledobjectdefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledObjectDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializesize" /><code>{"private int initializeSize"}</code> | <span className="api-desc">How many objects to create up front when the pool is made (capped by `maximumPoolSize`).</span> |
| <Link id="m-ismaxsizelimitting" /><code>{"private bool isMaxSizeLimitting"}</code> | <span className="api-desc">When true the pool never has more than `maximumPoolSize` objects active; otherwise it only limits how many it keeps spare.</span> |
| <Link id="m-ismaxsizelimittingonandroid" /><code>{"private bool isMaxSizeLimittingOnAndroid"}</code> | <span className="api-desc">Android version of `isMaxSizeLimitting`. Not read anywhere in this build.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maximumpoolsize" /><code>{"private int maximumPoolSize"}</code> | <span className="api-desc">Most objects the pool keeps (or allows active, with `isMaxSizeLimitting`).</span> |
| <Link id="m-maximumpoolsizeandroid" /><code>{"private int maximumPoolSizeAndroid"}</code> | <span className="api-desc">Android pool size. Not read anywhere in this build.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" prefab"}</code> | <span className="api-desc">The pooled object prefab this definition spawns.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-initializepoolsize" /><code>{"int InitializePoolSize { get; }"}</code> | <span className="api-desc">How many instances are created up front, inactive, when the pool is made.</span> |
| <Link id="m-maximumpoolsize-2" /><code>{"int MaximumPoolSize { get; }"}</code> | <span className="api-desc">How many released instances the pool keeps. With limiting on, also the most that can be active at once (the oldest gets recycled). The Android size field is never read.</span> |
| <Link id="m-pool" /><code><Link to="/mod/game-api/types/global-a-b/basicpooledobjectpool">{"BasicPooledObjectPool"}</Link>{" Pool { get; private set; }"}</code> | <span className="api-desc">The pool, created on first `InitializePool` or `Get`. A max-limit pool if the asset has size limiting on, otherwise a plain pool.</span> |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Prefab { get; }"}</code> | <span className="api-desc">The `PooledObject` prefab the pool instantiates.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Takes an instance from the pool (or makes a new one), places it at the given position and rotation and activates it.</span> |
| <Link id="m-initializepool" /><code>{"override void InitializePool()"}</code> | <span className="api-desc">Creates the pool if it doesn't exist yet.</span> |

## Used in

Members of other types that take, return or hold a `PooledObjectDefinition`:

<div className="api-used-in">

[`ActionGlyphsPlacer.actionGlyphPool`](/mod/game-api/types/global-a-b/actionglyphsplacer#m-actionglyphpool), [`AddonCraftingPart.jointAddon`](/mod/game-api/types/global-a-b/addoncraftingpart#m-jointaddon), [`PlayerEffectController.teleportEffect`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-teleporteffect), [`Smelter.operationalSmoke`](/mod/game-api/types/alta-crafting/smelter#m-operationalsmoke), [`RecipePlacer.blowUpPiece`](/mod/game-api/types/alta-crafting/recipeplacer#m-blowuppiece), [`RecipePlacer.pulsatorDefinition`](/mod/game-api/types/alta-crafting/recipeplacer#m-pulsatordefinition), [`TimberBlock.hittinPiece`](/mod/game-api/types/alta-crafting/timberblock#m-hittinpiece), [`TimberBlock.Stage.concludedEffect`](/mod/game-api/types/alta-crafting/timberblock-stage#m-concludedeffect), [`TimberBlock.Stage.destroyingEffect`](/mod/game-api/types/alta-crafting/timberblock-stage#m-destroyingeffect), [`TimberBlock.Stage.DestroyingEffect`](/mod/game-api/types/alta-crafting/timberblock-stage#m-destroyingeffect-2), [`TimberPieceBase.hittinEffect`](/mod/game-api/types/alta-crafting/timberpiecebase#m-hittineffect), [`CaveTeleportSettings.arriveAtCaveEffect`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-arriveatcaveeffect), [`CaveTeleportSettings.arriveAtSurfaceEffect`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-arriveatsurfaceeffect), [`CaveTeleportSettings.departFromCaveEffect`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-departfromcaveeffect), [`CaveTeleportSettings.departFromSurfaceEffect`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-departfromsurfaceeffect), [`PlayerCharacter.teleporterTrail`](/mod/game-api/types/alta-player/playercharacter#m-teleportertrail), [`DeathAnimationSettings.deathVisual`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisual), [`DeathAnimationSettings.DeathVisual`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisual-2), [`DeathAnimationSettings.deathVisualGroundPosition`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisualgroundposition), [`DeathAnimationSettings.DeathVisualGroundPosition`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisualgroundposition-2), [`DeathAnimationSettings.preDeathVisual`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-predeathvisual), [`DeathAnimationSettings.PreDeathVisual`](/mod/game-api/types/alta-intelligence/deathanimationsettings#m-predeathvisual-2), [`Cookable.burntEffect`](/mod/game-api/types/alta-crafting/cookable#m-burnteffect), [`Cookable.cookedEffect`](/mod/game-api/types/alta-crafting/cookable#m-cookedeffect), [`Cookable.ReplaceWith`](/mod/game-api/types/alta-crafting/cookable#m-replacewith), [`CookingPoint.androidBurningEffect`](/mod/game-api/types/alta-crafting/cookingpoint#m-androidburningeffect), [`CookingPoint.androidCookingEffect`](/mod/game-api/types/alta-crafting/cookingpoint#m-androidcookingeffect), [`CookingPoint.burningEffect`](/mod/game-api/types/alta-crafting/cookingpoint#m-burningeffect), [`CookingPoint.cookingEffect`](/mod/game-api/types/alta-crafting/cookingpoint#m-cookingeffect), [`CookingSettings.androidBoilingParticlesDefinition`](/mod/game-api/types/alta-crafting/cookingsettings#m-androidboilingparticlesdefinition), [`CookingSettings.boilingParticlesDefinition`](/mod/game-api/types/alta-crafting/cookingsettings#m-boilingparticlesdefinition), [`CookingSettings.BoilingParticlesDefinition`](/mod/game-api/types/alta-crafting/cookingsettings#m-boilingparticlesdefinition-2), [`CookingSettings.stewIngredientsFilledEffect`](/mod/game-api/types/alta-crafting/cookingsettings#m-stewingredientsfilledeffect), [`CookingSettings.StewIngredientsFilledEffect`](/mod/game-api/types/alta-crafting/cookingsettings#m-stewingredientsfilledeffect-2), [`CookingSettings.stewRecipeStartedEffect`](/mod/game-api/types/alta-crafting/cookingsettings#m-stewrecipestartedeffect), [`CookingSettings.StewRecipeStartedEffect`](/mod/game-api/types/alta-crafting/cookingsettings#m-stewrecipestartedeffect-2), [`CookingSettings.textPopupDefinition`](/mod/game-api/types/alta-crafting/cookingsettings#m-textpopupdefinition), [`CookingSettings.TextPopupDefinition`](/mod/game-api/types/alta-crafting/cookingsettings#m-textpopupdefinition-2), [`LiquidVisualChunkDefinition.pooledObjectDefinition`](/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition#m-pooledobjectdefinition), [`StewComponent.stewCreatedEffect`](/mod/game-api/types/alta-crafting/stewcomponent#m-stewcreatedeffect), [`StewComponent.StewCreatedEffect`](/mod/game-api/types/alta-crafting/stewcomponent#m-stewcreatedeffect-2), [`GenericCraftingSettings.androidDestroyedPieceEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-androiddestroyedpieceeffect), [`GenericCraftingSettings.androidPieceCompletedAnimation`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-androidpiececompletedanimation), [`GenericCraftingSettings.destroyedPieceEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-destroyedpieceeffect), [`GenericCraftingSettings.DestroyedPieceEffect`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-destroyedpieceeffect-2), [`GenericCraftingSettings.genericNailDefaultDefinition`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-genericnaildefaultdefinition), [`GenericCraftingSettings.GenericNailDefaultDefinition`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-genericnaildefaultdefinition-2), [`GenericCraftingSettings.genericPieceDefinition`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-genericpiecedefinition), [`GenericCraftingSettings.GenericPieceDefinition`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-genericpiecedefinition-2), [`GenericCraftingSettings.pieceCompletedAnimation`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-piececompletedanimation), [`GenericCraftingSettings.PieceCompletedAnimation`](/mod/game-api/types/alta-crafting/genericcraftingsettings#m-piececompletedanimation-2), [`NailSettings.nailDefinition`](/mod/game-api/types/alta-crafting/nailsettings#m-naildefinition), [`CustomizationSettings.addedEffect`](/mod/game-api/types/alta-customization/customizationsettings#m-addedeffect), [`CustomizationSettings.AddedEffect`](/mod/game-api/types/alta-customization/customizationsettings#m-addedeffect-2), [`CustomizationSettings.disappearEffect`](/mod/game-api/types/alta-customization/customizationsettings#m-disappeareffect), [`CustomizationSettings.DisappearEffect`](/mod/game-api/types/alta-customization/customizationsettings#m-disappeareffect-2), [`WaterfallEffect.AttachTo`](/mod/game-api/types/alta-world-generation/waterfalleffect#m-attachto), [`WaterfallEffectGenerator.effect`](/mod/game-api/types/alta-world-generation/waterfalleffectgenerator#m-effect), [`HeatPoint.AddEffect`](/mod/game-api/types/alta-stats-effects/heatpoint#m-addeffect), [`HeatSourceBase.fireEffect`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-fireeffect) and 209 more.

</div>
