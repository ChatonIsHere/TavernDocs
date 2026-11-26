---
title: "DistanceToRiverFilter"
description: "Forest spawn filter that scales weight by distance to the nearest river."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceToRiverFilter

A **class** in `Root.Township`, the global namespace.

Forest spawn filter that scales weight by distance to the nearest river.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`DistanceFilter`](/mod/game-api/types/global-c-d/distancefilter)
- **Derived types** [`DistanceToRiverFilter.Create`](/mod/game-api/types/global-c-d/distancetoriverfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/distancetoriverfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceToRiverFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincludingradius" /><code>{"private bool isIncludingRadius"}</code> | <span className="api-desc">Whether the river's width counts.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatedistance" /><code>{"protected override float EvaluateDistance("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Returns the point's distance to the river from the river generator.</span> |
