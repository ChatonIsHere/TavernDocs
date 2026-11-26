---
title: "PlatformDistanceLODModifier.PlatformDetails"
description: "LOD distances to use on one platform, applied to a DistanceLODGroup at bake time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformDistanceLODModifier.PlatformDetails

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

LOD distances to use on one platform, applied to a `DistanceLODGroup` at bake time.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlatformDistanceLODModifier`](/mod/game-api/types/global-p/platformdistancelodmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformDetails()"}</code> | <span className="api-desc">Creates a `PlatformDistanceLODModifier.PlatformDetails` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-distances" /><code>{"float[] distances"}</code> | <span className="api-desc">Distance for each LOD level, in order. Stored squared on the group when baked.</span> |
| <Link id="m-platform" /><code><Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" platform"}</code> | <span className="api-desc">The platform these distances are for. Defaults to Android.</span> |

## Used in

Members of other types that take, return or hold a `PlatformDetails`:

<div className="api-used-in">

[`PlatformDistanceLODModifier.platformDetails`](/mod/game-api/types/global-p/platformdistancelodmodifier#m-platformdetails).

</div>
