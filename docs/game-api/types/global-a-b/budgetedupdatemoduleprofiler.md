---
title: "BudgetedUpdateModuleProfiler"
description: "Static store of timing data per BudgetedUpdateModule, filled while allowance debugging is on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BudgetedUpdateModuleProfiler

A **class** in `Root.Township`, no namespace.

Static store of timing data per `BudgetedUpdateModule`, filled while allowance debugging is on.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested types** [`BudgetedData`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler-budgeteddata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BudgetedUpdateModuleProfiler()"}</code> | Creates a `BudgetedUpdateModuleProfiler` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elapsedtime" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{", "}<Link to="/game-api/types/global-a-b/budgetedupdatemoduleprofiler-budgeteddata">{"BudgetedUpdateModuleProfiler.BudgetedData"}</Link>{"> elapsedTime"}</code> | Backing field for `ElapsedTime`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elapsedtime-2" /><code>{"static Dictionary<"}<Link to="/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{", "}<Link to="/game-api/types/global-a-b/budgetedupdatemoduleprofiler-budgeteddata">{"BudgetedUpdateModuleProfiler.BudgetedData"}</Link>{"> ElapsedTime { get; }"}</code> | Recorded data per module. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-recordusagetime" /><code>{"static void RecordUsageTime("}<Link to="/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" module, double elapsedMilliseconds)"}</code> | Adds one timing sample for a module, creating its entry if needed, and stores its registered method count. |
