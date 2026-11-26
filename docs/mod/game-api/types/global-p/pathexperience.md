---
title: "PathExperience"
description: "A player's progress on one progression path (forging, mining and so on): XP, level, free points, bought skills and practiced skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathExperience

A **class** in `Root.Township`, the global namespace.

A player's progress on one progression path (forging, mining and so on): XP, level, free points, bought skills and practiced skills. Held by `PlayerProgressionManager`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Documented in** [Progression](/mod/game-api/game-systems/progression#pathexperience)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PathExperience("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager, Action<bool> leveledUp, Action<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{"> updatedPoints)"}</code> | <span className="api-desc">Creates a `PathExperience` from `path`, `manager`, `leveledUp` and `updatedPoints`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentexperience" /><code>{"private uint currentExperience"}</code> | <span className="api-desc">Backing field for `CurrentExperience`, experience towards the next level.</span> |
| <Link id="m-currentlevel" /><code>{"private uint currentLevel"}</code> | <span className="api-desc">Backing field for `CurrentLevel`.</span> |
| <Link id="m-freepoints" /><code>{"private uint freePoints"}</code> | <span className="api-desc">Backing field for `FreePoints`, skill points not yet spent.</span> |
| <Link id="m-leveledup" /><code>{"private Action<bool> LeveledUp"}</code> | <span className="api-desc">Callback run after a level-up; its argument is true when the free points cap has been reached.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class; also traces level and skill events.</span> |
| <Link id="m-practicedslots" /><code>{"private HashSet<uint> practicedSlots"}</code> | <span className="api-desc">Hashes of slots the player has practised.</span> |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetPlayer"}</code> | <span className="api-desc">The `PlayerProgressionManager` this path belongs to.</span> |
| <Link id="m-unlockedslots" /><code>{"private HashSet<uint> unlockedSlots"}</code> | <span className="api-desc">Backing field for `UnlockedSlots`, the hashes of unlocked skill slots.</span> |
| <Link id="m-updatedpoints" /><code>{"private Action<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{"> UpdatedPoints"}</code> | <span className="api-desc">Callback run with the path whenever points or slots change.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentexperience-2" /><code>{"uint CurrentExperience { get; }"}</code> | <span className="api-desc">XP toward the next level. Resets on each level up.</span> |
| <Link id="m-currentlevel-2" /><code>{"uint CurrentLevel { get; }"}</code> | <span className="api-desc">The path's level. Selling skills lowers it again.</span> |
| <Link id="m-freepoints-2" /><code>{"uint FreePoints { get; }"}</code> | <span className="api-desc">Unspent skill points. Gaining XP stops once this reaches the settings' maximum.</span> |
| <Link id="m-path" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; private set; }"}</code> | <span className="api-desc">Which progression path this is.</span> |
| <Link id="m-unlockedslots-2" /><code>{"IEnumerable<uint> UnlockedSlots { get; }"}</code> | <span className="api-desc">Hashes of the bought skill slots.</span> |
| <Link id="m-unlockedslotscounts" /><code>{"int UnlockedSlotsCounts { get; }"}</code> | <span className="api-desc">How many skill slots are bought.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugclearslots" /><code>{"void DebugClearSlots()"}</code> | <span className="api-desc">Removes all bought skills and resets XP, level and points to zero, without locking the skills.</span> |
| <Link id="m-gainexperience" /><code>{"void GainExperience(int experience)"}</code> | <span className="api-desc">Adds XP scaled by the server's per-path and global XP multipliers, levelling up and adding points as needed.</span> |
| <Link id="m-isslotavailable" /><code><Link to="/mod/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" IsSlotAvailable("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Whether a skill slot is owned, owned but locked by children, buyable, too expensive or not yet reachable.</span> |
| <Link id="m-isslotpracticed" /><code>{"bool IsSlotPracticed(uint slotHash)"}</code> | <span className="api-desc">Whether the skill slot has been practiced at a shrine.</span> |
| <Link id="m-lockslot" /><code>{"void LockSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, bool isRecoveringPoints = true)"}</code> | <span className="api-desc">Sells a skill: locks it and any children that depend only on it, lowers the level, and optionally refunds part of the XP.</span> |
| <Link id="m-loseexperience" /><code>{"void LoseExperience(float percentage)"}</code> | <span className="api-desc">Removes a fraction (0 to 1) of the current unspent XP. Used for the server's XP lost on death setting.</span> |
| <Link id="m-practiceslot" /><code>{"bool PracticeSlot(uint slotHash)"}</code> | <span className="api-desc">Marks a skill slot as practiced. Returns false if it already was.</span> |
| <Link id="m-removefreepoints" /><code>{"void RemoveFreePoints(int toRemove)"}</code> | <span className="api-desc">Takes away levels, from free points first and then by selling leaf skills. Used by offline progression changes.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes XP, level, points and bought skills. Reading unlocks the skills on the player.</span> |
| <Link id="m-serializepracticedslots" /><code>{"void SerializePracticedSlots("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the set of practiced skill slots.</span> |
| <Link id="m-unlockslot" /><code>{"void UnlockSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, bool isConsumingPoints = true)"}</code> | <span className="api-desc">Buys a skill, spending its cost in points unless told not to, and unlocks it on the player.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gainexperienceunmultiplied" /><code>{"private void GainExperienceUnmultiplied(int experience)"}</code> | <span className="api-desc">Adds experience with no server multipliers, levelling up and granting free points until the max free points cap.</span> |
| <Link id="m-hasmultipledependenciesunlocked" /><code>{"private bool HasMultipleDependenciesUnlocked("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">True if a slot has more than one dependency and at least two of them are unlocked.</span> |
| <Link id="m-recursivelockslot" /><code>{"private void RecursiveLockSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, ref float totalExperienceReward)"}</code> | <span className="api-desc">Locks a child slot once none of its dependencies are unlocked, adding its refund and continuing to its children.</span> |
| <Link id="m-removeslots" /><code>{"private void RemoveSlots(int remainder)"}</code> | <span className="api-desc">Locks unlocked leaf slots one at a time (no refund) to take away points the player has already spent.</span> |
| <Link id="m-serializeslots" /><code>{"private void SerializeSlots("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint slotHash, HashSet<uint> covered, "}<Link to="/mod/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" tree)"}</code> | <span className="api-desc">Writes a slot after its unlocked dependencies, so loading unlocks them in a valid order.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PathExperience`:

<div className="api-used-in">

[`PlayerProgressionManager.CreatePathExperience`](/mod/game-api/types/global-p/playerprogressionmanager#m-createpathexperience), [`PlayerProgressionManager.PathExperiences`](/mod/game-api/types/global-p/playerprogressionmanager#m-pathexperiences).

</div>
