---
title: "ScaleWithScoreModifier"
description: "Forest fill spawn modifier that scales each spawn point by a curve of its weight (score)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleWithScoreModifier

A **class** in `Root.Township`, the global namespace.

Forest fill spawn modifier that scales each spawn point by a curve of its weight (score). Created as a generation asset.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/mod/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`ScaleWithScoreModifier.Create`](/mod/game-api/types/global-s/scalewithscoremodifier-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/scalewithscoremodifier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleWithScoreModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scoretoscale" /><code>{"private AnimationCurve scoreToScale"}</code> | <span className="api-desc">Curve from weight to scale multiplier. Default goes from 0.5 at 0 to 1 at 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Multiplies the point's scale by `scoreToScale` evaluated at the point's weight.</span> |
