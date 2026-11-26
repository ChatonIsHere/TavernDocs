---
title: "BudgetedUpdateModuleProfilerComponent"
description: "Debug component that turns budgeted update module timing on or off from the inspector and lists each module's average time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BudgetedUpdateModuleProfilerComponent

A **class** in `Root.Township`, the global namespace.

Debug component that turns budgeted update module timing on or off from the inspector and lists each module's average time.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BudgetedUpdateModuleProfilerComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allbudgetedmodules" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/budgetedupdatemoduleprofiler-budgeteddata">{"BudgetedUpdateModuleProfiler.BudgetedData"}</Link>{"> allBudgetedModules"}</code> | Module data shown in the inspector. |
| <Link id="m-istrackingallowance" /><code>{"private bool isTrackingAllowance"}</code> | Inspector toggle for tracking. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Starts or stops tracking when the inspector toggle changes. |
| <Link id="m-starttrackingallowance" /><code>{"private void StartTrackingAllowance()"}</code> | Turns on `BudgetedUpdateModule.IsDebuggingAllowance` and clears old data. |
| <Link id="m-stoptrackingallowance" /><code>{"private void StopTrackingAllowance()"}</code> | Turns off allowance debugging and clears the data. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Refreshes the shown list when modules are added and updates each average. |

</details>
