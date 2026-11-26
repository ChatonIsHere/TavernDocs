---
title: "BiomeSphereComponent"
description: "Scene component that defines a sphere of a forest biome at its position, turned into a BiomeSphere for generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphereComponent

A **class** in `Root.Township`, the global namespace.

Scene component that defines a sphere of a forest biome at its position, turned into a `BiomeSphere` for generation.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSphereComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" biome"}</code> | <span className="api-desc">The forest biome this sphere applies.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Sphere radius (5 by default).</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Seed passed to the biome sphere.</span> |
| <Link id="m-strength" /><code>{"private float strength"}</code> | <span className="api-desc">Biome strength (1 by default).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code><Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" Create()"}</code> | <span className="api-desc">Builds a `BiomeSphere` from the seed, position, radius, strength and biome.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the sphere in the biome's colour.</span> |

</details>
