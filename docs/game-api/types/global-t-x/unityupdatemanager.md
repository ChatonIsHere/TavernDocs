---
title: "UnityUpdateManager"
description: "The one MonoBehaviour that drives the game's update modules: it runs every registered UpdateModule in Unity's Update, LateUpdate and FixedUpdate."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityUpdateManager

A **class** in `Root.Township`, no namespace.

The one MonoBehaviour that drives the game's update modules: it runs every registered `UpdateModule` in Unity's Update, LateUpdate and FixedUpdate. Most code registers methods on the shared static modules instead of having its own `Update`. Reach it through `Instance`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ModuleRegistration`](/game-api/types/global-t-x/unityupdatemanager-moduleregistration)
- **Documented in** [Update modules](/game-api/console-and-utilities/update-modules#unityupdatemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnityUpdateManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatemodules" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> fixedUpdateModules"}</code> | Modules run in FixedUpdate. |
| <Link id="m-isprofiling" /><code>{"private bool isProfiling"}</code> | Backing field for `IsProfiling`. |
| <Link id="m-lateupdatemodules" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> lateUpdateModules"}</code> | Modules run in LateUpdate. |
| <Link id="m-sharedbudgetedupdatemsallowance" /><code>{"private float sharedBudgetedUpdateMsAllowance"}</code> | Milliseconds per frame given to `BudgetedUpdateModule`. |
| <Link id="m-startupmodules" /><code>{"private static List<"}<Link to="/game-api/types/global-t-x/unityupdatemanager-moduleregistration">{"UnityUpdateManager.ModuleRegistration"}</Link>{"> startUpModules"}</code> | Modules registered before the manager existed, waiting for `Awake`. |
| <Link id="m-updatemodules" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> updateModules"}</code> | Modules run in Update. |
| <Link id="m-verifyallcounts" /><code>{"private bool verifyAllCounts"}</code> | Inspector button that runs `VerifyAllCounts`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allmoduleinfos" /><code>{"static Dictionary<string, "}<Link to="/game-api/types/global-t-x/updatemoduleinfo">{"UpdateModuleInfo"}</Link>{"> AllModuleInfos { get; }"}</code> | Profiling info for every module included in server profiling, keyed by module name. |
| <Link id="m-allmodules" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> AllModules { get; }"}</code> | Every registered module: update, then fixed update, then late update. |
| <Link id="m-budgetedupdatemodule" /><code>{"static "}<Link to="/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" "}<Link to="/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" { get; }"}</code> | Shared Update-segment module that spends at most a set number of milliseconds a frame on its methods. |
| <Link id="m-fixedupdatemodule" /><code>{"static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" FixedUpdateModule { get; }"}</code> | Shared module that runs in FixedUpdate. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-t-x/unityupdatemanager">{"UnityUpdateManager"}</Link>{" Instance { get; private set; }"}</code> | The update manager in the scene. |
| <Link id="m-isprofiling-2" /><code>{"static bool IsProfiling { get; set; }"}</code> | Turns profiling on or off for all modules. |
| <Link id="m-lateupdatemodule" /><code>{"static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" LateUpdateModule { get; }"}</code> | Shared module that runs in LateUpdate. |
| <Link id="m-updatemodule" /><code>{"static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" { get; }"}</code> | Shared module that runs in Update. Register a method with `RegisterMethod` and keep the handle to deregister. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registermodule" /><code>{"static void RegisterModule("}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" module, "}<Link to="/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" updateSegment)"}</code> | Adds a module to a segment; if the manager doesn't exist yet, queues it until `Awake`. |
| <Link id="m-registermoduletolist" /><code>{"void RegisterModuleToList("}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" module, "}<Link to="/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" type)"}</code> | Adds a module to the list for its segment and to `AllModuleInfos` if it's profiled; logs an error on a duplicate name. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Becomes `Instance`, registers modules queued before it existed, sets the shared budget and applies the profiling flag. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Runs every fixed update module. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Runs every late update module. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: reapplies profiling and runs the count check when its button is pressed. |
| <Link id="m-setprofiling" /><code>{"private void SetProfiling()"}</code> | Pushes the `isProfiling` flag to every module. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Runs every update module. |
| <Link id="m-verifyallcounts-2" /><code>{"private void VerifyAllCounts()"}</code> | Logs each module's registered method count against its actual count, as an error when they differ. |

</details>
