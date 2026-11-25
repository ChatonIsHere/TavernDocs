---
title: "ProfessionSkillTree"
description: "A skill tree asset for one progression path: its slots, icon and model."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkillTree

A **class** in `Root.Township`, no namespace.

A skill tree asset for one progression path: its slots, icon and model. Loaded from `Resources/ProgressionTrees/`; get one with `GetProfessionTree`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProfessionSkillTree()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |
| <Link id="m-path" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> |
| <Link id="m-pathmodel" /><code>{"private GameObject pathModel"}</code> |
| <Link id="m-slotmap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> slotMap"}</code> |
| <Link id="m-slots" /><code>{"private List<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> slots"}</code> |
| <Link id="m-treeicon" /><code>{"private Sprite treeIcon"}</code> |
| <Link id="m-treemap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{"> treeMap"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> | Whether the tree is turned on. |
| <Link id="m-path-2" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> | The progression path this tree belongs to. |
| <Link id="m-pathmodel-2" /><code>{"GameObject PathModel { get; }"}</code> | Model shown for the path. |
| <Link id="m-slots-2" /><code>{"List<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> Slots { get; }"}</code> | The tree's skill slots. |
| <Link id="m-treeicon-2" /><code>{"Sprite TreeIcon { get; }"}</code> | Icon sprite for the tree. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprofessiontree" /><code>{"static "}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" GetProfessionTree("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Returns the tree for a path, loading all trees on first call. Logs an error if there is none. |
| <Link id="m-getslot" /><code>{"bool GetSlot(uint hash, out "}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | Finds a slot in this tree by its hash. |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | Editor: validates slots and changes any duplicate slot hashes. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ensurefullmap" /><code>{"private void EnsureFullMap()"}</code> |
| <Link id="m-forwardload" /><code>{"private void ForwardLoad()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ProfessionSkillTree`:

[`PathExperience.SerializeSlots`](/game-api/types/global-p/pathexperience#m-serializeslots), [`ProgressionSlot.AddInherit`](/game-api/types/global-p/progressionslot#m-addinherit), [`ProgressionSlot.GetIndentLevel`](/game-api/types/global-p/progressionslot#m-getindentlevel), [`ProgressionSlot.Validate`](/game-api/types/global-p/progressionslot#m-validate).
