---
title: "PooledObject"
description: "Component on a prefab that can be reused through a PooledObjectDefinition pool instead of being destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObject

A **class** in `Root.Township`, the global namespace.

Component on a prefab that can be reused through a `PooledObjectDefinition` pool instead of being destroyed. Used for short-lived local effects.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ActionGlyphAnimator`](/mod/game-api/types/global-a-b/actionglyphanimator), [`GenericCraftingNail`](/mod/game-api/types/alta-crafting/genericcraftingnail), [`GenericCraftingPiece`](/mod/game-api/types/alta-crafting/genericcraftingpiece), [`WaterfallEffect`](/mod/game-api/types/alta-world-generation/waterfalleffect), [`PooledDockVisual`](/mod/game-api/types/alta-items/pooleddockvisual), [`BoilingParticles`](/mod/game-api/types/alta-stats-effects/boilingparticles), [`PouringParticles`](/mod/game-api/types/alta-stats-effects/pouringparticles), [`DevToolsBoard`](/mod/game-api/types/alta-player/devtoolsboard), [`NameBoardEmblem`](/mod/game-api/types/alta-player/nameboardemblem), [`PooledMenuSettings`](/mod/game-api/types/alta-player/pooledmenusettings), [`AvailablePointCrystal`](/mod/game-api/types/global-a-b/availablepointcrystal), [`DelayedPooledObject`](/mod/game-api/types/global-c-d/delayedpooledobject), [`DestroyByTime`](/mod/game-api/types/global-c-d/destroybytime), [`DurabilityStateChangeEffect`](/mod/game-api/types/global-c-d/durabilitystatechangeeffect), [`EcholocationEffect`](/mod/game-api/types/global-e-h/echolocationeffect), [`EffectReleaseOnFade`](/mod/game-api/types/global-e-h/effectreleaseonfade), [`EmberComposerFireEffect`](/mod/game-api/types/global-e-h/embercomposerfireeffect), [`PooledParticleSystem`](/mod/game-api/types/game-other-namespaces/pooledparticlesystem), [`PooledParticleSystemManipulator`](/mod/game-api/types/game-other-namespaces/pooledparticlesystemmanipulator), [`FlintSpark`](/mod/game-api/types/global-e-h/flintspark), [`GhostBook`](/mod/game-api/types/global-e-h/ghostbook), [`GlyphDisplayer`](/mod/game-api/types/global-e-h/glyphdisplayer), [`InGameLineGizmo`](/mod/game-api/types/global-i-l/ingamelinegizmo), [`InGameSphereGizmo`](/mod/game-api/types/global-i-l/ingamespheregizmo), [`InteractableInspector`](/mod/game-api/types/global-i-l/interactableinspector), [`MapMaskPiece`](/mod/game-api/types/global-m-o/mapmaskpiece), [`MeshEffect`](/mod/game-api/types/global-m-o/mesheffect), [`MeshReplacePooledObject`](/mod/game-api/types/global-m-o/meshreplacepooledobject), [`ObjectVisualDouble`](/mod/game-api/types/global-m-o/objectvisualdouble), [`PageAutoAddEffect`](/mod/game-api/types/global-p/pageautoaddeffect), [`PooledFireEffect`](/mod/game-api/types/global-p/pooledfireeffect), [`PooledTempWwiseAudio`](/mod/game-api/types/global-p/pooledtempwwiseaudio), [`PooledTextRenderer`](/mod/game-api/types/global-p/pooledtextrenderer), [`QuestCompleteEffect`](/mod/game-api/types/global-q-r/questcompleteeffect), [`RendererGhost`](/mod/game-api/types/global-q-r/rendererghost), [`ScaleLerpPooledObject`](/mod/game-api/types/global-s/scalelerppooledobject), [`SkillHitTarget`](/mod/game-api/types/global-s/skillhittarget), [`SkillOrbEffect`](/mod/game-api/types/global-s/skillorbeffect), [`SkillOrbInteractionSpline`](/mod/game-api/types/global-s/skillorbinteractionspline), [`SplineParticlesPooled`](/mod/game-api/types/global-s/splineparticlespooled), [`StatUpgradeEffect`](/mod/game-api/types/global-s/statupgradeeffect), [`SteelSongEffect`](/mod/game-api/types/global-s/steelsongeffect), [`ToolBasedEffectBase`](/mod/game-api/types/global-t-x/toolbasedeffectbase), [`TrailLerper`](/mod/game-api/types/global-t-x/traillerper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isreleased" /><code>{"bool IsReleased { get; private set; }"}</code> | <span className="api-desc">True while the instance sits in the pool unused.</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The GameObject name, captured when the pool created it.</span> |
| <Link id="m-pool" /><code><Link to="/mod/game-api/types/global-a-b/basicpooledobjectpool">{"BasicPooledObjectPool"}</Link>{" Pool { get; private set; }"}</code> | <span className="api-desc">The pool this instance belongs to. Null if it was not made by a pool.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-released" /><code>{"event "}<Link to="/mod/game-api/types/global-p/poolchangedhandler">{"PoolChangedHandler"}</Link>{" Released"}</code> | <span className="api-desc">Raised after the instance goes back to the pool.</span> |
| <Link id="m-requested" /><code>{"event "}<Link to="/mod/game-api/types/global-p/poolchangedhandler">{"PoolChangedHandler"}</Link>{" Requested"}</code> | <span className="api-desc">Raised when the instance is taken from the pool.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishrequest" /><code>{"virtual void FinishRequest()"}</code> | <span className="api-desc">Called by the pool after placing a requested instance. Marks it in use and raises `Requested`.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/global-a-b/basicpooledobjectpool">{"BasicPooledObjectPool"}</Link>{" pool)"}</code> | <span className="api-desc">Called by the pool on a new instance. Links it to the pool and marks it released.</span> |
| <Link id="m-release" /><code>{"virtual void Release()"}</code> | <span className="api-desc">Returns the instance to its pool (deactivating it, or destroying it if the pool is full). Destroys it if it has no pool.</span> |
| <Link id="m-resetrun" /><code>{"virtual void ResetRun()"}</code> | <span className="api-desc">Hook for subclasses to restart their effect. Empty in the base class.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Clears the `Released` and `Requested` handlers.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> | <span className="api-desc">Called by the pool once the object is back in it; marks it released and raises `Released`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PooledObject`:

<div className="api-used-in">

[`AchievementEffectHandler.MoveQueue`](/mod/game-api/types/global-a-b/achievementeffecthandler#m-movequeue), [`AddonCraftingPart.addon`](/mod/game-api/types/global-a-b/addoncraftingpart#m-addon), [`ForgedModel<TB, TA>.MeshEffectReleased`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-mesheffectreleased), [`Smelter.activeOperationSmoke`](/mod/game-api/types/alta-crafting/smelter#m-activeoperationsmoke), [`RecipePlacer.currentPulsator`](/mod/game-api/types/alta-crafting/recipeplacer#m-currentpulsator), [`LiquidChunkVisuals.AddNewChunkVisuals`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-addnewchunkvisuals), [`LiquidChunkVisuals.RemoveChunkVisuals`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-removechunkvisuals-2), [`LiquidChunkVisuals.LiquidChunkData.CurrentVisuals`](/mod/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata#m-currentvisuals), [`LiquidVisualChunkDefinition.SpawnVisuals`](/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition#m-spawnvisuals), [`GenericCraftingNail.DisableTimer`](/mod/game-api/types/alta-crafting/genericcraftingnail#m-disabletimer), [`WaterfallEffect.AttachTo`](/mod/game-api/types/alta-world-generation/waterfalleffect#m-attachto), [`WaterfallEffectGenerator.pooled`](/mod/game-api/types/alta-world-generation/waterfalleffectgenerator#m-pooled), [`HeatPoint.ActiveEffect`](/mod/game-api/types/alta-stats-effects/heatpoint#m-activeeffect), [`HeatSourceBase.activeEffect`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-activeeffect), [`ImpactDetectorSettings.LastEffect`](/mod/game-api/types/alta-items/impactdetectorsettings#m-lasteffect), [`PooledFixedImpactor.targetPooledObject`](/mod/game-api/types/alta-items/pooledfixedimpactor#m-targetpooledobject), [`Phantom.activeVisionAttackEffect`](/mod/game-api/types/alta-intelligence/phantom#m-activevisionattackeffect), [`SeedSpray.Seed.pooledObject`](/mod/game-api/types/alta-intelligence/seedspray-seed#m-pooledobject), [`LiquidParticleMarker.ResetContainer`](/mod/game-api/types/alta-stats-effects/liquidparticlemarker#m-resetcontainer), [`PouringParticles.StartParticlesAgain`](/mod/game-api/types/alta-stats-effects/pouringparticles#m-startparticlesagain), [`DownedState.respawnOrbObject`](/mod/game-api/types/alta-player/downedstate#m-respawnorbobject), [`EquipmentState.activeName`](/mod/game-api/types/alta-player/equipmentstate#m-activename), [`DevToolsBoard.activeSettings`](/mod/game-api/types/alta-player/devtoolsboard#m-activesettings), [`QuickAccessSettingsBoard.activeSettings`](/mod/game-api/types/alta-player/quickaccesssettingsboard#m-activesettings), [`ReturnToMainMenuAction.activeGlyph`](/mod/game-api/types/alta-player/returntomainmenuaction#m-activeglyph), [`ReturnToMainMenuAction.activeOrbObject`](/mod/game-api/types/alta-player/returntomainmenuaction#m-activeorbobject), [`TextPopup.PooledObject`](/mod/game-api/types/alta-utilities/textpopup#m-pooledobject), [`RespawnShrineSubscriberMarkController.subscriberMarks`](/mod/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller#m-subscribermarks), [`AvailablePointCrystal.FadeOnRequest`](/mod/game-api/types/global-a-b/availablepointcrystal#m-fadeonrequest), [`BasicPooledObjectPool.pooledObjects`](/mod/game-api/types/global-a-b/basicpooledobjectpool#m-pooledobjects), [`BasicPooledObjectPool.Release`](/mod/game-api/types/global-a-b/basicpooledobjectpool#m-release), [`BasicPooledObjectPool.Request`](/mod/game-api/types/global-a-b/basicpooledobjectpool#m-request), [`Bellows.particlesObjects`](/mod/game-api/types/global-a-b/bellows#m-particlesobjects), [`CastToSurfaceEffect.CastToGround`](/mod/game-api/types/global-c-d/casttosurfaceeffect#m-casttoground), [`CastToSurfaceEffect.StoreCasted`](/mod/game-api/types/global-c-d/casttosurfaceeffect#m-storecasted), [`ColoredExplosive.GetEffect`](/mod/game-api/types/global-c-d/coloredexplosive#m-geteffect), [`ColoredPooledParticleSpawner.SpawnedParticles`](/mod/game-api/types/global-c-d/coloredpooledparticlespawner#m-spawnedparticles), [`ColorFadeRelease.ResetSystems`](/mod/game-api/types/global-c-d/colorfaderelease#m-resetsystems), [`ConglomerateDestroyByTime.CheckNearby`](/mod/game-api/types/global-c-d/conglomeratedestroybytime#m-checknearby), [`CrystalsAvailablePointManager.activeVisuals`](/mod/game-api/types/global-c-d/crystalsavailablepointmanager#m-activevisuals), [`CrystalsAvailablePointManager.temporaryVisuals`](/mod/game-api/types/global-c-d/crystalsavailablepointmanager#m-temporaryvisuals), [`DestroyByTime.StartRuning`](/mod/game-api/types/global-c-d/destroybytime#m-startruning), [`DurabilityGlobalSettings.GetEffect`](/mod/game-api/types/global-c-d/durabilityglobalsettings#m-geteffect), [`DurabilityModule.SetupEffect`](/mod/game-api/types/global-c-d/durabilitymodule#m-setupeffect), [`DurabilityStateChangeEffect.CleanUp`](/mod/game-api/types/global-c-d/durabilitystatechangeeffect#m-cleanup), [`DurabilityStateChangeEffect.OnRequested`](/mod/game-api/types/global-c-d/durabilitystatechangeeffect#m-onrequested), [`EffectReleaseOnFade.SetupRequest`](/mod/game-api/types/global-e-h/effectreleaseonfade#m-setuprequest), [`EmberComposer.activeEffects`](/mod/game-api/types/global-e-h/embercomposer#m-activeeffects), [`EmberComposerFireEffect.RequestedStart`](/mod/game-api/types/global-e-h/embercomposerfireeffect#m-requestedstart), [`EmissionControl.ResetSystems`](/mod/game-api/types/global-e-h/emissioncontrol#m-resetsystems), [`EmissionShapeControl.ResetSystems`](/mod/game-api/types/global-e-h/emissionshapecontrol#m-resetsystems), [`Explosive.GetEffect`](/mod/game-api/types/global-e-h/explosive#m-geteffect), [`GhostBook.OnRequest`](/mod/game-api/types/global-e-h/ghostbook#m-onrequest), [`InGameGizmosSettings.DrawLine`](/mod/game-api/types/global-i-l/ingamegizmossettings#m-drawline), [`InGameGizmosSettings.DrawSphere`](/mod/game-api/types/global-i-l/ingamegizmossettings#m-drawsphere), [`InGameLineGizmo.RequestedSetup`](/mod/game-api/types/global-i-l/ingamelinegizmo#m-requestedsetup), [`InGameSphereGizmo.RequestedSetup`](/mod/game-api/types/global-i-l/ingamespheregizmo#m-requestedsetup), [`InteractableInspector.OnRequested`](/mod/game-api/types/global-i-l/interactableinspector#m-onrequested), [`LifeTimeEffect.pooledEffect`](/mod/game-api/types/global-i-l/lifetimeeffect#m-pooledeffect), [`MaxLimitPooledObjectPool.activeObjects`](/mod/game-api/types/global-m-o/maxlimitpooledobjectpool#m-activeobjects) and 56 more.

</div>
