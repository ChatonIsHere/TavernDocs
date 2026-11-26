---
title: "ForestPopulationArea"
description: "Server: gives a population spawn points along a forest's paths in the chunk it is added to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestPopulationArea

A **class** in `Root.Township`, `Alta.Forests`.

Server: gives a population spawn points along a forest's paths in the chunk it is added to.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPointNormalEvaluator`](/game-api/types/alta-world-generation/ipointnormalevaluator)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestPopulationArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | The chunk the points must fall in. |
| <Link id="m-edges" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> edges"}</code> | Forest edges in the chunk. |
| <Link id="m-edgetype" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" edgeType"}</code> | Edge types points can be placed on. |
| <Link id="m-forest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | Unused. |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> | Layers the ground raycast hits. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: waits to be added to a chunk to collect its edges. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getforest" /><code>{"private void GetForest("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | When added to a chunk, collects the forest edges in that chunk. |
| <Link id="m-getpoint" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? Alta.Populations.IPointNormalEvaluator.GetPoint()"}</code> | Picks a random point along a matching edge (weighted by length), raycasts down to the ground and returns it, or null. |

</details>
