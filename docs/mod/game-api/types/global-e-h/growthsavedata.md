---
title: "GrowthSaveData"
description: "Save data for a GrowerComponent: definition, stage, start time and which child is the current stage object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowthSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `GrowerComponent`: definition, stage, start time and which child is the current stage object.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<GrowerComponent, GrowthSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GrowerComponent`](/mod/game-api/types/global-e-h/growercomponent), [`GrowthSaveData`](/mod/game-api/types/global-e-h/growthsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowthSaveData()"}</code> | <span className="api-desc">Creates a `GrowthSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code>{"int currentStage"}</code> | <span className="api-desc">Index of the stage it was in.</span> |
| <Link id="m-currentstageentity" /><code>{"int currentStageEntity"}</code> | <span className="api-desc">Child index of the current stage object, or -1.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The growth definition in use.</span> |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | <span className="api-desc">Whether growth had started.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Not filled in by `GrowerComponent` when saving.</span> |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | <span className="api-desc">Not filled in by `GrowerComponent` when saving.</span> |
| <Link id="m-spawnedstageindex" /><code>{"int spawnedStageIndex"}</code> | <span className="api-desc">Stage whose prefab was spawned.</span> |
| <Link id="m-startedtime" /><code>{"TimeSpan startedTime"}</code> | <span className="api-desc">Timeline time when growth started. On load, stages are skipped forward by elapsed time.</span> |
