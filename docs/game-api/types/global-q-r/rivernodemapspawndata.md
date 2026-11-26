---
title: "RiverNodeMapSpawnData"
description: "Spawn data passed to things spawned on the river map during forest generation, carrying the river node or path they belong to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverNodeMapSpawnData

A **class** in `Root.Township`, no namespace.

Spawn data passed to things spawned on the river map during forest generation, carrying the river node or path they belong to. Takes its attributes from the node, or the path's start node.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`SpawnData`](/game-api/types/global-s/spawndata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverNodeMapSpawnData("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" node, "}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" edge, bool isGenerating)"}</code> | Creates a `RiverNodeMapSpawnData` from `forest`, `node`, `edge` and `isGenerating`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edge" /><code><Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" Edge { get; }"}</code> | River path the spawn is on, or null. |
| <Link id="m-forest" /><code><Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; }"}</code> | Forest generation doing the spawn. |
| <Link id="m-node" /><code><Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" Node { get; }"}</code> | River node the spawn is at, or null. |
