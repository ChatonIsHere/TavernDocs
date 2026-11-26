---
title: "BudgetedUpdateModuleProfiler.BudgetedData"
description: "Timing totals for one budgeted update module, kept in BudgetedUpdateModuleProfiler.ElapsedTime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BudgetedUpdateModuleProfiler.BudgetedData

A **class** in `Root.Township`, the global namespace.

Timing totals for one budgeted update module, kept in `BudgetedUpdateModuleProfiler.ElapsedTime`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`BudgetedUpdateModuleProfiler`](/mod/game-api/types/global-a-b/budgetedupdatemoduleprofiler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BudgetedData(string moduleName)"}</code> | <span className="api-desc">Creates a `BudgetedUpdateModuleProfiler.BudgetedData` from `moduleName`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-modulename" /><code>{"string moduleName"}</code> | <span className="api-desc">Name of the module being timed.</span> |
| <Link id="m-registeredcount" /><code>{"int registeredCount"}</code> | <span className="api-desc">How many methods the module had registered at the last recording.</span> |
| <Link id="m-totalmilliseconds" /><code>{"double totalMilliseconds"}</code> | <span className="api-desc">Total milliseconds recorded since the last reset.</span> |
| <Link id="m-totalrecordings" /><code>{"int totalRecordings"}</code> | <span className="api-desc">Number of recordings since the last reset.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagemilliseconds" /><code>{"private double averageMilliseconds"}</code> | <span className="api-desc">Average milliseconds per recording, set by `UpdateAverage`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Zeroes the totals and average.</span> |
| <Link id="m-updateaverage" /><code>{"void UpdateAverage()"}</code> | <span className="api-desc">Sets the average from the total time divided by the number of recordings.</span> |

## Used in

Members of other types that take, return or hold a `BudgetedData`:

<div className="api-used-in">

[`BudgetedUpdateModuleProfiler.elapsedTime`](/mod/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime), [`BudgetedUpdateModuleProfiler.ElapsedTime`](/mod/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime-2), [`BudgetedUpdateModuleProfilerComponent.allBudgetedModules`](/mod/game-api/types/global-a-b/budgetedupdatemoduleprofilercomponent#m-allbudgetedmodules).

</div>
