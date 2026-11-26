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
| <Link id="m-ctor" /><code>{"CopyTransform()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform copied.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Reparents to the target's parent and copies its local transform.</span> |

</details>
