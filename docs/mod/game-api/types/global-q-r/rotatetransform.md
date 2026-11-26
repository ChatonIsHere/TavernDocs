---
title: "RotateTransform"
description: "Sets its transform to one of a list of preset rotations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotateTransform

A **class** in `Root.Township`, the global namespace.

Sets its transform to one of a list of preset rotations. Meant to be called from events.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotateTransform()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eulerangles" /><code>{"private Vector3[] eulerAngles"}</code> | <span className="api-desc">The preset rotations, as Euler angles.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setglobalrotation" /><code>{"void SetGlobalRotation(int angleIndex)"}</code> | <span className="api-desc">Sets the world rotation to the Euler angles at the given index.</span> |
| <Link id="m-setlocalrotation" /><code>{"void SetLocalRotation(int angleIndex)"}</code> | <span className="api-desc">Sets the local rotation to the Euler angles at the given index.</span> |
