---
title: "ForestConnectivityIncreaser"
description: "Forest node map step that opens some blocked edges into normal paths, to add loops between nodes of similar height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestConnectivityIncreaser

A **class** in `Root.Township`, `Alta.Forests`.

Forest node map step that opens some blocked edges into normal paths, to add loops between nodes of similar height.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/mod/game-api/types/alta-world-generation/nodemapmodifier)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestConnectivityIncreaser()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cutchance" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" cutChance"}</code> | <span className="api-desc">Biome attribute for the chance an edge is opened, summed from both nodes.</span> |
| <Link id="m-heightchancemultiplier" /><code>{"private AnimationCurve heightChanceMultiplier"}</code> | <span className="api-desc">Scales the chance by height difference over `maxHeightDifference`.</span> |
| <Link id="m-iterations" /><code>{"private int iterations"}</code> | <span className="api-desc">Number of passes over the edges.</span> |
| <Link id="m-maxcutdistance" /><code>{"private int maxCutDistance"}</code> | <span className="api-desc">Nodes must already be within this many path steps of each other.</span> |
| <Link id="m-maxheightdifference" /><code>{"private float maxHeightDifference"}</code> | <span className="api-desc">Edges with a bigger height difference are never opened.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Over several passes, turns blocked edges between non-entrance nodes into normal edges by chance, if the nodes are close in height and already near on the path graph.</span> |
