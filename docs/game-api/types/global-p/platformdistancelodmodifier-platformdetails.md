---
title: "PlatformDistanceLODModifier.PlatformDetails"
description: "LOD distances to use on one platform, applied to a DistanceLODGroup at bake time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformDistanceLODModifier.PlatformDetails

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

LOD distances to use on one platform, applied to a `DistanceLODGroup` at bake time.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlatformDistanceLODModifier`](/game-api/types/global-p/platformdistancelodmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformDetails()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distances" /><code>{"float[] distances"}</code> | Distance for each LOD level, in order. Stored squared on the group when baked. |
| <Link id="m-platform" /><code><Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> | The platform these distances are for. Defaults to Android. |

## Used in

Members of other types that take, return or hold a `PlatformDetails`:

[`PlatformDistanceLODModifier.platformDetails`](/game-api/types/global-p/platformdistancelodmodifier#m-platformdetails).
