---
title: "CircularSpawnPointGenerator"
description: "A spawn area that gives random points in a flat circle around its transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CircularSpawnPointGenerator

A **class** in `Root.Township`, `Alta.Populations`.

A spawn area that gives random points in a flat circle around its transform. Height is the transform's, with no ground check.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`SpawnAreaBase`](/mod/game-api/types/alta-world-generation/spawnareabase)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CircularSpawnPointGenerator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Circle radius in metres. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomspawnposition" /><code>{"override Vector3 GetRandomSpawnPosition()"}</code> | A random point inside the circle of `radius` around the transform, at the transform's height. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |

</details>
