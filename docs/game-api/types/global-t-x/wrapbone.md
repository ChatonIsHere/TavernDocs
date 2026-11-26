---
title: "WrapBone"
description: "Inserts this object into a character dummy's rig as the new parent of one bone, so the bone moves with it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WrapBone

A **class** in `Root.Township`, no namespace.

Inserts this object into a character dummy's rig as the new parent of one bone, so the bone moves with it.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WrapBone()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | Which bone to wrap. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Points at the character dummy whose rig holds the bone. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-move" /><code>{"void Move()"}</code> | Takes the bone's place in the hierarchy (same parent and local transform), then puts the bone under this object with a reset local transform. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Calls `Move`. |

</details>
