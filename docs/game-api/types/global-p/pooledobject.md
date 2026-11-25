---
title: "PooledObject"
description: "Component on a prefab that can be reused through a PooledObjectDefinition pool instead of being destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObject

A **class** in `Root.Township`, no namespace.

Component on a prefab that can be reused through a `PooledObjectDefinition` pool instead of being destroyed. Used for short-lived local effects.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ActionGlyphAnimator`](/game-api/types/global-a-b/actionglyphanimator), [`GenericCraftingNail`](/game-api/types/alta-crafting/genericcraftingnail), [`GenericCraftingPiece`](/game-api/types/alta-crafting/genericcraftingpiece), [`WaterfallEffect`](/game-api/types/alta-world-generation/waterfalleffect), [`PooledDockVisual`](/game-api/types/alta-items/pooleddockvisual), [`BoilingParticles`](/game-api/types/alta-stats-effects/boilingparticles), [`PouringParticles`](/game-api/types/alta-stats-effects/pouringparticles), [`DevToolsBoard`](/game-api/types/alta-player/devtoolsboard), [`NameBoardEmblem`](/game-api/types/alta-player/nameboardemblem), [`PooledMenuSettings`](/game-api/types/alta-player/pooledmenusettings), [`AvailablePointCrystal`](/game-api/types/global-a-b/availablepointcrystal), [`DelayedPooledObject`](/game-api/types/global-c-d/delayedpooledobject), [`DestroyByTime`](/game-api/types/global-c-d/destroybytime), [`DurabilityStateChangeEffect`](/game-api/types/global-c-d/durabilitystatechangeeffect), [`EcholocationEffect`](/game-api/types/global-e-h/echolocationeffect), [`EffectReleaseOnFade`](/game-api/types/global-e-h/effectreleaseonfade), [`EmberComposerFireEffect`](/game-api/types/global-e-h/embercomposerfireeffect), [`PooledParticleSystem`](/game-api/types/game-other-namespaces/pooledparticlesystem), [`PooledParticleSystemManipulator`](/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator), [`FlintSpark`](/game-api/types/global-e-h/flintspark), [`GhostBook`](/game-api/types/global-e-h/ghostbook), [`GlyphDisplayer`](/game-api/types/global-e-h/glyphdisplayer), [`InGameLineGizmo`](/game-api/types/global-i-l/ingamelinegizmo), [`InGameSphereGizmo`](/game-api/types/global-i-l/ingamespheregizmo), [`InteractableInspector`](/game-api/types/global-i-l/interactableinspector), [`MapMaskPiece`](/game-api/types/global-m-o/mapmaskpiece), [`MeshEffect`](/game-api/types/global-m-o/mesheffect), [`MeshReplacePooledObject`](/game-api/types/global-m-o/meshreplacepooledobject), [`ObjectVisualDouble`](/game-api/types/global-m-o/objectvisualdouble), [`PageAutoAddEffect`](/game-api/types/global-p/pageautoaddeffect), [`PooledFireEffect`](/game-api/types/global-p/pooledfireeffect), [`PooledTempWwiseAudio`](/game-api/types/global-p/pooledtempwwiseaudio), [`PooledTextRenderer`](/game-api/types/global-p/pooledtextrenderer), [`QuestCompleteEffect`](/game-api/types/global-q-r/questcompleteeffect), [`RendererGhost`](/game-api/types/global-q-r/rendererghost), [`ScaleLerpPooledObject`](/game-api/types/global-s/scalelerppooledobject), [`SkillHitTarget`](/game-api/types/global-s/skillhittarget), [`SkillOrbEffect`](/game-api/types/global-s/skillorbeffect), [`SkillOrbInteractionSpline`](/game-api/types/global-s/skillorbinteractionspline), [`SplineParticlesPooled`](/game-api/types/global-s/splineparticlespooled), [`StatUpgradeEffect`](/game-api/types/global-s/statupgradeeffect), [`SteelSongEffect`](/game-api/types/global-s/steelsongeffect), [`ToolBasedEffectBase`](/game-api/types/global-t-x/toolbasedeffectbase), [`TrailLerper`](/game-api/types/global-t-x/traillerper)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PooledObject()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isreleased" /><code>{"bool IsReleased { get; private set; }"}</code> | True while the instance sits in the pool unused. |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The GameObject name, captured when the pool created it. |
| <Link id="m-pool" /><code><Link to="/game-api/types/global-a-b/basicpooledobjectpool">{"BasicPooledObjectPool"}</Link>{" Pool { get; private set; }"}</code> | The pool this instance belongs to. Null if it was not made by a pool. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-released" /><code>{"event "}<Link to="/game-api/types/global-p/poolchangedhandler">{"PoolChangedHandler"}</Link>{" Released"}</code> | Raised after the instance goes back to the pool. |
| <Link id="m-requested" /><code>{"event "}<Link to="/game-api/types/global-p/poolchangedhandler">{"PoolChangedHandler"}</Link>{" Requested"}</code> | Raised when the instance is taken from the pool. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishrequest" /><code>{"virtual void FinishRequest()"}</code> | Called by the pool after placing a requested instance. Marks it in use and raises `Requested`. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-a-b/basicpooledobjectpool">{"BasicPooledObjectPool"}</Link>{" pool)"}</code> | Called by the pool on a new instance. Links it to the pool and marks it released. |
| <Link id="m-release" /><code>{"virtual void Release()"}</code> | Returns the instance to its pool (deactivating it, or destroying it if the pool is full). Destroys it if it has no pool. |
| <Link id="m-resetrun" /><code>{"virtual void ResetRun()"}</code> | Hook for subclasses to restart their effect. Empty in the base class. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Clears the `Released` and `Requested` handlers. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PooledObject`:

[`AchievementEffectHandler.MoveQueue`](/game-api/types/global-a-b/achievementeffecthandler#m-movequeue), [`AddonCraftingPart.addon`](/game-api/types/global-a-b/addoncraftingpart#m-addon), [`ForgedModel<TB, TA>.MeshEffectReleased`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-mesheffectreleased), [`Smelter.activeOperationSmoke`](/game-api/types/alta-crafting/smelter#m-activeoperationsmoke), [`RecipePlacer.currentPulsator`](/game-api/types/alta-crafting/recipeplacer#m-currentpulsator), [`LiquidChunkVisuals.AddNewChunkVisuals`](/game-api/types/alta-crafting/liquidchunkvisuals#m-addnewchunkvisuals), [`LiquidChunkVisuals.RemoveChunkVisuals`](/game-api/types/alta-crafting/liquidchunkvisuals#m-removechunkvisuals-2), [`LiquidChunkVisuals.LiquidChunkData.CurrentVisuals`](/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata#m-currentvisuals), [`LiquidVisualChunkDefinition.SpawnVisuals`](/game-api/types/alta-crafting/liquidvisualchunkdefinition#m-spawnvisuals), [`GenericCraftingNail.DisableTimer`](/game-api/types/alta-crafting/genericcraftingnail#m-disabletimer), [`WaterfallEffect.AttachTo`](/game-api/types/alta-world-generation/waterfalleffect#m-attachto), [`WaterfallEffectGenerator.pooled`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-pooled), [`HeatPoint.ActiveEffect`](/game-api/types/alta-stats-effects/heatpoint#m-activeeffect), [`HeatSourceBase.activeEffect`](/game-api/types/alta-stats-effects/heatsourcebase#m-activeeffect), [`ImpactDetectorSettings.LastEffect`](/game-api/types/alta-items/impactdetectorsettings#m-lasteffect), [`PooledFixedImpactor.targetPooledObject`](/game-api/types/alta-items/pooledfixedimpactor#m-targetpooledobject), [`Phantom.activeVisionAttackEffect`](/game-api/types/alta-intelligence/phantom#m-activevisionattackeffect), [`SeedSpray.Seed.pooledObject`](/game-api/types/alta-intelligence/seedspray-seed#m-pooledobject), [`LiquidParticleMarker.ResetContainer`](/game-api/types/alta-stats-effects/liquidparticlemarker#m-resetcontainer), [`PouringParticles.StartParticlesAgain`](/game-api/types/alta-stats-effects/pouringparticles#m-startparticlesagain), [`DownedState.respawnOrbObject`](/game-api/types/alta-player/downedstate#m-respawnorbobject), [`EquipmentState.activeName`](/game-api/types/alta-player/equipmentstate#m-activename), [`DevToolsBoard.activeSettings`](/game-api/types/alta-player/devtoolsboard#m-activesettings), [`QuickAccessSettingsBoard.activeSettings`](/game-api/types/alta-player/quickaccesssettingsboard#m-activesettings), [`ReturnToMainMenuAction.activeGlyph`](/game-api/types/alta-player/returntomainmenuaction#m-activeglyph), [`ReturnToMainMenuAction.activeOrbObject`](/game-api/types/alta-player/returntomainmenuaction#m-activeorbobject), [`TextPopup.PooledObject`](/game-api/types/alta-utilities/textpopup#m-pooledobject), [`RespawnShrineSubscriberMarkController.subscriberMarks`](/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller#m-subscribermarks), [`AvailablePointCrystal.FadeOnRequest`](/game-api/types/global-a-b/availablepointcrystal#m-fadeonrequest), [`BasicPooledObjectPool.pooledObjects`](/game-api/types/global-a-b/basicpooledobjectpool#m-pooledobjects), [`BasicPooledObjectPool.Release`](/game-api/types/global-a-b/basicpooledobjectpool#m-release), [`BasicPooledObjectPool.Request`](/game-api/types/global-a-b/basicpooledobjectpool#m-request), [`Bellows.particlesObjects`](/game-api/types/global-a-b/bellows#m-particlesobjects), [`CastToSurfaceEffect.CastToGround`](/game-api/types/global-c-d/casttosurfaceeffect#m-casttoground), [`CastToSurfaceEffect.StoreCasted`](/game-api/types/global-c-d/casttosurfaceeffect#m-storecasted), [`ColoredExplosive.GetEffect`](/game-api/types/global-c-d/coloredexplosive#m-geteffect), [`ColoredPooledParticleSpawner.SpawnedParticles`](/game-api/types/global-c-d/coloredpooledparticlespawner#m-spawnedparticles), [`ColorFadeRelease.ResetSystems`](/game-api/types/global-c-d/colorfaderelease#m-resetsystems), [`ConglomerateDestroyByTime.CheckNearby`](/game-api/types/global-c-d/conglomeratedestroybytime#m-checknearby), [`CrystalsAvailablePointManager.activeVisuals`](/game-api/types/global-c-d/crystalsavailablepointmanager#m-activevisuals), [`CrystalsAvailablePointManager.temporaryVisuals`](/game-api/types/global-c-d/crystalsavailablepointmanager#m-temporaryvisuals), [`DestroyByTime.StartRuning`](/game-api/types/global-c-d/destroybytime#m-startruning), [`DurabilityGlobalSettings.GetEffect`](/game-api/types/global-c-d/durabilityglobalsettings#m-geteffect), [`DurabilityModule.SetupEffect`](/game-api/types/global-c-d/durabilitymodule#m-setupeffect), [`DurabilityStateChangeEffect.CleanUp`](/game-api/types/global-c-d/durabilitystatechangeeffect#m-cleanup), [`DurabilityStateChangeEffect.OnRequested`](/game-api/types/global-c-d/durabilitystatechangeeffect#m-onrequested), [`EffectReleaseOnFade.SetupRequest`](/game-api/types/global-e-h/effectreleaseonfade#m-setuprequest), [`EmberComposer.activeEffects`](/game-api/types/global-e-h/embercomposer#m-activeeffects), [`EmberComposerFireEffect.RequestedStart`](/game-api/types/global-e-h/embercomposerfireeffect#m-requestedstart), [`EmissionControl.ResetSystems`](/game-api/types/global-e-h/emissioncontrol#m-resetsystems), [`EmissionShapeControl.ResetSystems`](/game-api/types/global-e-h/emissionshapecontrol#m-resetsystems), [`Explosive.GetEffect`](/game-api/types/global-e-h/explosive#m-geteffect), [`GhostBook.OnRequest`](/game-api/types/global-e-h/ghostbook#m-onrequest), [`InGameGizmosSettings.DrawLine`](/game-api/types/global-i-l/ingamegizmossettings#m-drawline), [`InGameGizmosSettings.DrawSphere`](/game-api/types/global-i-l/ingamegizmossettings#m-drawsphere), [`InGameLineGizmo.RequestedSetup`](/game-api/types/global-i-l/ingamelinegizmo#m-requestedsetup), [`InGameSphereGizmo.RequestedSetup`](/game-api/types/global-i-l/ingamespheregizmo#m-requestedsetup), [`InteractableInspector.OnRequested`](/game-api/types/global-i-l/interactableinspector#m-onrequested), [`LifeTimeEffect.pooledEffect`](/game-api/types/global-i-l/lifetimeeffect#m-pooledeffect), [`MaxLimitPooledObjectPool.activeObjects`](/game-api/types/global-m-o/maxlimitpooledobjectpool#m-activeobjects) and 56 more.
