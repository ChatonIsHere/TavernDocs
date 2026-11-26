---
title: "PositionSwapper"
description: "Debug component: pressing a key moves a target object to the next of several anchor objects in turn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSwapper

A **class** in `Root.Township`, no namespace.

Debug component: pressing a key moves a target object to the next of several anchor objects in turn.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PositionSwapper()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-i" /><code>{"private int i"}</code> | Index of the next position. |
| <Link id="m-key" /><code>{"private KeyCode key"}</code> | Key that moves the target. |
| <Link id="m-positions" /><code>{"private GameObject[] positions"}</code> | Anchors to cycle through. |
| <Link id="m-target" /><code>{"private GameObject target"}</code> | Object that gets moved. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | On the key press, parents `target` to the next position and zeroes its local position and rotation. |

</details>
