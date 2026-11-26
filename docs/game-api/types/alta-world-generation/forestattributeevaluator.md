---
title: "ForestAttributeEvaluator"
description: "A node map step in forest generation that fills in biome attributes on nodes and edges (biome, elevation, slope, depth from the entrance, distance to border)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestAttributeEvaluator

A **class** in `Root.Township`, `Alta.Forests`.

A node map step in forest generation that fills in biome attributes on nodes and edges (biome, elevation, slope, depth from the entrance, distance to border).

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestAttributeEvaluator()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biomes" /><code>{"private "}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] biomes"}</code> | Biomes a node can be placed in when `isEvaluatingBiomes` is on. |
| <Link id="m-definitions" /><code>{"private "}<Link to="/game-api/types/global-s/specialbiomeattributes">{"SpecialBiomeAttributes"}</Link>{" definitions"}</code> | The special biome attributes (radius, elevation, slope and so on) this step writes. |
| <Link id="m-isdoingnodes" /><code>{"private bool isDoingNodes"}</code> | Whether `Modify` evaluates nodes. |
| <Link id="m-isdoingpaths" /><code>{"private bool isDoingPaths"}</code> | Whether `Modify` evaluates edges. |
| <Link id="m-isevaluatingbiomes" /><code>{"private bool isEvaluatingBiomes"}</code> | Whether node attributes get parented to the biome found at the node's position. |
| <Link id="m-isevaluatingnodecontext" /><code>{"private bool isEvaluatingNodeContext"}</code> | Whether node context attributes (elevation, depth, border distance) are written. |
| <Link id="m-isevaluatingpathcontext" /><code>{"private bool isEvaluatingPathContext"}</code> | Whether edge context attributes (elevation, slope, relative elevation) are written. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Runs `EvaluateNode` on every node and `EvaluateEdge` on every edge, as the flags allow, with a random seeded from the forest seed. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the `SpecialBiomeAttributes` global settings into `definitions`. |
| <Link id="m-evaluateedge" /><code>{"private void EvaluateEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random random, "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | Sets each edge attribute to the average of its two nodes, then optionally elevation, slope and relative elevation range. |
| <Link id="m-evaluatenode" /><code>{"private void EvaluateNode("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random random, "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> | Parents the node's attributes to its biome and sets radius, elevation, relative elevation range, traversal depth and distance from border. |

</details>
