---
title: "UpdateModuleInfo"
description: "Profiling stats for one update module: average update time and number of registered methods."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateModuleInfo

A **class** in `Root.Township`, the global namespace.

Profiling stats for one update module: average update time and number of registered methods. Read from `UnityUpdateManager.AllModuleInfos` by the server profiling data.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateModuleInfo("}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" duration)"}</code> | <span className="api-desc">Creates an `UpdateModuleInfo` from `duration`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" duration"}</code> | <span className="api-desc">Running average behind `UpdateDurationMs`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-registeredcount" /><code>{"int RegisteredCount { get; set; }"}</code> | <span className="api-desc">Number of methods registered to the module.</span> |
| <Link id="m-updatedurationms" /><code>{"float UpdateDurationMs { get; }"}</code> | <span className="api-desc">Average update time in milliseconds.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetduration" /><code>{"void ResetDuration()"}</code> | <span className="api-desc">Resets the running average of update time.</span> |

## Used in

Members of other types that take, return or hold a `UpdateModuleInfo`:

<div className="api-used-in">

[`ServerProfilingData.UpdateModules`](/mod/game-api/types/global-s/serverprofilingdata#m-updatemodules), [`UnityUpdateManager.AllModuleInfos`](/mod/game-api/types/global-t-x/unityupdatemanager#m-allmoduleinfos), [`UpdateModule.ModuleInfo`](/mod/game-api/types/global-t-x/updatemodule#m-moduleinfo).

</div>
