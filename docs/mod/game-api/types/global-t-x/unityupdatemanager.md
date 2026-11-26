---
title: "UnityUpdateManager"
description: "The one MonoBehaviour that drives the game's update modules: it runs every registered UpdateModule in Unity's Update, LateUpdate and FixedUpdate."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityUpdateManager

A **class** in `Root.Township`, the global namespace.

The one MonoBehaviour that drives the game's update modules: it runs every registered `UpdateModule` in Unity's Update, LateUpdate and FixedUpdate. Most code registers methods on the shared static modules instead of having its own `Update`. Reach it through `Instance`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ModuleRegistration`](/mod/game-api/types/global-t-x/unityupdatemanager-moduleregistration)
- **Documented in** [Update modules](/mod/game-api/console-and-utilities/update-modules#unityupdatemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnityUpdateManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatemodules" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> fixedUpdateModules"}</code> | <span className="api-desc">Modules run in FixedUpdate.</span> |
| <Link id="m-isprofiling" /><code>{"private bool isProfiling"}</code> | <span className="api-desc">Backing field for `IsProfiling`.</span> |
| <Link id="m-lateupdatemodules" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> lateUpdateModules"}</code> | <span className="api-desc">Modules run in LateUpdate.</span> |
| <Link id="m-sharedbudgetedupdatemsallowance" /><code>{"private float sharedBudgetedUpdateMsAllowance"}</code> | <span className="api-desc">Milliseconds per frame given to `BudgetedUpdateModule`.</span> |
| <Link id="m-startupmodules" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-t-x/unityupdatemanager-moduleregistration">{"UnityUpdateManager.ModuleRegistration"}</Link>{"> startUpModules"}</code> | <span className="api-desc">Modules registered before the manager existed, waiting for `Awake`.</span> |
| <Link id="m-updatemodules" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> updateModules"}</code> | <span className="api-desc">Modules run in Update.</span> |
| <Link id="m-verifyallcounts" /><code>{"private bool verifyAllCounts"}</code> | <span className="api-desc">Inspector button that runs `VerifyAllCounts`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allmoduleinfos" /><code>{"static Dictionary<string, "}<Link to="/mod/game-api/types/global-t-x/updatemoduleinfo">{"UpdateModuleInfo"}</Link>{"> AllModuleInfos { get; }"}</code> | <span className="api-desc">Profiling info for every module included in server profiling, keyed by module name.</span> |
| <Link id="m-allmodules" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{"> AllModules { get; }"}</code> | <span className="api-desc">Every registered module: update, then fixed update, then late update.</span> |
| <Link id="m-budgetedupdatemodule" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/budgetedupdatemodule">{"BudgetedUpdateModule"}</Link>{" { get; }"}</code> | <span className="api-desc">Shared Update-segment module that spends at most a set number of milliseconds a frame on its methods.</span> |
| <Link id="m-fixedupdatemodule" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" FixedUpdateModule { get; }"}</code> | <span className="api-desc">Shared module that runs in FixedUpdate.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/unityupdatemanager">{"UnityUpdateManager"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The update manager in the scene.</span> |
| <Link id="m-isprofiling-2" /><code>{"static bool IsProfiling { get; set; }"}</code> | <span className="api-desc">Turns profiling on or off for all modules.</span> |
| <Link id="m-lateupdatemodule" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" LateUpdateModule { get; }"}</code> | <span className="api-desc">Shared module that runs in LateUpdate.</span> |
| <Link id="m-updatemodule" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" { get; }"}</code> | <span className="api-desc">Shared module that runs in Update. Register a method with `RegisterMethod` and keep the handle to deregister.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registermodule" /><code>{"static void RegisterModule("}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" module, "}<Link to="/mod/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" updateSegment)"}</code> | <span className="api-desc">Adds a module to a segment; if the manager doesn't exist yet, queues it until `Awake`.</span> |
| <Link id="m-registermoduletolist" /><code>{"void RegisterModuleToList("}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" module, "}<Link to="/mod/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" type)"}</code> | <span className="api-desc">Adds a module to the list for its segment and to `AllModuleInfos` if it's profiled; logs an error on a duplicate name.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Becomes `Instance`, registers modules queued before it existed, sets the shared budget and applies the profiling flag.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Runs every fixed update module.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Runs every late update module.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: reapplies profiling and runs the count check when its button is pressed.</span> |
| <Link id="m-setprofiling" /><code>{"private void SetProfiling()"}</code> | <span className="api-desc">Pushes the `isProfiling` flag to every module.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Runs every update module.</span> |
| <Link id="m-verifyallcounts-2" /><code>{"private void VerifyAllCounts()"}</code> | <span className="api-desc">Logs each module's registered method count against its actual count, as an error when they differ.</span> |

</details>
