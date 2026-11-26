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
| <Link id="m-tutorial" /><code><Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" Tutorial { get; }"}</code> | <span className="api-desc">The tutorial this step belongs to.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-stepcompleted" /><code>{"event Action<"}<Link to="/mod/game-api/types/game-other-namespaces/iserverstepinstance">{"IServerStepInstance"}</Link>{"> StepCompleted"}</code> | <span className="api-desc">Raised when the step is completed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-complete" /><code>{"void Complete()"}</code> | <span className="api-desc">Marks the step done.</span> |
| <Link id="m-despawncontent" /><code>{"void DespawnContent()"}</code> | <span className="api-desc">Removes anything the step spawned.</span> |
| <Link id="m-start" /><code>{"void Start()"}</code> | <span className="api-desc">Starts the step.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Stops the step without completing it.</span> |

## Used in

Members of other types that take, return or hold a `IServerStepInstance`:

<div className="api-used-in">

[`IMicroTutorial.Steps`](/mod/game-api/types/game-other-namespaces/imicrotutorial#m-steps), [`MicroTutorial.CurrentStep`](/mod/game-api/types/game-other-namespaces/microtutorial#m-currentstep), [`MicroTutorial.OnStepCompleted`](/mod/game-api/types/game-other-namespaces/microtutorial#m-onstepcompleted), [`MicroTutorial.steps`](/mod/game-api/types/game-other-namespaces/microtutorial#m-steps), [`MicroTutorial.Steps`](/mod/game-api/types/game-other-namespaces/microtutorial#m-steps-2), [`PlayerEventBuffer.OnStepCompleted`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-onstepcompleted), [`PlayerEventBuffer.PlayerEventBuffer`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-ctor), [`PlayerEventBuffer.step`](/mod/game-api/types/game-other-namespaces/playereventbuffer#m-step), [`ServerStepInstance.StepCompleted`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-stepcompleted), [`AutoCompleteAfterDelayStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/autocompleteafterdelaystep#m-runforinstance), [`AutoCompleteStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/autocompletestep#m-runforinstance), [`DestroyStepContentStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/destroystepcontentstep#m-runforinstance), [`MicroTutorialStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/microtutorialstep#m-runforinstance), [`SpawnStep.RunForInstance`](/mod/game-api/types/game-other-namespaces/spawnstep#m-runforinstance).

</div>
