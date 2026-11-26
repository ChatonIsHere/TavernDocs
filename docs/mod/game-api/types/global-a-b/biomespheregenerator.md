---
title: "BiomeSphereGenerator"
description: "World generation modifier that places biome spheres on the forest's nodes, from child BiomeSphereComponents plus randomly placed ones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSphereGenerator

A **class** in `Root.Township`, the global namespace.

World generation modifier that places biome spheres on the forest's nodes, from child `BiomeSphereComponent`s plus randomly placed ones.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NodeMapModifier`](/mod/game-api/types/alta-world-generation/nodemapmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSphereGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | <span className="api-desc">Picks which `ForestBiome` a random sphere gets, from the node's attributes.</span> |
| <Link id="m-last" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" last"}</code> | <span className="api-desc">The forest from the last `Modify` call.</span> |
| <Link id="m-maxcompetitionscore" /><code>{"private float maxCompetitionScore"}</code> | <span className="api-desc">A random sphere is skipped if an existing biome already scores above this at the node. Defaults to 0.5.</span> |
| <Link id="m-nodetoattemptratio" /><code>{"private float nodeToAttemptRatio"}</code> | <span className="api-desc">Number of random sphere attempts per node. Defaults to 1.</span> |
| <Link id="m-spheres" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{"[] spheres"}</code> | <span className="api-desc">Spheres made from the child components.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishinitialize" /><code>{"override Task FinishInitialize()"}</code> | <span className="api-desc">Initialises `BiomeResources` and completes at once.</span> |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Registers the fixed spheres, then tries random nodes and adds a random biome sphere where no existing biome scores above `maxCompetitionScore`.</span> |
| <Link id="m-regenerate" /><code>{"void Regenerate()"}</code> | <span className="api-desc">Runs `Modify` again on the last forest.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | <span className="api-desc">Creates a `BiomeSphere` from each child `BiomeSphereComponent`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BiomeSphereGenerator`:

<div className="api-used-in">

[`BiomeSphereManager.generator`](/mod/game-api/types/global-a-b/biomespheremanager#m-generator).

</div>
