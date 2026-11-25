---
title: "PathExperience"
description: "One per player per path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathExperience

A **class** in `Root.Township`, no namespace.

One per player per path.

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
| <Link id="m-currentexperience-2" /><code>{"uint CurrentExperience { get; }"}</code> |  |
| <Link id="m-currentlevel-2" /><code>{"uint CurrentLevel { get; }"}</code> |  |
| <Link id="m-freepoints-2" /><code>{"uint FreePoints { get; }"}</code> |  |
| <Link id="m-path" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; private set; }"}</code> |  |
| <Link id="m-unlockedslots-2" /><code>{"IEnumerable<uint> UnlockedSlots { get; }"}</code> |  |
| <Link id="m-unlockedslotscounts" /><code>{"int UnlockedSlotsCounts { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugclearslots" /><code>{"void DebugClearSlots()"}</code> |  |
| <Link id="m-gainexperience" /><code>{"void GainExperience(int experience)"}</code> |  |
| <Link id="m-isslotavailable" /><code><Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" IsSlotAvailable("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> |  |
| <Link id="m-isslotpracticed" /><code>{"bool IsSlotPracticed(uint slotHash)"}</code> |  |
| <Link id="m-lockslot" /><code>{"void LockSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, bool isRecoveringPoints = true)"}</code> |  |
| <Link id="m-loseexperience" /><code>{"void LoseExperience(float percentage)"}</code> |  |
| <Link id="m-practiceslot" /><code>{"bool PracticeSlot(uint slotHash)"}</code> |  |
| <Link id="m-removefreepoints" /><code>{"void RemoveFreePoints(int toRemove)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializepracticedslots" /><code>{"void SerializePracticedSlots("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-unlockslot" /><code>{"void UnlockSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, bool isConsumingPoints = true)"}</code> |  |
| <Link id="m-gainexperienceunmultiplied" /><code>{"private void GainExperienceUnmultiplied(int experience)"}</code> |  |
| <Link id="m-hasmultipledependenciesunlocked" /><code>{"private bool HasMultipleDependenciesUnlocked("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> |  |
| <Link id="m-recursivelockslot" /><code>{"private void RecursiveLockSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, ref float totalExperienceReward)"}</code> |  |
| <Link id="m-removeslots" /><code>{"private void RemoveSlots(int remainder)"}</code> |  |
| <Link id="m-serializeslots" /><code>{"private void SerializeSlots("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint slotHash, HashSet<uint> covered, "}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" tree)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PathExperience`:

[`PlayerProgressionManager.CreatePathExperience`](/game-api/types/global-p/playerprogressionmanager#m-createpathexperience), [`PlayerProgressionManager.PathExperiences`](/game-api/types/global-p/playerprogressionmanager#m-pathexperiences).
