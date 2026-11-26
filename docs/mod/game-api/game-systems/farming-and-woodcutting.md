---
title: Farming, woodcutting and carpentry
description: Growing plants with GrowerComponent and GrowerGroup, trees with WoodcutTree and TreeSpawner, and chiselling timber.
sidebar_position: 12
---

# Farming, woodcutting and carpentry

`Root.Township`: top-level growth types, `Alta.Woodcutting` and `Alta.Carpentry`. Server only for the rules.

## Farming

Plants grow through stages. A `GrowthDefinition` lists the stages, and something runs through them on timers: a `GrowerComponent` for one plant, or a `GrowerGroup` holding many `GrowthItem`s (a planted potato patch uses a `GrowerGroup` through `PotatoSapling`).

### GrowthDefinition and GrowthStage

`GrowthDefinition : HashedGeneralValue<GrowthDefinition>`: `GrowthStage[] Stages` and `IsChildingToParentAtEnd`.

`GrowthStage` (serializable class) describes one stage:

| Member | What it means |
| --- | --- |
| `float Duration` | Seconds in this stage before trying the next. |
| `float SurvivalRate` | Chance to survive into the next stage (checked when moving on from it). |
| `bool IsUsingRadius`, `float MinSeparationRadius`, `LayerMask RadiusCheckLayers` | Fail if something is too close. |
| `bool IsUsingRaycastCheck`, `float RaycastDistance`, `Vector3 RaycastDirection` | Fail if the way is blocked (room to grow). |
| `bool RetryStage` | On a failed check, try again later instead of dying. |
| `ObjectPipeline Prefabs`, `bool IsUsingPreviousPrefab` | What to spawn for this stage. |
| `KinematicForceMode ForceKinematic` | Force the spawned body kinematic or not. |

Representative stage timings from the `GrowthDefinition` assets (build `main-1.7.2.1.42203`, 17 in all, checked against a live server; the reference tables don't list them). Durations are `Timeline` seconds, so they shorten with the host's `TimeSpeedMultiplier`:

| Definition | Stages (duration, survival rate) |
| --- | --- |
| Apple Tree Growth Stages | Seedling (2 h, 0.3), Sapling (5 h), Young Tree (15 h), Final Tree |
| Apple Fruit Growth Stages | Bud (1 h, 0.5), Flower (2 h, 0.75), Unripe (5 h), Ripe (10 h), Ripe fall off (1 h) |
| Potato Vegetable Growth Stages | Unripe (3 h), Ripe |
| Oak Tree Growth Stages | Seedling (1 h), Sapling (2 h), Young Tree (5 h), Final Tree, with `RetryStage` on the later stages |

A survival rate of 1 is left out. Several durations carry an extra 5 seconds (3,605, 18,005 and so on) in the assets.

### GrowerComponent

`GrowerComponent : NetworkEntityBehaviour`, top level.

| Member | What it does |
| --- | --- |
| `void StartGrowing()` | Starts at stage 0. Called automatically on the server if `autoStart` is set. |
| `void StopGrowth(bool isKeepingChild)` | Stops and destroys the grower, optionally keeping the current plant. |
| `int CurrentStageIndex { get; }`, `GrowthStage CurrentStage { get; }`, `NetworkEntity CurrentStageEntity { get; }` | Where it is. |
| `bool IsRunning { get; }`, `bool IsSetup { get; }` | |

Each stage, the private `GoToStage` rolls survival and runs the checks. On success it spawns the stage's prefab and schedules the next stage on the game's `Timeline` after `Duration`. After the last stage it stops and keeps the plant. A failed check either retries (at least every 5 seconds) or kills the plant. The grower saves its state (`GrowthSaveData`), so growth carries on across restarts.

To speed up growth, a prefix on `GoToStage` can't change the delay (it's scheduled from inside the private `HandleChecksResult`). Patch `HandleChecksResult`'s `timeLeft` argument, or the stage `Duration` fields on the shared `GrowthDefinition` asset.

## Woodcutting

| Type | What it is |
| --- | --- |
| `TreeSpawner` | A spot in the world that grows a tree. On the server it spawns a random `PresetTree` with a random species and size, and when the tree is cut down at the base or split, waits 300 to 600 seconds (the code defaults, which every spawner in the dumped prefabs and scenes keeps) and spawns a new one. The wait is saved. |
| `WoodcutTree` | The tree: a tree of `MapNode`s (`Root`), each with a `WoodcutTreeModel` segment. `HealthObject`, `Rigidbody`, `TotalSize`, `Species`. Raises `Cut`. |
| `WoodcutTreeModel` | One segment. Takes hits on its `WoodcutPoints`; when chopped through (`PieceChopped`, server) it spawns the species' wedge or stick drops at its drop locations and destroys itself. |
| `TreeSpecies` | Species asset: physical material, hit effects, `Wedge` and `Stick` drop distributions, damage and break multipliers, `DropVelocity`, leaf materials. |
| `TreeDecay` | A `BasicDecay` on a tree: once a felled tree has come loose from its spawner (no chunking parent), it decays, but not while it's kinematic or within 120 seconds of its last hit. Follows the host's `DecayMultiplier`. |
| `PresetTree`, `TreeBuilder`, `TreeSize` | Tree shapes and building them at runtime. |
| `WoodcutTreeBaker` and the `*Baker` types | Mesh baking. Client and build side. |

Woodcutting XP comes from tool hits through the impact channel system; see [Progression](progression.md).

## Carpentry (chiselling)

`Alta.Carpentry`. You put a timber block on a `ChisellingDeck`, place a chisel guide, and chisel the block's pieces away in stages.

| Type | What it is |
| --- | --- |
| `ChisellingDeck` | `NetworkEntityBehaviour`. Holds the current `TimberBlock` (`CurrentBlock`), the `Guide` (`ChiselDefinition`), its size and `MaxSize`. `Resize(ChiselBlockSize)` is server only. |
| `ChiselDefinition` | `SimpleHashedGeneralValue<ChiselDefinition>` under `Carpentry/Chisel Definitions`: a recipe page for chiselling. `Size`, `ChiselOrder` (12 shards), `Prefabs` to spawn when done. |
| `TimberBlock` | The block being chiselled, in stages (outer, inner, core). When finished it frees the resulting pickups and reports a `SpecificSpawnItemTaskArgument` per item type, with whether the guide was followed. |
| `TimberPiece`, `TimberPieceGroup`, `TimberBlockSpawner` | Pieces of a block and spawning them. |
| `ChiselingTool`, `Chiselable` | The chisel and things it can hit. `CraftingPieceChiselable` lets generic crafting pieces be chiselled. |
| `RecipePlacer`, `BuilderDock` | Parts of a chiselling deck: the guide's light and pulse effects, and the dock that shows the piece being built. |

## See also

- [Progression](progression.md)
- [Crafting](crafting.md)
- [World](../world/overview.md), for spawning, chunks and decay
