---
title: "ExplosionRadius"
description: "Visual for an explosion's radius: it unparents itself while enabled, follows its original parent and scales a child to the radius, destroying itself if the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExplosionRadius

A **class** in `Root.Township`, the global namespace.

Visual for an explosion's radius: it unparents itself while enabled, follows its original parent and scales a child to the radius, destroying itself if the parent is gone.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExplosionRadius()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedparent" /><code>{"private Transform cachedParent"}</code> | <span className="api-desc">Original parent.</span> |
| <Link id="m-explosionradius" /><code>{"private float explosionRadius"}</code> | <span className="api-desc">Radius to show.</span> |
| <Link id="m-scalemultiplier" /><code>{"private float scaleMultiplier"}</code> | <span className="api-desc">Scale per unit of radius, to match the mesh size.</span> |
| <Link id="m-scaler" /><code>{"private Transform scaler"}</code> | <span className="api-desc">Transform scaled to show the radius.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Remembers the original parent.</span> |
| <Link id="m-fixparent" /><code>{"private IEnumerator FixParent() (iterator)"}</code> | <span className="api-desc">A frame after disabling, reparents to the original parent or destroys itself if that is gone.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Follows the parent's position and scales `scaler` to `explosionRadius` times `scaleMultiplier`.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Starts `FixParent`.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Unparents itself.</span> |

</details>
