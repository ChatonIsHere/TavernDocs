---
title: "TimeManagerSaveData"
description: "Current save data for TimeManager (version 3): the world's timeline time and when it was saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeManagerSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Current save data for `TimeManager` (version 3): the world's timeline time and when it was saved.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<TimeManager, TimeManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TimeManager`](/mod/game-api/types/global-t-x/timemanager), [`TimeManagerSaveData`](/mod/game-api/types/global-t-x/timemanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeManagerSaveData()"}</code> | <span className="api-desc">Creates a `TimeManagerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-downtime" /><code>{"DateTime downtime"}</code> | <span className="api-desc">UTC time of the save. If the server advances time while offline, the gap is added to `time` on load.</span> |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | <span className="api-desc">The `Timeline` time at save.</span> |
