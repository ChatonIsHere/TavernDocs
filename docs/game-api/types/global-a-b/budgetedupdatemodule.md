---
title: "BudgetedUpdateModule"
description: "An UpdateModule with a time budget: each update runs registered methods until MsAllowance milliseconds pass, and the next update carries on from where it..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BudgetedUpdateModule

A **class** in `Root.Township`, no namespace.

An `UpdateModule` with a time budget: each update runs registered methods until `MsAllowance` milliseconds pass, and the next update carries on from where it stopped.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`UpdateModule`](/game-api/types/global-t-x/updatemodule)
- **Documented in** [Update modules](/game-api/console-and-utilities/update-modules#budgetedupdatemodule)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BudgetedUpdateModule(string name, float msAllowance, "}<Link to="/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" segment, bool includeInServerProfiling = false)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdebuggingallowance" /><code>{"private static bool isDebuggingAllowance"}</code> | Backing field for `IsDebuggingAllowance`. |
| <Link id="m-isfirst" /><code>{"private bool isFirst"}</code> | True for the first method of an update, so at least one method always runs. |
| <Link id="m-msallowance" /><code>{"private float msAllowance"}</code> | Backing field for `MsAllowance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdebuggingallowance-2" /><code>{"static bool IsDebuggingAllowance { get; set; }"}</code> | Static switch: when on, the budget is ignored so every method runs, and usage time is recorded for profiling. |
| <Link id="m-msallowance-2" /><code>{"float MsAllowance { get; set; }"}</code> | Milliseconds per update the module may spend before stopping. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registermethod" /><code>{"override "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" RegisterMethod(Action method)"}</code> | Adds a method to the module's circular list. |
| <Link id="m-update" /><code>{"sealed override void Update()"}</code> | Runs methods from where the last update stopped until the budget is used, recording how long it took. |
| <Link id="m-deregistermethod" /><code>{"protected override void DeregisterMethod("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> | Removes a method, clearing the list when it was the last one. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processnode" /><code>{"private bool ProcessNode("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> | Iteration check for each method: stops once the loop comes back around or the budget runs out, and remembers where to start next time. |

</details>

## Used in

Members of other types that take, return or hold a `BudgetedUpdateModule`:

[`AlwaysFacePlayer.updateModule`](/game-api/types/global-a-b/alwaysfaceplayer#m-updatemodule), [`BudgetedUpdateModuleProfiler.elapsedTime`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime), [`BudgetedUpdateModuleProfiler.ElapsedTime`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime-2), [`BudgetedUpdateModuleProfiler.RecordUsageTime`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-recordusagetime), [`UnityUpdateManager.BudgetedUpdateModule`](/game-api/types/global-t-x/unityupdatemanager#m-budgetedupdatemodule).
