---
title: "RotationSlerp"
description: "Sets its local rotation between two Euler angle sets from a 0 to 1 progress value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotationSlerp

A **class** in `Root.Township`, no namespace.

Sets its local rotation between two Euler angle sets from a 0 to 1 progress value. Driven by events such as float animation updates.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RotationSlerp()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position0" /><code>{"private Vector3 position0"}</code> | Euler angles at progress 0. |
| <Link id="m-position1" /><code>{"private Vector3 position1"}</code> | Euler angles at progress 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setrotation" /><code>{"void SetRotation(float progress)"}</code> | Lerps the Euler angles between the two ends by `progress` and applies them as local rotation. |
