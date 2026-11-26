---
title: "HeatSourceBaseSaveData"
description: "Save data for a HeatSourceBase (save structure version 2)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatSourceBaseSaveData

A **internal class** in `Root.Township`, `Alta.Heat`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `HeatSourceBase` (save structure version 2).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NewSaveData<HeatSourceBase, HeatSourceBaseSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`HeatSourceBase`](/game-api/types/alta-stats-effects/heatsourcebase), [`HeatSourceBaseSaveData`](/game-api/types/alta-stats-effects/heatsourcebasesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatSourceBaseSaveData()"}</code> | Creates a `HeatSourceBaseSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islit" /><code>{"bool isLit"}</code> | Whether the heat source was lit. |
| <Link id="m-progress" /><code>{"float progress"}</code> | The heat source's progress value. |
| <Link id="m-time" /><code>{"TimeSpan time"}</code> | Saved time, as a `TimeSpan`. |
