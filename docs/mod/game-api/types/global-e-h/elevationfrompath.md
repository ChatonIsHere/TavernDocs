---
title: "ElevationFromPath"
description: "Forest spawn filter that weights points by their height above the nearest path and can pull them towards the path's height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElevationFromPath

A **class** in `Root.Township`, the global namespace.

Forest spawn filter that weights points by their height above the nearest path and can pull them towards the path's height.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`ElevationFromPath.Create`](/mod/game-api/types/global-e-h/elevationfrompath-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/elevationfrompath-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElevationFromPath()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-edgetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" edgeType"}</code> | <span className="api-desc">Which edge types count as path.</span> |
| <Link id="m-elevationmultiplier" /><code>{"private AnimationCurve elevationMultiplier"}</code> | <span className="api-desc">Curve from height above the path to a weight multiplier.</span> |
| <Link id="m-lerpheight" /><code>{"private float lerpHeight"}</code> | <span className="api-desc">How far (0 to 1) to move the point's height to the path's height.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | <span className="api-desc">Finds the nearest path edge, scales the weight by the curve at the height difference, and lerps the point's height towards the path.</span> |
