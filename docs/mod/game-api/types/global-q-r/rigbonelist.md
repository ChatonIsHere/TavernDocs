---
title: "RigBoneList"
description: "Asset holding a list of rig bones (BoneIdentifiers), made from the Township/Animation menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RigBoneList

A **class** in `Root.Township`, the global namespace.

Asset holding a list of rig bones (`BoneIdentifier`s), made from the Township/Animation menu.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RigBoneList()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"> bones"}</code> | <span className="api-desc">Backing field for `Bones`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bones-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"> Bones { get; }"}</code> | <span className="api-desc">The bones in this list.</span> |

## Used in

Members of other types that take, return or hold a `RigBoneList`:

<div className="api-used-in">

[`RigMap.requiredList`](/mod/game-api/types/global-q-r/rigmap#m-requiredlist).

</div>
