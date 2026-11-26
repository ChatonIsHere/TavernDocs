---
title: "NormalFilter"
description: "Spawn modifier for forest and scatter generation that weights points by how steep the ground is."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NormalFilter

A **class** in `Root.Township`, the global namespace.

Spawn modifier for forest and scatter generation that weights points by how steep the ground is.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`NormalFilter.Create`](/mod/game-api/types/global-m-o/normalfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-m-o/normalfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NormalFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-normalmultiplier" /><code>{"private AnimationCurve normalMultiplier"}</code> | <span className="api-desc">Curve from normal Y to weight multiplier. The default favours steep ground and gives flat ground 0.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | <span className="api-desc">Multiplies the point's weight by the curve evaluated at the normal's Y (1 is flat ground).</span> |
