---
title: "BudgetedUpdateModule"
description: "An UpdateModule with a time budget: each update runs registered methods until MsAllowance milliseconds pass, and the next update carries on from where it..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BudgetedUpdateModule

A **class** in `Root.Township`, the global namespace.

An `UpdateModule` with a time budget: each update runs registered methods until `MsAllowance` milliseconds pass, and the next update carries on from where it stopped.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`UpdateModule`](/mod/game-api/types/global-t-x/updatemodule)
- **Documented in** [Update modules](/mod/game-api/console-and-utilities/update-modules#budgetedupdatemodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BudgetedUpdateModule(string name, float msAllowance, "}<Link to="/mod/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" segment, bool includeInServerProfiling = false)"}</code> | <span className="api-desc">Creates a `BudgetedUpdateModule` from `name`, `msAllowance`, `segment` and `includeInServerProfiling`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdebuggingallowance" /><code>{"private static bool isDebuggingAllowance"}</code> | <span className="api-desc">Backing field for `IsDebuggingAllowance`.</span> |
| <Link id="m-isfirst" /><code>{"private bool isFirst"}</code> | <span className="api-desc">True for the first method of an update, so at least one method always runs.</span> |
| <Link id="m-msallowance" /><code>{"private float msAllowance"}</code> | <span className="api-desc">Backing field for `MsAllowance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdebuggingallowance-2" /><code>{"static bool IsDebuggingAllowance { get; set; }"}</code> | <span className="api-desc">Static switch: when on, the budget is ignored so every method runs, and usage time is recorded for profiling.</span> |
| <Link id="m-msallowance-2" /><code>{"float MsAllowance { get; set; }"}</code> | <span className="api-desc">Milliseconds per update the module may spend before stopping.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registermethod" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" RegisterMethod(Action method)"}</code> | <span className="api-desc">Adds a method to the module's circular list.</span> |
| <Link id="m-update" /><code>{"sealed override void Update()"}</code> | <span className="api-desc">Runs methods from where the last update stopped until the budget is used, recording how long it took.</span> |
| <Link id="m-deregistermethod" /><code>{"protected override void DeregisterMethod("}<Link to="/mod/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> | <span className="api-desc">Removes a method, clearing the list when it was the last one.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processnode" /><code>{"private bool ProcessNode("}<Link to="/mod/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> | <span className="api-desc">Iteration check for each method: stops once the loop comes back around or the budget runs out, and remembers where to start next time.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BudgetedUpdateModule`:

<div className="api-used-in">

[`AlwaysFacePlayer.updateModule`](/mod/game-api/types/global-a-b/alwaysfaceplayer#m-updatemodule), [`BudgetedUpdateModuleProfiler.elapsedTime`](/mod/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime), [`BudgetedUpdateModuleProfiler.ElapsedTime`](/mod/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime-2), [`BudgetedUpdateModuleProfiler.RecordUsageTime`](/mod/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-recordusagetime), [`UnityUpdateManager.BudgetedUpdateModule`](/mod/game-api/types/global-t-x/unityupdatemanager#m-budgetedupdatemodule).

</div>
