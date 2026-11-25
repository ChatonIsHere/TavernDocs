---
title: "PooledObjectDefinition"
description: "class PooledObjectDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectDefinition

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PooledObjectDefinitionBase`](/game-api/types/global-p/pooledobjectdefinitionbase)
- **Derived types** [`PooledMeshReplaceObjectDefinition`](/game-api/types/global-p/pooledmeshreplaceobjectdefinition), [`PooledObjectDefinition.Create`](/game-api/types/global-p/pooledobjectdefinition-create)
- **Nested types** [`Create`](/game-api/types/global-p/pooledobjectdefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledObjectDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-initializesize" /><code>{"private int initializeSize"}</code> |  |
| <Link id="m-ismaxsizelimitting" /><code>{"private bool isMaxSizeLimitting"}</code> |  |
| <Link id="m-ismaxsizelimittingonandroid" /><code>{"private bool isMaxSizeLimittingOnAndroid"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maximumpoolsize" /><code>{"private int maximumPoolSize"}</code> |  |
| <Link id="m-maximumpoolsizeandroid" /><code>{"private int maximumPoolSizeAndroid"}</code> |  |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" prefab"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-initializepoolsize" /><code>{"int InitializePoolSize { get; }"}</code> |  |
| <Link id="m-maximumpoolsize-2" /><code>{"int MaximumPoolSize { get; }"}</code> |  |
| <Link id="m-pool" /><code><Link to="/game-api/types/global-a-b/basicpooledobjectpool">{"BasicPooledObjectPool"}</Link>{" Pool { get; private set; }"}</code> |  |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Prefab { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> |  |
| <Link id="m-initializepool" /><code>{"override void InitializePool()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PooledObjectDefinition`:

[`ActionGlyphsPlacer.actionGlyphPool`](/game-api/types/global-a-b/actionglyphsplacer#m-actionglyphpool), [`AddonCraftingPart.jointAddon`](/game-api/types/global-a-b/addoncraftingpart#m-jointaddon), [`PlayerEffectController.teleportEffect`](/game-api/types/alta-stats-effects/playereffectcontroller#m-teleporteffect), [`Smelter.operationalSmoke`](/game-api/types/alta-crafting/smelter#m-operationalsmoke), [`RecipePlacer.blowUpPiece`](/game-api/types/alta-crafting/recipeplacer#m-blowuppiece), [`RecipePlacer.pulsatorDefinition`](/game-api/types/alta-crafting/recipeplacer#m-pulsatordefinition), [`TimberBlock.hittinPiece`](/game-api/types/alta-crafting/timberblock#m-hittinpiece), [`TimberBlock.Stage.concludedEffect`](/game-api/types/alta-crafting/timberblock-stage#m-concludedeffect), [`TimberBlock.Stage.destroyingEffect`](/game-api/types/alta-crafting/timberblock-stage#m-destroyingeffect), [`TimberBlock.Stage.DestroyingEffect`](/game-api/types/alta-crafting/timberblock-stage#m-destroyingeffect-2), [`TimberPieceBase.hittinEffect`](/game-api/types/alta-crafting/timberpiecebase#m-hittineffect), [`CaveTeleportSettings.arriveAtCaveEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-arriveatcaveeffect), [`CaveTeleportSettings.arriveAtSurfaceEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-arriveatsurfaceeffect), [`CaveTeleportSettings.departFromCaveEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-departfromcaveeffect), [`CaveTeleportSettings.departFromSurfaceEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-departfromsurfaceeffect), [`PlayerCharacter.teleporterTrail`](/game-api/types/alta-player/playercharacter#m-teleportertrail), [`DeathAnimationSettings.deathVisual`](/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisual), [`DeathAnimationSettings.DeathVisual`](/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisual-2), [`DeathAnimationSettings.deathVisualGroundPosition`](/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisualgroundposition), [`DeathAnimationSettings.DeathVisualGroundPosition`](/game-api/types/alta-intelligence/deathanimationsettings#m-deathvisualgroundposition-2), [`DeathAnimationSettings.preDeathVisual`](/game-api/types/alta-intelligence/deathanimationsettings#m-predeathvisual), [`DeathAnimationSettings.PreDeathVisual`](/game-api/types/alta-intelligence/deathanimationsettings#m-predeathvisual-2), [`Cookable.burntEffect`](/game-api/types/alta-crafting/cookable#m-burnteffect), [`Cookable.cookedEffect`](/game-api/types/alta-crafting/cookable#m-cookedeffect), [`Cookable.ReplaceWith`](/game-api/types/alta-crafting/cookable#m-replacewith), [`CookingPoint.androidBurningEffect`](/game-api/types/alta-crafting/cookingpoint#m-androidburningeffect), [`CookingPoint.androidCookingEffect`](/game-api/types/alta-crafting/cookingpoint#m-androidcookingeffect), [`CookingPoint.burningEffect`](/game-api/types/alta-crafting/cookingpoint#m-burningeffect), [`CookingPoint.cookingEffect`](/game-api/types/alta-crafting/cookingpoint#m-cookingeffect), [`CookingSettings.androidBoilingParticlesDefinition`](/game-api/types/alta-crafting/cookingsettings#m-androidboilingparticlesdefinition), [`CookingSettings.boilingParticlesDefinition`](/game-api/types/alta-crafting/cookingsettings#m-boilingparticlesdefinition), [`CookingSettings.BoilingParticlesDefinition`](/game-api/types/alta-crafting/cookingsettings#m-boilingparticlesdefinition-2), [`CookingSettings.stewIngredientsFilledEffect`](/game-api/types/alta-crafting/cookingsettings#m-stewingredientsfilledeffect), [`CookingSettings.StewIngredientsFilledEffect`](/game-api/types/alta-crafting/cookingsettings#m-stewingredientsfilledeffect-2), [`CookingSettings.stewRecipeStartedEffect`](/game-api/types/alta-crafting/cookingsettings#m-stewrecipestartedeffect), [`CookingSettings.StewRecipeStartedEffect`](/game-api/types/alta-crafting/cookingsettings#m-stewrecipestartedeffect-2), [`CookingSettings.textPopupDefinition`](/game-api/types/alta-crafting/cookingsettings#m-textpopupdefinition), [`CookingSettings.TextPopupDefinition`](/game-api/types/alta-crafting/cookingsettings#m-textpopupdefinition-2), [`LiquidVisualChunkDefinition.pooledObjectDefinition`](/game-api/types/alta-crafting/liquidvisualchunkdefinition#m-pooledobjectdefinition), [`StewComponent.stewCreatedEffect`](/game-api/types/alta-crafting/stewcomponent#m-stewcreatedeffect), [`StewComponent.StewCreatedEffect`](/game-api/types/alta-crafting/stewcomponent#m-stewcreatedeffect-2), [`GenericCraftingSettings.androidDestroyedPieceEffect`](/game-api/types/alta-crafting/genericcraftingsettings#m-androiddestroyedpieceeffect), [`GenericCraftingSettings.androidPieceCompletedAnimation`](/game-api/types/alta-crafting/genericcraftingsettings#m-androidpiececompletedanimation), [`GenericCraftingSettings.destroyedPieceEffect`](/game-api/types/alta-crafting/genericcraftingsettings#m-destroyedpieceeffect), [`GenericCraftingSettings.DestroyedPieceEffect`](/game-api/types/alta-crafting/genericcraftingsettings#m-destroyedpieceeffect-2), [`GenericCraftingSettings.genericNailDefaultDefinition`](/game-api/types/alta-crafting/genericcraftingsettings#m-genericnaildefaultdefinition), [`GenericCraftingSettings.GenericNailDefaultDefinition`](/game-api/types/alta-crafting/genericcraftingsettings#m-genericnaildefaultdefinition-2), [`GenericCraftingSettings.genericPieceDefinition`](/game-api/types/alta-crafting/genericcraftingsettings#m-genericpiecedefinition), [`GenericCraftingSettings.GenericPieceDefinition`](/game-api/types/alta-crafting/genericcraftingsettings#m-genericpiecedefinition-2), [`GenericCraftingSettings.pieceCompletedAnimation`](/game-api/types/alta-crafting/genericcraftingsettings#m-piececompletedanimation), [`GenericCraftingSettings.PieceCompletedAnimation`](/game-api/types/alta-crafting/genericcraftingsettings#m-piececompletedanimation-2), [`NailSettings.nailDefinition`](/game-api/types/alta-crafting/nailsettings#m-naildefinition), [`CustomizationSettings.addedEffect`](/game-api/types/alta-customization/customizationsettings#m-addedeffect), [`CustomizationSettings.AddedEffect`](/game-api/types/alta-customization/customizationsettings#m-addedeffect-2), [`CustomizationSettings.disappearEffect`](/game-api/types/alta-customization/customizationsettings#m-disappeareffect), [`CustomizationSettings.DisappearEffect`](/game-api/types/alta-customization/customizationsettings#m-disappeareffect-2), [`WaterfallEffect.AttachTo`](/game-api/types/alta-world-generation/waterfalleffect#m-attachto), [`WaterfallEffectGenerator.effect`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-effect), [`HeatPoint.AddEffect`](/game-api/types/alta-stats-effects/heatpoint#m-addeffect), [`HeatSourceBase.fireEffect`](/game-api/types/alta-stats-effects/heatsourcebase#m-fireeffect) and 209 more.
