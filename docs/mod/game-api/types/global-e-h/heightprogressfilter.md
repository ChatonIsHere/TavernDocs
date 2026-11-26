---
title: "HeightProgressFilter"
description: "Spawn modifier for forest generation that weights a point by its height relative to the lowest and highest nodes in its forest space."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeightProgressFilter

A **class** in `Root.Township`, the global namespace.

Spawn modifier for forest generation that weights a point by its height relative to the lowest and highest nodes in its forest space.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`HeightProgressFilter.Create`](/mod/game-api/types/global-e-h/heightprogressfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/heightprogressfilter-create), [`LinearMode`](/mod/game-api/types/global-e-h/heightprogressfilter-linearmode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeightProgressFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islinearweighting" /><code>{"private bool isLinearWeighting"}</code> | Whether to apply the linear height curve. |
| <Link id="m-isnormalizedweighting" /><code>{"private bool isNormalizedWeighting"}</code> | Whether to apply the curve over the space's 0 to 1 height range. |
| <Link id="m-linearmaxheight" /><code>{"private float linearMaxHeight"}</code> | Top of the linear range, relative to the reference height. |
| <Link id="m-linearminheight" /><code>{"private float linearMinHeight"}</code> | Bottom of the linear range, relative to the reference height. |
| <Link id="m-linearmode" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/heightprogressfilter-linearmode">{"HeightProgressFilter.LinearMode"}</Link>{" linearMode"}</code> | Reference height for the linear curve: lowest, highest or middle node. |
| <Link id="m-linearweight" /><code>{"private AnimationCurve linearWeight"}</code> | Weight curve over the linear range. |
| <Link id="m-normalizedweight" /><code>{"private AnimationCurve normalizedWeight"}</code> | Weight curve over the space's normalized height. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" point, ref float weight)"}</code> | Sets weight to 0 outside any space, else applies the normalized and/or linear height curves. |
