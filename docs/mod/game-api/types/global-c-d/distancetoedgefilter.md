---
title: "DistanceToEdgeFilter"
description: "Forest spawn filter that scales weight by distance to the forest's border."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceToEdgeFilter

A **class** in `Root.Township`, the global namespace.

Forest spawn filter that scales weight by distance to the forest's border.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`DistanceFilter`](/mod/game-api/types/global-c-d/distancefilter)
- **Derived types** [`DistanceToEdgeFilter.Create`](/mod/game-api/types/global-c-d/distancetoedgefilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/distancetoedgefilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceToEdgeFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatedistance" /><code>{"protected override float EvaluateDistance("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | Returns the point's distance to the forest border. |
