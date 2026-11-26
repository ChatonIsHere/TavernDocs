---
title: "ProfessionSkillTree"
description: "A skill tree asset for one progression path: its slots, icon and model."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkillTree

A **class** in `Root.Township`, the global namespace.

A skill tree asset for one progression path: its slots, icon and model. Loaded from `Resources/ProgressionTrees/`; get one with `GetProfessionTree`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Documented in** [Skills and unlocks](/mod/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfessionSkillTree()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |
| <Link id="m-path" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> | <span className="api-desc">Backing field for `Path`.</span> |
| <Link id="m-pathmodel" /><code>{"private GameObject pathModel"}</code> | <span className="api-desc">Backing field for `PathModel`.</span> |
| <Link id="m-slotmap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> slotMap"}</code> | <span className="api-desc">Slots by hash, for `GetSlot`.</span> |
| <Link id="m-slots" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> slots"}</code> | <span className="api-desc">Backing field for `Slots`.</span> |
| <Link id="m-treeicon" /><code>{"private Sprite treeIcon"}</code> | <span className="api-desc">Backing field for `TreeIcon`.</span> |
| <Link id="m-treemap" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/mod/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{"> treeMap"}</code> | <span className="api-desc">All trees by path, loaded once from `Resources/ProgressionTrees`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> | <span className="api-desc">Whether the tree is turned on.</span> |
| <Link id="m-path-2" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> | <span className="api-desc">The progression path this tree belongs to.</span> |
| <Link id="m-pathmodel-2" /><code>{"GameObject PathModel { get; }"}</code> | <span className="api-desc">Model shown for the path.</span> |
| <Link id="m-slots-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> Slots { get; }"}</code> | <span className="api-desc">The tree's skill slots.</span> |
| <Link id="m-treeicon-2" /><code>{"Sprite TreeIcon { get; }"}</code> | <span className="api-desc">Icon sprite for the tree.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprofessiontree" /><code>{"static "}<Link to="/mod/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" GetProfessionTree("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Returns the tree for a path, loading all trees on first call. Logs an error if there is none.</span> |
| <Link id="m-getslot" /><code>{"bool GetSlot(uint hash, out "}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Finds a slot in this tree by its hash.</span> |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | <span className="api-desc">Editor: validates slots and changes any duplicate slot hashes.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ensurefullmap" /><code>{"private void EnsureFullMap()"}</code> | <span className="api-desc">Fills `slotMap` from `slots` on first use and sets each slot's path.</span> |
| <Link id="m-forwardload" /><code>{"private void ForwardLoad()"}</code> | <span className="api-desc">On first load, builds the slot map and lets each slot link to the slots it inherits from.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ProfessionSkillTree`:

<div className="api-used-in">

[`PathExperience.SerializeSlots`](/mod/game-api/types/global-p/pathexperience#m-serializeslots), [`ProgressionSlot.AddInherit`](/mod/game-api/types/global-p/progressionslot#m-addinherit), [`ProgressionSlot.GetIndentLevel`](/mod/game-api/types/global-p/progressionslot#m-getindentlevel), [`ProgressionSlot.Validate`](/mod/game-api/types/global-p/progressionslot#m-validate).

</div>
