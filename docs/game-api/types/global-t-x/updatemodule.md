---
title: "UpdateModule"
description: "A named list of update callbacks that UnityUpdateManager runs once per frame in a given UpdateSegment, so many objects can share one update loop."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateModule

A **class** in `Root.Township`, no namespace.

A named list of update callbacks that `UnityUpdateManager` runs once per frame in a given `UpdateSegment`, so many objects can share one update loop. A callback that throws is logged and removed from the list.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Derived types** [`BudgetedUpdateModule`](/game-api/types/global-a-b/budgetedupdatemodule)
- **Nested types** [`MethodNode`](/game-api/types/global-t-x/updatemodule-methodnode)
- **Documented in** [Update modules](/game-api/console-and-utilities/update-modules#updatemodule)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UpdateModule(string name, "}<Link to="/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" segment, bool includeInServerProfiling = false)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkediterationmethod" /><code>{"protected Action<"}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{", Func<"}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{", bool>> checkedIterationMethod"}</code> | The loop used by subclasses that stop early when a check fails. |
| <Link id="m-duration" /><code>{"protected "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" duration"}</code> | Rolling average of how long `Update` takes, in milliseconds. |
| <Link id="m-first" /><code>{"protected "}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" first"}</code> | Head of the callback list. New callbacks are added here, so they run first. |
| <Link id="m-iterationmethod" /><code>{"protected Action<"}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{"> iterationMethod"}</code> | The loop `Update` uses, set by `SetProfiling`. |
| <Link id="m-timer" /><code>{"protected static Stopwatch timer"}</code> | Shared stopwatch used to time updates. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-methodspernode" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{", MethodInfo> methodsPerNode"}</code> | Profiler builds only: the method each node runs. |
| <Link id="m-profilingstrings" /><code>{"private static Dictionary<MethodInfo, string> profilingStrings"}</code> | Profiler builds only: cached profiler labels, one per method. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-includeinserverprofiling" /><code>{"bool IncludeInServerProfiling { get; }"}</code> | Whether this module is listed in server profiling output. |
| <Link id="m-moduleinfo" /><code><Link to="/game-api/types/global-t-x/updatemoduleinfo">{"UpdateModuleInfo"}</Link>{" ModuleInfo { get; }"}</code> | Registered count and average run time, for profiling displays. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The module's name, used in logs and profiling. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-actualcount" /><code>{"int ActualCount()"}</code> | Counts the registered callbacks by walking the list. |
| <Link id="m-deregistermethod" /><code>{"static void DeregisterMethod(ref "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" methodNode)"}</code> | Static: removes a callback using the handle `RegisterMethod` gave you, and clears the handle. Safe to call with null. |
| <Link id="m-registermethod" /><code>{"virtual "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" RegisterMethod(Action method)"}</code> | Adds a callback to the front of the list and returns a handle to deregister it later. Returns null for a null callback. |
| <Link id="m-setprofiling" /><code>{"void SetProfiling(bool isProfiling)"}</code> | Switches between the plain and profiling loops. In this build they behave the same. |
| <Link id="m-update" /><code>{"virtual void Update()"}</code> | Runs every registered callback once and records how long it took. |
| <Link id="m-deregistermethod-2" /><code>{"protected virtual void DeregisterMethod("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> | Static: removes a callback using the handle `RegisterMethod` gave you, and clears the handle. Safe to call with null. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmethodtoprofiling" /><code>{"private void AddMethodToProfiling("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> | Profiler builds only (compiled out otherwise): remembers which method a node runs, for profiler labels. |
| <Link id="m-checkediterateoverlinkedlist" /><code>{"private void CheckedIterateOverLinkedList("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" startNode, Func<"}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{", bool> check)"}</code> | Runs each registered method in order while the check passes. A method that throws is logged and deregistered for good. |
| <Link id="m-checkediterateoverlinkedlistwithprofiling" /><code>{"private void CheckedIterateOverLinkedListWithProfiling("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" startNode, Func<"}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{", bool> check)"}</code> | Same as `CheckedIterateOverLinkedList` in this build; used when profiling is on. |
| <Link id="m-iterateoverlinkedlist" /><code>{"private void IterateOverLinkedList("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" startNode)"}</code> | Runs every registered method once, newest first. A method that throws is logged and deregistered for good. |
| <Link id="m-iterateoverlinkedlistwithprofiling" /><code>{"private void IterateOverLinkedListWithProfiling("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" startNode)"}</code> | Same as `IterateOverLinkedList` in this build; used when profiling is on. |
| <Link id="m-removemethodfromprofiling" /><code>{"private void RemoveMethodFromProfiling("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> | Profiler builds only (compiled out otherwise): forgets a node's profiler entry. |
| <Link id="m-startprofilingfornode" /><code>{"private void StartProfilingForNode("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> | Profiler builds only (compiled out otherwise): builds the profiler label for a node's method. |
| <Link id="m-stopprofilingfornode" /><code>{"private void StopProfilingForNode()"}</code> | Profiler builds only; empty. |

</details>

## Used in

Members of other types that take, return or hold a `UpdateModule`:

[`Recycler.updateModule`](/game-api/types/alta-crafting/recycler#m-updatemodule), [`GenericAssemblyStation.updateModule`](/game-api/types/alta-crafting/genericassemblystation#m-updatemodule), [`GenericCraftingStation.updateModule`](/game-api/types/alta-crafting/genericcraftingstation#m-updatemodule), [`HeatArea.updateModule`](/game-api/types/alta-stats-effects/heatarea#m-updatemodule), [`HeatSourceBase.heatUpdateModule`](/game-api/types/alta-stats-effects/heatsourcebase#m-heatupdatemodule), [`DelayedImpactResolver.updateModule`](/game-api/types/alta-items/delayedimpactresolver#m-updatemodule), [`ImpactTool.updateModule`](/game-api/types/alta-items/impacttool#m-updatemodule), [`ActiveCrawl.updateModule`](/game-api/types/alta-intelligence/activecrawl#m-updatemodule), [`AgentRollUpInPlace.updateModule`](/game-api/types/alta-intelligence/agentrollupinplace#m-updatemodule), [`AgentUpdater.updateAgents`](/game-api/types/alta-intelligence/agentupdater#m-updateagents), [`FaceTarget.updateModule`](/game-api/types/alta-intelligence/facetarget#m-updatemodule), [`FireBug.updateModule`](/game-api/types/alta-intelligence/firebug#m-updatemodule), [`HookAction.updateModule`](/game-api/types/alta-intelligence/hookaction#m-updatemodule), [`LiquidSurfaceVisual.updateModule`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-updatemodule), [`NetworkManager.receivingModule`](/game-api/types/alta-networking/networkmanager#m-receivingmodule), [`NetworkManager.sendingModule`](/game-api/types/alta-networking/networkmanager#m-sendingmodule), [`NetworkRigidbody.updateModule`](/game-api/types/alta-networking/networkrigidbody#m-updatemodule), [`IndependentWalker.updateModule`](/game-api/types/alta-intelligence/independentwalker#m-updatemodule), [`BoundsPopulationItem.distanceCheckUpdateModule`](/game-api/types/alta-world-generation/boundspopulationitem#m-distancecheckupdatemodule), [`RadialPopulationItem.distanceCheckUpdateModule`](/game-api/types/alta-world-generation/radialpopulationitem#m-distancecheckupdatemodule), [`CameraStabilization.updateModule`](/game-api/types/alta-customization/camerastabilization#m-updatemodule), [`StatAffectingArea.updateModule`](/game-api/types/alta-stats-effects/stataffectingarea#m-updatemodule), [`ChunkDetector.chunkUpdateModule`](/game-api/types/global-c-d/chunkdetector#m-chunkupdatemodule), [`DepthCheckLocoCheck.updateModule`](/game-api/types/global-c-d/depthchecklococheck#m-updatemodule), [`EmberComposer.HeatPointCollectionHandler.updateModule`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-updatemodule), [`HandInteractor.updateModule`](/game-api/types/global-e-h/handinteractor#m-updatemodule), [`HeatPointTriggerCollector.updateModule`](/game-api/types/global-e-h/heatpointtriggercollector#m-updatemodule), [`LerpFollowBase<T>.staticUpdateModule`](/game-api/types/global-i-l/lerpfollowbase-t#m-staticupdatemodule), [`LockedRotationHandle.updateModule`](/game-api/types/global-i-l/lockedrotationhandle#m-updatemodule), [`PlayerToolBasedSkillHelper.updateModule`](/game-api/types/global-p/playertoolbasedskillhelper#m-updatemodule), [`RoomRotator.updateModule`](/game-api/types/global-q-r/roomrotator#m-updatemodule), [`ScriptedRotation.updateModule`](/game-api/types/global-s/scriptedrotation#m-updatemodule), [`SimpleNetworkedPivot.updateModule`](/game-api/types/global-s/simplenetworkedpivot#m-updatemodule), [`SkillsStructureRotator.updateModule`](/game-api/types/global-s/skillsstructurerotator#m-updatemodule), [`SmoothLocomotion.unownedHeightCheck`](/game-api/types/global-s/smoothlocomotion#m-unownedheightcheck), [`SmoothLocomotion.updateModule`](/game-api/types/global-s/smoothlocomotion#m-updatemodule), [`SpacePoint.updateModule`](/game-api/types/global-s/spacepoint#m-updatemodule), [`SwipeInteractionController.SwipeTracker.updateModule`](/game-api/types/global-s/swipeinteractioncontroller-swipetracker#m-updatemodule), [`UnityUpdateManager.AllModules`](/game-api/types/global-t-x/unityupdatemanager#m-allmodules), [`UnityUpdateManager.FixedUpdateModule`](/game-api/types/global-t-x/unityupdatemanager#m-fixedupdatemodule), [`UnityUpdateManager.fixedUpdateModules`](/game-api/types/global-t-x/unityupdatemanager#m-fixedupdatemodules), [`UnityUpdateManager.LateUpdateModule`](/game-api/types/global-t-x/unityupdatemanager#m-lateupdatemodule), [`UnityUpdateManager.lateUpdateModules`](/game-api/types/global-t-x/unityupdatemanager#m-lateupdatemodules), [`UnityUpdateManager.RegisterModule`](/game-api/types/global-t-x/unityupdatemanager#m-registermodule), [`UnityUpdateManager.RegisterModuleToList`](/game-api/types/global-t-x/unityupdatemanager#m-registermoduletolist), [`UnityUpdateManager.UpdateModule`](/game-api/types/global-t-x/unityupdatemanager#m-updatemodule), [`UnityUpdateManager.updateModules`](/game-api/types/global-t-x/unityupdatemanager#m-updatemodules), [`UnityUpdateManager.ModuleRegistration.Module`](/game-api/types/global-t-x/unityupdatemanager-moduleregistration#m-module), [`UpdateModule.MethodNode.Module`](/game-api/types/global-t-x/updatemodule-methodnode#m-module).
