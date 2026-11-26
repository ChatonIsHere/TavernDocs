---
title: "PickupButtons"
description: "Component on a pickup with buttons that stops the buttons' colliders counting as the pickup's own colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupButtons

A **class** in `Root.Township`, the global namespace.

Component on a pickup with buttons that stops the buttons' colliders counting as the pickup's own colliders.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupButtons()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Removes every child `PhysicalButton` collider from the pickup's `Colliders` list. |

</details>
