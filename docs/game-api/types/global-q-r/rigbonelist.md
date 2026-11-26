---
title: "RigBoneList"
description: "Asset holding a list of rig bones (BoneIdentifiers), made from the Township/Animation menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RigBoneList

A **class** in `Root.Township`, no namespace.

Asset holding a list of rig bones (`BoneIdentifier`s), made from the Township/Animation menu.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RigBoneList()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"> bones"}</code> | Backing field for `Bones`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bones-2" /><code>{"List<"}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"> Bones { get; }"}</code> | The bones in this list. |

## Used in

Members of other types that take, return or hold a `RigBoneList`:

[`RigMap.requiredList`](/game-api/types/global-q-r/rigmap#m-requiredlist).
