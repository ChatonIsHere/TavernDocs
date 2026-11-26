---
title: "BuildingRooms.RoomNode"
description: "Private helper of BuildingRooms: one room (or an outside space per floor) in the room graph used to carve doors and stairs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingRooms.RoomNode

A **private class** in `Root.Township`, `Alta.PAGaC`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper of `BuildingRooms`: one room (or an outside space per floor) in the room graph used to carve doors and stairs.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`BuildingRooms`](/mod/game-api/types/alta-world-generation/buildingrooms)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoomNode()"}</code> | <span className="api-desc">Creates a `BuildingRooms.RoomNode` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-newpaths" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{"> newPaths"}</code> | <span className="api-desc">Backing list for `NewPaths`.</span> |
| <Link id="m-paths" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{"> paths"}</code> | <span className="api-desc">Backing list for `Paths`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-floor" /><code>{"int Floor { get; set; }"}</code> | <span className="api-desc">Which floor the room is on.</span> |
| <Link id="m-isexternal" /><code>{"bool IsExternal { get; set; }"}</code> | <span className="api-desc">True for the outside space around the building on a floor.</span> |
| <Link id="m-isfloored" /><code>{"bool IsFloored { get; set; }"}</code> | <span className="api-desc">True when the space has a floor and can be walked into while carving paths.</span> |
| <Link id="m-isused" /><code>{"bool IsUsed { get; set; }"}</code> | <span className="api-desc">True once carving has reached this room.</span> |
| <Link id="m-newpaths-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{"> NewPaths { get; }"}</code> | <span className="api-desc">Paths actually opened up (doors or stairs) to and from this room.</span> |
| <Link id="m-nodecollection" /><code><Link to="/mod/game-api/types/alta-world-generation/nodecollection">{"NodeCollection"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/nodecollection">{"NodeCollection"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The voxel nodes that make up the room.</span> |
| <Link id="m-paths-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{"> Paths { get; }"}</code> | <span className="api-desc">Every possible path to a room this one overlaps with.</span> |

## Used in

Members of other types that take, return or hold a `RoomNode`:

<div className="api-used-in">

[`BuildingRooms.Carve`](/mod/game-api/types/alta-world-generation/buildingrooms#m-carve), [`BuildingRooms.CreateRoom`](/mod/game-api/types/alta-world-generation/buildingrooms#m-createroom), [`BuildingRooms.GetNext`](/mod/game-api/types/alta-world-generation/buildingrooms#m-getnext), [`BuildingRooms.nodes`](/mod/game-api/types/alta-world-generation/buildingrooms#m-nodes), [`BuildingRooms.usedNodes`](/mod/game-api/types/alta-world-generation/buildingrooms#m-usednodes), [`BuildingRooms.RoomPath.From`](/mod/game-api/types/alta-world-generation/buildingrooms-roompath#m-from), [`BuildingRooms.RoomPath.RoomPath`](/mod/game-api/types/alta-world-generation/buildingrooms-roompath#m-ctor), [`BuildingRooms.RoomPath.To`](/mod/game-api/types/alta-world-generation/buildingrooms-roompath#m-to).

</div>
