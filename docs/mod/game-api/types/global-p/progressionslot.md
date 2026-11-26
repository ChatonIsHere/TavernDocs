---
title: "ProgressionSlot"
description: "One slot in a profession skill tree: a skill, its cost in points, and the slots it depends on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSlot

A **class** in `Root.Township`, the global namespace.

One slot in a profession skill tree: a skill, its cost in points, and the slots it depends on. The tree's `Validate` fills in the hash and path.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Documented in** [Skills and unlocks](/mod/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProgressionSlot()"}</code> | <span className="api-desc">Creates a `ProgressionSlot` from `skill`.</span> |
| <Link id="m-ctor-2" /><code>{"ProgressionSlot("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Creates a `ProgressionSlot` from `skill`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"private uint cost"}</code> | <span className="api-desc">Backing field for `Cost`: skill points needed to buy the slot. 1 by default.</span> |
| <Link id="m-dependencies" /><code>{"private List<uint> dependencies"}</code> | <span className="api-desc">Backing field for `Dependencies`: hashes of slots that must be owned first.</span> |
| <Link id="m-hash" /><code>{"private uint hash"}</code> | <span className="api-desc">Backing field for `Hash`. Made on validate from the skill's hash plus its dependencies' hashes (or a random number).</span> |
| <Link id="m-indentlevel" /><code>{"private int indentLevel"}</code> | <span className="api-desc">Cached depth in the tree: one more than the deepest dependency. -1 until worked out.</span> |
| <Link id="m-inheritslots" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> inheritSlots"}</code> | <span className="api-desc">Backing field for `InheritSlots`: slots that depend on this one. Not serialized; filled by `AddInherit`.</span> |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Backing field for `Name`. Defaults to the skill's name.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`, the slot's place in the skill tree layout.</span> |
| <Link id="m-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill"}</code> | <span className="api-desc">Backing field for `Skill`, the skill this slot grants.</span> |
| <Link id="m-sloticon" /><code>{"private Texture2D slotIcon"}</code> | <span className="api-desc">Backing field for `SlotIcon`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cost-2" /><code>{"uint Cost { get; }"}</code> | <span className="api-desc">Skill points needed to buy it. Default 1.</span> |
| <Link id="m-dependencies-2" /><code>{"List<uint> Dependencies { get; }"}</code> | <span className="api-desc">Hashes of the slots that must come first.</span> |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">Identifier saved with a player's progress. Made from the skill hash and its dependencies.</span> |
| <Link id="m-inheritslots-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> InheritSlots { get; }"}</code> | <span className="api-desc">Slots that depend on this one.</span> |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Display name. Defaults to the skill's name.</span> |
| <Link id="m-path" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; set; }"}</code> | <span className="api-desc">The progression path (such as mining or forging) this slot belongs to.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Position of the slot on the skill tree board.</span> |
| <Link id="m-skill-2" /><code><Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" Skill { get; }"}</code> | <span className="api-desc">The skill this slot unlocks.</span> |
| <Link id="m-sloticon-2" /><code>{"Texture2D SlotIcon { get; }"}</code> | <span className="api-desc">Icon shown for the slot.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinherit" /><code>{"void AddInherit("}<Link to="/mod/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" tree)"}</code> | <span className="api-desc">Registers this slot as a follow-on of each slot it depends on.</span> |
| <Link id="m-forcechange" /><code>{"void ForceChange()"}</code> | <span className="api-desc">Nudges the hash by a random amount, giving the slot a new identity.</span> |
| <Link id="m-getindentlevel" /><code>{"int GetIndentLevel("}<Link to="/mod/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" skillTree)"}</code> | <span className="api-desc">Depth in the tree: one more than its deepest dependency. Cached.</span> |
| <Link id="m-validate" /><code>{"void Validate("}<Link to="/mod/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" skillTree)"}</code> | <span className="api-desc">Fills in a missing hash and name, sets the path from the tree and recalculates the indent level.</span> |

## Used in

Members of other types that take, return or hold a `ProgressionSlot`:

<div className="api-used-in">

[`BoughtSkillOrbReplacer.InitializeSlot`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-initializeslot), [`BoughtSkillVisualizer.CallLockedByDependencyEffect`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-calllockedbydependencyeffect), [`BoughtSkillVisualizer.GetOrbIndex`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-getorbindex), [`ISkillOrb.Slot`](/mod/game-api/types/global-i-l/iskillorb#m-slot), [`PathExperience.HasMultipleDependenciesUnlocked`](/mod/game-api/types/global-p/pathexperience#m-hasmultipledependenciesunlocked), [`PathExperience.IsSlotAvailable`](/mod/game-api/types/global-p/pathexperience#m-isslotavailable), [`PathExperience.LockSlot`](/mod/game-api/types/global-p/pathexperience#m-lockslot), [`PathExperience.RecursiveLockSlot`](/mod/game-api/types/global-p/pathexperience#m-recursivelockslot), [`PathExperience.UnlockSlot`](/mod/game-api/types/global-p/pathexperience#m-unlockslot), [`PlayerProgressionManager.GetSlots`](/mod/game-api/types/global-p/playerprogressionmanager#m-getslots), [`PlayerProgressionManager.IsSlotAvailable`](/mod/game-api/types/global-p/playerprogressionmanager#m-isslotavailable), [`PlayerProgressionManager.IsSlotPracticed`](/mod/game-api/types/global-p/playerprogressionmanager#m-isslotpracticed), [`PlayerProgressionManager.LockSlot`](/mod/game-api/types/global-p/playerprogressionmanager#m-lockslot), [`PlayerProgressionManager.UnlockSlot`](/mod/game-api/types/global-p/playerprogressionmanager#m-unlockslot), [`ProfessionSkillTree.GetSlot`](/mod/game-api/types/global-p/professionskilltree#m-getslot), [`ProfessionSkillTree.slotMap`](/mod/game-api/types/global-p/professionskilltree#m-slotmap), [`ProfessionSkillTree.slots`](/mod/game-api/types/global-p/professionskilltree#m-slots), [`ProfessionSkillTree.Slots`](/mod/game-api/types/global-p/professionskilltree#m-slots-2), [`ProgressionSlotContainer.InitializeSlot`](/mod/game-api/types/global-p/progressionslotcontainer#m-initializeslot), [`ProgressionSlotContainer.Slot`](/mod/game-api/types/global-p/progressionslotcontainer#m-slot), [`SkillOrb.InitializeSlot`](/mod/game-api/types/global-s/skillorb#m-initializeslot), [`SkillOrb.Slot`](/mod/game-api/types/global-s/skillorb#m-slot), [`SkillOrbEffect.SetSlot`](/mod/game-api/types/global-s/skillorbeffect#m-setslot), [`SkillShrine.ApliedSlotTuple.ApliedSlotTuple`](/mod/game-api/types/global-s/skillshrine-apliedslottuple#m-ctor), [`SkillShrine.ApliedSlotTuple.Slot`](/mod/game-api/types/global-s/skillshrine-apliedslottuple#m-slot).

</div>
