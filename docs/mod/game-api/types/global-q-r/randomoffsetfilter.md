---
title: "RandomOffsetFilter"
description: "Forest fill filter asset that nudges each spawn point by a random offset inside a circle, with distance shaped by a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomOffsetFilter

A **class** in `Root.Township`, the global namespace.

Forest fill filter asset that nudges each spawn point by a random offset inside a circle, with distance shaped by a curve.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`SpawnModifierPoint`](/mod/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`RandomOffsetFilter.Create`](/mod/game-api/types/global-q-r/randomoffsetfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-q-r/randomoffsetfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomOffsetFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancecurve" /><code>{"private AnimationCurve distanceCurve"}</code> | <span className="api-desc">Maps a random 0 to 1 value to offset distance.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Moves the point by a random unit-circle offset scaled by the curve at a random value.</span> |
