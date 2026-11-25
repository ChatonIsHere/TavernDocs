---
title: "BudgetedUpdateModule"
description: "Each frame it calls methods until MsAllowance milliseconds have passed, then stops and carries on from there next frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BudgetedUpdateModule

A **class** in `Root.Township`, no namespace.

Each frame it calls methods until `MsAllowance` milliseconds have passed, then stops and carries on from there next frame.

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

| Member |
| --- |
| <Link id="m-isdebuggingallowance" /><code>{"private static bool isDebuggingAllowance"}</code> |
| <Link id="m-isfirst" /><code>{"private bool isFirst"}</code> |
| <Link id="m-msallowance" /><code>{"private float msAllowance"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isdebuggingallowance-2" /><code>{"static bool IsDebuggingAllowance { get; set; }"}</code> |
| <Link id="m-msallowance-2" /><code>{"float MsAllowance { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-registermethod" /><code>{"override "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" RegisterMethod(Action method)"}</code> |
| <Link id="m-update" /><code>{"sealed override void Update()"}</code> |
| <Link id="m-deregistermethod" /><code>{"protected override void DeregisterMethod("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-processnode" /><code>{"private bool ProcessNode("}<Link to="/game-api/types/global-t-x/updatemodule-methodnode">{"UpdateModule.MethodNode"}</Link>{" node)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BudgetedUpdateModule`:

[`AlwaysFacePlayer.updateModule`](/game-api/types/global-a-b/alwaysfaceplayer#m-updatemodule), [`BudgetedUpdateModuleProfiler.elapsedTime`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime), [`BudgetedUpdateModuleProfiler.ElapsedTime`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-elapsedtime-2), [`BudgetedUpdateModuleProfiler.RecordUsageTime`](/game-api/types/global-a-b/budgetedupdatemoduleprofiler#m-recordusagetime), [`UnityUpdateManager.BudgetedUpdateModule`](/game-api/types/global-t-x/unityupdatemanager#m-budgetedupdatemodule).
