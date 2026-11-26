---
title: "BuildingRooms.RoomPath"
description: "Private helper of BuildingRooms: a possible link between two overlapping rooms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingRooms.RoomPath

A **private class** in `Root.Township`, `Alta.PAGaC`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper of `BuildingRooms`: a possible link between two overlapping rooms. Each pair gets one path in each direction.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`BuildingRooms`](/game-api/types/alta-world-generation/buildingrooms)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RoomPath("}<Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" from, "}<Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" to)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code><Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" From { get; private set; }"}</code> | The room the path starts in. |
| <Link id="m-overlap" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> Overlap { get; set; }"}</code> | The nodes the two rooms share, where a door, stair or window can go. Both directions share one list. |
| <Link id="m-to" /><code><Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" To { get; private set; }"}</code> | The room the path leads to. |

## Used in

Members of other types that take, return or hold a `RoomPath`:

[`BuildingRooms.CreateConnection`](/game-api/types/alta-world-generation/buildingrooms#m-createconnection), [`BuildingRooms.CreateDoor`](/game-api/types/alta-world-generation/buildingrooms#m-createdoor), [`BuildingRooms.CreateStairs`](/game-api/types/alta-world-generation/buildingrooms#m-createstairs), [`BuildingRooms.CreateWindow`](/game-api/types/alta-world-generation/buildingrooms#m-createwindow), [`BuildingRooms.RoomNode.newPaths`](/game-api/types/alta-world-generation/buildingrooms-roomnode#m-newpaths), [`BuildingRooms.RoomNode.NewPaths`](/game-api/types/alta-world-generation/buildingrooms-roomnode#m-newpaths-2), [`BuildingRooms.RoomNode.paths`](/game-api/types/alta-world-generation/buildingrooms-roomnode#m-paths), [`BuildingRooms.RoomNode.Paths`](/game-api/types/alta-world-generation/buildingrooms-roomnode#m-paths-2).
