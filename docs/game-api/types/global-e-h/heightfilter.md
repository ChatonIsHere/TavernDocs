---
title: "HeightFilter"
description: "Spawn modifier for generation that scales a point's weight by a curve of its world height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeightFilter

A **class** in `Root.Township`, no namespace.

Spawn modifier for generation that scales a point's weight by a curve of its world height.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`SpawnModifierPointNormal`](/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`HeightFilter.Create`](/game-api/types/global-e-h/heightfilter-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/heightfilter-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeightFilter()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heightmultiplier" /><code>{"private AnimationCurve heightMultiplier"}</code> | Curve from height to weight multiplier. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | Multiplies the weight by the curve at the point's Y position. |
