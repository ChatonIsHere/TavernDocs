---
title: "WrapBone"
description: "Inserts this object into a character dummy's rig as the new parent of one bone, so the bone moves with it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WrapBone

A **class** in `Root.Township`, the global namespace.

Inserts this object into a character dummy's rig as the new parent of one bone, so the bone moves with it.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WrapBone()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | <span className="api-desc">Which bone to wrap.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Points at the character dummy whose rig holds the bone.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-move" /><code>{"void Move()"}</code> | <span className="api-desc">Takes the bone's place in the hierarchy (same parent and local transform), then puts the bone under this object with a reset local transform.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Calls `Move`.</span> |

</details>
