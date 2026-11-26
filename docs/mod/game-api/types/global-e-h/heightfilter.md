---
title: "HeightFilter"
description: "Spawn modifier for generation that scales a point's weight by a curve of its world height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeightFilter

A **class** in `Root.Township`, the global namespace.

Spawn modifier for generation that scales a point's weight by a curve of its world height.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`HeightFilter.Create`](/mod/game-api/types/global-e-h/heightfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/heightfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeightFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heightmultiplier" /><code>{"private AnimationCurve heightMultiplier"}</code> | <span className="api-desc">Curve from height to weight multiplier.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | <span className="api-desc">Multiplies the weight by the curve at the point's Y position.</span> |
