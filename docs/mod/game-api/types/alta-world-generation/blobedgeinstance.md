---
title: "BlobEdgeInstance"
description: "Runtime instance of the BlobEdge plugin part: draws a main circle and hashed smaller circles around it, sized by a biome attribute."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlobEdgeInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `BlobEdge` plugin part: draws a main circle and hashed smaller circles around it, sized by a biome attribute.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<BlobEdge>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BlobEdgeInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/blobedge">{"BlobEdge"}</Link>{" part)"}</code> | <span className="api-desc">Creates a `BlobEdgeInstance` from `plugin` and `part`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Size multiplier read from the biome's size attribute.</span> |
| <Link id="m-positions" /><code>{"private Vector2[] positions"}</code> | <span className="api-desc">Centres of the main and edge circles.</span> |
| <Link id="m-radiuses" /><code>{"private float[] radiuses"}</code> | <span className="api-desc">Radius of each circle.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | <span className="api-desc">For each circle that overlaps the chunk, applies the curve by distance from its centre with the part's operation.</span> |
