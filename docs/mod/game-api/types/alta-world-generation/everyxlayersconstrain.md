---
title: "EveryXLayersConstrain"
description: "Spawn constraint asset that only allows spawning on every Nth cave layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EveryXLayersConstrain

A **class** in `Root.Township`, `Alta.Caves`.

Spawn constraint asset that only allows spawning on every Nth cave layer.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`SpawnConstrain`](/mod/game-api/types/alta-world-generation/spawnconstrain)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EveryXLayersConstrain()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawnatzero" /><code>{"private bool spawnAtZero"}</code> | Whether layer 0 may pass the check. |
| <Link id="m-spawneveryxlayers" /><code>{"private int spawnEveryXLayers"}</code> | Spacing between allowed layers. |
| <Link id="m-startcountoffset" /><code>{"private int startCountOffset"}</code> | Shifts which layers count as the Nth. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnparameters" /><code>{"override bool SpawnParameters("}<Link to="/mod/game-api/types/alta-world-generation/generationbase">{"GenerationBase"}</Link>{" generation, ref int quantity)"}</code> | True when (layer minus offset plus 1) divides evenly by `spawnEveryXLayers`; layer 0 is refused unless `spawnAtZero` is set. |
