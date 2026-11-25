---
title: "ForestPopulationArea"
description: "class ForestPopulationArea in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestPopulationArea

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPointNormalEvaluator`](/game-api/types/alta-world-generation/ipointnormalevaluator)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestPopulationArea()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> |
| <Link id="m-edges" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> edges"}</code> |
| <Link id="m-edgetype" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" edgeType"}</code> |
| <Link id="m-forest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getforest" /><code>{"private void GetForest("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-getpoint" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? Alta.Populations.IPointNormalEvaluator.GetPoint()"}</code> |

</details>
