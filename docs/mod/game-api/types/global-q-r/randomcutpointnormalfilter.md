---
title: "RandomCutPointNormalFilter"
description: "Forest fill filter asset that randomly drops point-and-normal spawn points, keeping each with a set chance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomCutPointNormalFilter

A **class** in `Root.Township`, the global namespace.

Forest fill filter asset that randomly drops point-and-normal spawn points, keeping each with a set chance.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`RandomCutPointNormalFilter.Create`](/mod/game-api/types/global-q-r/randomcutpointnormalfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-q-r/randomcutpointnormalfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomCutPointNormalFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keepchance" /><code>{"private float keepChance"}</code> | <span className="api-desc">Chance from 0 to 1 that a point is kept.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Sets the point's weight to -1 (removed) when a random roll beats `keepChance`.</span> |
