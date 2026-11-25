---
title: Populations and spawners
description: How creatures, ore, plants and other respawning things are spawned. PopulationDefinition, PopulationSample, PopulationSpawnArea, ecosystems, global populations, and how to change respawn rates.
sidebar_position: 13
---

# Populations and spawners

Anything that grows back (creatures, ore boulders, sandstone, crystals, plants, sticks) comes from a population. A population keeps a number, `CurrentPopulation`, that grows on a timer up to a maximum, and makes sure that many things are spawned while its chunk is loaded. It's all server side, in `Alta.Populations` in `Root.Township`.

## The pieces

| Type | What it is |
| --- | --- |
| `PopulationDefinition` | An asset: which prefabs, how fast it grows, where it may spawn, whether it's a creature. |
| `PopulationSample` | One live population: a definition, a current and maximum count, the spawned entities. Not a component. |
| `PopulationSpawnArea` | An entity with a population and a fixed set of spawn points. Placed in chunks, or spawned with `spawn population`. |
| `Ecosystem` | A chunk's (or cave layer's) set of populations, with spawn points worked out from the ground. |
| `PopulationFolderBase`, `PopulationFolder` | The entity behaviour that owns a `PopulationSample` (`Population` property). `PopulationSpawnArea` is one. |
| `PopulationSpawnInformation` | Where a population can spawn: `PointsPopulationValue` (a list of points), `SimplePopulationValue` (asks an `ISpawnPositions`), `CavePopulationSpawnInformation`. |
| `SpawnPoint` | One place, with `Position`, `Rotation` and `IsFree`. |
| `PopulationDefinitionManager` | Saved per-definition overrides of the respawn time. |
| `GlobalPopulationDefinition`, `GlobalPopulationsManager` | Populations spread across the whole world rather than tied to a spot. |

## How a population ticks

1. When a sample is set up in its chunk (`PopulationSample.Initialize(chunk, spawner)`), it registers a repeating `Timeline` callback every `Definition.TickFrequency` seconds.
2. Each tick (`CheckPopulation`, private): nothing happens if the maximum is 0. If the count is over the maximum (and not all of it is spawned), it drops by one. If it's under, it reads `PopulationGrowthCurve` once at the current fill fraction, then up to `MaxPopulationGrowth` times takes a random 0 to 1 off that value and adds one while what's left stays above 0. The rolls are cumulative, so each extra growth in one tick is less likely than the last. Then, if the chunk is fully loaded, `CheckSpawned`.
3. `CheckSpawned` spawns until the spawned count reaches `ceil(CurrentPopulation * PercentageOfPopulationSpawned)`. Each spawn takes a free spawn point that passes `IsPositionValid`, picks a prefab (`GetRandom(spawnData)`, through a biome `Distribution` if the definition has one), places it, and runs `InitializeWithChildrenAsServer`. After three failed spawns in one go it stops, and each failure lowers `CurrentPopulation` by one.
4. Creatures go into the chunk with `SaveMode.Creature`, so they aren't saved. Everything else rides on the spawn area (`ChunkingParent`) with `SaveMode.Child`, so it saves inside it.

The timeline keeps running while the chunk is unloaded, so the count keeps growing; the spawns catch up when the chunk loads (`CheckSpawned` runs when it's fully loaded). When a saved population loads (`LoadTime`), it runs one tick for each interval it missed while the server was off.

When an entity leaves the population:

| How | Effect |
| --- | --- |
| Destroyed for real, or removed by one of its `IPopulationRemovalMethod` components | `LoseMember`: the count goes down by one and the spawn point stays occupied for `OnDeathOccupyPointFor` seconds. It grows back on later ticks. |
| Its chunk unloaded | The spawn point is freed; the count stays. It respawns when the chunk loads. |

## PopulationDefinition

`Alta.Populations.PopulationDefinition`, a `HashedGeneralValue` asset. Get them with `HashedGeneralValue<PopulationDefinition>.All` or `.Get(name)` (`Alta.HashedGeneralValue<T>`, in the `Alta.Values` assembly). `spawn population-list` lists them.

| Member | What it does | Notes |
| --- | --- | --- |
| `float TickFrequency { get; }` | Seconds between growth ticks: the override from `PopulationDefinitionManager` (or `BaseTickFrequency`), divided by the server's `SpawningRateMultiplier`. | Read every time a tick is set up. |
| `float BaseTickFrequency { get; }` | The asset's own value. | |
| `int MaxPopulationGrowth { get; }` | Most it can grow in one tick (field default 5). | |
| `AnimationCurve PopulationGrowthCurve` | Growth chance by how full it is. | |
| `float PercentageOfPopulationSpawned` | How much of the count is actually spawned. | |
| `bool IsCreature` | Creatures: not saved, chunked directly. Halved maximum on simple servers. | |
| `uint GetRandom(SpawnData spawnData)` | A prefab hash: from its `Distribution` with the biome's attributes, or a random one of its prefab hashes (a festival's set if one is active). | |
| `bool IsPositionValid(SpawnPoint point)` | A `Physics.CheckSphere` at the point against `layersToAvoid`. Always true if its sphere radius is 0 or less. | The shipped ore, sandstone and crystal definitions have a radius of -1, so their points are never checked. |
| `bool IsUsingSafeSpawning` | Spawn raised by the prefab's size so it drops in. | |
| `bool IsKinematicOnSpawn`, `IsUsingPointRotation`, `IsUsingRandomRotation`, `Quaternion GetRandomRotation()` | Placement. | |
| `float OnDeathOccupyPointFor` | How long a point stays blocked after a death. | |

### Shipped values

From the game's `PopulationDefinition` assets (79 of them). `TickFrequency` is in seconds, before the server's spawn rate multiplier.

| Definition | Tick | Max growth per tick | Spawned share | Creature | Sphere check |
| --- | --- | --- | --- | --- | --- |
| Boulder Population (cave ore) | 600 | 7 | 100% | no | off |
| Mining Crystals Population | 600 | 7 | 100% | no | off |
| Crystal Structures Population | 600 | 7 | 100% | no | off |
| Sandstone Population Population | 86,400 | 100 | 100% | no | off |
| Copper Boulder Population, Iron Boulder Population | 3,600 | 7 | 100% | no | off |
| Stone Boulder Population | 88,200 | 5 | 100% | no | off |
| Explosion Boulder Population | 10,800 | 3 | 100% | no | off |
| Wyrm Population | 1,800 | 5 | 35% | yes | 0.5 m |
| Crystal Wyrm Population | 1,800 | 5 | 35% | yes | 0.8 m |
| Turabada Overworld Population | 1,800 | 5 | 100% | yes | 0.5 m |
| Gotera Population | 1,800 | 3 | 100% | yes | 0.5 m |
| Spriggull Population | 1,800 | 2 | 50% | yes | 1 m |
| Stick Population, Stone Population | 1,800 | 2, 5 | 70% | no | 0.5 m |
| Apple, Blueberry, Eggplant Population | 1,800 | 1 | 60% | no | off |
| Mushroom Population, Health Vine Population | 5,400 | 5 | 70% | no | 0.5 m |
| Hebios Camp Population | 43,200 | 1 | 100% | no | off |

So cave ore comes back every 10 minutes, up to 7 nodes a tick, and wyrms every 30 minutes with only about a third of the count actually spawned at once. Wyrms also keep a point blocked for 60 s after a death (120 s for crystal wyrms).

## PopulationSample

`Alta.Populations.PopulationSample`, a plain class. Get it from `folder.Population` (`PopulationSpawnArea`, `PopulationFolder`) or a hook.

| Member | What it does |
| --- | --- |
| `PopulationDefinition Definition`, `LocationChunk Chunk`, `PopulationFolderBase Parent` | |
| `int CurrentPopulation { get; }`, `int MaximumPopulation { get; }` | The count and its cap. Private setters. |
| `Dictionary<NetworkEntity, PopulationItem> SpawnedEntities { get; }` | What's spawned now, with each one's spawn point. |
| `bool IsInitialized { get; }` | |
| `event PopulationItemSpawnHandler NewEntitySpawned` | `(sample, entity)` after each spawn. |
| `PopulationDelegate OnPopulationStarted`, `OnPopulationMaxed`, `OnPopulationDiedOut` | Public delegate fields. |
| `void CheckSpawned()` | Spawn up to the target now. |
| `void ForceSpawn(int targetPopulation)` | Raise the count to `targetPopulation` (capped at the maximum) and spawn. |
| `void ForceKillAll()` | Destroy every spawned entity and set the count to 0. |
| `bool RequestMove(NetworkEntity entity, bool isAllowingSame = true)` | Move a spawned entity to another free point. |
| `void LoseMember(NetworkEntity entity)` | Count a loss. |
| `void Destroy()` | Stop ticking. |

## PopulationSpawnArea

`Alta.Populations.PopulationSpawnArea`, a `PopulationFolder` entity behaviour. On `InitializeAsServer` it builds its spawn points (a fixed number from its `ISpawnPositions` shape, or asking the shape each time), makes its sample if it has none, and ticks once its chunk is loaded.

| Member | What it does |
| --- | --- |
| `static bool IsSkippingCreatures { get; set; }` | When true, creature spawn areas destroy themselves as they initialize. A blunt way to turn creatures off. |
| `void Setup(PopulationDefinition definition, int startingPopulation, int maxPopulation)` | Server: set before `InitializeAsServer`. |
| `void ForceSpawn(int target)`, `ForceMax()`, `ForceDestroy()` | Wrappers on the sample. |
| `void DestroyPopulation(bool isUnload)` | Stops it, and destroys what it spawned if `destroySpawnedWithThis` is set and it isn't an unload. |

`spawn population <player> <population> [Disk|Sphere|Directional] [size] [start] [max]` spawns one of three built-in area prefabs (hashes 65062, 1222 and 23796) on the ground in front of the player, then `Setup`, `InitializeAsServer` and chunks it. That's the pattern to copy for your own spawn areas.

## Changing respawn rates

The game has a proper switch for this. `PopulationDefinitionManager` keeps an override per definition, saves it, and tells running samples to reschedule:

```csharp
PopulationDefinitionManager.SetValue(definition, 120f); // seconds between ticks
```

The console has it as `settings population set-time <population> <seconds>`, `check-time` and `reset-time`. The server's `SpawningRateMultiplier` setting divides every population's time on top.

For rules the switch can't express, patch the getter. It's read whenever a tick is scheduled, so keep the postfix cheap:

```csharp
using Alta.Populations;
using HarmonyLib;

// Halve how often one population ticks.
[HarmonyPatch(typeof(PopulationDefinition), nameof(PopulationDefinition.TickFrequency), MethodType.Getter)]
static class FasterPopulation
{
    static void Postfix(PopulationDefinition __instance, ref float __result)
    {
        if (__instance.name == "Placeholder Population") __result *= 0.5f;
    }
}
```

## Hooking it

| Target | Why |
| --- | --- |
| `PopulationSample.Initialize(LocationChunk, ISpawnSystem)` | Every sample as it goes live. Subscribe to `NewEntitySpawned` here. It can run more than once for a sample. |
| `PopulationSample.CheckSpawned()` | Each spawn pass. |
| `PopulationSample.SpawnRandom(PopulationSpawnInformation)` | Private. One spawn. CheetosOreSpawnFix patches it. |
| `PopulationSample.CheckPopulation()` | Private. One tick. |
| `PointsPopulationValue.GetRandom(...)`, `GetPoint(...)` | Which spawn point is picked. |
| `PopulationDefinition.IsPositionValid(SpawnPoint)` | Whether a point is blocked. |
| `PopulationDefinition.TickFrequency`, `MaxPopulationGrowth` getters | Rates. |

```csharp
using Alta.Networking;
using Alta.Populations;
using HarmonyLib;
using MelonLoader;

// Hear about everything a population spawns.
[HarmonyPatch(typeof(PopulationSample), nameof(PopulationSample.Initialize))]
static class WatchPopulation
{
    static void Postfix(PopulationSample __instance)
    {
        __instance.NewEntitySpawned -= OnSpawned; // Initialize can run again for the same sample
        __instance.NewEntitySpawned += OnSpawned;
    }

    static void OnSpawned(PopulationSample population, NetworkEntity item)
    {
        MelonLogger.Msg($"{population.Definition.name} spawned {item.SafeName} in {population.Chunk?.ChunkIdentifier}");
    }
}
```

CheetosOreSpawnFix is the best example of reworking a population without replacing it: it patches `Initialize`, `CheckSpawned`, `Destroy`, `SpawnRandom`, `LoadTime`, `CheckPopulation`, the getters above, and `ClusterGenerator` to keep each mine level's ore mix balanced and boulders out of the rock. CavePerformance lowers wyrm targets by rewriting `CheckSpawned`.

## Global populations

`GlobalPopulationDefinition` spreads a population over the whole world instead of a spot: each tick it picks chunks weighted by biome attributes (`LocationChunkHelper.GetChunkWeightingsForPosition`), and spawns there when the chunk is fully loaded, at a surface point (optionally snapped to the navmesh). Those entities are `SaveMode.Ignore` and decay on a timer. `GlobalPopulationsManager` (a scene behaviour) starts them. The `global-population` console module lists them and can resize or teleport to them. The game ships three: `Diggable Mounds Global Population` (20 at a time, on a frequency timer), `Heart Receptacle Global Population` (up to 15, starting from none) and `Phantom Global Population` (20, on the navmesh, with a night-only timer).

## Other types in this area

| Type | What it is |
| --- | --- |
| `PopulationItem`, `PopulationItemSpawnHandler` | Per-entity record (its spawn point); the spawn event's delegate. |
| `IPopulationRemovalMethod` | A component on a spawned thing that tells its population when the thing should stop counting. |
| `SpawnRate`, `PopulationTimerDefinition`, `FrequencyTimerDefinition`, `DayNightOnlyTimerDefinition` | Timers for global populations. |
| `BasicPopulation`, `BasicPopulationManager`, `BasicEcosystem` | A simpler older population kind, kept per chunk. |
| `RadialPopulationArea`, `CircularSpawnPointGenerator`, `SpawnAreaBase` | Spawn shapes. |
| `PopulationAnalytics` | Sends population records to analytics (Alta's API is gone). |

Separate from populations, the root namespace has `SpawnerBase` and its kinds (`Spawner`, which spawns a count of one prefab or from a `Distribution` with its chunk's `SpawnData`) and small components like `SpawnInCircle`, `SpawnBuried` and `SpawnOnDestroyed`. They spawn things when something tells them to, not on a timer.

## See also

- [Spawning](spawning.md)
- [Caves](caves.md), whose layers each have an `Ecosystem`
- [Creature spawning and despawning](../creatures/spawning-and-despawning.md), for what a spawned creature does and how it leaves its population
