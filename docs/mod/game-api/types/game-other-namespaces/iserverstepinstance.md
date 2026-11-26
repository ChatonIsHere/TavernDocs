---
title: "IServerStepInstance"
description: "Server side of one step in a micro tutorial: starts, stops, spawns and removes its content, and reports when done."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerStepInstance

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

Server side of one step in a micro tutorial: starts, stops, spawns and removes its content, and reports when done.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IStepInstance`](/mod/game-api/types/game-other-namespaces/istepinstance)
- **Derived types** [`ServerStepInstance`](/mod/game-api/types/game-other-namespaces/serverstepinstance)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-tutorial" /><code><Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" Tutorial { get; }"}</code> | The tutorial this step belongs to. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> StepCompleted"}</code> | Raised when the step is completed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"void Complete()"}</code> | Marks the step done. |
| <Link id="m-despawncontent" /><code>{"void DespawnContent()"}</code> | Removes anything the step spawned. |
| <Link id="m-start" /><code>{"void Start()"}</code> | Starts the step. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Stops the step without completing it. |

## Used in

Members of other types that take, return or hold a `IServerStepInstance`:

[`IMicroTutorial.Steps`](/mod/game-api/types/game-other-namespaces/imicrotutorial#m-steps), [`MicroTutorial.CurrentStep`](/mod/game-api/types/game-other-namespaces/microtutorial#m-currentstep), [`MicroTutorial.OnStepCompleted`](/mod/game-api/types/game-other-namespaces/microtutorial#m-onstepcompleted), [`MicroTutorial.steps`](/mod/game-api/types/game-other-namespaces/microtutorial#m-steps), [`MicroTutorial.Steps`](/mod/game-api/types/game-other-namespaces/microtutorial#m-steps-2), [`PlayerEventBuffer.OnStepCompleted`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-onstepcompleted), [`PlayerEventBuffer.PlayerEventBuffer`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-ctor), [`PlayerEventBuffer.step`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-step), [`ServerStepInstance.StepCompleted`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-stepcompleted), [`AutoCompleteAfterDelayStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/autocompleteafterdelaystep#m-runforinstance), [`AutoCompleteStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/autocompletestep#m-runforinstance), [`DestroyStepContentStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/destroystepcontentstep#m-runforinstance), [`MicroTutorialStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/microtutorialstep#m-runforinstance), [`SpawnStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/spawnstep#m-runforinstance).
