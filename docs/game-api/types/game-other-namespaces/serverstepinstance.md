---
title: "ServerStepInstance"
description: "Server-side run of one micro tutorial step: spawns its content, tells the client to spawn it, listens for player events and completes the step."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerStepInstance

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Server-side run of one micro tutorial step: spawns its content, tells the client to spawn it, listens for player events and completes the step.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`StepInstance`](/game-api/types/game-other-namespaces/stepinstance), [`IServerStepInstance`](/game-api/types/game-other-namespaces/iserverstepinstance), [`IStepInstance`](/game-api/types/game-other-namespaces/istepinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerStepInstance("}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial, "}<Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem)"}</code> | Creates a `ServerStepInstance` from `tutorial`, `step` and `microTutorialSystem`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventbuffer" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/playereventbuffer">{"PlayerEventBuffer"}</Link>{" eventBuffer"}</code> | Buffers player events until the step has spawned, then passes them through. |
| <Link id="m-eventbus" /><code>{"private readonly IEventBus eventBus"}</code> | The township event bus. |
| <Link id="m-iscompleted" /><code>{"private bool isCompleted"}</code> | Whether the step has completed. |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | Micro tutorial logger for this class. |
| <Link id="m-tutorialsystem" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem"}</code> | The micro tutorial system, used for its sync controller. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-tutorial" /><code><Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" Tutorial { get; }"}</code> | The tutorial this step belongs to. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> StepCompleted"}</code> | Raised from `Stop` once the step is completed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"void Complete()"}</code> | Marks the step done and stops it. A second call only logs an error. |
| <Link id="m-despawncontent" /><code>{"void DespawnContent()"}</code> | Destroys the dynamic entities, tells the client to despawn the step and removes the static content. |
| <Link id="m-start" /><code>{"async void Start()"}</code> | Spawns the content, processes buffered events and, if not done yet, runs the step logic. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Despawns content if the step is set to destroy on complete, stops listening and raises `StepCompleted` if done. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the step name in brackets, for logs. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-despawndynamiccontent" /><code>{"private void DespawnDynamicContent()"}</code> | Scene-destroys every network entity under the dynamic content transform. |
| <Link id="m-executesteplogic" /><code>{"private async Task ExecuteStepLogic()"}</code> | Runs the step settings' `RunForInstance`. |
| <Link id="m-listentoforcecompletestepevents" /><code>{"private void ListenToForceCompleteStepEvents()"}</code> | Listens for `ForceCompleteTutorialStepEvent`. The handler doesn't check the player, so the event completes every listening step. |
| <Link id="m-notifyplayertospawnstep" /><code>{"private void NotifyPlayerToSpawnStep()"}</code> | Sends the spawn step command to the tutorial's player. |
| <Link id="m-onforcecomplete" /><code>{"private void OnForceComplete("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | Completes the step when a force-complete event arrives. |
| <Link id="m-processbufferedevents" /><code>{"private void ProcessBufferedEvents()"}</code> | Switches the event buffer to passthrough and checks the events buffered so far, stopping once the step completes. |
| <Link id="m-processplayerevent" /><code>{"private void ProcessPlayerEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" playerEvent)"}</code> | Completes the step if the step settings say the event does. |
| <Link id="m-spawndynamicstepcontent" /><code>{"private async Task SpawnDynamicStepContent()"}</code> | Loads the step's dynamic save data into the tutorial entity, instantiates additional static content, syncs positions and tells the client. |
| <Link id="m-spawnstepcontent" /><code>{"private async Task SpawnStepContent()"}</code> | Builds the hierarchy, spawns static content, notifies the client and spawns dynamic content. |
| <Link id="m-synctutorialentitypositions" /><code>{"private void SyncTutorialEntityPositions()"}</code> | Forces a position sync for every network entity in the tutorial chunk, waiting for ones not yet initialized. |

</details>
