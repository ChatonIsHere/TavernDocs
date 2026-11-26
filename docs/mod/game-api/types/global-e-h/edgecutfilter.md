---
title: "EdgeCutFilter"
description: "Forest spawn filter that removes points near the forest border using noise, giving a ragged edge."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EdgeCutFilter

A **class** in `Root.Township`, the global namespace.

Forest spawn filter that removes points near the forest border using noise, giving a ragged edge.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`SpawnModifierPoint`](/mod/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`EdgeCutFilter.Create`](/mod/game-api/types/global-e-h/edgecutfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/edgecutfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EdgeCutFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cut" /><code>{"private float cut"}</code> | Threshold the noise plus distance must beat to keep a point. |
| <Link id="m-edgefade" /><code>{"private float edgeFade"}</code> | Scale on the border distance; its inverse is how far in the filter reaches. |
| <Link id="m-noisescale" /><code>{"private float noiseScale"}</code> | Size of the simplex noise pattern. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | Near the border, sets the weight to -1 (rejected) where noise plus scaled border distance is at or below `cut`. |
