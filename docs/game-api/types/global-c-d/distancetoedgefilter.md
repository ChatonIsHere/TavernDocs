---
title: "DistanceToEdgeFilter"
description: "Forest spawn filter that scales weight by distance to the forest's border."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceToEdgeFilter

A **class** in `Root.Township`, no namespace.

Forest spawn filter that scales weight by distance to the forest's border.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`DistanceFilter`](/game-api/types/global-c-d/distancefilter)
- **Derived types** [`DistanceToEdgeFilter.Create`](/game-api/types/global-c-d/distancetoedgefilter-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/distancetoedgefilter-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DistanceToEdgeFilter()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatedistance" /><code>{"protected override float EvaluateDistance("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | Returns the point's distance to the forest border. |
