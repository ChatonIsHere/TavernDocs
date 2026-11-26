---
title: "SimpleDummy"
description: "Plain holder for a character model's animator and skinned mesh, used by BonesBaking in the editor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleDummy

A **class** in `Root.Township`, the global namespace.

Plain holder for a character model's animator and skinned mesh, used by `BonesBaking` in the editor.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleDummy()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"Animator animator"}</code> | <span className="api-desc">The model's animator.</span> |
| <Link id="m-skinnedmeshrenderer" /><code>{"SkinnedMeshRenderer skinnedMeshRenderer"}</code> | <span className="api-desc">The model's skinned mesh renderer.</span> |

## Used in

Members of other types that take, return or hold a `SimpleDummy`:

<div className="api-used-in">

[`BonesBaking.dummyPrefab`](/mod/game-api/types/alta-customization/bonesbaking#m-dummyprefab), [`BonesBaking.sceneDummy`](/mod/game-api/types/alta-customization/bonesbaking#m-scenedummy).

</div>
