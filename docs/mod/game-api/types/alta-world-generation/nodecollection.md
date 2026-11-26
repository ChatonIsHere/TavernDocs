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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NodeCollection()"}</code> | <span className="api-desc">Creates a `NodeCollection` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> nodes"}</code> | <span className="api-desc">The set of nodes in the collection.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxx" /><code>{"int MaxX { get; private set; }"}</code> | <span className="api-desc">Highest X in the collection.</span> |
| <Link id="m-maxy" /><code>{"int MaxY { get; private set; }"}</code> | <span className="api-desc">Highest Y in the collection, but see the summary.</span> |
| <Link id="m-maxz" /><code>{"int MaxZ { get; private set; }"}</code> | <span className="api-desc">Highest Z in the collection, but see the summary.</span> |
| <Link id="m-minx" /><code>{"int MinX { get; private set; }"}</code> | <span className="api-desc">Lowest X in the collection.</span> |
| <Link id="m-miny" /><code>{"int MinY { get; private set; }"}</code> | <span className="api-desc">Lowest Y in the collection.</span> |
| <Link id="m-minz" /><code>{"int MinZ { get; private set; }"}</code> | <span className="api-desc">Lowest Z in the collection.</span> |
| <Link id="m-nodes-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> Nodes { get; }"}</code> | <span className="api-desc">The nodes in the collection.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> adding)"}</code> | <span className="api-desc">Adds one or more nodes and widens the bounds. Returns true if any node was new.</span> |
| <Link id="m-add-2" /><code>{"bool Add("}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" node)"}</code> | <span className="api-desc">Adds one or more nodes and widens the bounds. Returns true if any node was new.</span> |
| <Link id="m-addextents" /><code>{"bool AddExtents("}<Link to="/mod/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator, int minX, int minY, int minZ, int maxX, int maxY, int maxZ)"}</code> | <span className="api-desc">Adds every generator node in a box and widens the bounds. Returns true if any node was new.</span> |
| <Link id="m-getoverlap" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> GetOverlap("}<Link to="/mod/game-api/types/alta-world-generation/nodecollection">{"NodeCollection"}</Link>{" other) (iterator)"}</code> | <span className="api-desc">Nodes that are in both collections, checking the bounds first.</span> |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" node)"}</code> | <span className="api-desc">Removes one or more nodes and recalculates any bound they were on.</span> |
| <Link id="m-remove-2" /><code>{"bool Remove(IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> removing)"}</code> | <span className="api-desc">Removes one or more nodes and recalculates any bound they were on.</span> |
| <Link id="m-removeextents" /><code>{"bool RemoveExtents("}<Link to="/mod/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator, int minX, int minY, int minZ, int maxX, int maxY, int maxZ)"}</code> | <span className="api-desc">Removes the generator nodes in a box (upper edges exclusive) and recalculates the bounds.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removingfinished" /><code>{"private void RemovingFinished(int recalculating)"}</code> | <span className="api-desc">Recalculates the bounds that removed nodes sat on; the flags say which min or max sides to redo.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NodeCollection`:

<div className="api-used-in">

[`BuildingRooms.RoomNode.NodeCollection`](/mod/game-api/types/alta-world-generation/buildingrooms-roomnode#m-nodecollection).

</div>
