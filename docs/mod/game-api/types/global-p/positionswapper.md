---
title: "PositionSwapper"
description: "Debug component: pressing a key moves a target object to the next of several anchor objects in turn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSwapper

A **class** in `Root.Township`, the global namespace.

Debug component: pressing a key moves a target object to the next of several anchor objects in turn.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionSwapper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-i" /><code>{"private int i"}</code> | <span className="api-desc">Index of the next position.</span> |
| <Link id="m-key" /><code>{"private KeyCode key"}</code> | <span className="api-desc">Key that moves the target.</span> |
| <Link id="m-positions" /><code>{"private GameObject[] positions"}</code> | <span className="api-desc">Anchors to cycle through.</span> |
| <Link id="m-target" /><code>{"private GameObject target"}</code> | <span className="api-desc">Object that gets moved.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">On the key press, parents `target` to the next position and zeroes its local position and rotation.</span> |

</details>
