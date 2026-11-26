---
title: "TimeManagerSaveDataOld1"
description: "Version 1 save data for TimeManager, kept to migrate old saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeManagerSaveDataOld1

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Version 1 save data for `TimeManager`, kept to migrate old saves.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeManagerSaveDataOld1()"}</code> | Creates a `TimeManagerSaveDataOld1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-downtime" /><code><Link to="/game-api/types/global-s/serverdowntimedata">{"ServerDowntimeData"}</Link>{" downtime"}</code> | Save time as separate date and time fields. |
| <Link id="m-time" /><code>{"float time"}</code> | Timeline time in seconds. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `TimeManagerSaveData`, turning seconds into a `TimeSpan` and the downtime fields into a `DateTime`. |
