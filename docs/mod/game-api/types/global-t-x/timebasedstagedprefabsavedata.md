---
title: "TimeBasedStagedPrefabSaveData"
description: "Save data for TimeBasedStagedPrefab (version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeBasedStagedPrefabSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for `TimeBasedStagedPrefab` (version 1).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<TimeBasedStagedPrefab, TimeBasedStagedPrefabSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TimeBasedStagedPrefab`](/mod/game-api/types/global-t-x/timebasedstagedprefab), [`TimeBasedStagedPrefabSaveData`](/mod/game-api/types/global-t-x/timebasedstagedprefabsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeBasedStagedPrefabSaveData()"}</code> | <span className="api-desc">Creates a `TimeBasedStagedPrefabSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-autostart" /><code>{"bool autoStart"}</code> | <span className="api-desc">Saved auto start flag.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/global-t-x/timedprefabstagedefinition">{"TimedPrefabStageDefinition"}</Link>{" definition"}</code> | <span className="api-desc">Saved timing definition.</span> |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | <span className="api-desc">Whether the timer was running.</span> |
| <Link id="m-startedtime" /><code>{"TimeSpan startedTime"}</code> | <span className="api-desc">Timeline time the timer started; on load, stages already past are applied and the rest rescheduled.</span> |
