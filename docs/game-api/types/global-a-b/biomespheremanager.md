---
title: "BiomeSphereManager"
description: "class BiomeSphereManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphereManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BiomeSphereManager()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-generator" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomespheregenerator">{"BiomeSphereGenerator"}</Link>{" generator"}</code> |
| <Link id="m-sorted" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{", List<"}<Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{">> sorted"}</code> |
| <Link id="m-spheres" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"> spheres"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-spheres-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"> Spheres { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos()"}</code> |
| <Link id="m-getbiome" /><code><Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" GetBiome("}<Link to="/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 location, out float bestScore)"}</code> |
| <Link id="m-getbiome-2" /><code><Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" GetBiome("}<Link to="/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 location, IEnumerable<"}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"> options, out float bestScore)"}</code> |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" sphere)"}</code> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `BiomeSphereManager`:

[`ForestGeneration.BiomeSphereManager`](/game-api/types/alta-world-generation/forestgeneration#m-biomespheremanager).
