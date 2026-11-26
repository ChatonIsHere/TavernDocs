---
title: "UnityUpdateManager.ModuleRegistration"
description: "An update module and the segment it runs in, queued when a module registers before the UnityUpdateManager instance exists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityUpdateManager.ModuleRegistration

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

An update module and the segment it runs in, queued when a module registers before the `UnityUpdateManager` instance exists. `Awake` registers the queued ones.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`UnityUpdateManager`](/game-api/types/global-t-x/unityupdatemanager)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-module" /><code><Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" Module { get; set; }"}</code> | The update module waiting to be registered. |
| <Link id="m-segment" /><code><Link to="/game-api/types/global-t-x/updatesegment">{"UpdateSegment"}</Link>{" Segment { get; set; }"}</code> | The update segment (Update, LateUpdate, FixedUpdate and so on) to register it in. |

## Used in

Members of other types that take, return or hold a `ModuleRegistration`:

[`UnityUpdateManager.startUpModules`](/game-api/types/global-t-x/unityupdatemanager#m-startupmodules).
