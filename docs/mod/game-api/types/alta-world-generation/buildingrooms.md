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
| <Link id="m-ctor" /><code>{"BuildingRooms()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>26 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-air" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" air"}</code> | <span className="api-desc">The empty tag, taken from the `GenerationBase`.</span> |
| <Link id="m-door" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" door"}</code> | <span className="api-desc">Tag used for door cells.</span> |
| <Link id="m-floor" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" floor"}</code> | <span className="api-desc">Tag used for floor cells.</span> |
| <Link id="m-floorheight" /><code>{"private int floorHeight"}</code> | <span className="api-desc">Cells per storey.</span> |
| <Link id="m-generationbase" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase"}</code> | <span className="api-desc">The base passed to the current `Run`.</span> |
| <Link id="m-generator" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generator">{"Generator"}</Link>{" generator"}</code> | <span className="api-desc">The tag grid being written to.</span> |
| <Link id="m-loopchance" /><code>{"private float loopChance"}</code> | <span className="api-desc">Chance of also connecting to an already used neighbour on the same floor, making loops.</span> |
| <Link id="m-maximumareaxz" /><code>{"private int maximumAreaXZ"}</code> | <span className="api-desc">Largest allowed floor area for a room, in coarse cells; rooms outside the range are rerolled.</span> |
| <Link id="m-maximumrooms" /><code>{"private int maximumRooms"}</code> | <span className="api-desc">Upper bound for the random room count (exclusive).</span> |
| <Link id="m-maximumsizehorizontal" /><code>{"private int maximumSizeHorizontal"}</code> | <span className="api-desc">Upper bound for a room's horizontal size in coarse cells.</span> |
| <Link id="m-maximumsizevertical" /><code>{"private int maximumSizeVertical"}</code> | <span className="api-desc">Upper bound for a room's vertical size.</span> |
| <Link id="m-minimumareaxz" /><code>{"private int minimumAreaXZ"}</code> | <span className="api-desc">Smallest allowed floor area for a room, in coarse cells.</span> |
| <Link id="m-minimumrooms" /><code>{"private int minimumRooms"}</code> | <span className="api-desc">Lower bound for the random room count.</span> |
| <Link id="m-minimumsizehorizontal" /><code>{"private int minimumSizeHorizontal"}</code> | <span className="api-desc">Lower bound for a room's horizontal size in coarse cells.</span> |
| <Link id="m-minimumsizevertical" /><code>{"private int minimumSizeVertical"}</code> | <span className="api-desc">Lower bound for a room's vertical size.</span> |
| <Link id="m-nodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{"> nodes"}</code> | <span className="api-desc">All room nodes in the graph.</span> |
| <Link id="m-pathrandomelement" /><code>{"private float pathRandomElement"}</code> | <span className="api-desc">Serialized but not read anywhere in this build.</span> |
| <Link id="m-pathrandomweighting" /><code>{"private float pathRandomWeighting"}</code> | <span className="api-desc">Chance `GetNext` picks a random node. Never assigned, so always 0.</span> |
| <Link id="m-resolutionmultiplier" /><code>{"private int resolutionMultiplier"}</code> | <span className="api-desc">Grid cells per coarse room cell horizontally.</span> |
| <Link id="m-rooms" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-room">{"BuildingRooms.Room"}</Link>{"> rooms"}</code> | <span className="api-desc">Rooms generated in the current run.</span> |
| <Link id="m-stair" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" stair"}</code> | <span className="api-desc">Tag used for stair cells.</span> |
| <Link id="m-stairbuffer" /><code>{"private int stairBuffer"}</code> | <span className="api-desc">Clear cells kept before and after a staircase.</span> |
| <Link id="m-usednodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{"> usedNodes"}</code> | <span className="api-desc">Nodes reached so far that may still branch.</span> |
| <Link id="m-wall" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" wall"}</code> | <span className="api-desc">Tag used for wall cells.</span> |
| <Link id="m-window" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" window"}</code> | <span className="api-desc">Tag used for window cells.</span> |
| <Link id="m-windowchance" /><code>{"private float windowChance"}</code> | <span className="api-desc">Chance of placing a window at each possible spot.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sizex" /><code>{"int SizeX { get; }"}</code> | <span className="api-desc">Width of the generation grid.</span> |
| <Link id="m-sizey" /><code>{"int SizeY { get; }"}</code> | <span className="api-desc">Height of the generation grid.</span> |
| <Link id="m-sizez" /><code>{"int SizeZ { get; }"}</code> | <span className="api-desc">Depth of the generation grid.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/alta-world-generation/generationbase-alta-pagac">{"GenerationBase"}</Link>{" generationBase)"}</code> | <span className="api-desc">Generates the rooms, tags walls, air and floors into the grid, then traverses the graph to add connections and windows.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-carve" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" Carve("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" current)"}</code> | <span className="api-desc">From one room node, picks a random unused (or, by `loopChance`, looping) neighbour and connects it; returns the next node or null.</span> |
| <Link id="m-createconnection" /><code>{"private bool CreateConnection("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> | <span className="api-desc">Connects two room nodes with a door if they are on the same floor, otherwise with stairs.</span> |
| <Link id="m-createdoor" /><code>{"private bool CreateDoor("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> | <span className="api-desc">Tries to tag a door cell in a random stretch of shared wall; fails if the cells around it aren't clear.</span> |
| <Link id="m-createroom" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" CreateRoom(bool isFloored, bool isExternal, int floor)"}</code> | <span className="api-desc">Makes a room node for a floor and adds it to `nodes`.</span> |
| <Link id="m-createroomnodes" /><code>{"private void CreateRoomNodes(int workingSizeX, int workingSizeY, int workingSizeZ)"}</code> | <span className="api-desc">Builds the node graph: one external node per floor, plus one per floor of each room, with their grid extents.</span> |
| <Link id="m-createstairs" /><code>{"private bool CreateStairs("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> | <span className="api-desc">Tries to fit a staircase along a shared wall between two floors, avoiding existing stairs and doors.</span> |
| <Link id="m-createwindow" /><code>{"private bool CreateWindow("}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roompath">{"BuildingRooms.RoomPath"}</Link>{" path)"}</code> | <span className="api-desc">Tags window cells at random (by `windowChance`) along wall between an external node and a room on the same floor.</span> |
| <Link id="m-getnext" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-roomnode">{"BuildingRooms.RoomNode"}</Link>{" GetNext()"}</code> | <span className="api-desc">Picks the next node to carve from: the most recently used, or rarely a random one.</span> |
| <Link id="m-getwalls" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/buildingrooms-noderange">{"BuildingRooms.NodeRange"}</Link>{"> GetWalls(IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> overlap, int minimumWall, Predicate<"}<Link to="/mod/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{"> predicate, int startResolution = 1, int startResolutionOffset = 0)"}</code> | <span className="api-desc">Finds straight runs of overlap cells at least a given length, optionally filtered and aligned to a step.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws each room node's bounds as a wire box.</span> |
| <Link id="m-starttraverse" /><code>{"private void StartTraverse()"}</code> | <span className="api-desc">Seeds traversal with the ground floor's external node and runs `Traverse`.</span> |
| <Link id="m-traverse" /><code>{"private void Traverse()"}</code> | <span className="api-desc">Repeatedly carves paths out from used nodes until every reachable node has been visited.</span> |

</details>
