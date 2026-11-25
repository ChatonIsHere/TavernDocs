---
title: "ProgressionSlot"
description: "A node in a tree: uint Hash, uint Cost, List<uint> Dependencies (slot hashes), ProfessionSkill Skill, ProgressionPath Path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSlot

A **class** in `Root.Township`, no namespace.

A node in a tree: `uint Hash`, `uint Cost`, `List<uint> Dependencies` (slot hashes), `ProfessionSkill Skill`, `ProgressionPath Path`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProgressionSlot()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"ProgressionSlot("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"private uint cost"}</code> |  |
| <Link id="m-dependencies" /><code>{"private List<uint> dependencies"}</code> |  |
| <Link id="m-hash" /><code>{"private uint hash"}</code> |  |
| <Link id="m-indentlevel" /><code>{"private int indentLevel"}</code> |  |
| <Link id="m-inheritslots" /><code>{"private List<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> inheritSlots"}</code> |  |
| <Link id="m-name" /><code>{"private string name"}</code> |  |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |  |
| <Link id="m-skill" /><code>{"private "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill"}</code> |  |
| <Link id="m-sloticon" /><code>{"private Texture2D slotIcon"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cost-2" /><code>{"uint Cost { get; }"}</code> |  |
| <Link id="m-dependencies-2" /><code>{"List<uint> Dependencies { get; }"}</code> |  |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> |  |
| <Link id="m-inheritslots-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> InheritSlots { get; }"}</code> |  |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-path" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; set; }"}</code> |  |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> |  |
| <Link id="m-skill-2" /><code><Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" Skill { get; }"}</code> |  |
| <Link id="m-sloticon-2" /><code>{"Texture2D SlotIcon { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinherit" /><code>{"void AddInherit("}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" tree)"}</code> |  |
| <Link id="m-forcechange" /><code>{"void ForceChange()"}</code> |  |
| <Link id="m-getindentlevel" /><code>{"int GetIndentLevel("}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" skillTree)"}</code> |  |
| <Link id="m-validate" /><code>{"void Validate("}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" skillTree)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ProgressionSlot`:

[`BoughtSkillOrbReplacer.InitializeSlot`](/game-api/types/global-a-b/boughtskillorbreplacer#m-initializeslot), [`BoughtSkillVisualizer.CallLockedByDependencyEffect`](/game-api/types/global-a-b/boughtskillvisualizer#m-calllockedbydependencyeffect), [`BoughtSkillVisualizer.GetOrbIndex`](/game-api/types/global-a-b/boughtskillvisualizer#m-getorbindex), [`ISkillOrb.Slot`](/game-api/types/global-i-l/iskillorb#m-slot), [`PathExperience.HasMultipleDependenciesUnlocked`](/game-api/types/global-p/pathexperience#m-hasmultipledependenciesunlocked), [`PathExperience.IsSlotAvailable`](/game-api/types/global-p/pathexperience#m-isslotavailable), [`PathExperience.LockSlot`](/game-api/types/global-p/pathexperience#m-lockslot), [`PathExperience.RecursiveLockSlot`](/game-api/types/global-p/pathexperience#m-recursivelockslot), [`PathExperience.UnlockSlot`](/game-api/types/global-p/pathexperience#m-unlockslot), [`PlayerProgressionManager.GetSlots`](/game-api/types/global-p/playerprogressionmanager#m-getslots), [`PlayerProgressionManager.IsSlotAvailable`](/game-api/types/global-p/playerprogressionmanager#m-isslotavailable), [`PlayerProgressionManager.IsSlotPracticed`](/game-api/types/global-p/playerprogressionmanager#m-isslotpracticed), [`PlayerProgressionManager.LockSlot`](/game-api/types/global-p/playerprogressionmanager#m-lockslot), [`PlayerProgressionManager.UnlockSlot`](/game-api/types/global-p/playerprogressionmanager#m-unlockslot), [`ProfessionSkillTree.GetSlot`](/game-api/types/global-p/professionskilltree#m-getslot), [`ProfessionSkillTree.slotMap`](/game-api/types/global-p/professionskilltree#m-slotmap), [`ProfessionSkillTree.slots`](/game-api/types/global-p/professionskilltree#m-slots), [`ProfessionSkillTree.Slots`](/game-api/types/global-p/professionskilltree#m-slots-2), [`ProgressionSlotContainer.InitializeSlot`](/game-api/types/global-p/progressionslotcontainer#m-initializeslot), [`ProgressionSlotContainer.Slot`](/game-api/types/global-p/progressionslotcontainer#m-slot), [`SkillOrb.InitializeSlot`](/game-api/types/global-s/skillorb#m-initializeslot), [`SkillOrb.Slot`](/game-api/types/global-s/skillorb#m-slot), [`SkillOrbEffect.SetSlot`](/game-api/types/global-s/skillorbeffect#m-setslot), [`SkillShrine.ApliedSlotTuple.ApliedSlotTuple`](/game-api/types/global-s/skillshrine-apliedslottuple#m-ctor), [`SkillShrine.ApliedSlotTuple.Slot`](/game-api/types/global-s/skillshrine-apliedslottuple#m-slot).
