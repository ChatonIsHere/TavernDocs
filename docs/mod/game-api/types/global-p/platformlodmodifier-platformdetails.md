---
title: "PlatformLODModifier.PlatformDetails"
description: "LOD transition heights to use on one platform, applied to a Unity LODGroup at bake time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLODModifier.PlatformDetails

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

LOD transition heights to use on one platform, applied to a Unity `LODGroup` at bake time.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlatformLODModifier`](/mod/game-api/types/global-p/platformlodmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDetails()"}</code> | Creates a `PlatformLODModifier.PlatformDetails` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-platform" /><code><Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> | The platform these heights are for. Defaults to Android. |
| <Link id="m-screenrelativetransitionheights" /><code>{"float[] screenRelativeTransitionHeights"}</code> | Screen relative transition height for each LOD level, in order. |

## Used in

Members of other types that take, return or hold a `PlatformDetails`:

[`PlatformLODModifier.platformDetails`](/mod/game-api/types/global-p/platformlodmodifier#m-platformdetails).
