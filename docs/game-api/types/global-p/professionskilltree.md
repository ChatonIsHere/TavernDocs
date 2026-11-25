---
title: "ProfessionSkillTree"
description: "ScriptableObject, one per path, loaded from Resources/ProgressionTrees/."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionSkillTree

A **class** in `Root.Township`, no namespace.

`ScriptableObject`, one per path, loaded from `Resources/ProgressionTrees/`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfessionSkillTree()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-path" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path"}</code> |  |
| <Link id="m-pathmodel" /><code>{"private GameObject pathModel"}</code> |  |
| <Link id="m-slotmap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> slotMap"}</code> |  |
| <Link id="m-slots" /><code>{"private List<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> slots"}</code> |  |
| <Link id="m-treeicon" /><code>{"private Sprite treeIcon"}</code> |  |
| <Link id="m-treemap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{"> treeMap"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; }"}</code> |  |
| <Link id="m-path-2" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> |  |
| <Link id="m-pathmodel-2" /><code>{"GameObject PathModel { get; }"}</code> |  |
| <Link id="m-slots-2" /><code>{"List<"}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{"> Slots { get; }"}</code> |  |
| <Link id="m-treeicon-2" /><code>{"Sprite TreeIcon { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprofessiontree" /><code>{"static "}<Link to="/game-api/types/global-p/professionskilltree">{"ProfessionSkillTree"}</Link>{" GetProfessionTree("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
| <Link id="m-getslot" /><code>{"bool GetSlot(uint hash, out "}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> |  |
| <Link id="m-ensurefullmap" /><code>{"private void EnsureFullMap()"}</code> |  |
| <Link id="m-forwardload" /><code>{"private void ForwardLoad()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ProfessionSkillTree`:

[`PathExperience.SerializeSlots`](/game-api/types/global-p/pathexperience#m-serializeslots), [`ProgressionSlot.AddInherit`](/game-api/types/global-p/progressionslot#m-addinherit), [`ProgressionSlot.GetIndentLevel`](/game-api/types/global-p/progressionslot#m-getindentlevel), [`ProgressionSlot.Validate`](/game-api/types/global-p/progressionslot#m-validate).
