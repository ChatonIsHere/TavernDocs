---
title: "DistanceFilter"
description: "abstract class DistanceFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceFilter

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`SpawnModifierPoint`](/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`DistanceToEdgeFilter`](/game-api/types/global-c-d/distancetoedgefilter), [`DistanceToPathFilter`](/game-api/types/global-c-d/distancetopathfilter), [`DistanceToRiverFilter`](/game-api/types/global-c-d/distancetoriverfilter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected DistanceFilter()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-distancemultiplier" /><code>{"private AnimationCurve distanceMultiplier"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> |
| <Link id="m-evaluatedistance" /><code>{"protected abstract float EvaluateDistance("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> |
