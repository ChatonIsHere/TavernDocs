---
title: "PooledObjectDefinition"
description: "A ScriptableObject asset describing an object pool: which PooledObject prefab to reuse and how many to keep."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectDefinition

A **class** in `Root.Township`, no namespace.

A ScriptableObject asset describing an object pool: which `PooledObject` prefab to reuse and how many to keep. Call `Get` to take an instance from the pool.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PooledObjectDefinitionBase`](/game-api/types/global-p/pooledobjectdefinitionbase)
- **Derived types** [`PooledMeshReplaceObjectDefinition`](/game-api/types/global-p/pooledmeshreplaceobjectdefinition), [`PooledObjectDefinition.Create`](/game-api/types/global-p/pooledobjectdefinition-create)
- **Nested types** [`Create`](/game-api/types/global-p/pooledobjectdefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledObjectDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializesize" /><code>{"private int initializeSize"}</code> | How many objects to create up front when the pool is made (capped by `maximumPoolSize`). |
| <Link id="m-ismaxsizelimitting" /><code>{"private bool isMaxSizeLimitting"}</code> | When true the pool never has more than `maximumPoolSize` objects active; otherwise it only limits how many it keeps spare. |
| <Link id="m-ismaxsizelimittingonandroid" /><code>{"private bool isMaxSizeLimittingOnAndroid"}</code> | Android version of `isMaxSizeLimitting`. Not read anywhere in this build. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maximumpoolsize" /><code>{"private int maximumPoolSize"}</code> | Most objects the pool keeps (or allows active, with `isMaxSizeLimitting`). |
| <Link id="m-maximumpoolsizeandroid" /><code>{"private int maximumPoolSizeAndroid"}</code> | Android pool size. Not read anywhere in this build. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" prefab"}</code> | The pooled object prefab this definition spawns. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-initializepoolsize" /><code>{"int InitializePoolSize { get; }"}</code> | How many instances are created up front, inactive, when the pool is made. |
| <Link id="m-maximumpoolsize-2" /><code>{"int MaximumPoolSize { get; }"}</code> | How many released instances the pool keeps. With limiting on, also the most that can be active at once (the oldest gets recycled). The Android size field is never read. |
| <Link id="m-pool" /><code><Link to="/game-api/types/global-a-b/basicpooledobjectpool">{"BasicPooledObjectPool"}</Link>{" Pool { get; private set; }"}</code> | The pool, created on first `InitializePool` or `Get`. A max-limit pool if the asset has size limiting on, otherwise a plain pool. |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Prefab { get; }"}</code> | The `PooledObject` prefab the pool instantiates. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | Takes an instance from the pool (or makes a new one), places it at the given position and rotation and activates it. |
| <Link id="m-initializepool" /><code>{"override void InitializePool()"}</code> | Creates the pool if it doesn't exist yet. |

## Used in

Members of other types that take, return or hold a `PooledObjectDefinition`:

[`ActionGlyphsPlacer.actionGlyphPool`](/game-api/types/global-a-b/actionglyphsplacer#m-actionglyphpool), [`AddonCraftingPart.jointAddon`](/game-api/types/global-a-b/addoncraftingpart#m-jointaddon), [`PlayerEffectController.teleportEffect`](/game-api/types/alta-stats-effects/playereffectcontroller#m-teleporteffect), [`Smelter.operationalSmoke`](/game-api/types/alta-crafting/smelter#m-operationalsmoke), [`RecipePlacer.blowUpPiece`](/game-api/types/alta-crafting/recipeplacer#m-blowuppiece), [`RecipePlacer.pulsatorDefinition`](/game-api/types/alta-crafting/recipeplacer#m-pulsatordefinition), [`TimberBlock.hittinPiece`](/game-api/types/alta-crafting/timberblock#m-hittinpiece), [`TimberBlock.Stage.concludedEffect`](/game-api/types/alta-crafting/timberblock-stage#m-concludedeffect), [`TimberBlock.Stage.destroyingEffect`](/game-api/types/alta-crafting/timberblock-stage#m-destroyingeffect), [`TimberBlock.Stage.DestroyingEffect`](/game-api/types/alta-crafting/timberblock-stage#m-destroyingeffect-2), [`TimberPieceBase.hittinEffect`](/game-api/types/alta-crafting/timberpiecebase#m-hittineffect), [`CaveTeleportSettings.arriveAtCaveEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-arriveatcaveeffect), [`CaveTeleportSettings.arriveAtSurfaceEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-arriveatsurfaceeffect), [`CaveTeleportSettings.departFromCaveEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-departfromcaveeffect), [`CaveTeleportSettings.departFromSurfaceEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-departfromsurfaceeffect), [`PlayerCharacter.teleporterTrail`](/game-api/types/alta-player/playercharacter#m-teleportertrail), [`DeathAnimationSettings.deathVisual`](/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisual), [`DeathAnimationSettings.DeathVisual`](/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisual-2), [`DeathAnimationSettings.deathVisualGroundPosition`](/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisualgroundposition), [`DeathAnimationSettings.DeathVisualGroundPosition`](/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisualgroundposition-2), [`DeathAnimationSettings.preDeathVisual`](/game-api/types/alta-intelligence/deathanimationsettings#m-predeathvisual), [`DeathAnimationSettings.PreDeathVisual`](/game-api/types/alta-intelligence/deathanimationsettings#m-predeathvisual-2), [`Cookable.burntEffect`](/game-api/types/alta-crafting/cookable#m-burnteffect), [`Cookable.cookedEffect`](/game-api/types/alta-crafting/cookable#m-cookedeffect), [`Cookable.ReplaceWith`](/game-api/types/alta-crafting/cookable#m-replacewith), [`CookingPoint.androidBurningEffect`](/game-api/types/alta-crafting/cookingpoint#m-androidburningeffect), [`CookingPoint.androidCookingEffect`](/game-api/types/alta-crafting/cookingpoint#m-androidcookingeffect), [`CookingPoint.burningEffect`](/game-api/types/alta-crafting/cookingpoint#m-burningeffect), [`CookingPoint.cookingEffect`](/game-api/types/alta-crafting/cookingpoint#m-cookingeffect), [`CookingSettings.androidBoilingParticlesDefinition`](/game-api/types/alta-crafting/cookingsettings#m-androidboilingparticlesdefinition), [`CookingSettings.boilingParticlesDefinition`](/game-api/types/alta-crafting/cookingsettings#m-boilingparticlesdefinition), [`CookingSettings.BoilingParticlesDefinition`](/game-api/types/alta-crafting/cookingsettings#m-boilingparticlesdefinition-2), [`CookingSettings.stewIngredientsFilledEffect`](/game-api/types/alta-crafting/cookingsettings#m-stewingredientsfilledeffect), [`CookingSettings.StewIngredientsFilledEffect`](/game-api/types/alta-crafting/cookingsettings#m-stewingredientsfilledeffect-2), [`CookingSettings.stewRecipeStartedEffect`](/game-api/types/alta-crafting/cookingsettings#m-stewrecipestartedeffect), [`CookingSettings.StewRecipeStartedEffect`](/game-api/types/alta-crafting/cookingsettings#m-stewrecipestartedeffect-2), [`CookingSettings.textPopupDefinition`](/game-api/types/alta-crafting/cookingsettings#m-textpopupdefinition), [`CookingSettings.TextPopupDefinition`](/game-api/types/alta-crafting/cookingsettings#m-textpopupdefinition-2), [`LiquidVisualChunkDefinition.pooledObjectDefinition`](/game-api/types/alta-crafting/liquidvisualchunkdefinition#m-pooledobjectdefinition), [`StewComponent.stewCreatedEffect`](/game-api/types/alta-crafting/stewcomponent#m-stewcreatedeffect), [`StewComponent.StewCreatedEffect`](/game-api/types/alta-crafting/stewcomponent#m-stewcreatedeffect-2), [`GenericCraftingSettings.androidDestroyedPieceEffect`](/game-api/types/alta-crafting/genericcraftingsettings#m-androiddestroyedpieceeffect), [`GenericCraftingSettings.androidPieceCompletedAnimation`](/game-api/types/alta-crafting/genericcraftingsettings#m-androidpiececompletedanimation), [`GenericCraftingSettings.destroyedPieceEffect`](/game-api/types/alta-crafting/genericcraftingsettings#m-destroyedpieceeffect), [`GenericCraftingSettings.DestroyedPieceEffect`](/game-api/types/alta-crafting/genericcraftingsettings#m-destroyedpieceeffect-2), [`GenericCraftingSettings.genericNailDefaultDefinition`](/game-api/types/alta-crafting/genericcraftingsettings#m-genericnaildefaultdefinition), [`GenericCraftingSettings.GenericNailDefaultDefinition`](/game-api/types/alta-crafting/genericcraftingsettings#m-genericnaildefaultdefinition-2), [`GenericCraftingSettings.genericPieceDefinition`](/game-api/types/alta-crafting/genericcraftingsettings#m-genericpiecedefinition), [`GenericCraftingSettings.GenericPieceDefinition`](/game-api/types/alta-crafting/genericcraftingsettings#m-genericpiecedefinition-2), [`GenericCraftingSettings.pieceCompletedAnimation`](/game-api/types/alta-crafting/genericcraftingsettings#m-piececompletedanimation), [`GenericCraftingSettings.PieceCompletedAnimation`](/game-api/types/alta-crafting/genericcraftingsettings#m-piececompletedanimation-2), [`NailSettings.nailDefinition`](/game-api/types/alta-crafting/nailsettings#m-naildefinition), [`CustomizationSettings.addedEffect`](/game-api/types/alta-customization/customizationsettings#m-addedeffect), [`CustomizationSettings.AddedEffect`](/game-api/types/alta-customization/customizationsettings#m-addedeffect-2), [`CustomizationSettings.disappearEffect`](/game-api/types/alta-customization/customizationsettings#m-disappeareffect), [`CustomizationSettings.DisappearEffect`](/game-api/types/alta-customization/customizationsettings#m-disappeareffect-2), [`WaterfallEffect.AttachTo`](/game-api/types/alta-world-generation/waterfalleffect#m-attachto), [`WaterfallEffectGenerator.effect`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-effect), [`HeatPoint.AddEffect`](/game-api/types/alta-stats-effects/heatpoint#m-addeffect), [`HeatSourceBase.fireEffect`](/game-api/types/alta-stats-effects/heatsourcebase#m-fireeffect) and 209 more.
