---
title: "BiomeSphere"
description: "A sphere of one biome in a procedural forest, with a seed, origin, radius and strength."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphere

A **class** in `Root.Township`, no namespace.

A sphere of one biome in a procedural forest, with a seed, origin, radius and strength. Can be sent over the network.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSphere(int seed, Vector3 origin, float radius, float strength, "}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" biome)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"BiomeSphere("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" biome"}</code> |  |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> |  |
| <Link id="m-radius" /><code>{"private float radius"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |
| <Link id="m-strength" /><code>{"private float strength"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biome-2" /><code><Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" Biome { get; }"}</code> | The forest biome in this sphere. |
| <Link id="m-generated" /><code><Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Generated { get; set; }"}</code> | The biome's generated values, seeded from the sphere's seed and the biome's hash. |
| <Link id="m-origin-2" /><code>{"Vector3 Origin { get; }"}</code> | Centre of the sphere. |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | Radius of the sphere. |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | The sphere's random seed. |
| <Link id="m-strength-2" /><code>{"float Strength { get; }"}</code> | How strongly the biome applies. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes seed, origin, radius, strength and biome. |

## Used in

Members of other types that take, return or hold a `BiomeSphere`:

[`PointNormal.biome`](/game-api/types/alta-world-generation/pointnormal#m-biome), [`BiomeSphereComponent.Create`](/game-api/types/global-a-b/biomespherecomponent#m-create), [`BiomeSphereGenerator.spheres`](/game-api/types/global-a-b/biomespheregenerator#m-spheres), [`BiomeSphereManager.GetBiome`](/game-api/types/global-a-b/biomespheremanager#m-getbiome), [`BiomeSphereManager.Register`](/game-api/types/global-a-b/biomespheremanager#m-register), [`BiomeSphereManager.sorted`](/game-api/types/global-a-b/biomespheremanager#m-sorted), [`BiomeSphereManager.spheres`](/game-api/types/global-a-b/biomespheremanager#m-spheres), [`BiomeSphereManager.Spheres`](/game-api/types/global-a-b/biomespheremanager#m-spheres-2).
