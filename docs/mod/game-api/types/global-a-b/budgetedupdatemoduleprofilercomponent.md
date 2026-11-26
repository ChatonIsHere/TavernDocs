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
| <Link id="m-ctor" /><code>{"BudgetedUpdateModuleProfilerComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allbudgetedmodules" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/budgetedupdatemoduleprofiler-budgeteddata">{"BudgetedUpdateModuleProfiler.BudgetedData"}</Link>{"> allBudgetedModules"}</code> | <span className="api-desc">Module data shown in the inspector.</span> |
| <Link id="m-istrackingallowance" /><code>{"private bool isTrackingAllowance"}</code> | <span className="api-desc">Inspector toggle for tracking.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Starts or stops tracking when the inspector toggle changes.</span> |
| <Link id="m-starttrackingallowance" /><code>{"private void StartTrackingAllowance()"}</code> | <span className="api-desc">Turns on `BudgetedUpdateModule.IsDebuggingAllowance` and clears old data.</span> |
| <Link id="m-stoptrackingallowance" /><code>{"private void StopTrackingAllowance()"}</code> | <span className="api-desc">Turns off allowance debugging and clears the data.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Refreshes the shown list when modules are added and updates each average.</span> |

</details>
