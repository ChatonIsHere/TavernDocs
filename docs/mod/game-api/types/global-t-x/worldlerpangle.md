---
title: "WorldLerpAngle"
description: "Makes this transform lag behind its parent's rotation, smoothing it in world space."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldLerpAngle

A **class** in `Root.Township`, the global namespace.

Makes this transform lag behind its parent's rotation, smoothing it in world space. Put it on a child.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WorldLerpAngle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | The smoothed world rotation from last frame. |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> | Smoothing speed. Higher follows the parent faster. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Lerps the stored rotation toward the parent's by `lerp` per second and applies it. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Snaps to the parent's rotation. |

</details>
