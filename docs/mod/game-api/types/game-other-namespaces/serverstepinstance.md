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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`StepInstance`](/mod/game-api/types/game-other-namespaces/stepinstance), [`IServerStepInstance`](/mod/game-api/types/game-other-namespaces/iserverstepinstance), [`IStepInstance`](/mod/game-api/types/game-other-namespaces/istepinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerStepInstance("}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" step, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem)"}</code> | <span className="api-desc">Creates a `ServerStepInstance` from `tutorial`, `step` and `microTutorialSystem`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventbuffer" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/playereventbuffer">{"PlayerEventBuffer"}</Link>{" eventBuffer"}</code> | <span className="api-desc">Buffers player events until the step has spawned, then passes them through.</span> |
| <Link id="m-eventbus" /><code>{"private readonly IEventBus eventBus"}</code> | <span className="api-desc">The township event bus.</span> |
| <Link id="m-iscompleted" /><code>{"private bool isCompleted"}</code> | <span className="api-desc">Whether the step has completed.</span> |
| <Link id="m-logger" /><code>{"private static readonly "}<Link to="/mod/game-api/types/game-other-namespaces/microtutoriallogger">{"MicroTutorialLogger"}</Link>{" logger"}</code> | <span className="api-desc">Micro tutorial logger for this class.</span> |
| <Link id="m-tutorialsystem" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" tutorialSystem"}</code> | <span className="api-desc">The micro tutorial system, used for its sync controller.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-tutorial" /><code><Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" Tutorial { get; }"}</code> | <span className="api-desc">The tutorial this step belongs to.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> StepCompleted"}</code> | <span className="api-desc">Raised from `Stop` once the step is completed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"void Complete()"}</code> | <span className="api-desc">Marks the step done and stops it. A second call only logs an error.</span> |
| <Link id="m-despawncontent" /><code>{"void DespawnContent()"}</code> | <span className="api-desc">Destroys the dynamic entities, tells the client to despawn the step and removes the static content.</span> |
| <Link id="m-start" /><code>{"async void Start()"}</code> | <span className="api-desc">Spawns the content, processes buffered events and, if not done yet, runs the step logic.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Despawns content if the step is set to destroy on complete, stops listening and raises `StepCompleted` if done.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the step name in brackets, for logs.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-despawndynamiccontent" /><code>{"private void DespawnDynamicContent()"}</code> | <span className="api-desc">Scene-destroys every network entity under the dynamic content transform.</span> |
| <Link id="m-executesteplogic" /><code>{"private async Task ExecuteStepLogic()"}</code> | <span className="api-desc">Runs the step settings' `RunForInstance`.</span> |
| <Link id="m-listentoforcecompletestepevents" /><code>{"private void ListenToForceCompleteStepEvents()"}</code> | <span className="api-desc">Listens for `ForceCompleteTutorialStepEvent`. The handler doesn't check the player, so the event completes every listening step.</span> |
| <Link id="m-notifyplayertospawnstep" /><code>{"private void NotifyPlayerToSpawnStep()"}</code> | <span className="api-desc">Sends the spawn step command to the tutorial's player.</span> |
| <Link id="m-onforcecomplete" /><code>{"private void OnForceComplete("}<Link to="/mod/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | <span className="api-desc">Completes the step when a force-complete event arrives.</span> |
| <Link id="m-processbufferedevents" /><code>{"private void ProcessBufferedEvents()"}</code> | <span className="api-desc">Switches the event buffer to passthrough and checks the events buffered so far, stopping once the step completes.</span> |
| <Link id="m-processplayerevent" /><code>{"private void ProcessPlayerEvent("}<Link to="/mod/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" playerEvent)"}</code> | <span className="api-desc">Completes the step if the step settings say the event does.</span> |
| <Link id="m-spawndynamicstepcontent" /><code>{"private async Task SpawnDynamicStepContent()"}</code> | <span className="api-desc">Loads the step's dynamic save data into the tutorial entity, instantiates additional static content, syncs positions and tells the client.</span> |
| <Link id="m-spawnstepcontent" /><code>{"private async Task SpawnStepContent()"}</code> | <span className="api-desc">Builds the hierarchy, spawns static content, notifies the client and spawns dynamic content.</span> |
| <Link id="m-synctutorialentitypositions" /><code>{"private void SyncTutorialEntityPositions()"}</code> | <span className="api-desc">Forces a position sync for every network entity in the tutorial chunk, waiting for ones not yet initialized.</span> |

</details>
