---
title: "RotateTransform"
description: "Sets its transform to one of a list of preset rotations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotateTransform

A **class** in `Root.Township`, no namespace.

Sets its transform to one of a list of preset rotations. Meant to be called from events.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RotateTransform()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eulerangles" /><code>{"private Vector3[] eulerAngles"}</code> | The preset rotations, as Euler angles. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setglobalrotation" /><code>{"void SetGlobalRotation(int angleIndex)"}</code> | Sets the world rotation to the Euler angles at the given index. |
| <Link id="m-setlocalrotation" /><code>{"void SetLocalRotation(int angleIndex)"}</code> | Sets the local rotation to the Euler angles at the given index. |
