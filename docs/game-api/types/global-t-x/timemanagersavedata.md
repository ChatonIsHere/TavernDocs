---
title: "TimeManagerSaveData"
description: "Current save data for TimeManager (version 3): the world's timeline time and when it was saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeManagerSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Current save data for `TimeManager` (version 3): the world's timeline time and when it was saved.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<TimeManager, TimeManagerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TimeManager`](/game-api/types/global-t-x/timemanager), [`TimeManagerSaveData`](/game-api/types/global-t-x/timemanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeManagerSaveData()"}</code> | Creates a `TimeManagerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-downtime" /><code>{"DateTime downtime"}</code> | UTC time of the save. If the server advances time while offline, the gap is added to `time` on load. |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | The `Timeline` time at save. |
