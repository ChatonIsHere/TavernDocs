---
title: Stats
description: StatManager, Stat, StatDefinition and stat modifiers, the numbers behind health, hunger and every other body value.
sidebar_position: 2
---

# Stats

`Alta.StatSystem` in `Root.Township`. Server runs the rules, clients get copies.

Every number on a body is a `Stat`: health, hunger, fullness, damage protection, the XP boost and so on. Each body has a `StatManager` that holds its stats, ticks them once a second on the server, and syncs them to clients. A stat's behaviour (hunger draining, fullness ticking down) comes from its `StatDefinition` asset.

## Getting a player's stats

```csharp
StatManager stats = player.PlayerController.Health.StatManager;
```

`PlayerController.Health` is the body's `HealthObject`, and `HealthObject.StatManager` is the manager. Other things with a `HealthObject` (creatures, for one; see the creatures area) can have a `StatManager` too, but it may be null. `PlayerController` is null while a player has no body (loading, between bodies), so check it.

Stats are found by their definition's `Name` (its `statName` field), not the asset name. The player names the game itself looks up are `"health"`, `"hunger"` and `"fullness"`. TavernLib's `player list-stats` console command lists every stat on a player.

```csharp
public static bool TryGet(Player player, string name, out Stat stat)
{
    stat = null;
    StatManager stats = player?.PlayerController?.Health?.StatManager;
    return stats != null && stats.GetStat(name, out stat);
}
```

## The player's stats

:::note[Asset values]
From the game's assets, build `main-1.7.2.1.42203`: the `StatManager` on the player body prefab `VR Player Character New`. The full list of stat assets is in the reference tables.
:::

The body ticks every `tickTime` = 1 second and runs incremental stats every `incrementalTickTime` = 0.1 seconds. Both are `Timeline` seconds, so they speed up with the host's `TimeSpeedMultiplier`. Its stats, in list (and network) order:

| Name | Definition asset (type) | Default | Min | Max |
| --- | --- | --- | --- | --- |
| `health` | Health Stat | 2 | 0 | 2 |
| `maxhealth` | MaxHealth Stat (`MaxStatDefinition`, sets health's maximum) | 2 | 0 | 31 |
| `speed` | Speed Stat | 1 | 0 | 15 |
| `damage` | Damage Stat | 1 | 0 | 15 |
| `poison` | Poison Stat (`PoisonStat`) | 0 | 0 | 31 |
| `hunger` | Hunger Stat (`HungerStat`) | 2 | 0 | 2 |
| `recentdamage` | RecentDamageStat | 0 | 0 | 1 |
| `damageprotection` | Damage Protection Stat | 1 | 0.1 | 10 |
| `luminosity` | Luminosity | 1 | 0 | 15 |
| `cripplehealth` | Cripple Health Stat (`CrippleStatDefinition`) | 1 | 0 | 1 |
| `xpboost` | ExperienceBoost (multiplies all XP) | 1 | 0.1 | 10 |
| `damageprotection` | Cripple Damage Protection Stat | 1 | 0.1 | 10 |
| `nightmare` | Nightmare (`OnFullAffectTargetStatDefinition`) | 0 | 0 | 1 |
| `fullness` | Fullness Stat (`FullnessStat`) | 3 | 0 | 6 |
| `playerweight` | Player Weight Stat (`PlayerWeightStat`) | 0 | 0 | 99999 |
| `left-hand-stamina`, `right-hand-stamina` | Hand Stamina Left/Right Stat | 0.2 | 0 | 0.2 |
| `aggro` | Aggroing Stat (`CrippleStatDefinition`) | 1 | 1 | 10 |
| `maxHandStamina` | MaxHandStamina (`MaxStatDefinition`, sets both hand staminas' maximum) | 0.2 | 0.2 | 0.2 |
| `Frost` | Frost (`IncrementingStat`, -0.5 per second while above 0, so it wears off) | 0 | 0 | 1 |

Things this shows:

- **Two stats share the name `damageprotection`.** `GetStat("damageprotection")` returns whichever the dictionary yields first. TavernLib renames the cripple one (hash 44538) to `crippledamageprotection` for this reason.
- **`playerweight` can go far past 127**, the top of the network range for `Base`, so its synced copy on clients is clamped. Read it on the server.
- Health, hunger, fullness, the hand staminas, poison, cripple health, nightmare, weight and the two max stats are saved with the body (`isSaveSerialized`). Speed, damage, damage protection, luminosity, XP boost and aggro aren't, so their `Base` resets to the default on load.
- Health, hunger, the hand staminas, cripple health, nightmare and weight resend at a change of 0.01 (`changeToSync`), fullness at every whole number, and the rest at 0.1.

## StatManager

`Alta.StatSystem.StatManager : NetworkEntityBehaviour`. Instance, one per body. `PlayerStatManager` is a subclass that also lists stats to keep on death.

| Member | What it does | Notes |
| --- | --- | --- |
| `Dictionary<StatDefinition, Stat> Stats { get; }` | Every stat on this body. | Built in `Awake` from `DefinitionApplications`, on both sides. |
| `List<StatDefinitionApplication> DefinitionApplications { get; }` | The stats this prefab has, with their defaults. | Order matters: the network sends stats by index into this list. |
| `bool GetStat(StatDefinition definition, out Stat stat)` | Finds a stat by definition. | |
| `bool GetStat(string name, out Stat stat)` | Finds a stat by definition `Name`, ignoring case. | Loops over every stat, so cache the result. |
| `TimedStatModifier ApplyTimedModifier(StatModifier modifier, float duration)` | Applies a modifier now and removes it after `duration` seconds. | Saved with the body. Server. |
| `void ApplyIndirectModifier(Stat stat, IndirectModifier modifier)` | Adds a modifier whose strength follows a curve over a number of ticks. | Also takes a name or a definition. |
| `void DeathReset(IEnumerable<StatDefinition>, IEnumerable<StatThresholdValue>)` | Resets and adjusts stats when a player dies. | Called by `DeadState`. Server. |
| `event Action<StatManager> Updated` | Raised every tick. | This is where hunger, fullness and regeneration run. |
| `event Action<StatManager> UpdatedIncremental` | Raised every `IncrementalTickTime`. | For `IncrementingStat`s. Zero means off. |
| `event Action<StatManager> Reset` | Raised at the end of `DeathReset`. | |
| `protected virtual void Tick()` | Raises `Updated`, then `ChangedExternal` on changed stats. | Server only, every `tickTime` (1 second by default). |

### What runs where

- `Awake` builds the stats on both sides. Only on the server does it call each definition's `Applied`, which is what hooks up hunger, thresholds and the rest. On a client the stats are plain values.
- `Initialize` starts the tick timers (on the game's `Timeline`, main thread) only on the server, and only the server listens to `Stat.NetworkChanged`.
- When a stat changes enough on the server, it sends a `SingleStatSync` for that stat to the chunk. A joining player gets a `StatSyncFull` with every stat in `DefinitionApplications` order. Both messages are ignored if a client sends them.

## Stat

`Alta.StatSystem.Stat`. Plain class, one per stat per body.

The value is worked out from parts:

```
Value = clamp(Base + Extra, Minimum, Maximum) * Multiplier
```

`Extra` is the sum of buff and non-buff flat bonuses, and `Multiplier` is the product of the buff and non-buff multipliers. The clamp happens before the multiplier, so a multiplier can push `Value` above `Maximum`.

| Member | What it does | Notes |
| --- | --- | --- |
| `float Value { get; }` | The current value. | Read this. |
| `float Base { get; set; }` | The stored value, clamped to `Minimum`..`Maximum` on set. | What hunger, food and damage change. The only part saved. |
| `float Minimum`, `float Maximum { get; set; }` | The range. Setting one pulls `Base` into range. | Always networked. |
| `float Extra { get; set; }`, `float BuffMultiplier { get; set; }` | Buff modifiers' totals. | Modifiers change these. |
| `float NonBuffExtra`, `float NonBuffMultiplier { get; set; }` | The same for non-buff modifiers. | |
| `bool IsEnabled { get; set; }` | Turns the stat's behaviour off (hunger stops draining, thresholds drop their modifiers). | |
| `StatDefinition Definition { get; }` | What kind of stat it is. | |
| `void Bind(StatHandler handler)` | Calls `handler` now and on every change. | `StatHandler` is `void (Stat)`. |
| `event StatHandler Changed` | Raised when `Value` changes. | Every change, on whichever side changed it. |
| `void Reset()` | Back to the prefab's default, minimum and maximum. | Doesn't clear modifiers. |
| `void ForceServerUpdate()` | Sends the stat to clients now. | |

### Network ranges

The sync packs values into fixed ranges: `Base`, `Minimum` and `Maximum` in 0 to 127, the extras and multipliers in -63 to 64, all to 0.01. Values outside those ranges won't arrive intact on clients. A `TimedStatModifier`'s value is packed into -30 to 31 when it's serialized.

A stat is only resent when it moves by more than its definition's `changeToSync` (0.1 by default), unless a range or extra changes. `FullnessStat` overrides this to resend whenever the whole number changes.

## StatDefinition

`Alta.StatSystem.StatDefinition : HashedGeneralValue<StatDefinition>`. A `ScriptableObject` asset. Get one with `StatDefinition.All`, `StatDefinition.Get(hash)`, or from a stat's `Definition`.

| Member | What it does |
| --- | --- |
| `string Name { get; }` | The lookup name (`statName`). TavernLib renames the cripple stat's `"damageprotection"` to `"crippledamageprotection"` so it doesn't clash. |
| `bool IsSaveSerialized { get; }` | Whether `Base` is saved with the body. |
| `virtual void Applied(StatManager manager, Stat stat)` | Hooks the stat's behaviour up. Called once per body, on the server, from `StatManager.Awake`. |
| `virtual bool CheckSerialize(float oldValue, float newValue)` | Whether a change is big enough to send. |
| `Stat GetStatOnPlayer(IPlayer player)` | Finds this stat on a player's body. Logs an error and returns null if it isn't there. |

Subclasses add behaviour in `Applied`:

| Type | What it does |
| --- | --- |
| `ThresholdStat` | Has `Levels` (each a name, a `MinThreshold` and stat modifiers). Applies the modifier set of the level the value is in, and swaps sets as it moves. |
| `HungerStat`, `FullnessStat` | Hunger and fullness. See [Hunger, eating and drinking](hunger-and-eating.md). |
| `IncrementingStat` | Adds `statChangePerSecond` on every incremental tick while the value is above 0. |
| `MaxStatDefinition` | Its `Base` becomes the `Maximum` of other stats (applied a frame later through `AltaCoroutine.DelayCall`, and again on death reset). |
| `ControlledStat` | Abstract. Cancels itself out against another stat, so one soaks up the other. |
| `PoisonStat`, `BurnStat`, `PlayerWeightStat`, `CrippleStatDefinition` | Specific body stats. |

## StatDefinitionApplication

`[Serializable]` class in a `StatManager`'s list. Holds a definition plus `Default`, `DefaultMinimum` and `DefaultMaximum`. `Stat.Reset` goes back to these.

## Modifiers

| Type | What it does |
| --- | --- |
| `Modifier` | Abstract base. `Apply()` and `Remove()` call `InternalApply` and `InternalRemove` once each. |
| `StatModifier` | Adds `Value` to `Extra` (or `NonBuffExtra`), or multiplies `BuffMultiplier` (or `NonBuffMultiplier`). `new StatModifier(Stat stat, float value, bool isMultiplier = false, bool isBuff = true)`, or pass a `StatDefinition` and let `Initialize(manager)` find the stat. |
| `TimedStatModifier` | A `StatModifier` removed after a time. Made by `ApplyTimedModifier`. `Cancel()` stops the timer. |
| `ModifierSet` | A group applied and removed together (one per threshold level). |
| `IndirectModifier`, `IndirectStatModifier` | Curve-driven change over ticks, used by some effects. |
| `UpdateModifier` | Internal. Runs an action on every `Updated` while applied. |

```csharp
StatManager stats = player.PlayerController.Health.StatManager;
if (stats.GetStat("health", out Stat health))
{
    // 50% more for 30 seconds. Saved with the body if the server saves before it ends.
    stats.ApplyTimedModifier(new StatModifier(health, 1.5f, isMultiplier: true), 30f);
}
```

## Hooking it

- **Change values on the server.** Set `Base` (or apply modifiers) on the server's copy and the sync does the rest. Setting `Base` on a client only lasts until the next sync for that stat.
- **`Stat.Base`'s setter and `Stat.OnChanged` are hot.** They run for every stat on every body, many times a second. Don't patch them. Use `Bind` or `Changed` on the stats you care about.
- **`StatManager.Tick`** is a good once-a-second hook per body. It's `protected virtual`, so patch `StatManager` (Harmony finds the declared method) and check `__instance` for the body you want.
- **`StatDefinition.Applied`** is virtual and runs once per body. Patch the subclass you care about (`HungerStat.Applied`) to add your own `Updated` handler next to the game's.
- **Don't add stats to a body that vanilla clients will see.** The full sync writes every stat in list order and the client reads as many as its own prefab has. A server with an extra stat in the list desyncs every vanilla client's read of that message. Keep mod values in your own code and send them with your own message, which is what Hydrate or Dierate does for thirst.
- **Death:** `DeathReset` calls `Cancel()` on timed modifiers and clears the list, but `Cancel` only stops the timer. It looks like the modifier's effect stays on the stat after a death. Remove your own modifiers yourself if that matters.
- **Loaded timed modifiers** are re-registered with `StatModifier.Remove` as the timer callback rather than `TimedStatModifier.Remove`, so after a load they never leave the manager's list (their effect is still removed on time).

```csharp
[HarmonyPatch(typeof(StatManager), "Tick")]
static class StatTickPatch
{
    static void Postfix(StatManager __instance)
    {
        // Once per tickTime (1 s by default) for every StatManager on the server.
    }
}
```

## Other types in this area

| Type | What it is |
| --- | --- |
| `HealthData`, `HealthValidation` | A health table asset and an editor tool with save and load buttons for it. Not gameplay. |
| `StatAffectingArea` | An area that changes a stat by `affectValuePerSecond` on things inside it. |
| `StatTrigger`, `FullEmptyStatTrigger` | Raise Unity events when a stat crosses a value, or fills or empties. |
| `LevelStatModifier` | Drives a stat from a curve by a level number, and saves that level. |
| `StatUpgradeTarget` | Adds a fixed `upgrade` to a stat, with an effect. |
| `StatBar`, `StatBarSimple`, `DiscreteStatBar`, `StaminaBarVisibility` | Client-side wrist and HUD bars. |
| `StatManagerSaveData` | What a body saves: each saved stat's `Base`, timed and indirect modifiers. |

## See also

- [Hunger, eating and drinking](hunger-and-eating.md)
- [Effects](effects.md), which change stats from food and potions
