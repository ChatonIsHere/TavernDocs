---
title: "TransformBone"
description: "Sets a fixed local position, rotation and scale on one bone of a character dummy's rig when it wakes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformBone

A **class** in `Root.Township`, the global namespace.

Sets a fixed local position, rotation and scale on one bone of a character dummy's rig when it wakes.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformBone()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | <span className="api-desc">Which bone to move.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Pointer to the character dummy that owns the rig.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Local position to set.</span> |
| <Link id="m-rotation" /><code>{"private Vector3 rotation"}</code> | <span className="api-desc">Local rotation to set, as Euler angles.</span> |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | <span className="api-desc">Local scale to set.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-move" /><code>{"void Move()"}</code> | <span className="api-desc">Looks up the bone on the dummy's rig map and applies the stored local position, rotation and scale.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Calls `Move`.</span> |

</details>
