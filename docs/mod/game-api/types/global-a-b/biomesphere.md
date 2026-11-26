---
title: "BiomeSphere"
description: "A sphere of one biome in a procedural forest, with a seed, origin, radius and strength."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphere

A **class** in `Root.Township`, the global namespace.

A sphere of one biome in a procedural forest, with a seed, origin, radius and strength. Can be sent over the network.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSphere(int seed, Vector3 origin, float radius, float strength, "}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" biome)"}</code> | <span className="api-desc">Creates a `BiomeSphere` from `stream`.</span> |
| <Link id="m-ctor-2" /><code>{"BiomeSphere("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Creates a `BiomeSphere` from `stream`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" biome"}</code> | <span className="api-desc">Backing field for `Biome`, serialized as a hash.</span> |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> | <span className="api-desc">Backing field for `Origin`, the sphere's centre.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Backing field for `Radius`.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Backing field for `Seed`; added to the biome hash to seed `Generated`.</span> |
| <Link id="m-strength" /><code>{"private float strength"}</code> | <span className="api-desc">Backing field for `Strength`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biome-2" /><code><Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" Biome { get; }"}</code> | <span className="api-desc">The forest biome in this sphere.</span> |
| <Link id="m-generated" /><code><Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Generated { get; set; }"}</code> | <span className="api-desc">The biome's generated values, seeded from the sphere's seed and the biome's hash.</span> |
| <Link id="m-origin-2" /><code>{"Vector3 Origin { get; }"}</code> | <span className="api-desc">Centre of the sphere.</span> |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | <span className="api-desc">Radius of the sphere.</span> |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | <span className="api-desc">The sphere's random seed.</span> |
| <Link id="m-strength-2" /><code>{"float Strength { get; }"}</code> | <span className="api-desc">How strongly the biome applies.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes seed, origin, radius, strength and biome.</span> |

## Used in

Members of other types that take, return or hold a `BiomeSphere`:

<div className="api-used-in">

[`PointNormal.biome`](/mod/game-api/types/alta-world-generation/pointnormal#m-biome), [`BiomeSphereComponent.Create`](/mod/game-api/types/global-a-b/biomespherecomponent#m-create), [`BiomeSphereGenerator.spheres`](/mod/game-api/types/global-a-b/biomespheregenerator#m-spheres), [`BiomeSphereManager.GetBiome`](/mod/game-api/types/global-a-b/biomespheremanager#m-getbiome), [`BiomeSphereManager.Register`](/mod/game-api/types/global-a-b/biomespheremanager#m-register), [`BiomeSphereManager.sorted`](/mod/game-api/types/global-a-b/biomespheremanager#m-sorted), [`BiomeSphereManager.spheres`](/mod/game-api/types/global-a-b/biomespheremanager#m-spheres), [`BiomeSphereManager.Spheres`](/mod/game-api/types/global-a-b/biomespheremanager#m-spheres-2).

</div>
