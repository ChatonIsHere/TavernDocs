---
title: "DistanceFilter"
description: "Base for forest spawn modifiers that scale a spawn point's weight by a curve of some distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceFilter

An **abstract class** in `Root.Township`, the global namespace.

Base for forest spawn modifiers that scale a spawn point's weight by a curve of some distance. Subclasses supply the distance.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`SpawnModifierPoint`](/mod/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`DistanceToEdgeFilter`](/mod/game-api/types/global-c-d/distancetoedgefilter), [`DistanceToPathFilter`](/mod/game-api/types/global-c-d/distancetopathfilter), [`DistanceToRiverFilter`](/mod/game-api/types/global-c-d/distancetoriverfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DistanceFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancemultiplier" /><code>{"private AnimationCurve distanceMultiplier"}</code> | <span className="api-desc">Curve from distance to weight multiplier; eases from 1 at 0 to 0 at 1 by default.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; unused here.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Multiplies the point's weight by `distanceMultiplier` at the distance.</span> |
| <Link id="m-evaluatedistance" /><code>{"protected abstract float EvaluateDistance("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Returns the distance to feed into the curve.</span> |
