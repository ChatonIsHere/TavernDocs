---
title: "TransformBone"
description: "Sets a fixed local position, rotation and scale on one bone of a character dummy's rig when it wakes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformBone

A **class** in `Root.Township`, no namespace.

Sets a fixed local position, rotation and scale on one bone of a character dummy's rig when it wakes.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TransformBone()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | Which bone to move. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Pointer to the character dummy that owns the rig. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Local position to set. |
| <Link id="m-rotation" /><code>{"private Vector3 rotation"}</code> | Local rotation to set, as Euler angles. |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | Local scale to set. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-move" /><code>{"void Move()"}</code> | Looks up the bone on the dummy's rig map and applies the stored local position, rotation and scale. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Calls `Move`. |

</details>
