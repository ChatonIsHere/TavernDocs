---
title: "BiomeSphereManager"
description: "Holds a forest's biome spheres and answers which biome a point belongs to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphereManager

A **class** in `Root.Township`, the global namespace.

Holds a forest's biome spheres and answers which biome a point belongs to. Owned by the forest generation (`ForestGeneration.BiomeSphereManager`).

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSphereManager()"}</code> | Creates a `BiomeSphereManager` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generator" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomespheregenerator">{"BiomeSphereGenerator"}</Link>{" generator"}</code> | Serialized reference to a `BiomeSphereGenerator`. Not read in this class. |
| <Link id="m-sorted" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{", List<"}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{">> sorted"}</code> | Spheres grouped by biome, for the filtered `GetBiome`. |
| <Link id="m-spheres" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"> spheres"}</code> | Backing list for `Spheres`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spheres-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"> Spheres { get; }"}</code> | All registered spheres. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos()"}</code> | Draws each sphere as a wire sphere in its biome's colour. |
| <Link id="m-getbiome" /><code><Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" GetBiome("}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 location, out float bestScore)"}</code> | Returns the sphere scoring highest at a point, from distance to its centre and the biome's noise score. One overload limits it to some biomes. |
| <Link id="m-getbiome-2" /><code><Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" GetBiome("}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 location, IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"> options, out float bestScore)"}</code> | Returns the sphere scoring highest at a point, from distance to its centre and the biome's noise score. One overload limits it to some biomes. |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" sphere)"}</code> | Adds a sphere to the list and to the per-biome lookup. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the sphere list to a stream. Reading registers each sphere. |

## Used in

Members of other types that take, return or hold a `BiomeSphereManager`:

[`ForestGeneration.BiomeSphereManager`](/mod/game-api/types/alta-world-generation/forestgeneration#m-biomespheremanager).
