---
title: "IStepInstance"
description: "interface IStepInstance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IStepInstance

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`IServerStepInstance`](/game-api/types/game-other-namespaces/iserverstepinstance), [`ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance), [`StepInstance`](/game-api/types/game-other-namespaces/stepinstance)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialstep">{"MicroTutorialStep"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawnstaticcontent" /><code>{"void DespawnStaticContent()"}</code> |  |
| <Link id="m-spawnadditionalstaticcontent" /><code>{"void SpawnAdditionalStaticContent()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IStepInstance`:

[`ClientStepInstanceMap.Add`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-add), [`ClientStepInstanceMap.clientMap`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-clientmap), [`ClientStepInstanceMap.GetSteps`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-getsteps), [`ClientStepInstanceMap.TryGet`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-tryget).
