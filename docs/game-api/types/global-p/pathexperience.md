---
title: "PathExperience"
description: "A player's progress on one progression path (forging, mining and so on): XP, level, free points, bought skills and practiced skills. Held by PlayerPro"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathExperience

A **class** in `Root.Township`, no namespace.

A player's progress on one progression path (forging, mining and so on): XP, level, free points, bought skills and practiced skills. Held by `PlayerProgressionManager`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Documented in** [Progression](/game-api/game-systems/progression#pathexperience)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathExperience("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager, Action<bool> leveledUp, Action<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{"> updatedPoints)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentexperience" /><code>{"private uint currentExperience"}</code> |  |
| <Link id="m-currentlevel" /><code>{"private uint currentLevel"}</code> |  |
| <Link id="m-freepoints" /><code>{"private uint freePoints"}</code> |  |
| <Link id="m-leveledup" /><code>{"private Action<bool> LeveledUp"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-practicedslots" /><code>{"private HashSet<uint> practicedSlots"}</code> |  |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer"}</code> |  |
| <Link id="m-unlockedslots" /><code>{"private HashSet<uint> unlockedSlots"}</code> |  |
| <Link id="m-updatedpoints" /><code>{"private Action<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{"> UpdatedPoints"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentexperience-2" /><code>{"uint CurrentExperience { get; }"}</code> | XP toward the next level. Resets on each level up. |
| <Link id="m-currentlevel-2" /><code>{"uint CurrentLevel { get; }"}</code> | The path's level. Selling skills lowers it again. |
| <Link id="m-freepoints-2" /><code>{"uint FreePoints { get; }"}</code> | Unspent skill points. Gaining XP stops once this reaches the settings' maximum. |
| <Link id="m-path" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; private set; }"}</code> | Which progression path this is. |
| <Link id="m-unlockedslots-2" /><code>{"IEnumerable<uint> UnlockedSlots { get; }"}</code> | Hashes of the bought skill slots. |
| <Link id="m-unlockedslotscounts" /><code>{"int UnlockedSlotsCounts { get; }"}</code> | How many skill slots are bought. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugclearslots" /><code>{"void DebugClearSlots()"}</code> | Removes all bought skills and resets XP, level and points to zero, without locking the skills. |
| <Link id="m-gainexperience" /><code>{"void GainExperience(int experience)"}</code> | Adds XP scaled by the server's per-path and global XP multipliers, levelling up and adding points as needed. |
| <Link id="m-isslotavailable" /><code><Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" IsSlotAvailable("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | Whether a skill slot is owned, owned but locked by children, buyable, too expensive or not yet reachable. |
| <Link id="m-isslotpracticed" /><code>{"bool IsSlotPracticed(uint slotHash)"}</code> | Whether the skill slot has been practiced at a shrine. |
| <Link id="m-lockslot" /><code>{"void LockSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, bool isRecoveringPoints = true)"}</code> | Sells a skill: locks it and any children that depend only on it, lowers the level, and optionally refunds part of the XP. |
| <Link id="m-loseexperience" /><code>{"void LoseExperience(float percentage)"}</code> | Removes a fraction (0 to 1) of the current unspent XP. Used for the server's XP lost on death setting. |
| <Link id="m-practiceslot" /><code>{"bool PracticeSlot(uint slotHash)"}</code> | Marks a skill slot as practiced. Returns false if it already was. |
| <Link id="m-removefreepoints" /><code>{"void RemoveFreePoints(int toRemove)"}</code> | Takes away levels, from free points first and then by selling leaf skills. Used by offline progression changes. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes XP, level, points and bought skills. Reading unlocks the skills on the player. |
| <Link id="m-serializepracticedslots" /><code>{"void SerializePracticedSlots("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the set of practiced skill slots. |
| <Link id="m-unlockslot" /><code>{"void UnlockSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, bool isConsumingPoints = true)"}</code> | Buys a skill, spending its cost in points unless told not to, and unlocks it on the player. |
| <Link id="m-gainexperienceunmultiplied" /><code>{"private void GainExperienceUnmultiplied(int experience)"}</code> |  |
| <Link id="m-hasmultipledependenciesunlocked" /><code>{"private bool HasMultipleDependenciesUnlocked("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> |  |
| <Link id="m-recursivelockslot" /><code>{"private void RecursiveLockSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, ref float totalExperienceReward)"}</code> |  |
| <Link id="m-removeslots" /><code>{"private void RemoveSlots(int remainder)"}</code> |  |
| <Link id="m-serializeslots" /><code>{"private void SerializeSlots("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint slotHash, HashSet<uint> covered, "}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" tree)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PathExperience`:

[`PlayerProgressionManager.CreatePathExperience`](/game-api/types/global-p/playerprogressionmanager#m-createpathexperience), [`PlayerProgressionManager.PathExperiences`](/game-api/types/global-p/playerprogressionmanager#m-pathexperiences).
