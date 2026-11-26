---
title: "TossTest"
description: "A test component that sets its rigidbody's velocity when Space is pressed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TossTest

A **class** in `Root.Township`, the global namespace.

A test component that sets its rigidbody's velocity when Space is pressed.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TossTest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | Velocity applied on Space. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | On Space, sets the attached rigidbody's velocity to `velocity`. |

</details>
