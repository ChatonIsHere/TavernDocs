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
| <Link id="m-ctor" /><code>{"EdgeCutFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cut" /><code>{"private float cut"}</code> | <span className="api-desc">Threshold the noise plus distance must beat to keep a point.</span> |
| <Link id="m-edgefade" /><code>{"private float edgeFade"}</code> | <span className="api-desc">Scale on the border distance; its inverse is how far in the filter reaches.</span> |
| <Link id="m-noisescale" /><code>{"private float noiseScale"}</code> | <span className="api-desc">Size of the simplex noise pattern.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Near the border, sets the weight to -1 (rejected) where noise plus scaled border distance is at or below `cut`.</span> |
