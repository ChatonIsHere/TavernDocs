---
title: "MiningBaseGenerator"
description: "Server-side generator that builds a random mine base from StructurePart tiles on a grid and spawns them as child entities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningBaseGenerator

A **class** in `Root.Township`, no namespace.

Server-side generator that builds a random mine base from `StructurePart` tiles on a grid and spawns them as child entities. It checks the space with physics first so parts avoid existing terrain.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour)
- **Nested types** [`PartOption`](/game-api/types/global-m-o/miningbasegenerator-partoption), [`Point`](/game-api/types/global-m-o/miningbasegenerator-point), [`Possibility`](/game-api/types/global-m-o/miningbasegenerator-possibility)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MiningBaseGenerator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>28 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allsides" /><code>{"private const "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" AllSides"}</code> | Constant flag set holding all six `StructureSide` directions. |
| <Link id="m-centerpieces" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] centerPieces"}</code> | Weighted parts the generation can start from. |
| <Link id="m-collidewith" /><code>{"private LayerMask collideWith"}</code> | Layers that count as blocked when scanning the space. |
| <Link id="m-depth" /><code>{"private int depth"}</code> | Grid size along Z, in tiles. |
| <Link id="m-flooredgechance" /><code>{"private float floorEdgeChance"}</code> | Chance that each bottom-layer cell starts with open gates on all four horizontal sides. |
| <Link id="m-halfcontinuationcount" /><code>{"private int halfContinuationCount"}</code> | Once more parts than this are placed, the chance of spreading further is halved. |
| <Link id="m-height" /><code>{"private int height"}</code> | Grid size along Y, in tiles. |
| <Link id="m-heights" /><code>{"private int[,] heights"}</code> | Per column height array; reset each attempt. |
| <Link id="m-horizontalmask" /><code>{"private const int HorizontalMask"}</code> | Bit mask (15) for the four horizontal `StructureSide` flags. |
| <Link id="m-incomingair" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingAir"}</code> | Per cell sides that neighbours say are open air. |
| <Link id="m-incominggates" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingGates"}</code> | Per cell sides where a neighbour has an open gate. |
| <Link id="m-incomingrequireair" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingRequireAir"}</code> | Per cell sides where a neighbour needs air next to it. |
| <Link id="m-incomingrequiresolid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingRequireSolid"}</code> | Per cell sides where a neighbour needs solid next to it. |
| <Link id="m-incomingsolid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingSolid"}</code> | Per cell sides that neighbours say are solid. |
| <Link id="m-isregenerating" /><code>{"private bool isRegenerating"}</code> | Inspector button flag labelled Regenerate. |
| <Link id="m-maximumattempts" /><code>{"private int maximumAttempts"}</code> | How many generation attempts to make before giving up. |
| <Link id="m-maximumspawned" /><code>{"private int maximumSpawned"}</code> | An attempt fails if it places this many parts or more. |
| <Link id="m-minimumspawned" /><code>{"private int minimumSpawned"}</code> | An attempt fails if it places fewer parts than this. |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] parts"}</code> | Weighted parts used to fill out the base after the center piece. |
| <Link id="m-priority" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{"> priority"}</code> | Cells to process before the normal queue. |
| <Link id="m-queue" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{"> queue"}</code> | Cells waiting to have a part placed at them. |
| <Link id="m-results" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> results"}</code> | Placements chosen in the current attempt. |
| <Link id="m-spacialawareness" /><code>{"private bool[,,] spacialAwareness"}</code> | Per cell flags for cells already blocked by world geometry. |
| <Link id="m-spacialawarenessfloor" /><code>{"private bool[,] spacialAwarenessFloor"}</code> | Per column flags for whether ground was found below the bottom layer. |
| <Link id="m-structuretype" /><code>{"private "}<Link to="/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" structureType"}</code> | Structure type that supplies the tile size. |
| <Link id="m-taken" /><code>{"private bool[,,] taken"}</code> | Per cell flags for cells already filled. |
| <Link id="m-verticalcheckoffset" /><code>{"private float verticalCheckOffset"}</code> | Height added to each cell's centre before the space checks. |
| <Link id="m-width" /><code>{"private int width"}</code> | Grid size along X, in tiles. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkpossible" /><code>{"bool CheckPossible("}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{" possibility, out int pathCount, bool isForced = false)"}</code> | Checks whether a part at a given offset and rotation fits the grid and matches the gate, solid and air rules of its neighbours; outputs how many gates connect. |
| <Link id="m-getrandom" /><code><Link to="/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{" GetRandom("}<Link to="/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] parts, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Weighted random pick: either a `PartOption` (chance plus biome attribute bonus) or an index into a possibility list. |
| <Link id="m-getrandom-2" /><code>{"int GetRandom(List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> possibilities)"}</code> | Weighted random pick: either a `PartOption` (chance plus biome attribute bonus) or an index into a possibility list. |
| <Link id="m-rotate" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Rotate("}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" side, int rotations)"}</code> | Rotates the horizontal bits of a `StructureSide` mask by a number of 90 degree steps, leaving up and down alone. |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: scans the space, retries `Attempt` up to `maximumAttempts` times, then spawns the result if one succeeded. |

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyspacialawareness" /><code>{"private void ApplySpacialAwareness()"}</code> | Marks grid cells blocked by world geometry as taken and clears the floor flag where no ground was found below. Called at the start of each attempt. |
| <Link id="m-attempt" /><code>{"private bool Attempt("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Runs one full generation pass from a random center piece. Returns true if the part count lands between `minimumSpawned` and `maximumSpawned`. |
| <Link id="m-choosepossibility" /><code>{"private void ChoosePossibility("}<Link to="/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" point, List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> possibilities)"}</code> | Picks a weighted random placement for a queued cell, discarding ones that don't fit, and marks the first one that does. |
| <Link id="m-cullresults" /><code>{"private void CullResults()"}</code> | Removes placed parts whose cubes connect to fewer gates than their `MinimumGatesForCulling` value. |
| <Link id="m-generatepossibilities" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> GeneratePossibilities("}<Link to="/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" point, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Lists every part, rotation, drop and offset that could cover a grid cell, weighted by the part's chance and biome attribute. |
| <Link id="m-generatespacialawareness" /><code>{"private void GenerateSpacialAwareness()"}</code> | Box-casts each grid cell and raycasts down from the bottom layer to record which cells are blocked and which have ground under them. |
| <Link id="m-mark" /><code>{"private void Mark("}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{" possibility, float continuationChance = 1)"}</code> | Records a placed part: marks its cells as taken and pushes its gate, solid and air sides onto neighbouring cells, maybe queueing them. |
| <Link id="m-markcenterpiece" /><code>{"private void MarkCenterPiece("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Places a random center piece at a random spot on the bottom layer, ignoring neighbour rules. |
| <Link id="m-markincoming" /><code>{"private void MarkIncoming(int x, int y, int z, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" outgoingSides, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map, float queueChance = -1)"}</code> | Sets or clears the matching side flag on each neighbour of a cell in one of the incoming maps, and may queue that neighbour. |
| <Link id="m-matchall" /><code>{"private bool MatchAll(int x, int y, int z, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map)"}</code> | True if every bit in one side mask is also set in the other (either the given sides or the map cell is the required set). |
| <Link id="m-matchall-2" /><code>{"private bool MatchAll(int x, int y, int z, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides)"}</code> | True if every bit in one side mask is also set in the other (either the given sides or the map cell is the required set). |
| <Link id="m-matchany" /><code>{"private bool MatchAny(int x, int y, int z, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map)"}</code> | True if any of the given sides is set in the map cell. |
| <Link id="m-numberofsetbits" /><code>{"private int NumberOfSetBits(int i)"}</code> | Counts the set bits in an integer. Used to count connected gates when culling. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Clears results and queues and rebuilds the grid maps, with solid floor below, air inside and random floor-edge gates. |
| <Link id="m-spawnresults" /><code>{"private void SpawnResults("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Spawns each chosen part as a child entity and places it on the grid using the structure type's tile size. |

</details>
