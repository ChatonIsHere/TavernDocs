---
title: "NormalFilter"
description: "Spawn modifier for forest and scatter generation that weights points by how steep the ground is."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NormalFilter

A **class** in `Root.Township`, no namespace.

Spawn modifier for forest and scatter generation that weights points by how steep the ground is.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`SpawnModifierPointNormal`](/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`NormalFilter.Create`](/game-api/types/global-m-o/normalfilter-create)
- **Nested types** [`Create`](/game-api/types/global-m-o/normalfilter-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NormalFilter()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-normalmultiplier" /><code>{"private AnimationCurve normalMultiplier"}</code> | Curve from normal Y to weight multiplier. The default favours steep ground and gives flat ground 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, ref float weight)"}</code> | Multiplies the point's weight by the curve evaluated at the normal's Y (1 is flat ground). |
