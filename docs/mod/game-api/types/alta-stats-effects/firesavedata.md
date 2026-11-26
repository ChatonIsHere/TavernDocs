---
title: "FireSaveData"
description: "Save data for a Fire (save structure version 2)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireSaveData

A **internal class** in `Root.Township`, `Alta.Heat`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `Fire` (save structure version 2).

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NewSaveData<Fire, FireSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Fire`](/mod/game-api/types/alta-stats-effects/fire), [`FireSaveData`](/mod/game-api/types/alta-stats-effects/firesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireSaveData()"}</code> | Creates a `FireSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fuelconsumptionprogress" /><code>{"float fuelConsumptionProgress"}</code> | How far the fire is through its current fuel. |
