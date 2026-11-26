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
| <Link id="m-ctor" /><code>{"WorldLerpAngle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastrotation" /><code>{"private Quaternion lastRotation"}</code> | <span className="api-desc">The smoothed world rotation from last frame.</span> |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> | <span className="api-desc">Smoothing speed. Higher follows the parent faster.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Lerps the stored rotation toward the parent's by `lerp` per second and applies it.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Snaps to the parent's rotation.</span> |

</details>
