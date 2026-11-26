---
title: "MoveToBone"
description: "Reparents its GameObject onto a bone of a character dummy on Awake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MoveToBone

A **class** in `Root.Township`, no namespace.

Reparents its GameObject onto a bone of a character dummy on Awake.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MoveToBone()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | Bone to attach to. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Pointer to the character dummy that owns the bone. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-move" /><code>{"void Move()"}</code> | Parents this object to the chosen bone and resets its local transform. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Calls `Move`. |

</details>
