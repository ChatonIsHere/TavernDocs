---
title: "Node"
description: "One cell in a PAGaC generation grid: its position and the tag it currently holds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Node

A **class** in `Root.Township`, `Alta.PAGaC`.

One cell in a PAGaC generation grid: its position and the tag it currently holds.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Node(int x, int y, int z, "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" tag)"}</code> | Creates a `Node` from `x`, `y`, `z` and `tag`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-tag" /><code><Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" { get; set; }"}</code> | The tag in the cell. |
| <Link id="m-x" /><code>{"int X { get; private set; }"}</code> | Cell x. |
| <Link id="m-y" /><code>{"int Y { get; private set; }"}</code> | Cell y. |
| <Link id="m-z" /><code>{"int Z { get; private set; }"}</code> | Cell z. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tagif" /><code>{"void TagIf("}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" newTag, "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" oldTag)"}</code> | Swaps the tag to a new one only if it currently has the given old tag. |

## Used in

Members of other types that take, return or hold a `Node`:

[`BuildingRooms.GetWalls`](/game-api/types/alta-world-generation/buildingrooms#m-getwalls), [`BuildingRooms.NodeRange.End`](/game-api/types/alta-world-generation/buildingrooms-noderange#m-end), [`BuildingRooms.NodeRange.NodeRange`](/game-api/types/alta-world-generation/buildingrooms-noderange#m-ctor), [`BuildingRooms.NodeRange.Start`](/game-api/types/alta-world-generation/buildingrooms-noderange#m-start), [`BuildingRooms.RoomPath.Overlap`](/game-api/types/alta-world-generation/buildingrooms-roompath#m-overlap), [`Generator.CastTo`](/game-api/types/alta-world-generation/generator#m-castto), [`Generator.CastToNot`](/game-api/types/alta-world-generation/generator#m-casttonot), [`Generator.Item`](/game-api/types/alta-world-generation/generator#m-item), [`Generator.nodes`](/game-api/types/alta-world-generation/generator#m-nodes), [`NodeCollection.Add`](/game-api/types/alta-world-generation/nodecollection#m-add), [`NodeCollection.GetOverlap`](/game-api/types/alta-world-generation/nodecollection#m-getoverlap), [`NodeCollection.nodes`](/game-api/types/alta-world-generation/nodecollection#m-nodes), [`NodeCollection.Nodes`](/game-api/types/alta-world-generation/nodecollection#m-nodes-2), [`NodeCollection.Remove`](/game-api/types/alta-world-generation/nodecollection#m-remove), [`NodeExtensions.Within`](/game-api/types/alta-world-generation/nodeextensions#m-within).
