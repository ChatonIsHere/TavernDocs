---
title: "AlignWithNormalModifier"
description: "World generation spawn modifier that rotates spawned objects to face along the ground normal, weighted by how flat the ground is."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AlignWithNormalModifier

A **class** in `Root.Township`, the global namespace.

World generation spawn modifier that rotates spawned objects to face along the ground normal, weighted by how flat the ground is.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/mod/game-api/types/global-s/spawnmodifierspawnparameters)
- **Derived types** [`AlignWithNormalModifier.Create`](/mod/game-api/types/global-a-b/alignwithnormalmodifier-create)
- **Nested types** [`Create`](/mod/game-api/types/global-a-b/alignwithnormalmodifier-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AlignWithNormalModifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isusingyaxis" /><code>{"private bool isUsingYAxis"}</code> | Points the object's Y axis along the normal instead of its forward axis. |
| <Link id="m-normalweights" /><code>{"private AnimationCurve normalWeights"}</code> | Curve from the normal's Y (flatness) to how strongly the rotation is applied. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | Rotates the spawn point to look along the normal (or point its Y axis along it), blended by the curve weight. |
