---
title: "UnityUpdateManager"
description: "One in the scene; UnityUpdateManager.Instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityUpdateManager

A **class** in `Root.Township`, no namespace.

One in the scene; `UnityUpdateManager.Instance`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ModuleRegistration`](/game-api/types/global-t-x/unityupdatemanager-moduleregistration)
- **Documented in** [Update modules](/game-api/console-and-utilities/update-modules#unityupdatemanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UnityUpdateManager()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fixedupdatemodules" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> fixedUpdateModules"}</code> |
| <Link id="m-isprofiling" /><code>{"private bool isProfiling"}</code> |
| <Link id="m-lateupdatemodules" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> lateUpdateModules"}</code> |
| <Link id="m-sharedbudgetedupdatemsallowance" /><code>{"private float sharedBudgetedUpdateMsAllowance"}</code> |
| <Link id="m-startupmodules" /><code>{"private static List<"}<Link to="/game-api/types/global-t-x/unityupdatemanager-moduleregistration">{"UnityUpdateManager.ModuleRegistration"}</Link>{"> startUpModules"}</code> |
| <Link id="m-updatemodules" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> updateModules"}</code> |
| <Link id="m-verifyallcounts" /><code>{"private bool verifyAllCounts"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-allmoduleinfos" /><code>{"static Dictionary<string, "}<Link to="/game-api/types/global-t-x/updatemoduleinfo">{"UpdateModuleInfo"}</Link>{"> AllModuleInfos { get; }"}</code> |
| <Link id="m-allmodules" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> AllModules { get; }"}</code> |
| <Link id="m-budgetedupdatemodule" /><code>{"static "}<Link to="/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" "}<Link to="/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" { get; }"}</code> |
| <Link id="m-fixedupdatemodule" /><code>{"static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" FixedUpdateModule { get; }"}</code> |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-t-x/unityupdatemanager">{"UnityUpdateManager"}</Link>{" Instance { get; private set; }"}</code> |
| <Link id="m-isprofiling-2" /><code>{"static bool IsProfiling { get; set; }"}</code> |
| <Link id="m-lateupdatemodule" /><code>{"static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" LateUpdateModule { get; }"}</code> |
| <Link id="m-updatemodule" /><code>{"static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-registermodule" /><code>{"static void RegisterModule("}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" module, "}<Link to="/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" updateSegment)"}</code> |
| <Link id="m-registermoduletolist" /><code>{"void RegisterModuleToList("}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" module, "}<Link to="/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" type)"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-setprofiling" /><code>{"private void SetProfiling()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |
| <Link id="m-verifyallcounts-2" /><code>{"private void VerifyAllCounts()"}</code> |

</details>
