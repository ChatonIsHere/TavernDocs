---
title: "MiningBaseGenerator"
description: "class MiningBaseGenerator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MiningBaseGenerator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour)
- **Nested types** [`PartOption`](/game-api/types/global-m-o/miningbasegenerator-partoption), [`Point`](/game-api/types/global-m-o/miningbasegenerator-point), [`Possibility`](/game-api/types/global-m-o/miningbasegenerator-possibility)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MiningBaseGenerator()"}</code> |

## Fields

<details>
<summary>28 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-allsides" /><code>{"private const "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" AllSides"}</code> |
| <Link id="m-centerpieces" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] centerPieces"}</code> |
| <Link id="m-collidewith" /><code>{"private LayerMask collideWith"}</code> |
| <Link id="m-depth" /><code>{"private int depth"}</code> |
| <Link id="m-flooredgechance" /><code>{"private float floorEdgeChance"}</code> |
| <Link id="m-halfcontinuationcount" /><code>{"private int halfContinuationCount"}</code> |
| <Link id="m-height" /><code>{"private int height"}</code> |
| <Link id="m-heights" /><code>{"private int[,] heights"}</code> |
| <Link id="m-horizontalmask" /><code>{"private const int HorizontalMask"}</code> |
| <Link id="m-incomingair" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingAir"}</code> |
| <Link id="m-incominggates" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingGates"}</code> |
| <Link id="m-incomingrequireair" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingRequireAir"}</code> |
| <Link id="m-incomingrequiresolid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingRequireSolid"}</code> |
| <Link id="m-incomingsolid" /><code>{"private "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] incomingSolid"}</code> |
| <Link id="m-isregenerating" /><code>{"private bool isRegenerating"}</code> |
| <Link id="m-maximumattempts" /><code>{"private int maximumAttempts"}</code> |
| <Link id="m-maximumspawned" /><code>{"private int maximumSpawned"}</code> |
| <Link id="m-minimumspawned" /><code>{"private int minimumSpawned"}</code> |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] parts"}</code> |
| <Link id="m-priority" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{"> priority"}</code> |
| <Link id="m-queue" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{"> queue"}</code> |
| <Link id="m-results" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> results"}</code> |
| <Link id="m-spacialawareness" /><code>{"private bool[,,] spacialAwareness"}</code> |
| <Link id="m-spacialawarenessfloor" /><code>{"private bool[,] spacialAwarenessFloor"}</code> |
| <Link id="m-structuretype" /><code>{"private "}<Link to="/game-api/types/global-s/structuretype">{"StructureType"}</Link>{" structureType"}</code> |
| <Link id="m-taken" /><code>{"private bool[,,] taken"}</code> |
| <Link id="m-verticalcheckoffset" /><code>{"private float verticalCheckOffset"}</code> |
| <Link id="m-width" /><code>{"private int width"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-checkpossible" /><code>{"bool CheckPossible("}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{" possibility, out int pathCount, bool isForced = false)"}</code> |
| <Link id="m-getrandom" /><code><Link to="/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{" GetRandom("}<Link to="/game-api/types/global-m-o/miningbasegenerator-partoption">{"MiningBaseGenerator.PartOption"}</Link>{"[] parts, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-getrandom-2" /><code>{"int GetRandom(List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> possibilities)"}</code> |
| <Link id="m-rotate" /><code><Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" Rotate("}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" side, int rotations)"}</code> |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>15 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-applyspacialawareness" /><code>{"private void ApplySpacialAwareness()"}</code> |
| <Link id="m-attempt" /><code>{"private bool Attempt("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-choosepossibility" /><code>{"private void ChoosePossibility("}<Link to="/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" point, List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> possibilities)"}</code> |
| <Link id="m-cullresults" /><code>{"private void CullResults()"}</code> |
| <Link id="m-generatepossibilities" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{"> GeneratePossibilities("}<Link to="/game-api/types/global-m-o/miningbasegenerator-point">{"MiningBaseGenerator.Point"}</Link>{" point, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-generatespacialawareness" /><code>{"private void GenerateSpacialAwareness()"}</code> |
| <Link id="m-mark" /><code>{"private void Mark("}<Link to="/game-api/types/global-m-o/miningbasegenerator-possibility">{"MiningBaseGenerator.Possibility"}</Link>{" possibility, float continuationChance = 1)"}</code> |
| <Link id="m-markcenterpiece" /><code>{"private void MarkCenterPiece("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-markincoming" /><code>{"private void MarkIncoming(int x, int y, int z, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" outgoingSides, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map, float queueChance = -1)"}</code> |
| <Link id="m-matchall" /><code>{"private bool MatchAll(int x, int y, int z, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map)"}</code> |
| <Link id="m-matchall-2" /><code>{"private bool MatchAll(int x, int y, int z, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides)"}</code> |
| <Link id="m-matchany" /><code>{"private bool MatchAny(int x, int y, int z, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{" sides, "}<Link to="/game-api/types/global-s/structureside">{"StructureSide"}</Link>{"[,,] map)"}</code> |
| <Link id="m-numberofsetbits" /><code>{"private int NumberOfSetBits(int i)"}</code> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |
| <Link id="m-spawnresults" /><code>{"private void SpawnResults("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

</details>
