---
title: "MiningBaseGenerator"
description: "Server-side generator that builds a random mine base from StructurePart tiles on a grid and spawns them as child entities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningBaseGenerator

A **class** in `Root.Township`, the global namespace.

Server-side generator that builds a random mine base from `StructurePart` tiles on a grid and spawns them as child entities. It checks the space with physics first so parts avoid existing terrain.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour)
- **Nested types** [`PartOption`](/mod/game-api/types/global-m-o/miningbasegenerator-partoption), [`Point`](/mod/game-api/types/global-m-o/miningbasegenerator-point), [`Possibility`](/mod/game-api/types/global-m-o/miningbasegenerator-possibility)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MiningBaseGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>28 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allsides" /><code>{"private const "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" AllSides"}</code> | <span className="api-desc">Constant flag set holding all six `StructureSide` directions.</span> |
| <Link id="m-centerpieces" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] centerPieces"}</code> | <span className="api-desc">Weighted parts the generation can start from.</span> |
| <Link id="m-collidewith" /><code>{"private LayerMask collideWith"}</code> | <span className="api-desc">Layers that count as blocked when scanning the space.</span> |
| <Link id="m-depth" /><code>{"private int depth"}</code> | <span className="api-desc">Grid size along Z, in tiles.</span> |
| <Link id="m-flooredgechance" /><code>{"private float floorEdgeChance"}</code> | <span className="api-desc">Chance that each bottom-layer cell starts with open gates on all four horizontal sides.</span> |
| <Link id="m-halfcontinuationcount" /><code>{"private int halfContinuationCount"}</code> | <span className="api-desc">Once more parts than this are placed, the chance of spreading further is halved.</span> |
| <Link id="m-height" /><code>{"private int height"}</code> | <span className="api-desc">Grid size along Y, in tiles.</span> |
| <Link id="m-heights" /><code>{"private int[,] heights"}</code> | <span className="api-desc">Per column height array; reset each attempt.</span> |
| <Link id="m-horizontalmask" /><code>{"private const int HorizontalMask"}</code> | <span className="api-desc">Bit mask (15) for the four horizontal `StructureSide` flags.</span> |
| <Link id="m-incomingair" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingAir"}</code> | <span className="api-desc">Per cell sides that neighbours say are open air.</span> |
| <Link id="m-incominggates" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingGates"}</code> | <span className="api-desc">Per cell sides where a neighbour has an open gate.</span> |
| <Link id="m-incomingrequireair" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingRequireAir"}</code> | <span className="api-desc">Per cell sides where a neighbour needs air next to it.</span> |
| <Link id="m-incomingrequiresolid" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingRequireSolid"}</code> | <span className="api-desc">Per cell sides where a neighbour needs solid next to it.</span> |
| <Link id="m-incomingsolid" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingSolid"}</code> | <span className="api-desc">Per cell sides that neighbours say are solid.</span> |
| <Link id="m-isregenerating" /><code>{"private bool isRegenerating"}</code> | <span className="api-desc">Inspector button flag labelled Regenerate.</span> |
| <Link id="m-maximumattempts" /><code>{"private int maximumAttempts"}</code> | <span className="api-desc">How many generation attempts to make before giving up.</span> |
| <Link id="m-maximumspawned" /><code>{"private int maximumSpawned"}</code> | <span className="api-desc">An attempt fails if it places this many parts or more.</span> |
| <Link id="m-minimumspawned" /><code>{"private int minimumSpawned"}</code> | <span className="api-desc">An attempt fails if it places fewer parts than this.</span> |
| <Link id="m-parts" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] parts"}</code> | <span className="api-desc">Weighted parts used to fill out the base after the center piece.</span> |
| <Link id="m-priority" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{"> priority"}</code> | <span className="api-desc">Cells to process before the normal queue.</span> |
| <Link id="m-queue" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{"> queue"}</code> | <span className="api-desc">Cells waiting to have a part placed at them.</span> |
| <Link id="m-results" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> results"}</code> | <span className="api-desc">Placements chosen in the current attempt.</span> |
| <Link id="m-spacialawareness" /><code>{"private bool[,,] spacialAwareness"}</code> | <span className="api-desc">Per cell flags for cells already blocked by world geometry.</span> |
| <Link id="m-spacialawarenessfloor" /><code>{"private bool[,] spacialAwarenessFloor"}</code> | <span className="api-desc">Per column flags for whether ground was found below the bottom layer.</span> |
| <Link id="m-structuretype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" structureType"}</code> | <span className="api-desc">Structure type that supplies the tile size.</span> |
| <Link id="m-taken" /><code>{"private bool[,,] taken"}</code> | <span className="api-desc">Per cell flags for cells already filled.</span> |
| <Link id="m-verticalcheckoffset" /><code>{"private float verticalCheckOffset"}</code> | <span className="api-desc">Height added to each cell's centre before the space checks.</span> |
| <Link id="m-width" /><code>{"private int width"}</code> | <span className="api-desc">Grid size along X, in tiles.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkpossible" /><code>{"bool CheckPossible("}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{" possibility, out int pathCount, bool isForced = false)"}</code> | <span className="api-desc">Checks whether a part at a given offset and rotation fits the grid and matches the gate, solid and air rules of its neighbours; outputs how many gates connect.</span> |
| <Link id="m-getrandom" /><code><Link to="/mod/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{" GetRandom("}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] parts, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Weighted random pick: either a `PartOption` (chance plus biome attribute bonus) or an index into a possibility list.</span> |
| <Link id="m-getrandom-2" /><code>{"int GetRandom(List<"}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> possibilities)"}</code> | <span className="api-desc">Weighted random pick: either a `PartOption` (chance plus biome attribute bonus) or an index into a possibility list.</span> |
| <Link id="m-rotate" /><code><Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Rotate("}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" side, int rotations)"}</code> | <span className="api-desc">Rotates the horizontal bits of a `StructureSide` mask by a number of 90 degree steps, leaving up and down alone.</span> |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: scans the space, retries `Attempt` up to `maximumAttempts` times, then spawns the result if one succeeded.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyspacialawareness" /><code>{"private void ApplySpacialAwareness()"}</code> | <span className="api-desc">Marks grid cells blocked by world geometry as taken and clears the floor flag where no ground was found below. Called at the start of each attempt.</span> |
| <Link id="m-attempt" /><code>{"private bool Attempt("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Runs one full generation pass from a random center piece. Returns true if the part count lands between `minimumSpawned` and `maximumSpawned`.</span> |
| <Link id="m-choosepossibility" /><code>{"private void ChoosePossibility("}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" point, List<"}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> possibilities)"}</code> | <span className="api-desc">Picks a weighted random placement for a queued cell, discarding ones that don't fit, and marks the first one that does.</span> |
| <Link id="m-cullresults" /><code>{"private void CullResults()"}</code> | <span className="api-desc">Removes placed parts whose cubes connect to fewer gates than their `MinimumGatesForCulling` value.</span> |
| <Link id="m-generatepossibilities" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> GeneratePossibilities("}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" point, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Lists every part, rotation, drop and offset that could cover a grid cell, weighted by the part's chance and biome attribute.</span> |
| <Link id="m-generatespacialawareness" /><code>{"private void GenerateSpacialAwareness()"}</code> | <span className="api-desc">Box-casts each grid cell and raycasts down from the bottom layer to record which cells are blocked and which have ground under them.</span> |
| <Link id="m-mark" /><code>{"private void Mark("}<Link to="/mod/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{" possibility, float continuationChance = 1)"}</code> | <span className="api-desc">Records a placed part: marks its cells as taken and pushes its gate, solid and air sides onto neighbouring cells, maybe queueing them.</span> |
| <Link id="m-markcenterpiece" /><code>{"private void MarkCenterPiece("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Places a random center piece at a random spot on the bottom layer, ignoring neighbour rules.</span> |
| <Link id="m-markincoming" /><code>{"private void MarkIncoming(int x, int y, int z, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" outgoingSides, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map, float queueChance = -1)"}</code> | <span className="api-desc">Sets or clears the matching side flag on each neighbour of a cell in one of the incoming maps, and may queue that neighbour.</span> |
| <Link id="m-matchall" /><code>{"private bool MatchAll(int x, int y, int z, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map)"}</code> | <span className="api-desc">True if every bit in one side mask is also set in the other (either the given sides or the map cell is the required set).</span> |
| <Link id="m-matchall-2" /><code>{"private bool MatchAll(int x, int y, int z, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides)"}</code> | <span className="api-desc">True if every bit in one side mask is also set in the other (either the given sides or the map cell is the required set).</span> |
| <Link id="m-matchany" /><code>{"private bool MatchAny(int x, int y, int z, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides, "}<Link to="/mod/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map)"}</code> | <span className="api-desc">True if any of the given sides is set in the map cell.</span> |
| <Link id="m-numberofsetbits" /><code>{"private int NumberOfSetBits(int i)"}</code> | <span className="api-desc">Counts the set bits in an integer. Used to count connected gates when culling.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Clears results and queues and rebuilds the grid maps, with solid floor below, air inside and random floor-edge gates.</span> |
| <Link id="m-spawnresults" /><code>{"private void SpawnResults("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Spawns each chosen part as a child entity and places it on the grid using the structure type's tile size.</span> |

</details>
