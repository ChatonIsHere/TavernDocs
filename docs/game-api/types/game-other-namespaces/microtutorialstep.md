---
title: "MicroTutorialStep"
description: "abstract class MicroTutorialStep in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialStep

An **abstract class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`HashedGeneralValue<MicroTutorialStep>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`AutoCompleteAfterDelayStep`](/game-api/types/game-other-namespaces/autocompleteafterdelaystep), [`AutoCompleteStep`](/game-api/types/game-other-namespaces/autocompletestep), [`DestroyStepContentStep`](/game-api/types/game-other-namespaces/destroystepcontentstep), [`MicroTutorialStep`](/game-api/types/game-other-namespaces/microtutorialstep), [`PlayerEventStep`](/game-api/types/game-other-namespaces/playereventstep), [`SpawnStep`](/game-api/types/game-other-namespaces/spawnstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MicroTutorialStep()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"internal static readonly Logger logger"}</code> |  |
| <Link id="m-norequiredevents" /><code>{"private static readonly Type[] noRequiredEvents"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyoncomplete" /><code>{"bool DestroyOnComplete { get; set; }"}</code> |  |
| <Link id="m-dynamiccontent" /><code><Link to="/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" DynamicContent { get; set; }"}</code> |  |
| <Link id="m-playereventsearchdepth" /><code>{"virtual int PlayerEventSearchDepth { get; }"}</code> |  |
| <Link id="m-requiredplayereventtypes" /><code>{"virtual IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> |  |
| <Link id="m-staticcontent" /><code>{"GameObject StaticContent { get; set; }"}</code> |  |
| <Link id="m-stepname" /><code>{"string StepName { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"virtual bool IsCompletedByEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> |  |
| <Link id="m-isconfigurationvalid" /><code>{"virtual IResult IsConfigurationValid()"}</code> |  |
| <Link id="m-runforinstance" /><code>{"virtual async Task RunForInstance("}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{" stepInstance)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MicroTutorialStep`:

[`ClientController.OnServerDespawnedTutorialStepContent`](/game-api/types/game-other-namespaces/clientcontroller#m-onserverdespawnedtutorialstepcontent), [`ClientController.OnServerSpawnedAdditionalStepContent`](/game-api/types/game-other-namespaces/clientcontroller#m-onserverspawnedadditionalstepcontent), [`ClientController.OnServerSpawnedStep`](/game-api/types/game-other-namespaces/clientcontroller#m-onserverspawnedstep), [`ClientStepInstanceMap.clientMap`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-clientmap), [`ClientStepInstanceMap.GetSteps`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-getsteps), [`ClientStepInstanceMap.InstanceExists`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-instanceexists), [`ClientStepInstanceMap.TryGet`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-tryget), [`DespawnStepContentCommand.MicroTutorialStep`](/game-api/types/game-other-namespaces/despawnstepcontentcommand#m-microtutorialstep), [`IMicroTutorialSettings.Steps`](/game-api/types/game-other-namespaces/imicrotutorialsettings#m-steps), [`IStepInstance.Settings`](/game-api/types/game-other-namespaces/istepinstance#m-settings), [`ISyncController.ServerDespawnedTutorialStepContent`](/game-api/types/game-other-namespaces/isynccontroller#m-serverdespawnedtutorialstepcontent), [`ISyncController.ServerSpawnedAdditionalStepContent`](/game-api/types/game-other-namespaces/isynccontroller#m-serverspawnedadditionalstepcontent), [`ISyncController.ServerSpawnedStep`](/game-api/types/game-other-namespaces/isynccontroller#m-serverspawnedstep), [`MicroTutorialSettings.steps`](/game-api/types/game-other-namespaces/microtutorialsettings#m-steps), [`MicroTutorialSettings.Steps`](/game-api/types/game-other-namespaces/microtutorialsettings#m-steps-2), [`ServerStepInstance.ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance#m-ctor), [`SpawnStepContentCommand.MicroTutorialStep`](/game-api/types/game-other-namespaces/spawnstepcontentcommand#m-microtutorialstep), [`StepInstance.Settings`](/game-api/types/game-other-namespaces/stepinstance#m-settings), [`StepInstance.step`](/game-api/types/game-other-namespaces/stepinstance#m-step), [`StepInstance.StepInstance`](/game-api/types/game-other-namespaces/stepinstance#m-ctor), [`SyncController.ServerDespawnedTutorialStepContent`](/game-api/types/game-other-namespaces/synccontroller#m-serverdespawnedtutorialstepcontent), [`SyncController.ServerSpawnedAdditionalStepContent`](/game-api/types/game-other-namespaces/synccontroller#m-serverspawnedadditionalstepcontent), [`SyncController.ServerSpawnedStep`](/game-api/types/game-other-namespaces/synccontroller#m-serverspawnedstep).
