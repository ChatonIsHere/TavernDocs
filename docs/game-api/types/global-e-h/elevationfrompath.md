---
title: "ElevationFromPath"
description: "Forest spawn filter that weights points by their height above the nearest path and can pull them towards the path's height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElevationFromPath

A **class** in `Root.Township`, no namespace.

Forest spawn filter that weights points by their height above the nearest path and can pull them towards the path's height.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`SpawnModifierPointNormal`](/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`ElevationFromPath.Create`](/game-api/types/global-e-h/elevationfrompath-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/elevationfrompath-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ElevationFromPath()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-edgetype" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" edgeType"}</code> | Which edge types count as path. |
| <Link id="m-elevationmultiplier" /><code>{"private AnimationCurve elevationMultiplier"}</code> | Curve from height above the path to a weight multiplier. |
| <Link id="m-lerpheight" /><code>{"private float lerpHeight"}</code> | How far (0 to 1) to move the point's height to the path's height. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | Finds the nearest path edge, scales the weight by the curve at the height difference, and lerps the point's height towards the path. |
