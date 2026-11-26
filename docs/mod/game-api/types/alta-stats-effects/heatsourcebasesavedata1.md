---
title: "HeatSourceBaseSaveData1"
description: "Old version 1 save data for a HeatSourceBase, kept so old saves load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatSourceBaseSaveData1

A **internal class** in `Root.Township`, `Alta.Heat`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old version 1 save data for a `HeatSourceBase`, kept so old saves load.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatSourceBaseSaveData1()"}</code> | <span className="api-desc">Creates a `HeatSourceBaseSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islit" /><code>{"bool isLit"}</code> | <span className="api-desc">Whether the heat source was lit.</span> |
| <Link id="m-progress" /><code>{"float progress"}</code> | <span className="api-desc">The heat source's progress value.</span> |
| <Link id="m-time" /><code>{"float time"}</code> | <span className="api-desc">Saved time in seconds.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `HeatSourceBaseSaveData`, turning `time` from seconds into a `TimeSpan`.</span> |
