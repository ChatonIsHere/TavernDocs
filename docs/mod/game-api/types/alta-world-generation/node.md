---
title: "Node"
description: "A point in the forest generator's graph, with a radius."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Node

A **class** in `Root.Township`, `Alta.Forests`.

A point in the forest generator's graph, with a radius. Paths join it to other nodes, and it can be used for A* searches.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Node<Node, Path>`](/mod/game-api/types/alta-world-generation/node-tnode-tpath)
- **Derived types** [`Node`](/mod/game-api/types/alta-world-generation/node), [`Path`](/mod/game-api/types/alta-world-generation/path)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Node(int index, Vector2 position, float height, float radius)"}</code> | Creates a `Node` from `index`, `position`, `height` and `radius`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"float Radius { get; private set; }"}</code> | The node's radius. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ison" /><code>{"bool IsOn("}<Link to="/mod/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" type)"}</code> | True if the space to the right of any of its paths has any of the given `SpaceType` flags. |

## Used in

Members of other types that take, return or hold a `Node`:

[`CutoutPathModifier.Flood`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-flood), [`CutoutPathModifier.GetScore`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-getscore), [`CutoutPathModifier.output`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-output), [`CutoutPathModifier.strengths`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-strengths), [`Edge.A`](/mod/game-api/types/alta-world-generation/edge#m-a), [`Edge.B`](/mod/game-api/types/alta-world-generation/edge#m-b), [`Edge.Edge`](/mod/game-api/types/alta-world-generation/edge#m-ctor), [`ForestAttributeEvaluator.EvaluateNode`](/mod/game-api/types/alta-world-generation/forestattributeevaluator#m-evaluatenode), [`ForestGCoreInstruction.ForestGCoreInstruction`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction#m-ctor-2), [`ForestGeneration.chunkNodes`](/mod/game-api/types/alta-world-generation/forestgeneration#m-chunknodes), [`ForestGeneration.ClosestNode`](/mod/game-api/types/alta-world-generation/forestgeneration#m-closestnode), [`ForestGeneration.CreateEdge`](/mod/game-api/types/alta-world-generation/forestgeneration#m-createedge), [`ForestGeneration.DistanceToPathOrNode`](/mod/game-api/types/alta-world-generation/forestgeneration#m-distancetopathornode), [`ForestGeneration.entranceNodes`](/mod/game-api/types/alta-world-generation/forestgeneration#m-entrancenodes), [`ForestGeneration.EntranceNodes`](/mod/game-api/types/alta-world-generation/forestgeneration#m-entrancenodes-2), [`ForestGeneration.GetNodesWithinChunk`](/mod/game-api/types/alta-world-generation/forestgeneration#m-getnodeswithinchunk), [`ForestGeneration.nodes`](/mod/game-api/types/alta-world-generation/forestgeneration#m-nodes), [`ForestGeneration.Nodes`](/mod/game-api/types/alta-world-generation/forestgeneration#m-nodes-2), [`ForestGeneration.sortedNodes`](/mod/game-api/types/alta-world-generation/forestgeneration#m-sortednodes), [`ForestGeneration.WorkingNodes`](/mod/game-api/types/alta-world-generation/forestgeneration#m-workingnodes), [`ForestGenerator.Carve`](/mod/game-api/types/alta-world-generation/forestgenerator#m-carve), [`ForestGenerator.entranceNodes`](/mod/game-api/types/alta-world-generation/forestgenerator#m-entrancenodes), [`ForestGenerator.Entrances`](/mod/game-api/types/alta-world-generation/forestgenerator#m-entrances-2), [`ForestGenerator.GetNext`](/mod/game-api/types/alta-world-generation/forestgenerator#m-getnext), [`ForestGenerator.Reproduce`](/mod/game-api/types/alta-world-generation/forestgenerator#m-reproduce), [`ForestGenerator.usedNodes`](/mod/game-api/types/alta-world-generation/forestgenerator#m-usednodes), [`Space.A`](/mod/game-api/types/alta-world-generation/space#m-a), [`Space.B`](/mod/game-api/types/alta-world-generation/space#m-b), [`Space.C`](/mod/game-api/types/alta-world-generation/space#m-c), [`Space.Nodes`](/mod/game-api/types/alta-world-generation/space#m-nodes), [`Space.Space`](/mod/game-api/types/alta-world-generation/space#m-ctor), [`ForestNodeMapSpawnData.ForestNodeMapSpawnData`](/mod/game-api/types/global-e-h/forestnodemapspawndata#m-ctor), [`ForestNodeMapSpawnData.Node`](/mod/game-api/types/global-e-h/forestnodemapspawndata#m-node).
