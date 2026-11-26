---
title: Progression
description: XP and levels per profession path, PlayerProgressionManager, PathExperience and ProgressionSettings, and where XP comes from.
sidebar_position: 5
---

# Progression

Top-level types in `Root.Township` (no namespace). Server only.

Each player has XP and a level on each `ProgressionPath`. A level gives a free point, and points buy skills at a [skill shrine](skills-and-unlocks.md). All of it lives on the server: XP is only granted there, and clients only see levels through the shrine's visuals.

## ProgressionPath

```csharp
public enum ProgressionPath { Forging, Woodcutting, Mining, Chiseling, Cooking, Melee, Ranged, DevDebug }
```

A path only takes XP if its skill tree is enabled (`ProfessionSkillTree.GetProfessionTree(path).IsEnabled`). The trees are loaded from `Resources/ProgressionTrees/`. In the assets (build `main-1.7.2.1.42203`) Forging, Woodcutting, Mining, Melee and Ranged are enabled. The Cooking tree exists with no slots, and it and the Chiselling and DevDebug trees are disabled, so `GainExperience` refuses Cooking and Chiseling XP even from the console. See [Skills and unlocks](skills-and-unlocks.md).

## PlayerProgressionManager

`PlayerProgressionManager : PlayerComponent`. One per `Player` (not per body), so it survives respawns. Get it with `player.ProgressionManager` (it's on `IPlayer` too).

| Member | What it does | Notes |
| --- | --- | --- |
| `static bool GainExperience(IPlayer targetPlayer, ProgressionPath path, int experience)` | Gives XP. Multiplies it by the body's XP boost stat, then hands it to the path. True if it was accepted. | Server only (returns false elsewhere). False for null players, disabled trees and amounts of 0 or less. |
| `static void GainExperience(IPlayer targetPlayer, ProgressionPath path, float experience)` | Rounds to the nearest whole number and calls the `int` overload. | Small amounts round to 0 and are dropped. |
| `static void GainSharedExperience(Player mainPlayer, Player supportPlayer, ProgressionPath path, float experience)` | Splits XP between the player hitting and the player holding (forging). | Uses `ProgressionSettings`' share multipliers. |
| `Dictionary<ProgressionPath, PathExperience> PathExperiences { get; }` | Progress per path. A path only appears once it gets XP or a skill. | |
| `uint GetLevel(ProgressionPath path)`, `int GetFreePoints(ProgressionPath path)`, `float GetPercentageToNextLevel(ProgressionPath path)` | Reads progress. | |
| `SkillStatus IsSlotAvailable(ProgressionSlot slot)` | Whether a skill slot can be bought, is owned, and so on. | |
| `void UnlockSlot(ProgressionSlot slot, bool isConsumingPoints = true, bool isFromLoad = false)` | Buys a skill. | Logs an error and does nothing if it isn't `Allowed`. |
| `void LockSlot(ProgressionSlot slot)` | Sells a skill (and skills that depend only on it). Takes back one level per point of cost and refunds `SellingSkillPointsRefundPercentage` of those levels' XP. | |
| `bool SkillUnlocked(ProfessionSkill skill)`, `int GetLevel(ProfessionSkill skill)` | Whether a player has a skill, and how many slots of it. | |
| `event Action<Player, ProgressionPath> UpdatedFreePoints` | Raised when points change. | |

Progress is saved into the player's save (`SaveTo` and `LoadFrom` on `PlayerSave`), not with the world.

## PathExperience

`PathExperience`. One per player per path.

| Member | What it does |
| --- | --- |
| `uint CurrentExperience { get; }` | XP towards the next level. |
| `uint CurrentLevel { get; }` | Levels gained. |
| `uint FreePoints { get; }` | Unspent points. |
| `IEnumerable<uint> UnlockedSlots { get; }` | Hashes of bought skill slots. |
| `void GainExperience(int experience)` | Applies the host's path multiplier (`ForgingXPX` and so on), then `XPX`, then adds the XP and levels up. |
| `void LoseExperience(float percentage)` | Takes a share of the current XP away. Used on death when `UnspentExperienceLostOnDeath` is set. |
| `void RemoveFreePoints(int toRemove)` | Removes points. |

Levelling up: while `CurrentExperience` reaches `ProgressionSettings.ExperiencePerLevel(CurrentLevel)`, it subtracts that, adds a level and a free point. If `MaxFreePoints` is set and reached, XP stops: any XP gained while at the cap is thrown away.

Each multiplier step truncates to a whole number (`(int)(experience * multiplier)`), so 1 XP with a multiplier of 0.5 becomes 0, and a path multiplier followed by `XPX` truncates twice.

## ProgressionSettings

`ProgressionSettings : GlobalSettings<ProgressionSettings>`. Get it with `GlobalSettings<ProgressionSettings>.Instance` (`Alta.Global`).

| Member | What it does |
| --- | --- |
| `uint ExperiencePerLevel(uint currentLevel)` | XP needed for the next level, from the `experiencePerLevelBasedOnLevel` curve (values below). |
| `uint MaxFreePoints { get; }` | Point cap. 0 means none. |
| `uint MaxBoughtSkills { get; }` | How many skills a player may own. Below 1 means no limit. |
| `float SellingSkillPointsRefundPercentage { get; }` | XP refunded when selling. |
| `StatDefinition ExperienceBoostStat { get; }` | The stat that multiplies all XP. |
| `float GetDamageExperience(float damage, ProgressionPath path)` | XP per unit of hit effectiveness for a path. |
| `float BellowsPumpToExperience { get; }` | Forging XP per pump of the bellows. |
| `void UncapSkillPoints(out int maxXp)` | Sets `MaxFreePoints` and `MaxBoughtSkills` to 0 (no limits) on the shared asset. |
| `bool ValidatePathHit(ImpactHitWithTool hit, bool isGettingExperience, out ProgressionPath path)` | Maps a hit to a path by its impact channel and grants XP. |

## The real settings

:::note[Asset values]
From `ProgressionSettings`, build `main-1.7.2.1.42203`.
:::

| Setting | Value | Effect |
| --- | --- | --- |
| `maxFreePoints` | 3 | A path stops taking XP once it has 3 unspent points. Spend points to keep levelling. |
| `maxBoughtSkills` | 8 | A player can own 8 skills across all paths (the "Have 8 Skills" achievement). |
| `sellingSkillPointsRefundPercentage` | 0.8 | Selling a skill gives back 80% of the XP of the levels it takes away. |
| `bellowsPumpToExperience` | 0 | Bellows and pumps give no XP. |
| `experiencePerDamage` | Forging 8, Woodcutting 3, Mining 5, Chiseling 5, Melee 10, Ranged 30 | XP per unit of hit effectiveness. |
| `experienceShare` | Forging and Chiseling: self 0.2, support 0.6 | Forging alone: the hitter gets the XP plus 20%. With a holder: the holder gets 60% and the hitter gets the full XP. |
| `experienceBoostStat` | ExperienceBoost (`xpboost`) | 1 by default, range 0.1 to 10. |
| Cooking values | `perIngredientExperience` 2, `recipeExperienceBonus` 1.5, `garnishExperienceBoost` 1.2, `playerCountExperienceShare` `[1, 1.2, 1.4, 1.6]` | Unused in this build. |

`experiencePerLevelBasedOnLevel` is a smooth curve from 3,000 XP at level 1 to 30,000 at level 10, flat outside that range. Worked out from its keys and tangents, the XP needed for the next level is about:

| Current level | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10+ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| XP | 3,000 | 3,000 | 3,900 | 6,400 | 10,000 | 14,200 | 18,700 | 23,000 | 26,600 | 29,100 | 30,000 |

With the host multipliers at 1, a hit with effectiveness 1 gives 3 Woodcutting, 5 Mining, 10 Melee or 30 Ranged XP, and a forging hit on an unfinished part up to 8 before sharing. At about 3,000 XP for the first level, that's on the order of a thousand axe hits.

## Where XP comes from

All of these call `PlayerProgressionManager.GainExperience`, on the server:

| Source | Path |
| --- | --- |
| A tool hit on something whose impact channel maps to a path (`ImpactDetector` calls `ValidatePathHit`). The asset maps the `Wood Cutting` channel to Woodcutting, `Mining Impact` to Mining, and `Combat Impact Channel` to `CombatImpactProgressionFilter`, which picks Melee or Ranged by whether the weapon is still held. The `Chiselling` channel has no filter | Woodcutting, Mining, Melee, Ranged |
| Hammering hot metal (`ForgedModel`), shared between the hitter and the holder | Forging |
| Pumping smelter bellows (`Bellows`) and other pumps (`PumpingMechanism`), every frame while held. `BellowsPumpToExperience` is 0 in the asset, so this gives nothing in practice | Forging |
| `OfflinePlayerProgressionHandler`, for levels a host gives to offline players | Any |
| TavernLib's ported commands: `player progression pathxp`, `allxp`, `pathlevelup`, `offlinelevels`. The server build has no player command module of its own | Any enabled path |

Cooking has XP code (`ProgressionSettings.GainStewingExperience`, `Cookable.experienceAwardedWhenRoasted`), but nothing in this build calls or reads it, and the Cooking tree is disabled anyway. Chiseling has XP settings too (XP per damage, sharing) but no impact channel filter and a disabled tree. In this build only Forging, Woodcutting, Mining, Melee and Ranged can gain XP.

## Hooking it

- **`GainExperience(IPlayer, ProgressionPath, int)`** is the one place every grant passes through, the float overload and shared XP included. A prefix with `ref int experience` changes the amount before the boost stat and the host multipliers. It's called every frame while someone pumps bellows, so keep it cheap.
- **`PathExperience.GainExperience(int)`** runs after the boost stat and before the host multipliers.
- For a server-wide flat change, tell hosts about `XPX` and the per-path settings first.

```csharp
using System;
using Alta.Networking.Scripts.Player;
using HarmonyLib;

[HarmonyPatch(typeof(PlayerProgressionManager), nameof(PlayerProgressionManager.GainExperience),
    new Type[] { typeof(IPlayer), typeof(ProgressionPath), typeof(int) })]
static class GainExperiencePatch
{
    static void Prefix(IPlayer targetPlayer, ProgressionPath path, ref int experience)
    {
        if (path == ProgressionPath.Woodcutting)
        {
            experience *= 2;
        }
    }
}
```

Reading a player's progress:

```csharp
public static string Describe(Player player, ProgressionPath path)
{
    PlayerProgressionManager progression = player.ProgressionManager;
    if (!progression.PathExperiences.TryGetValue(path, out PathExperience xp))
    {
        return $"{path}: not started";
    }
    uint needed = GlobalSettings<ProgressionSettings>.Instance.ExperiencePerLevel(xp.CurrentLevel);
    return $"{path}: level {xp.CurrentLevel}, {xp.CurrentExperience}/{needed} xp, {xp.FreePoints} free points";
}
```

## See also

- [Skills and unlocks](skills-and-unlocks.md)
- [Smelting and forging](smelting-and-forging.md)
