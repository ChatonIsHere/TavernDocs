---
title: Hunger, eating and drinking
description: How hunger and fullness drain, what eating and drinking do, and where to hook them.
sidebar_position: 3
---

# Hunger, eating and drinking

Hunger and fullness are two [stats](stats.md) on the player's body, named `"hunger"` and `"fullness"` (asset names `Hunger Stat` and `Fullness Stat`). Their rules run on the server. Eating and drinking apply the food's [effects](effects.md), and those effects are what fill the two stats.

## The two stats

- **Hunger** (`HungerStat`) goes down slowly and continuously. Its level decides health regeneration and, at the bottom, starvation.
- **Fullness** (`FullnessStat`) is the food in your stomach right now. It counts down one whole point at a time, faster when you're hungrier. While it's above 0 you don't starve.

Both are `ThresholdStat`s: they have `Levels`, each with a `MinThreshold`, and the level the value is in decides which stat modifiers apply. `ThresholdStat.GetLevel(float value)` gives the level index.

### HungerStat

`Alta.StatSystem.HungerStat : ThresholdStat`. Server only (its `Applied` only runs on the server).

Every stat tick (1 second), while hunger is above 0 and enabled, its `Base` goes down by the host's `ServerSettings.HungerTick` (0.0005 by default). The asset also has a `hungerTick` field (0.001), but the code never reads it. It also adds two kinds of handler to its level sets:

- **Regeneration**, on the top two levels: health `Base` goes up by `fullStateRegen` (a curve over hunger) times `1 - recentDamage` times `HealthRegenMultiplier`. Recent damage slows regeneration.
- **Starvation**, on level 0 only: if `HungerDealsDamage` is on, fullness is below 1 and health `Base` is at least `starveDamageHealthCutoff`, health loses `hungerStarveDamage` each tick, never going below that same amount.

### FullnessStat

`Alta.StatSystem.FullnessStat : ThresholdStat`. Server only.

While fullness is above 0, a timer counts down by `1 / tickRatePerHungerThreshold[level]` each tick, where `level` is hunger's current level. When it runs out, fullness loses 1. So `tickRatePerHungerThreshold` is "seconds per fullness point" for each hunger level. It's resent to clients whenever its whole-number part changes.

### The real numbers

:::note[Asset values]
From the `Hunger Stat` and `Fullness Stat` assets and the player body prefab, build `main-1.7.2.1.42203`.
:::

Hunger runs from 0 to 2 (it starts full at 2). At the default `HungerTick` it empties in 4,000 stat ticks, about 67 minutes at the default `TimeSpeedMultiplier` (stat ticks run on the game's `Timeline`, which the host can speed up). Its levels (a level applies while the value is above its threshold) put non-buff multipliers on speed and damage. [Threshold levels](../reference/stats.md#threshold-levels) has both stats' levels:

| Level | Hunger above | Speed | Damage |
| --- | --- | --- | --- |
| 0 `wasting` | 0 | x0.8 | x0.65 |
| 1 `mal-nourished` | 0.1 | x0.9 | x0.8 |
| 2 `under-nourished` | 0.15 | x0.9 | x0.85 |
| 3 `nourished` | 0.5 | x1 | |
| 4 `buffed` | 1.75 | x1.15 | |

- Regeneration only runs in `nourished` and `buffed`, so above 0.5 hunger. `fullStateRegen` gives about 0.03 health per second up to 1.75 hunger and 0.05 above it. Health's maximum is 2, so a full refill takes about 40 to 70 seconds before recent damage slows it.
- Starvation needs hunger at 0.1 or less and fullness below 1. It takes 0.03 health a tick while health `Base` is at least 0.1 (`starveDamageHealthCutoff`), so a starving player ends just under 0.1 of 2 health.

Fullness runs from 0 to 6 and starts at 3. Its levels are `famished` (0), `starving` (above 1), `hungry` (2), `peckish` (3), `satiated` (4), `stuffed` (4.9, damage x1.07) and `maximum` (5.9, damage x1.15). `tickRatePerHungerThreshold` is `[60, 60, 120, 180, 180]`: one point of fullness lasts 60 seconds while hunger is `wasting` or `mal-nourished`, 120 while `under-nourished`, and 180 when `nourished` or `buffed`.

### Running

`SmoothLocomotionSettings.CanRun(Stat hungerStat, Stat fullnessStat)` decides whether a player may run: not while hunger's level is at or below `maxLevelToRun` and fullness is empty. In the asset `maxLevelToRun` is 2, so a player with hunger at 0.5 or less and an empty stomach can only walk. The player's own client checks it in `SmoothLocomotion`, using the synced stats. A server patch can't change it; the client decides.

## Eating

1. `Eater` is a trigger at the mouth. When a rigidbody with an `EdibleObject` on its prefab root enters, it asks `ConsumptionManager.CanConsumeEdible`, then calls `EdibleObject.StartEat`.
2. `EdibleObject.StartEat` starts a coroutine that takes `NumberOfBites` bites, `BiteDuration` apart (bite effects only off headless).
3. After the last bite, on the server only, it calls `ConsumptionManager.HandleConsumptionEffects(consumptionEffects)`. Then it raises `FinishedEating`, adds the food's journal page, and on the server destroys the food (unless it's docked).
4. `Eater.FinishEating` reports `EatingAmountArgument` to `GameTaskManager.ActionExecuted`.

Steps 1 and 2 run on whichever side sees the trigger, the client included. Only step 3's effects count.

## Drinking

`PlayerDrinkingMouth` is a liquid container at the mouth. Its `AddFilter` refuses liquid that `ConsumptionManager.CanConsumeLiquid` refuses, so the mouth won't take it. On the server, when its level goes up (`LiquidAmountChanged`), it empties itself, calls `HandleConsumptionEffects` with the liquid's effects, and adds journal pages for any cookables in the liquid (a stew's ingredients). See [Liquids](liquids.md).

The mouth fills a unit at a time when a drink is poured in and several units at once when a container is dunked into it ([Pouring](liquids.md#pouring)), but the effects apply once per fill event, not once per unit.

## ConsumptionManager

`ConsumptionManager : MonoBehaviour`, top level, no namespace. One per player body. `Player` gives the body's `PlayerController`.

| Member | What it does | Notes |
| --- | --- | --- |
| `PlayerController Player { get; }` | The body this belongs to. | Use `.NetworkPlayer` for the `Player`. |
| `bool CanConsumeEdible(EdibleObject edible)` | False for spirits, or when the food's effects would overfill the monitored stat. | Calls the client-side reject event when false. |
| `bool CanConsumeLiquid(LiquidData liquid)` | The same for drinks. | |
| `bool AreValidEffects(IEnumerable<EffectDefinitionApplication> effects)` | The fullness check: adds up the strengths of `StatChangeEffect`s on the monitored stat and says whether they fit under its maximum. | Prefab flags can allow eating when full or "wastefully". |
| `internal void HandleConsumptionEffects(IEnumerable<EffectDefinitionApplication> effects)` | Applies each effect to the body's `EffectHandler`. | Server. Internal: patch by name or use publicized stubs. |

On the player body (asset values, build `main-1.7.2.1.42203`) the monitored stat is `Fullness Stat`, `effectHandlingStrength` is 1, and both `canConsumeWastefully` and `canConsumeWhenStatIsFull` are off. So food is refused when its effects on fullness would take it past 6. (The mouth container has its own `effectHandlingStrength` field, but nothing reads it; the one that matters is `ConsumptionManager`'s, used both to apply the effects and for the fullness check.)

What food does when eaten (`EdibleObject.ConsumptionEffects` on a few food prefabs). The [cookables table](../reference/recipes.md#cookables-and-garnishes) lists a different set, the `CookableItem` effects an item adds to a stew, so don't read eating values from it:

| Food | Effects |
| --- | --- |
| Potato Full Ripe | `Heal` 0.05, `Nourish` 0.1, `Feed` 1 |
| Potato Full Cooked | `Heal` 0.15, `Nourish` 0.2, `Feed` 1 |
| Apple Full Ripe | `Heal` 0.1 over 10 seconds, `Nourish` 0.2, `Feed` 1 |
| Apple Full Cooked | `Heal` 0.3 over 10 seconds, `Nourish` 0.15, `Feed` 1 |

`Nourish` adds to hunger, `Heal` to health and `Feed` to fullness (see [Effects](effects.md)), so each of these fills one point of fullness. Cooked food heals more, but doesn't always nourish more (the cooked apple nourishes less than the ripe one).

### On death

`DeadStateSettings` (asset values) lists the stats `DeathReset` puts back to default: health, cripple health, poison, nightmare and both hand staminas. It also adjusts hunger: if hunger is below 0.6 it's set to 0.6, and in that case fullness is set to 0. So a player who died starving comes back at 0.6 hunger with an empty stomach, and one who died fed keeps both. With the host's `IsResetingHungerOnDeath` on, hunger is then reset to its default of 2.

## EdibleObject

`EdibleObject : NetworkEntityBehaviour`, top level. On every food prefab.

| Member | What it does |
| --- | --- |
| `EffectDefinitionApplication[] ConsumptionEffects { get; }` | What eating this does. |
| `bool StartEat(ConsumptionManager consumer, Transform mouth)` | Starts eating for that consumer. False if already eating or disabled. |
| `void StopEat(ConsumptionManager consumer)` | Stops early. |
| `EdibleEvent FinishedEating { get; }` | Raised when the last bite is done. |

## Hooking it

- **`ConsumptionManager.HandleConsumptionEffects`** is the best single hook: server only, called for both food and drink, with the effects list. CookingLib and Hydrate or Dierate both hook this area.
- **`PlayerDrinkingMouth.LiquidAmountChanged`** (private) runs on the server when a player drinks, with the container still holding the liquid until the method empties it. A prefix can read `container.ContainedLiquid`. Type any liquid-container parameter as `ILiquidContainer`, since both `LiquidContainer` and `StaticLiquidContainer` implement it.
- **`EdibleObject.StartEating`** is a coroutine (an iterator), so a patch on it only runs when the coroutine is created. Patch `StartEat` or `HandleConsumptionEffects` instead.
- Changing what's allowed (`AreValidEffects`, `CanConsumeEdible`) on the server is enough for effects. A vanilla client still runs its own check for the bite effects and the reject sound.
- Hosts can already change drain, regeneration and starvation with `HungerTick`, `HealthRegenMultiplier`, `HungerDealsDamage` and `IsResetingHungerOnDeath`. Check those before writing a patch.

```csharp
using System.Collections.Generic;
using Alta.Alchemy;
using HarmonyLib;
using MelonLoader;

[HarmonyPatch(typeof(ConsumptionManager), "HandleConsumptionEffects")]
static class ConsumedPatch
{
    static void Postfix(ConsumptionManager __instance, IEnumerable<EffectDefinitionApplication> effects)
    {
        Player player = __instance.Player?.NetworkPlayer;
        if (player == null)
        {
            return;
        }
        foreach (EffectDefinitionApplication effect in effects)
        {
            if (effect.EffectToModify is StatChangeEffect change)
            {
                MelonLogger.Msg($"{player.UserInfo.Username}: {change.StatToAffect.Name} {effect.StrengthMultiplier:+0.##;-0.##}");
            }
        }
    }
}
```

The strength printed is before `ConsumptionManager`'s own `effectHandlingStrength` and any duration split. To let players eat when full:

```csharp
using HarmonyLib;

[HarmonyPatch(typeof(ConsumptionManager), nameof(ConsumptionManager.AreValidEffects))]
static class AlwaysHungryPatch
{
    static void Postfix(ref bool __result) => __result = true;
}
```

The stat still clamps at its maximum, so the extra food is wasted.

## See also

- [Stats](stats.md)
- [Effects](effects.md)
- [Cooking](cooking.md), for where most food and drink comes from
