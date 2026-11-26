---
title: "DistanceToPathFilter"
description: "Forest spawn filter that scales weight by distance to the nearest path, so trees can thin out near paths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceToPathFilter

A **class** in `Root.Township`, the global namespace.

Forest spawn filter that scales weight by distance to the nearest path, so trees can thin out near paths.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`DistanceFilter`](/mod/game-api/types/global-c-d/distancefilter)
- **Derived types** [`DistanceToPathFilter.Create`](/mod/game-api/types/global-c-d/distancetopathfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/distancetopathfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceToPathFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincludingradius" /><code>{"private bool isIncludingRadius"}</code> | <span className="api-desc">Whether the path's width counts in the search.</span> |
| <Link id="m-isusingcache" /><code>{"private bool isUsingCache"}</code> | <span className="api-desc">Whether to use the distance cached on the point instead of searching.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type"}</code> | <span className="api-desc">Path edge types to measure to (search mode only).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatedistance" /><code>{"protected override float EvaluateDistance("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Returns the point's cached path distance, or searches for the nearest matching path or node.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-edgepredicate" /><code>{"private bool EdgePredicate("}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | <span className="api-desc">Accepts edges of the chosen path type that aren't in open space.</span> |

</details>
