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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/mod/game-api/types/alta-world-generation/nodemapmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestAttributeEvaluator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biomes" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] biomes"}</code> | <span className="api-desc">Biomes a node can be placed in when `isEvaluatingBiomes` is on.</span> |
| <Link id="m-definitions" /><code>{"private "}<Link to="/mod/game-api/types/global-s/specialbiomeattributes">{"SpecialBiomeAttributes"}</Link>{" definitions"}</code> | <span className="api-desc">The special biome attributes (radius, elevation, slope and so on) this step writes.</span> |
| <Link id="m-isdoingnodes" /><code>{"private bool isDoingNodes"}</code> | <span className="api-desc">Whether `Modify` evaluates nodes.</span> |
| <Link id="m-isdoingpaths" /><code>{"private bool isDoingPaths"}</code> | <span className="api-desc">Whether `Modify` evaluates edges.</span> |
| <Link id="m-isevaluatingbiomes" /><code>{"private bool isEvaluatingBiomes"}</code> | <span className="api-desc">Whether node attributes get parented to the biome found at the node's position.</span> |
| <Link id="m-isevaluatingnodecontext" /><code>{"private bool isEvaluatingNodeContext"}</code> | <span className="api-desc">Whether node context attributes (elevation, depth, border distance) are written.</span> |
| <Link id="m-isevaluatingpathcontext" /><code>{"private bool isEvaluatingPathContext"}</code> | <span className="api-desc">Whether edge context attributes (elevation, slope, relative elevation) are written.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Runs `EvaluateNode` on every node and `EvaluateEdge` on every edge, as the flags allow, with a random seeded from the forest seed.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the `SpecialBiomeAttributes` global settings into `definitions`.</span> |
| <Link id="m-evaluateedge" /><code>{"private void EvaluateEdge("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random random, "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | <span className="api-desc">Sets each edge attribute to the average of its two nodes, then optionally elevation, slope and relative elevation range.</span> |
| <Link id="m-evaluatenode" /><code>{"private void EvaluateNode("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random random, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> | <span className="api-desc">Parents the node's attributes to its biome and sets radius, elevation, relative elevation range, traversal depth and distance from border.</span> |

</details>
