---
title: "PointTowardsEachotherPart"
description: "Generation part that makes the last objects spawned by two spawner parts point towards each other."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointTowardsEachotherPart

A **class** in `Root.Township`, the global namespace.

Generation part that makes the last objects spawned by two spawner parts point towards each other.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointTowardsEachotherPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnerpart">{"SpawnerPart"}</Link>{" a"}</code> | First spawner part. |
| <Link id="m-b" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnerpart">{"SpawnerPart"}</Link>{" b"}</code> | Second spawner part. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"override void GenerateDynamic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | If both spawned objects have an `IPointTowards`, points each at the other's origin. |
