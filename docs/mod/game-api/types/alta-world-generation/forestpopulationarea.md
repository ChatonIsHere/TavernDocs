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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IPointNormalEvaluator`](/mod/game-api/types/alta-world-generation/ipointnormalevaluator)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestPopulationArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | <span className="api-desc">The chunk the points must fall in.</span> |
| <Link id="m-edges" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> edges"}</code> | <span className="api-desc">Forest edges in the chunk.</span> |
| <Link id="m-edgetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" edgeType"}</code> | <span className="api-desc">Edge types points can be placed on.</span> |
| <Link id="m-forest" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> | <span className="api-desc">Layers the ground raycast hits.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: waits to be added to a chunk to collect its edges.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getforest" /><code>{"private void GetForest("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">When added to a chunk, collects the forest edges in that chunk.</span> |
| <Link id="m-getpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? Alta.Populations.IPointNormalEvaluator.GetPoint()"}</code> | <span className="api-desc">Picks a random point along a matching edge (weighted by length), raycasts down to the ground and returns it, or null.</span> |

</details>
