---
title: "ScaleWithScoreModifier"
description: "Forest fill spawn modifier that scales each spawn point by a curve of its weight (score)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleWithScoreModifier

A **class** in `Root.Township`, no namespace.

Forest fill spawn modifier that scales each spawn point by a curve of its weight (score). Created as a generation asset.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`ScaleWithScoreModifier.Create`](/game-api/types/global-s/scalewithscoremodifier-create)
- **Nested types** [`Create`](/game-api/types/global-s/scalewithscoremodifier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleWithScoreModifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scoretoscale" /><code>{"private AnimationCurve scoreToScale"}</code> | Curve from weight to scale multiplier. Default goes from 0.5 at 0 to 1 at 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | Multiplies the point's scale by `scoreToScale` evaluated at the point's weight. |
