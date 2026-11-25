---
title: "Node"
description: "class Node in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Node

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Node<Node, Path>`](/game-api/types/alta-world-generation/node-tnode-tpath)
- **Derived types** [`Node`](/game-api/types/alta-world-generation/node), [`Path`](/game-api/types/alta-world-generation/path)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Node(int index, Vector2 position, float height, float radius)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"float Radius { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ison" /><code>{"bool IsOn("}<Link to="/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" type)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Node`:

[`CutoutPathModifier.Flood`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-flood), [`CutoutPathModifier.GetScore`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-getscore), [`CutoutPathModifier.output`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-output), [`CutoutPathModifier.strengths`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-strengths), [`Edge.A`](/game-api/types/alta-world-generation/edge#m-a), [`Edge.B`](/game-api/types/alta-world-generation/edge#m-b), [`Edge.Edge`](/game-api/types/alta-world-generation/edge#m-ctor), [`ForestAttributeEvaluator.EvaluateNode`](/game-api/types/alta-world-generation/forestattributeevaluator#m-evaluatenode), [`ForestGCoreInstruction.ForestGCoreInstruction`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-ctor-2), [`ForestGeneration.chunkNodes`](/game-api/types/alta-world-generation/forestgeneration#m-chunknodes), [`ForestGeneration.ClosestNode`](/game-api/types/alta-world-generation/forestgeneration#m-closestnode), [`ForestGeneration.CreateEdge`](/game-api/types/alta-world-generation/forestgeneration#m-createedge), [`ForestGeneration.DistanceToPathOrNode`](/game-api/types/alta-world-generation/forestgeneration#m-distancetopathornode), [`ForestGeneration.entranceNodes`](/game-api/types/alta-world-generation/forestgeneration#m-entrancenodes), [`ForestGeneration.EntranceNodes`](/game-api/types/alta-world-generation/forestgeneration#m-entrancenodes-2), [`ForestGeneration.GetNodesWithinChunk`](/game-api/types/alta-world-generation/forestgeneration#m-getnodeswithinchunk), [`ForestGeneration.nodes`](/game-api/types/alta-world-generation/forestgeneration#m-nodes), [`ForestGeneration.Nodes`](/game-api/types/alta-world-generation/forestgeneration#m-nodes-2), [`ForestGeneration.sortedNodes`](/game-api/types/alta-world-generation/forestgeneration#m-sortednodes), [`ForestGeneration.WorkingNodes`](/game-api/types/alta-world-generation/forestgeneration#m-workingnodes), [`ForestGenerator.Carve`](/game-api/types/alta-world-generation/forestgenerator#m-carve), [`ForestGenerator.entranceNodes`](/game-api/types/alta-world-generation/forestgenerator#m-entrancenodes), [`ForestGenerator.Entrances`](/game-api/types/alta-world-generation/forestgenerator#m-entrances-2), [`ForestGenerator.GetNext`](/game-api/types/alta-world-generation/forestgenerator#m-getnext), [`ForestGenerator.Reproduce`](/game-api/types/alta-world-generation/forestgenerator#m-reproduce), [`ForestGenerator.usedNodes`](/game-api/types/alta-world-generation/forestgenerator#m-usednodes), [`Space.A`](/game-api/types/alta-world-generation/space#m-a), [`Space.B`](/game-api/types/alta-world-generation/space#m-b), [`Space.C`](/game-api/types/alta-world-generation/space#m-c), [`Space.Nodes`](/game-api/types/alta-world-generation/space#m-nodes), [`Space.Space`](/game-api/types/alta-world-generation/space#m-ctor), [`ForestNodeMapSpawnData.ForestNodeMapSpawnData`](/game-api/types/global-e-h/forestnodemapspawndata#m-ctor), [`ForestNodeMapSpawnData.Node`](/game-api/types/global-e-h/forestnodemapspawndata#m-node).
