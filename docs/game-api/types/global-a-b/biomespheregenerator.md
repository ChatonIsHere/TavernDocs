---
title: "BiomeSphereGenerator"
description: "World generation modifier that places biome spheres on the forest's nodes, from child BiomeSphereComponents plus randomly placed ones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphereGenerator

A **class** in `Root.Township`, no namespace.

World generation modifier that places biome spheres on the forest's nodes, from child `BiomeSphereComponent`s plus randomly placed ones.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSphereGenerator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | Picks which `ForestBiome` a random sphere gets, from the node's attributes. |
| <Link id="m-last" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" last"}</code> | The forest from the last `Modify` call. |
| <Link id="m-maxcompetitionscore" /><code>{"private float maxCompetitionScore"}</code> | A random sphere is skipped if an existing biome already scores above this at the node. Defaults to 0.5. |
| <Link id="m-nodetoattemptratio" /><code>{"private float nodeToAttemptRatio"}</code> | Number of random sphere attempts per node. Defaults to 1. |
| <Link id="m-spheres" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"[] spheres"}</code> | Spheres made from the child components. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishinitialize" /><code>{"override Task FinishInitialize()"}</code> | Initialises `BiomeResources` and completes at once. |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Registers the fixed spheres, then tries random nodes and adds a random biome sphere where no existing biome scores above `maxCompetitionScore`. |
| <Link id="m-regenerate" /><code>{"void Regenerate()"}</code> | Runs `Modify` again on the last forest. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | Creates a `BiomeSphere` from each child `BiomeSphereComponent`. |

</details>

## Used in

Members of other types that take, return or hold a `BiomeSphereGenerator`:

[`BiomeSphereManager.generator`](/game-api/types/global-a-b/biomespheremanager#m-generator).
