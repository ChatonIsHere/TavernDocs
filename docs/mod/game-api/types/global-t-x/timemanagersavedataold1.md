---
title: "TimeManagerSaveDataOld1"
description: "Version 1 save data for TimeManager, kept to migrate old saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeManagerSaveDataOld1

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Version 1 save data for `TimeManager`, kept to migrate old saves.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeManagerSaveDataOld1()"}</code> | <span className="api-desc">Creates a `TimeManagerSaveDataOld1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-downtime" /><code><Link to="/mod/game-api/types/global-s/serverdowntimedata">{"ServerDowntimeData"}</Link>{" downtime"}</code> | <span className="api-desc">Save time as separate date and time fields.</span> |
| <Link id="m-time" /><code>{"float time"}</code> | <span className="api-desc">Timeline time in seconds.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `TimeManagerSaveData`, turning seconds into a `TimeSpan` and the downtime fields into a `DateTime`.</span> |
