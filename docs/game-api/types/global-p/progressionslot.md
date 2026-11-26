---
title: "ProgressionSlot"
description: "One slot in a profession skill tree: a skill, its cost in points, and the slots it depends on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSlot

A **class** in `Root.Township`, no namespace.

One slot in a profession skill tree: a skill, its cost in points, and the slots it depends on. The tree's `Validate` fills in the hash and path.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProgressionSlot()"}</code> |
| <Link id="m-ctor-2" /><code>{"ProgressionSlot("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"private uint cost"}</code> | Backing field for `Cost`: skill points needed to buy the slot. 1 by default. |
| <Link id="m-dependencies" /><code>{"private List<uint> dependencies"}</code> | Backing field for `Dependencies`: hashes of slots that must be owned first. |
| <Link id="m-hash" /><code>{"private uint hash"}</code> | Backing field for `Hash`. Made on validate from the skill's hash plus its dependencies' hashes (or a random number). |
| <Link id="m-indentlevel" /><code>{"private int indentLevel"}</code> | Cached depth in the tree: one more than the deepest dependency. -1 until worked out. |
| <Link id="m-inheritslots" /><code>{"private List<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> inheritSlots"}</code> | Backing field for `InheritSlots`: slots that depend on this one. Not serialized; filled by `AddInherit`. |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`. Defaults to the skill's name. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`, the slot's place in the skill tree layout. |
| <Link id="m-skill" /><code>{"private "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill"}</code> | Backing field for `Skill`, the skill this slot grants. |
| <Link id="m-sloticon" /><code>{"private Texture2D slotIcon"}</code> | Backing field for `SlotIcon`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cost-2" /><code>{"uint Cost { get; }"}</code> | Skill points needed to buy it. Default 1. |
| <Link id="m-dependencies-2" /><code>{"List<uint> Dependencies { get; }"}</code> | Hashes of the slots that must come first. |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | Identifier saved with a player's progress. Made from the skill hash and its dependencies. |
| <Link id="m-inheritslots-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> InheritSlots { get; }"}</code> | Slots that depend on this one. |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | Display name. Defaults to the skill's name. |
| <Link id="m-path" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; set; }"}</code> | The progression path (such as mining or forging) this slot belongs to. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | Position of the slot on the skill tree board. |
| <Link id="m-skill-2" /><code><Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" Skill { get; }"}</code> | The skill this slot unlocks. |
| <Link id="m-sloticon-2" /><code>{"Texture2D SlotIcon { get; }"}</code> | Icon shown for the slot. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinherit" /><code>{"void AddInherit("}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" tree)"}</code> | Registers this slot as a follow-on of each slot it depends on. |
| <Link id="m-forcechange" /><code>{"void ForceChange()"}</code> | Nudges the hash by a random amount, giving the slot a new identity. |
| <Link id="m-getindentlevel" /><code>{"int GetIndentLevel("}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" skillTree)"}</code> | Depth in the tree: one more than its deepest dependency. Cached. |
| <Link id="m-validate" /><code>{"void Validate("}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" skillTree)"}</code> | Fills in a missing hash and name, sets the path from the tree and recalculates the indent level. |

## Used in

Members of other types that take, return or hold a `ProgressionSlot`:

[`BoughtSkillOrbReplacer.InitializeSlot`](/game-api/types/global-a-b/boughtskillorbreplacer#m-initializeslot), [`BoughtSkillVisualizer.CallLockedByDependencyEffect`](/game-api/types/global-a-b/boughtskillvisualizer#m-calllockedbydependencyeffect), [`BoughtSkillVisualizer.GetOrbIndex`](/game-api/types/global-a-b/boughtskillvisualizer#m-getorbindex), [`ISkillOrb.Slot`](/game-api/types/global-i-l/iskillorb#m-slot), [`PathExperience.HasMultipleDependenciesUnlocked`](/game-api/types/global-p/pathexperience#m-hasmultipledependenciesunlocked), [`PathExperience.IsSlotAvailable`](/game-api/types/global-p/pathexperience#m-isslotavailable), [`PathExperience.LockSlot`](/game-api/types/global-p/pathexperience#m-lockslot), [`PathExperience.RecursiveLockSlot`](/game-api/types/global-p/pathexperience#m-recursivelockslot), [`PathExperience.UnlockSlot`](/game-api/types/global-p/pathexperience#m-unlockslot), [`PlayerProgressionManager.GetSlots`](/game-api/types/global-p/playerprogressionmanager#m-getslots), [`PlayerProgressionManager.IsSlotAvailable`](/game-api/types/global-p/playerprogressionmanager#m-isslotavailable), [`PlayerProgressionManager.IsSlotPracticed`](/game-api/types/global-p/playerprogressionmanager#m-isslotpracticed), [`PlayerProgressionManager.LockSlot`](/game-api/types/global-p/playerprogressionmanager#m-lockslot), [`PlayerProgressionManager.UnlockSlot`](/game-api/types/global-p/playerprogressionmanager#m-unlockslot), [`ProfessionSkillTree.GetSlot`](/game-api/types/global-p/professionskilltree#m-getslot), [`ProfessionSkillTree.slotMap`](/game-api/types/global-p/professionskilltree#m-slotmap), [`ProfessionSkillTree.slots`](/game-api/types/global-p/professionskilltree#m-slots), [`ProfessionSkillTree.Slots`](/game-api/types/global-p/professionskilltree#m-slots-2), [`ProgressionSlotContainer.InitializeSlot`](/game-api/types/global-p/progressionslotcontainer#m-initializeslot), [`ProgressionSlotContainer.Slot`](/game-api/types/global-p/progressionslotcontainer#m-slot), [`SkillOrb.InitializeSlot`](/game-api/types/global-s/skillorb#m-initializeslot), [`SkillOrb.Slot`](/game-api/types/global-s/skillorb#m-slot), [`SkillOrbEffect.SetSlot`](/game-api/types/global-s/skillorbeffect#m-setslot), [`SkillShrine.ApliedSlotTuple.ApliedSlotTuple`](/game-api/types/global-s/skillshrine-apliedslottuple#m-ctor), [`SkillShrine.ApliedSlotTuple.Slot`](/game-api/types/global-s/skillshrine-apliedslottuple#m-slot).
