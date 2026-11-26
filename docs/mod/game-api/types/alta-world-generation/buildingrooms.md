---
title: "BuildingRooms"
description: "PAGaC generation step that lays out random rooms in the tag grid, then carves doors, stairs and windows between them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingRooms

A **class** in `Root.Township`, `Alta.PAGaC`.

PAGaC generation step that lays out random rooms in the tag grid, then carves doors, stairs and windows between them. Probably an editor or prototype tool; nothing outside PAGaC uses it.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GenerationStep`](/mod/game-api/types/alta-world-generation/generationstep)
- **Nested types** [`NodeRange`](/mod/game-api/types/alta-world-generation/buildingrooms-noderange), [`Room`](/mod/game-api/types/alta-world-generation/buildingrooms-room), [`RoomNode`](/mod/game-api/types/alta-world-generation/buildingrooms-roomnode), [`RoomPath`](/mod/game-api/types/alta-world-generation/buildingrooms-roompath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildingRooms()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>26 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air"}</code> | The empty tag, taken from the `GenerationBase`. |
| <Link id="m-door" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" door"}</code> | Tag used for door cells. |
| <Link id="m-floor" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" floor"}</code> | Tag used for floor cells. |
| <Link id="m-floorheight" /><code>{"private int floorHeight"}</code> | Cells per storey. |
| <Link id="m-generationbase" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase"}</code> | The base passed to the current `Run`. |
| <Link id="m-generator" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator"}</code> | The tag grid being written to. |
| <Link id="m-loopchance" /><code>{"private float loopChance"}</code> | Chance of also connecting to an already used neighbour on the same floor, making loops. |
| <Link id="m-maximumareaxz" /><code>{"private int maximumAreaXZ"}</code> | Largest allowed floor area for a room, in coarse cells; rooms outside the range are rerolled. |
| <Link id="m-maximumrooms" /><code>{"private int maximumRooms"}</code> | Upper bound for the random room count (exclusive). |
| <Link id="m-maximumsizehorizontal" /><code>{"private int maximumSizeHorizontal"}</code> | Upper bound for a room's horizontal size in coarse cells. |
| <Link id="m-maximumsizevertical" /><code>{"private int maximumSizeVertical"}</code> | Upper bound for a room's vertical size. |
| <Link id="m-minimumareaxz" /><code>{"private int minimumAreaXZ"}</code> | Smallest allowed floor area for a room, in coarse cells. |
| <Link id="m-minimumrooms" /><code>{"private int minimumRooms"}</code> | Lower bound for the random room count. |
| <Link id="m-minimumsizehorizontal" /><code>{"private int minimumSizeHorizontal"}</code> | Lower bound for a room's horizontal size in coarse cells. |
| <Link id="m-minimumsizevertical" /><code>{"private int minimumSizeVertical"}</code> | Lower bound for a room's vertical size. |
| <Link id="m-nodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{"> nodes"}</code> | All room nodes in the graph. |
| <Link id="m-pathrandomelement" /><code>{"private float pathRandomElement"}</code> | Serialized but not read anywhere in this build. |
| <Link id="m-pathrandomweighting" /><code>{"private float pathRandomWeighting"}</code> | Chance `GetNext` picks a random node. Never assigned, so always 0. |
| <Link id="m-resolutionmultiplier" /><code>{"private int resolutionMultiplier"}</code> | Grid cells per coarse room cell horizontally. |
| <Link id="m-rooms" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-room">{"BuildingRooms.Room"}</Link>{"> rooms"}</code> | Rooms generated in the current run. |
| <Link id="m-stair" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" stair"}</code> | Tag used for stair cells. |
| <Link id="m-stairbuffer" /><code>{"private int stairBuffer"}</code> | Clear cells kept before and after a staircase. |
| <Link id="m-usednodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{"> usedNodes"}</code> | Nodes reached so far that may still branch. |
| <Link id="m-wall" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" wall"}</code> | Tag used for wall cells. |
| <Link id="m-window" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" window"}</code> | Tag used for window cells. |
| <Link id="m-windowchance" /><code>{"private float windowChance"}</code> | Chance of placing a window at each possible spot. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sizex" /><code>{"int SizeX { get; }"}</code> | Width of the generation grid. |
| <Link id="m-sizey" /><code>{"int SizeY { get; }"}</code> | Height of the generation grid. |
| <Link id="m-sizez" /><code>{"int SizeZ { get; }"}</code> | Depth of the generation grid. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> | Generates the rooms, tags walls, air and floors into the grid, then traverses the graph to add connections and windows. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-carve" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" Carve("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" current)"}</code> | From one room node, picks a random unused (or, by `loopChance`, looping) neighbour and connects it; returns the next node or null. |
| <Link id="m-createconnection" /><code>{"private bool CreateConnection("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> | Connects two room nodes with a door if they are on the same floor, otherwise with stairs. |
| <Link id="m-createdoor" /><code>{"private bool CreateDoor("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> | Tries to tag a door cell in a random stretch of shared wall; fails if the cells around it aren't clear. |
| <Link id="m-createroom" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" CreateRoom(bool isFloored, bool isExternal, int floor)"}</code> | Makes a room node for a floor and adds it to `nodes`. |
| <Link id="m-createroomnodes" /><code>{"private void CreateRoomNodes(int workingSizeX, int workingSizeY, int workingSizeZ)"}</code> | Builds the node graph: one external node per floor, plus one per floor of each room, with their grid extents. |
| <Link id="m-createstairs" /><code>{"private bool CreateStairs("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> | Tries to fit a staircase along a shared wall between two floors, avoiding existing stairs and doors. |
| <Link id="m-createwindow" /><code>{"private bool CreateWindow("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> | Tags window cells at random (by `windowChance`) along wall between an external node and a room on the same floor. |
| <Link id="m-getnext" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" GetNext()"}</code> | Picks the next node to carve from: the most recently used, or rarely a random one. |
| <Link id="m-getwalls" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-noderange">{"BuildingRooms.NodeRange"}</Link>{"> GetWalls(IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> overlap, int minimumWall, Predicate<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> predicate, int startResolution = 1, int startResolutionOffset = 0)"}</code> | Finds straight runs of overlap cells at least a given length, optionally filtered and aligned to a step. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws each room node's bounds as a wire box. |
| <Link id="m-starttraverse" /><code>{"private void StartTraverse()"}</code> | Seeds traversal with the ground floor's external node and runs `Traverse`. |
| <Link id="m-traverse" /><code>{"private void Traverse()"}</code> | Repeatedly carves paths out from used nodes until every reachable node has been visited. |

</details>
