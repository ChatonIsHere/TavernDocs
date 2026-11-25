---
title: Skills and unlocks
description: Skill trees, skill shrines and orbs, ProfessionSkill, and the PlayerUnlock stations behind the climbing tower.
sidebar_position: 6
---

# Skills and unlocks

Top-level types in `Root.Township`. Server decides, clients show.

Two separate systems give players new abilities:

- **Skills** are bought with [progression](progression.md) points at a skill shrine. Each path has a tree of slots, and each slot grants a `ProfessionSkill`.
- **Player unlocks** (`PlayerUnlock`) are earned by visiting a chain of stations (`PlayerUnlockStation`), collecting orbs. The climbing tower is the one the code names (`climbingUnlock`). A `PlayerUnlock` can widen where you can teleport or climb and raise a maximum stat.

## Skill trees

| Type | What it is |
| --- | --- |
| `ProfessionSkillTree` | `ScriptableObject`, one per path, loaded from `Resources/ProgressionTrees/`. `static ProfessionSkillTree GetProfessionTree(ProgressionPath path)`, `List<ProgressionSlot> Slots`, `bool IsEnabled`, `bool GetSlot(uint hash, out ProgressionSlot slot)`. |
| `ProgressionSlot` | A node in a tree: `uint Hash`, `uint Cost`, `List<uint> Dependencies` (slot hashes), `ProfessionSkill Skill`, `ProgressionPath Path`. A slot is buyable when it has no dependencies or any one of them is owned. |
| `ProfessionSkill` | `HashedGeneralValue<ProfessionSkill>`, abstract. The ability itself. `virtual void Unlock(PlayerProgressionManager)` and `Lock(...)` run when a player gains or loses it. `static event ProfessionSkillDelegate OnSkillExecuted`. |
| `ProfessionSkill<T>` | Adds `static T Instance` and `static bool PlayerUnlocked(Player)`. `Instance` is only set the first time any player unlocks the skill, so `PlayerUnlocked` is false for everyone until then. |
| `SkillStatus` | `OtherPlayer`, `NotAllowed`, `TestingCantBuy`, `CantBuy`, `TestingLockedOwned`, `OwnedLocked`, `TestingOwned`, `Owned`, `TestingAllowed`, `Allowed`. The `Testing` values mean the player is practising that orb. |

### The trees in the game

:::note[Asset values]
The `ProfessionSkillTree` assets, build `main-1.7.2.1.42203`. Every slot costs 1 point. The reference tables have every slot.
:::

| Tree | Enabled | Slots | Examples |
| --- | --- | --- | --- |
| Forging | yes | 7 | Forging Power Strike (and Plus), Heartcall, Ember and Furor Heartcaller, Ember Composer, Blacksmith Steelsong |
| Woodcutting | yes | 6 | Woodcutting Power Strike (and Plus), Charged Axe Chop, Branch Shatter, Branch Slam Shatter, Wood Gatherer |
| Mining | yes | 9 | Mining Power Strike (and Plus), Mining Dynamite Strike, Mining Boulder Destroy, Mining Echo (and Intensity and Range Plus), Ore and Basic Stone Gatherer |
| Melee | yes | 6 | Melee Power Strike (and Plus), Power Hit, Power Shockwave, Power CrossSlash, Blocking Charge |
| Ranged | yes | 11 | Bow Quickdraw, Bow Slowdraw, Bow Lightbeam, Bow Two-Shot and Three-Shot, Feather and Arrow Gatherer |
| Chiselling | no | 3 | Chiseling Power Strike, Sure Hands |
| Cooking | no | 0 | |
| DevDebug | no | 2 | Hunger Stat Bonus Skill, Power Stinger |

With `maxFreePoints` 3 and `maxBoughtSkills` 8 (see [Progression](progression.md)), a player can bank at most 3 points per path and own 8 skills in total, out of 39 enabled slots.

Skills in the game include `PowerStrike`, `PowerHit`, `HeartCall`, `MiningEcho`, `Gatherer`, `SteelSong`, `EmberComposer`, `HebiosEnchant`, `AreaAttackSkill`, `PowerCrossSlash`, `PowerStinger`, `StatBonusSkill`, `SureHands`, `Garnisher`, `BlockingCharge`, and the bow skills in `Alta.Progression.Skills`. Most active ones derive from `PickupBasedSkill` (they work through a held item) or `TargetBasedSkill`.

## Shrines and orbs

`SkillShrine : ProgressionShrine`. When a player opens a shrine for a path, the server (`OpenOnServer`) spawns a `SkillOrb` for every slot in that path's tree, each with the player's `SkillStatus` for it. Orbs aren't saved (`SaveMode.Ignore`).

What happens to an orb:

- **Practising.** `SkillOrb.Operate(false)` (server) calls `PlayerProgressionManager.PracticeSlot`, which lends the player the skill until they stop. `SkillOrb.Operate(true)` buys or sells directly, by status.
- **Buying by pulling the orb away.** When a player drags a practised, buyable orb far enough from its place, it's swapped for a `SkillOrbReplacer`. That is a `ProgressionSlotContainer`: when the client reports it's done (`SyncOperate`), the server calls `Operate`, which calls `UnlockSlot`. `BoughtSkillOrbReplacer` does the same with `LockSlot` to sell. `UnlockSlot` checks the status itself, so a client can't buy what it can't afford.

With the host setting `CanOnlyBuySkillsAfterPracticing` on (the default), an orb can only be pulled away to buy once the player has used the skill while practising (`MarkSlotPracticed`, triggered by `OnSkillExecuted`). `ProgressionSettings.MaxBoughtSkills` caps how many a player can own; at the cap, `Allowed` turns into `CantBuy`.

## Hooking skills

- `PlayerProgressionManager.UnlockSlot` and `LockSlot` see every buy and sell, including TavernLib's `player progression buyskill` command. `UnlockSlot` is also called with `isFromLoad` while a save loads.
- `ProfessionSkill.Unlock` and `Lock` are virtual and per skill: patch the subclass you care about.
- Some skills trust the client. `SteelSong` (forging) takes the hit count the client sends and fires the skill when it reaches the top level.

## Player unlocks

| Type | What it is |
| --- | --- |
| `PlayerUnlock` | `HashedGeneralValue<PlayerUnlock>`. Has `Prerequisites`, `Orbs`, and `UnlockingPermissions` (teleport layer, climb layer, and an optional `MaxStatDefinition` to raise). `ApplyTo(Player)` raises that stat's range and `Base` on every body the player gets; `RemoveFrom(Player)` undoes it. |
| `PlayerUnlockManager` | `PlayerComponent`, one per player (`player.UnlockManager`, also on `IPlayer`). `Unlocks` (permanent), `CurrentUnlock` (the one in progress), `Orbs` (orb indexes collected), `Checkpoint`. Saved with the player. |
| `PlayerUnlockStation` | A station in the world. Its `UnlockStationType` is `Start`, `Normal`, `Unlock` or `Completion`. |

`PlayerUnlockManager` members that change state check `NetworkSceneManager.IsServer` and do nothing on clients:

| Member | What it does |
| --- | --- |
| `bool Check(PlayerUnlock unlock)` | True if the player has it permanently or it's the run in progress. |
| `void SetPermanentUnlock(PlayerUnlock unlock, bool isUnlocked = true)` | Grants or removes it permanently. Refuses if a prerequisite is missing. Syncs to the client. |
| `void SetCurrentUnlock(PlayerUnlock unlock)`, `void CancelUnlock()` | Starts or abandons a run. |
| `void AddOrb(uint orbIndex)`, `void RemoveOrb(uint orb)`, `void SetCheckpoint(Vector3)` | Run progress. |

`PlayerUnlockStation.Interact(IPlayer player)` is `async void`: on the server it waits `interactionDelay` with `Task.Delay`, then a start station begins the run, a normal station or an `Unlock` station adds its orb and checkpoint (an `Unlock` station also grants the `PlayerUnlock` permanently), and the completion station ends the run if the last orb was collected. A station only accepts a player who holds the previous orb. The `cooldown` is per station, not per player, so two players can't use one station within a second of each other.

## See also

- [Progression](progression.md)
- [Stats](stats.md)
