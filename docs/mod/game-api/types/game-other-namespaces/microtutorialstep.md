---
title: "MicroTutorialStep"
description: "Base asset for one step of a micro tutorial."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialStep

An **abstract class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Base asset for one step of a micro tutorial. Subclasses say which player events finish the step or run their own server logic; the server's step instance spawns the step's content and watches for completion.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`HashedGeneralValue<MicroTutorialStep>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`AutoCompleteAfterDelayStep`](/mod/game-api/types/game-other-namespaces/autocompleteafterdelaystep), [`AutoCompleteStep`](/mod/game-api/types/game-other-namespaces/autocompletestep), [`DestroyStepContentStep`](/mod/game-api/types/game-other-namespaces/destroystepcontentstep), [`MicroTutorialStep`](/mod/game-api/types/game-other-namespaces/microtutorialstep), [`PlayerEventStep`](/mod/game-api/types/game-other-namespaces/playereventstep), [`SpawnStep`](/mod/game-api/types/game-other-namespaces/spawnstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MicroTutorialStep()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"internal static readonly Logger logger"}</code> | <span className="api-desc">NLog logger shared by micro tutorial steps.</span> |
| <Link id="m-norequiredevents" /><code>{"private static readonly Type[] noRequiredEvents"}</code> | <span className="api-desc">Empty type array returned by the default `RequiredPlayerEventTypes`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyoncomplete" /><code>{"bool DestroyOnComplete { get; set; }"}</code> | <span className="api-desc">If true, the server despawns the step's dynamic and static content when the step stops.</span> |
| <Link id="m-dynamiccontent" /><code><Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" DynamicContent { get; set; }"}</code> | <span className="api-desc">Set piece whose saved network entities the server loads into the tutorial entity when the step starts. Can be null.</span> |
| <Link id="m-playereventsearchdepth" /><code>{"virtual int PlayerEventSearchDepth { get; }"}</code> | <span className="api-desc">How many earlier steps' buffered player events still count for this step. -1 (default) means all earlier steps.</span> |
| <Link id="m-requiredplayereventtypes" /><code>{"virtual IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | <span className="api-desc">Player event types the step listens to on the event bus. Empty by default.</span> |
| <Link id="m-staticcontent" /><code>{"GameObject StaticContent { get; set; }"}</code> | <span className="api-desc">Prefab instantiated locally (not networked) as the step's static content. Can be null.</span> |
| <Link id="m-stepname" /><code>{"string StepName { get; set; }"}</code> | <span className="api-desc">Display name for the step, used in its `ToString` and log messages.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"virtual bool IsCompletedByEvent("}<Link to="/mod/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | <span className="api-desc">Server: returns true if the given player event finishes the step. Base returns false.</span> |
| <Link id="m-isconfigurationvalid" /><code>{"virtual IResult IsConfigurationValid()"}</code> | <span className="api-desc">Checks the step's settings. The base version always succeeds; subclasses report missing fields.</span> |
| <Link id="m-runforinstance" /><code>{"virtual async Task RunForInstance("}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | <span className="api-desc">Server: custom async logic run for a step instance, such as a delay or a spawn. Does nothing by default.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the step name and hash code, for logs.</span> |

## Used in

Members of other types that take, return or hold a `MicroTutorialStep`:

<div className="api-used-in">

[`ClientController.OnServerDespawnedTutorialStepContent`](/mod/game-api/types/game-other-namespaces/clientcontroller#m-onserverdespawnedtutorialstepcontent), [`ClientController.OnServerSpawnedAdditionalStepContent`](/mod/game-api/types/game-other-namespaces/clientcontroller#m-onserverspawnedadditionalstepcontent), [`ClientController.OnServerSpawnedStep`](/mod/game-api/types/game-other-namespaces/clientcontroller#m-onserverspawnedstep), [`ClientStepInstanceMap.clientMap`](/mod/game-api/types/game-other-namespaces/clientstepinstancemap#m-clientmap), [`ClientStepInstanceMap.GetSteps`](/mod/game-api/types/game-other-namespaces/clientstepinstancemap#m-getsteps), [`ClientStepInstanceMap.InstanceExists`](/mod/game-api/types/game-other-namespaces/clientstepinstancemap#m-instanceexists), [`ClientStepInstanceMap.TryGet`](/mod/game-api/types/game-other-namespaces/clientstepinstancemap#m-tryget), [`DespawnStepContentCommand.MicroTutorialStep`](/mod/game-api/types/game-other-namespaces/despawnstepcontentcommand#m-microtutorialstep), [`IMicroTutorialSettings.Steps`](/mod/game-api/types/game-other-namespaces/imicrotutorialsettings#m-steps), [`IStepInstance.Settings`](/mod/game-api/types/game-other-namespaces/istepinstance#m-settings), [`ISyncController.ServerDespawnedTutorialStepContent`](/mod/game-api/types/game-other-namespaces/isynccontroller#m-serverdespawnedtutorialstepcontent), [`ISyncController.ServerSpawnedAdditionalStepContent`](/mod/game-api/types/game-other-namespaces/isynccontroller#m-serverspawnedadditionalstepcontent), [`ISyncController.ServerSpawnedStep`](/mod/game-api/types/game-other-namespaces/isynccontroller#m-serverspawnedstep), [`MicroTutorialSettings.steps`](/mod/game-api/types/game-other-namespaces/microtutorialsettings#m-steps), [`MicroTutorialSettings.Steps`](/mod/game-api/types/game-other-namespaces/microtutorialsettings#m-steps-2), [`ServerStepInstance.ServerStepInstance`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-ctor), [`SpawnStepContentCommand.MicroTutorialStep`](/mod/game-api/types/game-other-namespaces/spawnstepcontentcommand#m-microtutorialstep), [`StepInstance.Settings`](/mod/game-api/types/game-other-namespaces/stepinstance#m-settings), [`StepInstance.step`](/mod/game-api/types/game-other-namespaces/stepinstance#m-step), [`StepInstance.StepInstance`](/mod/game-api/types/game-other-namespaces/stepinstance#m-ctor), [`SyncController.ServerDespawnedTutorialStepContent`](/mod/game-api/types/game-other-namespaces/synccontroller#m-serverdespawnedtutorialstepcontent), [`SyncController.ServerSpawnedAdditionalStepContent`](/mod/game-api/types/game-other-namespaces/synccontroller#m-serverspawnedadditionalstepcontent), [`SyncController.ServerSpawnedStep`](/mod/game-api/types/game-other-namespaces/synccontroller#m-serverspawnedstep).

</div>
