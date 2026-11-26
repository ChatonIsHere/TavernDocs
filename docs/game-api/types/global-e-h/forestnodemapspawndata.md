---
title: "ForestNodeMapSpawnData"
description: "Spawn data for objects placed by forest generation on a node or edge of the forest map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestNodeMapSpawnData

A **class** in `Root.Township`, no namespace.

Spawn data for objects placed by forest generation on a node or edge of the forest map. Takes its attributes from that node or edge.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`SpawnData`](/game-api/types/global-s/spawndata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestNodeMapSpawnData("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node, "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge, bool isGenerating)"}</code> | Creates a `ForestNodeMapSpawnData` from `forest`, `node`, `edge` and `isGenerating`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" { get; }"}</code> | The forest map edge the object belongs to, if any. |
| <Link id="m-forest" /><code><Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; }"}</code> | The forest generation that placed the object. |
| <Link id="m-node" /><code><Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" { get; }"}</code> | The forest map node the object belongs to, if any. |
