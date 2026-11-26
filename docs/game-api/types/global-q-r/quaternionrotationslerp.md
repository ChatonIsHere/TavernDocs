---
title: "QuaternionRotationSlerp"
description: "Component that sets its local rotation between two set rotations from a 0 to 1 progress value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuaternionRotationSlerp

A **class** in `Root.Township`, no namespace.

Component that sets its local rotation between two set rotations from a 0 to 1 progress value. Despite the name it uses `Quaternion.Lerp`.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuaternionRotationSlerp()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positiona" /><code>{"private Quaternion positionA"}</code> | Local rotation at progress 0. Shown as Euler angles in the inspector. |
| <Link id="m-positionb" /><code>{"private Quaternion positionB"}</code> | Local rotation at progress 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setrotation" /><code>{"void SetRotation(float progress)"}</code> | Sets the local rotation part way from `positionA` to `positionB` by `progress`. |

## Used in

Members of other types that take, return or hold a `QuaternionRotationSlerp`:

[`SkillOrbHolder.rotators`](/game-api/types/global-s/skillorbholder#m-rotators).
