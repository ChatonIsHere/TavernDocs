---
title: "RandomOffsetFilter"
description: "Forest fill filter asset that nudges each spawn point by a random offset inside a circle, with distance shaped by a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomOffsetFilter

A **class** in `Root.Township`, no namespace.

Forest fill filter asset that nudges each spawn point by a random offset inside a circle, with distance shaped by a curve.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`SpawnModifierPoint`](/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`RandomOffsetFilter.Create`](/game-api/types/global-q-r/randomoffsetfilter-create)
- **Nested types** [`Create`](/game-api/types/global-q-r/randomoffsetfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomOffsetFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancecurve" /><code>{"private AnimationCurve distanceCurve"}</code> | Maps a random 0 to 1 value to offset distance. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | Moves the point by a random unit-circle offset scaled by the curve at a random value. |
