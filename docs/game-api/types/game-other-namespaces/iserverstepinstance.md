---
title: "IServerStepInstance"
description: "interface IServerStepInstance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerStepInstance

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IStepInstance`](/game-api/types/game-other-namespaces/istepinstance)
- **Derived types** [`ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance)

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
| <Link id="m-start" /><code>{"void Start()"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IServerStepInstance`:

[`IMicroTutorial.Steps`](/game-api/types/game-other-namespaces/imicrotutorial#m-steps), [`MicroTutorial.CurrentStep`](/game-api/types/game-other-namespaces/microtutorial#m-currentstep), [`MicroTutorial.OnStepCompleted`](/game-api/types/game-other-namespaces/microtutorial#m-onstepcompleted), [`MicroTutorial.steps`](/game-api/types/game-other-namespaces/microtutorial#m-steps), [`MicroTutorial.Steps`](/game-api/types/game-other-namespaces/microtutorial#m-steps-2), [`PlayerEventBuffer.OnStepCompleted`](/game-api/types/game-other-namespaces/playereventbuffer#m-onstepcompleted), [`PlayerEventBuffer.PlayerEventBuffer`](/game-api/types/game-other-namespaces/playereventbuffer#m-ctor), [`PlayerEventBuffer.step`](/game-api/types/game-other-namespaces/playereventbuffer#m-step), [`ServerStepInstance.StepCompleted`](/game-api/types/game-other-namespaces/serverstepinstance#m-stepcompleted), [`AutoCompleteAfterDelayStep.RunForInstance`](/game-api/types/game-other-namespaces/autocompleteafterdelaystep#m-runforinstance), [`AutoCompleteStep.RunForInstance`](/game-api/types/game-other-namespaces/autocompletestep#m-runforinstance), [`DestroyStepContentStep.RunForInstance`](/game-api/types/game-other-namespaces/destroystepcontentstep#m-runforinstance), [`MicroTutorialStep.RunForInstance`](/game-api/types/game-other-namespaces/microtutorialstep#m-runforinstance), [`SpawnStep.RunForInstance`](/game-api/types/game-other-namespaces/spawnstep#m-runforinstance).
