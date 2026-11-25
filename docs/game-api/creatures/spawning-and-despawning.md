---
title: Spawning and despawning
description: How populations spawn creatures, what happens when they die or unload, and how to cap or block spawns.
sidebar_position: 8
---

# Spawning and despawning

`Alta.Populations` in `Root.Township`. Server only.

Creatures come from the **population system**, which also spawns things like plants and ore. The system as a whole (definitions, folders, spawn areas, ecosystems, saving, respawn times) is in [Populations and spawners](../world/populations.md). This page covers what happens to creatures.

## PopulationSample

One population of one `PopulationDefinition` in one chunk: a count, a maximum, and the entities it has spawned. It keeps a virtual population (`CurrentPopulation`) that grows over time, and spawns real entities to match while its chunk is loaded.

The members a creature mod usually needs (the full list is on [PopulationSample](../world/populations.md#populationsample)):

| Member | What it does | Notes |
| --- | --- | --- |
| `int CurrentPopulation { get; }`, `int MaximumPopulation { get; }` | The virtual count and its cap. | |
| `Dictionary<NetworkEntity, PopulationItem> SpawnedEntities { get; }` | The entities it has out right now. | |
| `void CheckSpawned()` | Spawns until the spawned count reaches `CurrentPopulation × PercentageOfPopulationSpawned` (rounded up). Each failed spawn lowers `CurrentPopulation`; three failures stop it. | Public. The best spawn hook. |
| `bool RequestMove(NetworkEntity entity, bool isAllowingSame = true)` | Teleports one of its entities to another free spawn point. | `ActiveIdle` can call this. |
| `void LoseMember(NetworkEntity entity)` | Counts an entity as lost: removes it, lowers the count, occupies its spawn point for a while. | |
| `event PopulationItemSpawnHandler NewEntitySpawned` | `(PopulationSample population, NetworkEntity newItem)` after each spawn. | |

### The growth tick

`Initialize` sets a repeating `Timeline` call to the private `CheckPopulation` every `Definition.TickFrequency` seconds. Each tick:

1. If the maximum is 0, nothing. If the count is over the maximum and not all of it is spawned, lower it by one and stop.
2. Otherwise, if under the maximum, grow: start from `PopulationGrowthCurve` evaluated at count ÷ maximum, take a random 0 to 1 off it for each roll (up to `MaxPopulationGrowth` rolls), and add one while it stays above 0. So each extra one in a tick is less likely than the last.
3. If the chunk is fully loaded, `CheckSpawned`.

`TickFrequency` is the definition's base tick (through `PopulationDefinitionManager`) divided by `NetworkSceneManager.Current.SpawnRateMultiplier`, which on a server is the host's `SpawningRateMultiplier` setting. Raise that and populations grow faster; it doesn't change how many spawn at once.

Hosts can change one definition's base tick from the console with `settings population set-time <population> <seconds>` (also `check-time` and `reset-time`), which sets the value `PopulationDefinitionManager.GetValue` returns. See [Changing respawn rates](../world/populations.md#changing-respawn-rates) for doing it from code. In the shipped definitions the base tick is 1800 s for almost every creature population (asset values; see [Creature data](creature-data.md#populations)), so a population grows (and replaces its dead) only once every 30 minutes of `Timeline` time, and only spawns while its chunk is loaded.

### Spawning one

The private `SpawnRandom` picks a free `SpawnPoint` and a prefab hash from the definition, spawns it with `SpawnHelper.Manager.SpawnInternal`, places and rotates it (lifting it by its size with "safe spawning"), and adds a `PopulationItem` to it. For a creature definition (`Definition.IsCreature`) it sets the prefab's save mode to `SaveMode.Creature`. Then it calls `InitializeWithChildrenAsServer`, which is when `Agent.InitializeAsServer` runs, puts a creature in the sample's chunk (anything else is parented to the population's entity), and raises `NewEntitySpawned`.

The `PopulationItem` goes on before initialization, so `agent.PopulationItem` is already set when the AI starts.

## PopulationItem

A component the population adds to everything it spawns.

| Member | What it does |
| --- | --- |
| `PopulationSample Population { get; set; }` | The sample it came from. |
| `NetworkEntity Entity { get; set; }` | The spawned entity. |
| `SpawnPoint SpawnPoint { get; set; }` | The point it took. |
| `void ReplaceWith(NetworkEntity entity)` | Puts another entity in its place in the population. |

Definitions with `IsAllowingDisconnect` use a subclass instead:

- `RadialPopulationItem`: if the creature wanders further than `DisconnectRadius` from its population, it leaves it. It's counted as lost, moved to whichever chunk it's in, set to `SaveMode.Ignore`, and no longer tracked. The check runs from the budgeted update module "Population Item Distance Check".
- `BoundsPopulationItem`: the same with bounds instead of a radius.

## Despawning

The population watches each entity's `DestroyedByScene`:

| How it went | What happens |
| --- | --- |
| Unloaded with its chunk | The chunk destroys entities whose prefab save mode is `SaveMode.Creature` instead of saving them (`DynamicChunkContentManager.UnloadSingle` in the server build). The population removes it from `SpawnedEntities` and frees its spawn point. **The count doesn't change**, so it comes back when the chunk loads again. |
| Destroyed any other way (killed, eaten, `ActiveDeleted`) | `LoseMember`: removed, count lowered by one, its spawn point kept busy for `Definition.OnDeathOccupyPointFor` seconds. |
| Picked up or docked | `Pickup` implements `IPopulationRemovalMethod` and raises `RemoveFromPopulation` when grabbed or docked, which also calls `LoseMember`. That's probably how catching a firebug or schmeechee takes it out of its population. |

A creature that's killed and then dissolves goes the second way once `DeathEffect` destroys it.

## Hooking it

`PopulationSample.CheckSpawned` is public and every spawn goes through it. A prefix can stop creature spawns while the server has too many:

```csharp
using Alta.Intelligence;
using Alta.Populations;
using HarmonyLib;

[HarmonyPatch(typeof(PopulationSample), nameof(PopulationSample.CheckSpawned))]
static class CreatureCap
{
    public static int Limit = 150;

    static bool Prefix(PopulationSample __instance) =>
        !__instance.Definition.IsCreature || AgentUpdater.AgentCount < Limit;
}
```

Skipping it leaves `CurrentPopulation` alone, so the missing creatures spawn on a later tick once there's room. `AgentUpdater.AgentCount` counts every live agent, including catchable ones like firebugs.

To watch spawns of one sample without Harmony, subscribe to `NewEntitySpawned`:

```csharp
using Alta.Populations;

static class LogCreatureSpawns
{
    public static void Watch(PopulationSample sample)
    {
        if (!sample.Definition.IsCreature) return;
        sample.NewEntitySpawned += (population, entity) =>
            MelonLoader.MelonLogger.Msg($"{population.Definition.name} spawned {entity.SafeName}");
    }
}
```

ATT-Optimizations' CavePerformance goes further: a transpiler on `CheckSpawned` swaps its one `Mathf.CeilToInt` call for its own, to spawn fewer wyrms in caves. It tells a wyrm population apart by checking that every prefab in the definition has only `Wyrm` agents (`GetComponentsInChildren<Agent>(true)` on the `NetworkPrefab`). It also keeps the target at least the number already spawned, because when the target is below the spawned count, `CheckSpawned` subtracts the negative shortfall from `CurrentPopulation` and so raises it.

Gotchas:

- `SpawnRandom` and `CheckPopulation` are private. `CheckSpawned` covers both the tick and `ForceSpawn`.
- Spawning happens from `Timeline` callbacks on the main thread.
- A creature spawned by your own code (with `SpawnHelper`) has no `PopulationItem`. Its `agent.PopulationItem` is null, and idle actions that teleport to spawn points skip it.

## See also

- [Agent](agent.md)
- [Combat, damage and death](combat-and-damage.md#death)
