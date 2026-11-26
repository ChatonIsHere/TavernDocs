---
title: "ExplosionRadius"
description: "Visual for an explosion's radius: it unparents itself while enabled, follows its original parent and scales a child to the radius, destroying itself if the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExplosionRadius

A **class** in `Root.Township`, no namespace.

Visual for an explosion's radius: it unparents itself while enabled, follows its original parent and scales a child to the radius, destroying itself if the parent is gone.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExplosionRadius()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedparent" /><code>{"private Transform cachedParent"}</code> | Original parent. |
| <Link id="m-explosionradius" /><code>{"private float explosionRadius"}</code> | Radius to show. |
| <Link id="m-scalemultiplier" /><code>{"private float scaleMultiplier"}</code> | Scale per unit of radius, to match the mesh size. |
| <Link id="m-scaler" /><code>{"private Transform scaler"}</code> | Transform scaled to show the radius. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Remembers the original parent. |
| <Link id="m-fixparent" /><code>{"private IEnumerator FixParent() (iterator)"}</code> | A frame after disabling, reparents to the original parent or destroys itself if that is gone. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Follows the parent's position and scales `scaler` to `explosionRadius` times `scaleMultiplier`. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Starts `FixParent`. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Unparents itself. |

</details>
