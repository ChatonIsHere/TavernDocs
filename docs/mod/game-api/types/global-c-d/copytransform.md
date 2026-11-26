---
title: "CopyTransform"
description: "Each frame, makes this object a sibling of the target and copies its local position, rotation and scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CopyTransform

A **class** in `Root.Township`, the global namespace.

Each frame, makes this object a sibling of the target and copies its local position, rotation and scale.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CopyTransform()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform copied. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Reparents to the target's parent and copies its local transform. |

</details>
