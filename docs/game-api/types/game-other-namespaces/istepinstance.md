---
title: "IStepInstance"
description: "One step of a running micro tutorial and the content it has spawned."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IStepInstance

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

One step of a running micro tutorial and the content it has spawned. `StepInstance` and its subclass `ServerStepInstance` implement it.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`IServerStepInstance`](/game-api/types/game-other-namespaces/iserverstepinstance), [`ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance), [`StepInstance`](/game-api/types/game-other-namespaces/stepinstance)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The step's name from its settings. |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" Settings { get; }"}</code> | The `MicroTutorialStep` asset this step runs. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawnstaticcontent" /><code>{"void DespawnStaticContent()"}</code> | Removes the step's spawned static content. |
| <Link id="m-spawnadditionalstaticcontent" /><code>{"void SpawnAdditionalStaticContent()"}</code> | Spawns the step's extra static content. |

## Used in

Members of other types that take, return or hold a `IStepInstance`:

[`ClientStepInstanceMap.Add`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-add), [`ClientStepInstanceMap.clientMap`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-clientmap), [`ClientStepInstanceMap.GetSteps`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-getsteps), [`ClientStepInstanceMap.TryGet`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-tryget).
