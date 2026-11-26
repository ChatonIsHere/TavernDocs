---
title: "PlatformLODController.PlatformDetails"
description: "Private: the LOD range to keep on one platform (default Android) when PlatformLODController bakes an LOD group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLODController.PlatformDetails

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: the LOD range to keep on one platform (default Android) when `PlatformLODController` bakes an LOD group.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlatformLODController`](/mod/game-api/types/global-p/platformlodcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDetails()"}</code> | Creates a `PlatformLODController.PlatformDetails` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxlod" /><code>{"int maxLOD"}</code> | Highest LOD kept. The default 100 means not set, and baking is skipped with a warning. |
| <Link id="m-minlod" /><code>{"int minLOD"}</code> | Lowest LOD kept (default 1); above 0, renderer references move to that LOD's renderers. |
| <Link id="m-platform" /><code><Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> | Platforms these settings apply to. |

## Used in

Members of other types that take, return or hold a `PlatformDetails`:

[`PlatformLODController.BakeToLevel`](/mod/game-api/types/global-p/platformlodcontroller#m-baketolevel), [`PlatformLODController.platformDetails`](/mod/game-api/types/global-p/platformlodcontroller#m-platformdetails).
