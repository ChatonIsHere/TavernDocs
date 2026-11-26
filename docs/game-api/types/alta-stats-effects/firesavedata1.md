---
title: "FireSaveData1"
description: "Old version 1 save data for a Fire, kept so old saves load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireSaveData1

A **internal class** in `Root.Township`, `Alta.Heat`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old version 1 save data for a `Fire`, kept so old saves load.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FireSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fuelconsumptionprogress" /><code>{"bool fuelConsumptionProgress"}</code> | A bool in this old version; dropped on migration. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Returns a fresh `FireSaveData`. The old value isn't carried over. |
