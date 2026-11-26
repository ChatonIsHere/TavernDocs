---
title: "GameTimeManagerSaveDataOld"
description: "Version 1 save data for GameTimeManager, migrated on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTimeManagerSaveDataOld

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Version 1 save data for `GameTimeManager`, migrated on load.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameTimeManagerSaveDataOld()"}</code> | Creates a `GameTimeManagerSaveDataOld` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentcontinuoustime" /><code>{"float currentContinuousTime"}</code> | In-game time elapsed, in seconds. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `GameTimeManagerSaveData`, turning seconds into a `TimeSpan`. |
