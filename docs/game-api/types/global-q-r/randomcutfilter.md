---
title: "RandomCutFilter"
description: "Forest fill filter asset that randomly drops spawn points, keeping each with a set chance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomCutFilter

A **class** in `Root.Township`, no namespace.

Forest fill filter asset that randomly drops spawn points, keeping each with a set chance.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`SpawnModifierPoint`](/game-api/types/global-s/spawnmodifierpoint)
- **Derived types** [`RandomCutFilter.Create`](/game-api/types/global-q-r/randomcutfilter-create)
- **Nested types** [`Create`](/game-api/types/global-q-r/randomcutfilter-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RandomCutFilter()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keepchance" /><code>{"private float keepChance"}</code> | Chance from 0 to 1 that a point is kept. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, ref float weight)"}</code> | Sets the point's weight to -1 (removed) when a random roll beats `keepChance`. |
