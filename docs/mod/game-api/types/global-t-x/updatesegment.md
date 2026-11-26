---
title: "UpdateSegment"
description: "Which Unity loop an UpdateModule runs in: Update, LateUpdate or FixedUpdate."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateSegment

An **enum** in `Root.Township`, the global namespace.

Which Unity loop an `UpdateModule` runs in: `Update`, `LateUpdate` or `FixedUpdate`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Values

| Member |
| --- |
| <Link id="m-fixedupdate" /><code>{"FixedUpdate = 2"}</code> |
| <Link id="m-lateupdate" /><code>{"LateUpdate = 1"}</code> |
| <Link id="m-update" /><code>{"Update = 0"}</code> |

## Used in

Members of other types that take, return or hold a `UpdateSegment`:

[`BudgetedUpdateModule.BudgetedUpdateModule`](/mod/game-api/types/global-a-b/budgetedupdatemodule#m-ctor), [`UnityUpdateManager.RegisterModule`](/mod/game-api/types/global-t-x/unityupdatemanager#m-registermodule), [`UnityUpdateManager.RegisterModuleToList`](/mod/game-api/types/global-t-x/unityupdatemanager#m-registermoduletolist), [`UnityUpdateManager.ModuleRegistration.Segment`](/mod/game-api/types/global-t-x/unityupdatemanager-moduleregistration#m-segment), [`UpdateModule.UpdateModule`](/mod/game-api/types/global-t-x/updatemodule#m-ctor).
