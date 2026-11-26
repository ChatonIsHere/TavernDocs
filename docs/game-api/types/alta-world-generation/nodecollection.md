---
title: "NodeCollection"
description: "A set of grid nodes from the PAGaC procedural generator, with a running bounding box."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NodeCollection

A **class** in `Root.Township`, `Alta.PAGaC`.

A set of grid nodes from the PAGaC procedural generator, with a running bounding box. The bounds code has slips (max Y and Z are only updated when X grows, and recalculated maxes use the minimum), so treat the bounds as rough.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NodeCollection()"}</code> | Creates a `NodeCollection` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> nodes"}</code> | The set of nodes in the collection. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxx" /><code>{"int MaxX { get; private set; }"}</code> | Highest X in the collection. |
| <Link id="m-maxy" /><code>{"int MaxY { get; private set; }"}</code> | Highest Y in the collection, but see the summary. |
| <Link id="m-maxz" /><code>{"int MaxZ { get; private set; }"}</code> | Highest Z in the collection, but see the summary. |
| <Link id="m-minx" /><code>{"int MinX { get; private set; }"}</code> | Lowest X in the collection. |
| <Link id="m-miny" /><code>{"int MinY { get; private set; }"}</code> | Lowest Y in the collection. |
| <Link id="m-minz" /><code>{"int MinZ { get; private set; }"}</code> | Lowest Z in the collection. |
| <Link id="m-nodes-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> Nodes { get; }"}</code> | The nodes in the collection. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> adding)"}</code> | Adds one or more nodes and widens the bounds. Returns true if any node was new. |
| <Link id="m-add-2" /><code>{"bool Add("}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" node)"}</code> | Adds one or more nodes and widens the bounds. Returns true if any node was new. |
| <Link id="m-addextents" /><code>{"bool AddExtents("}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator, int minX, int minY, int minZ, int maxX, int maxY, int maxZ)"}</code> | Adds every generator node in a box and widens the bounds. Returns true if any node was new. |
| <Link id="m-getoverlap" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> GetOverlap("}<Link to="/game-api/types/alta-world-generation/nodecollection">{"NodeCollection"}</Link>{" other) (iterator)"}</code> | Nodes that are in both collections, checking the bounds first. |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" node)"}</code> | Removes one or more nodes and recalculates any bound they were on. |
| <Link id="m-remove-2" /><code>{"bool Remove(IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> removing)"}</code> | Removes one or more nodes and recalculates any bound they were on. |
| <Link id="m-removeextents" /><code>{"bool RemoveExtents("}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator, int minX, int minY, int minZ, int maxX, int maxY, int maxZ)"}</code> | Removes the generator nodes in a box (upper edges exclusive) and recalculates the bounds. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removingfinished" /><code>{"private void RemovingFinished(int recalculating)"}</code> | Recalculates the bounds that removed nodes sat on; the flags say which min or max sides to redo. |

</details>

## Used in

Members of other types that take, return or hold a `NodeCollection`:

[`BuildingRooms.RoomNode.NodeCollection`](/game-api/types/alta-world-generation/buildingrooms-roomnode#m-nodecollection).
