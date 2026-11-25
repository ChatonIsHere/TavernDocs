---
title: "ServerStepInstance"
description: "class ServerStepInstance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerStepInstance

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`StepInstance`](/game-api/types/game-other-namespaces/stepinstance), [`IServerStepInstance`](/game-api/types/game-other-namespaces/iserverstepinstance), [`IStepInstance`](/game-api/types/game-other-namespaces/istepinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerStepInstance("}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-eventbuffer" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/playereventbuffer">{"PlayerEventBuffer"}</Link>{" eventBuffer"}</code> |  |
| <Link id="m-eventbus" /><code>{"private readonly IEventBus eventBus"}</code> |  |
| <Link id="m-iscompleted" /><code>{"private bool isCompleted"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> |  |
| <Link id="m-tutorialsystem" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-tutorial" /><code><Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" Tutorial { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> StepCompleted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"void Complete()"}</code> |  |
| <Link id="m-despawncontent" /><code>{"void DespawnContent()"}</code> |  |
| <Link id="m-start" /><code>{"async void Start()"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-despawndynamiccontent" /><code>{"private void DespawnDynamicContent()"}</code> |  |
| <Link id="m-executesteplogic" /><code>{"private async Task ExecuteStepLogic()"}</code> |  |
| <Link id="m-listentoforcecompletestepevents" /><code>{"private void ListenToForceCompleteStepEvents()"}</code> |  |
| <Link id="m-notifyplayertospawnstep" /><code>{"private void NotifyPlayerToSpawnStep()"}</code> |  |
| <Link id="m-onforcecomplete" /><code>{"private void OnForceComplete("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> |  |
| <Link id="m-processbufferedevents" /><code>{"private void ProcessBufferedEvents()"}</code> |  |
| <Link id="m-processplayerevent" /><code>{"private void ProcessPlayerEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" playerEvent)"}</code> |  |
| <Link id="m-spawndynamicstepcontent" /><code>{"private async Task SpawnDynamicStepContent()"}</code> |  |
| <Link id="m-spawnstepcontent" /><code>{"private async Task SpawnStepContent()"}</code> |  |
| <Link id="m-synctutorialentitypositions" /><code>{"private void SyncTutorialEntityPositions()"}</code> |  |
