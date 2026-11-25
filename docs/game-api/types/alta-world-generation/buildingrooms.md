---
title: "BuildingRooms"
description: "class BuildingRooms in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingRooms

A **class** in `Root.Township`, `Alta.PAGaC`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GenerationStep`](/game-api/types/alta-world-generation/generationstep)
- **Nested types** [`NodeRange`](/game-api/types/alta-world-generation/buildingrooms-noderange), [`Room`](/game-api/types/alta-world-generation/buildingrooms-room), [`RoomNode`](/game-api/types/alta-world-generation/buildingrooms-roomnode), [`RoomPath`](/game-api/types/alta-world-generation/buildingrooms-roompath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildingRooms()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air"}</code> |  |
| <Link id="m-door" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" door"}</code> |  |
| <Link id="m-floor" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" floor"}</code> |  |
| <Link id="m-floorheight" /><code>{"private int floorHeight"}</code> |  |
| <Link id="m-generationbase" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase"}</code> |  |
| <Link id="m-generator" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator"}</code> |  |
| <Link id="m-loopchance" /><code>{"private float loopChance"}</code> |  |
| <Link id="m-maximumareaxz" /><code>{"private int maximumAreaXZ"}</code> |  |
| <Link id="m-maximumrooms" /><code>{"private int maximumRooms"}</code> |  |
| <Link id="m-maximumsizehorizontal" /><code>{"private int maximumSizeHorizontal"}</code> |  |
| <Link id="m-maximumsizevertical" /><code>{"private int maximumSizeVertical"}</code> |  |
| <Link id="m-minimumareaxz" /><code>{"private int minimumAreaXZ"}</code> |  |
| <Link id="m-minimumrooms" /><code>{"private int minimumRooms"}</code> |  |
| <Link id="m-minimumsizehorizontal" /><code>{"private int minimumSizeHorizontal"}</code> |  |
| <Link id="m-minimumsizevertical" /><code>{"private int minimumSizeVertical"}</code> |  |
| <Link id="m-nodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{"> nodes"}</code> |  |
| <Link id="m-pathrandomelement" /><code>{"private float pathRandomElement"}</code> |  |
| <Link id="m-pathrandomweighting" /><code>{"private float pathRandomWeighting"}</code> |  |
| <Link id="m-resolutionmultiplier" /><code>{"private int resolutionMultiplier"}</code> |  |
| <Link id="m-rooms" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/buildingrooms-room">{"BuildingRooms.Room"}</Link>{"> rooms"}</code> |  |
| <Link id="m-stair" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" stair"}</code> |  |
| <Link id="m-stairbuffer" /><code>{"private int stairBuffer"}</code> |  |
| <Link id="m-usednodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{"> usedNodes"}</code> |  |
| <Link id="m-wall" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" wall"}</code> |  |
| <Link id="m-window" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" window"}</code> |  |
| <Link id="m-windowchance" /><code>{"private float windowChance"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sizex" /><code>{"int SizeX { get; }"}</code> |  |
| <Link id="m-sizey" /><code>{"int SizeY { get; }"}</code> |  |
| <Link id="m-sizez" /><code>{"int SizeZ { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> |  |
| <Link id="m-carve" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" Carve("}<Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" current)"}</code> |  |
| <Link id="m-createconnection" /><code>{"private bool CreateConnection("}<Link to="/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> |  |
| <Link id="m-createdoor" /><code>{"private bool CreateDoor("}<Link to="/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> |  |
| <Link id="m-createroom" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" CreateRoom(bool isFloored, bool isExternal, int floor)"}</code> |  |
| <Link id="m-createroomnodes" /><code>{"private void CreateRoomNodes(int workingSizeX, int workingSizeY, int workingSizeZ)"}</code> |  |
| <Link id="m-createstairs" /><code>{"private bool CreateStairs("}<Link to="/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> |  |
| <Link id="m-createwindow" /><code>{"private bool CreateWindow("}<Link to="/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> |  |
| <Link id="m-getnext" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" GetNext()"}</code> |  |
| <Link id="m-getwalls" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/buildingrooms-noderange">{"BuildingRooms.NodeRange"}</Link>{"> GetWalls(IEnumerable<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> overlap, int minimumWall, Predicate<"}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> predicate, int startResolution = 1, int startResolutionOffset = 0)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-starttraverse" /><code>{"private void StartTraverse()"}</code> |  |
| <Link id="m-traverse" /><code>{"private void Traverse()"}</code> |  |
