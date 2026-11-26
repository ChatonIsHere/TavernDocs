---
title: "BiomeSphereComponent"
description: "Scene component that defines a sphere of a forest biome at its position, turned into a BiomeSphere for generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphereComponent

A **class** in `Root.Township`, no namespace.

Scene component that defines a sphere of a forest biome at its position, turned into a `BiomeSphere` for generation.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BiomeSphereComponent()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" biome"}</code> | The forest biome this sphere applies. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Sphere radius (5 by default). |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Seed passed to the biome sphere. |
| <Link id="m-strength" /><code>{"private float strength"}</code> | Biome strength (1 by default). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code><Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" Create()"}</code> | Builds a `BiomeSphere` from the seed, position, radius, strength and biome. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the sphere in the biome's colour. |

</details>
