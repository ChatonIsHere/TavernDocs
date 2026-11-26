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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`HashedGeneralValue<MicroTutorialStep>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`AutoCompleteAfterDelayStep`](/game-api/types/game-other-namespaces/autocompleteafterdelaystep), [`AutoCompleteStep`](/game-api/types/game-other-namespaces/autocompletestep), [`DestroyStepContentStep`](/game-api/types/game-other-namespaces/destroystepcontentstep), [`MicroTutorialStep`](/game-api/types/game-other-namespaces/microtutorialstep), [`PlayerEventStep`](/game-api/types/game-other-namespaces/playereventstep), [`SpawnStep`](/game-api/types/game-other-namespaces/spawnstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MicroTutorialStep()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"internal static readonly Logger logger"}</code> | NLog logger shared by micro tutorial steps. |
| <Link id="m-norequiredevents" /><code>{"private static readonly Type[] noRequiredEvents"}</code> | Empty type array returned by the default `RequiredPlayerEventTypes`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyoncomplete" /><code>{"bool DestroyOnComplete { get; set; }"}</code> | If true, the server despawns the step's dynamic and static content when the step stops. |
| <Link id="m-dynamiccontent" /><code><Link to="/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" DynamicContent { get; set; }"}</code> | Set piece whose saved network entities the server loads into the tutorial entity when the step starts. Can be null. |
| <Link id="m-playereventsearchdepth" /><code>{"virtual int PlayerEventSearchDepth { get; }"}</code> | How many earlier steps' buffered player events still count for this step. -1 (default) means all earlier steps. |
| <Link id="m-requiredplayereventtypes" /><code>{"virtual IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | Player event types the step listens to on the event bus. Empty by default. |
| <Link id="m-staticcontent" /><code>{"GameObject StaticContent { get; set; }"}</code> | Prefab instantiated locally (not networked) as the step's static content. Can be null. |
| <Link id="m-stepname" /><code>{"string StepName { get; set; }"}</code> | Display name for the step, used in its `ToString` and log messages. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"virtual bool IsCompletedByEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | Server: returns true if the given player event finishes the step. Base returns false. |
| <Link id="m-isconfigurationvalid" /><code>{"virtual IResult IsConfigurationValid()"}</code> | Checks the step's settings. The base version always succeeds; subclasses report missing fields. |
| <Link id="m-runforinstance" /><code>{"virtual async Task RunForInstance("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> | Server: custom async logic run for a step instance, such as a delay or a spawn. Does nothing by default. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the step name and hash code, for logs. |

## Used in

Members of other types that take, return or hold a `MicroTutorialStep`:

[`ClientController.OnServerDespawnedTutorialStepContent`](/game-api/types/game-other-namespaces/clientcontroller#m-onserverdespawnedtutorialstepcontent), [`ClientController.OnServerSpawnedAdditionalStepContent`](/game-api/types/game-other-namespaces/clientcontroller#m-onserverspawnedadditionalstepcontent), [`ClientController.OnServerSpawnedStep`](/game-api/types/game-other-namespaces/clientcontroller#m-onserverspawnedstep), [`ClientStepInstanceMap.clientMap`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-clientmap), [`ClientStepInstanceMap.GetSteps`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-getsteps), [`ClientStepInstanceMap.InstanceExists`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-instanceexists), [`ClientStepInstanceMap.TryGet`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-tryget), [`DespawnStepContentCommand.MicroTutorialStep`](/game-api/types/game-other-namespaces/despawnstepcontentcommand#m-microtutorialstep), [`IMicroTutorialSettings.Steps`](/game-api/types/game-other-namespaces/imicrotutorialsettings#m-steps), [`IStepInstance.Settings`](/game-api/types/game-other-namespaces/istepinstance#m-settings), [`ISyncController.ServerDespawnedTutorialStepContent`](/game-api/types/game-other-namespaces/isynccontroller#m-serverdespawnedtutorialstepcontent), [`ISyncController.ServerSpawnedAdditionalStepContent`](/game-api/types/game-other-namespaces/isynccontroller#m-serverspawnedadditionalstepcontent), [`ISyncController.ServerSpawnedStep`](/game-api/types/game-other-namespaces/isynccontroller#m-serverspawnedstep), [`MicroTutorialSettings.steps`](/game-api/types/game-other-namespaces/microtutorialsettings#m-steps), [`MicroTutorialSettings.Steps`](/game-api/types/game-other-namespaces/microtutorialsettings#m-steps-2), [`ServerStepInstance.ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance#m-ctor), [`SpawnStepContentCommand.MicroTutorialStep`](/game-api/types/game-other-namespaces/spawnstepcontentcommand#m-microtutorialstep), [`StepInstance.Settings`](/game-api/types/game-other-namespaces/stepinstance#m-settings), [`StepInstance.step`](/game-api/types/game-other-namespaces/stepinstance#m-step), [`StepInstance.StepInstance`](/game-api/types/game-other-namespaces/stepinstance#m-ctor), [`SyncController.ServerDespawnedTutorialStepContent`](/game-api/types/game-other-namespaces/synccontroller#m-serverdespawnedtutorialstepcontent), [`SyncController.ServerSpawnedAdditionalStepContent`](/game-api/types/game-other-namespaces/synccontroller#m-serverspawnedadditionalstepcontent), [`SyncController.ServerSpawnedStep`](/game-api/types/game-other-namespaces/synccontroller#m-serverspawnedstep).
