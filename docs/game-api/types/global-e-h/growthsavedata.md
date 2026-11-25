---
title: "GrowthSaveData"
description: "Save data for a GrowerComponent: definition, stage, start time and which child is the current stage object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthSaveData

A **class** in `Root.Township`, no namespace.

Save data for a `GrowerComponent`: definition, stage, start time and which child is the current stage object.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<GrowerComponent, GrowthSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GrowerComponent`](/game-api/types/global-e-h/growercomponent), [`GrowthSaveData`](/game-api/types/global-e-h/growthsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code>{"int currentStage"}</code> | Index of the stage it was in. |
| <Link id="m-currentstageentity" /><code>{"int currentStageEntity"}</code> | Child index of the current stage object, or -1. |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition"}</code> | The growth definition in use. |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | Whether growth had started. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Not filled in by `GrowerComponent` when saving. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Not filled in by `GrowerComponent` when saving. |
| <Link id="m-spawnedstageindex" /><code>{"int spawnedStageIndex"}</code> | Stage whose prefab was spawned. |
| <Link id="m-startedtime" /><code>{"TimeSpan startedTime"}</code> | Timeline time when growth started. On load, stages are skipped forward by elapsed time. |
