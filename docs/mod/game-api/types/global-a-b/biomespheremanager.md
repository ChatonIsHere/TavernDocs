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
| <Link id="m-ctor" /><code>{"BiomeSphereManager()"}</code> | <span className="api-desc">Creates a `BiomeSphereManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generator" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomespheregenerator">{"BiomeSphereGenerator"}</Link>{" generator"}</code> | <span className="api-desc">Serialized reference to a `BiomeSphereGenerator`. Not read in this class.</span> |
| <Link id="m-sorted" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{", List<"}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{">> sorted"}</code> | <span className="api-desc">Spheres grouped by biome, for the filtered `GetBiome`.</span> |
| <Link id="m-spheres" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"> spheres"}</code> | <span className="api-desc">Backing list for `Spheres`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spheres-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"> Spheres { get; }"}</code> | <span className="api-desc">All registered spheres.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos()"}</code> | <span className="api-desc">Draws each sphere as a wire sphere in its biome's colour.</span> |
| <Link id="m-getbiome" /><code><Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" GetBiome("}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 location, out float bestScore)"}</code> | <span className="api-desc">Returns the sphere scoring highest at a point, from distance to its centre and the biome's noise score. One overload limits it to some biomes.</span> |
| <Link id="m-getbiome-2" /><code><Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" GetBiome("}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 location, IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"> options, out float bestScore)"}</code> | <span className="api-desc">Returns the sphere scoring highest at a point, from distance to its centre and the biome's noise score. One overload limits it to some biomes.</span> |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" sphere)"}</code> | <span className="api-desc">Adds a sphere to the list and to the per-biome lookup.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the sphere list to a stream. Reading registers each sphere.</span> |

## Used in

Members of other types that take, return or hold a `BiomeSphereManager`:

<div className="api-used-in">

[`ForestGeneration.BiomeSphereManager`](/mod/game-api/types/alta-world-generation/forestgeneration#m-biomespheremanager).

</div>
