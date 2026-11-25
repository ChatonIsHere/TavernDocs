---
title: "NodeCollection"
description: "class NodeCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NodeCollection

A **class** in `Root.Township`, `Alta.PAGaC`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NodeCollection()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> nodes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxx" /><code>{"int MaxX { get; private set; }"}</code> |  |
| <Link id="m-maxy" /><code>{"int MaxY { get; private set; }"}</code> |  |
| <Link id="m-maxz" /><code>{"int MaxZ { get; private set; }"}</code> |  |
| <Link id="m-minx" /><code>{"int MinX { get; private set; }"}</code> |  |
| <Link id="m-miny" /><code>{"int MinY { get; private set; }"}</code> |  |
| <Link id="m-minz" /><code>{"int MinZ { get; private set; }"}</code> |  |
| <Link id="m-nodes-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> Nodes { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> adding)"}</code> |  |
| <Link id="m-add-2" /><code>{"bool Add("}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" node)"}</code> |  |
| <Link id="m-addextents" /><code>{"bool AddExtents("}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator, int minX, int minY, int minZ, int maxX, int maxY, int maxZ)"}</code> |  |
| <Link id="m-getoverlap" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> GetOverlap("}<Link to="/game-api/types/alta-world-generation/nodecollection">{"NodeCollection"}</Link>{" other) (iterator)"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" node)"}</code> |  |
| <Link id="m-remove-2" /><code>{"bool Remove(IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> removing)"}</code> |  |
| <Link id="m-removeextents" /><code>{"bool RemoveExtents("}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator, int minX, int minY, int minZ, int maxX, int maxY, int maxZ)"}</code> |  |
| <Link id="m-removingfinished" /><code>{"private void RemovingFinished(int recalculating)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NodeCollection`:

[`BuildingRooms.RoomNode.NodeCollection`](/game-api/types/alta-world-generation/buildingrooms-roomnode#m-nodecollection).
