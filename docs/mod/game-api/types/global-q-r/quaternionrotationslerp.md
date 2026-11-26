---
title: "QuaternionRotationSlerp"
description: "Component that sets its local rotation between two set rotations from a 0 to 1 progress value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuaternionRotationSlerp

A **class** in `Root.Township`, the global namespace.

Component that sets its local rotation between two set rotations from a 0 to 1 progress value. Despite the name it uses `Quaternion.Lerp`.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuaternionRotationSlerp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positiona" /><code>{"private Quaternion positionA"}</code> | <span className="api-desc">Local rotation at progress 0. Shown as Euler angles in the inspector.</span> |
| <Link id="m-positionb" /><code>{"private Quaternion positionB"}</code> | <span className="api-desc">Local rotation at progress 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setrotation" /><code>{"void SetRotation(float progress)"}</code> | <span className="api-desc">Sets the local rotation part way from `positionA` to `positionB` by `progress`.</span> |

## Used in

Members of other types that take, return or hold a `QuaternionRotationSlerp`:

<div className="api-used-in">

[`SkillOrbHolder.rotators`](/mod/game-api/types/global-s/skillorbholder#m-rotators).

</div>
