---
title: "BudgetedUpdateModuleProfiler.BudgetedData"
description: "Timing totals for one budgeted update module, kept in BudgetedUpdateModuleProfiler.ElapsedTime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BudgetedUpdateModuleProfiler.BudgetedData

A **class** in `Root.Township`, no namespace.

Timing totals for one budgeted update module, kept in `BudgetedUpdateModuleProfiler.ElapsedTime`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested in** [`BudgetedUpdateModuleProfiler`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BudgetedData(string moduleName)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-modulename" /><code>{"string moduleName"}</code> | Name of the module being timed. |
| <Link id="m-registeredcount" /><code>{"int registeredCount"}</code> | How many methods the module had registered at the last recording. |
| <Link id="m-totalmilliseconds" /><code>{"double totalMilliseconds"}</code> | Total milliseconds recorded since the last reset. |
| <Link id="m-totalrecordings" /><code>{"int totalRecordings"}</code> | Number of recordings since the last reset. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagemilliseconds" /><code>{"private double averageMilliseconds"}</code> | Average milliseconds per recording, set by `UpdateAverage`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Zeroes the totals and average. |
| <Link id="m-updateaverage" /><code>{"void UpdateAverage()"}</code> | Sets the average from the total time divided by the number of recordings. |

## Used in

Members of other types that take, return or hold a `BudgetedData`:

[`BudgetedUpdateModuleProfiler.elapsedTime`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime), [`BudgetedUpdateModuleProfiler.ElapsedTime`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime-2), [`BudgetedUpdateModuleProfilerComponent.allBudgetedModules`](/game-api/types/global-a-b/budgetedupdatemoduleprofilercomponent#m-allbudgetedmodules).
