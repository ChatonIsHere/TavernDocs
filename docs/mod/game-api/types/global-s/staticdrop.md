---
title: "StaticDrop"
description: "Detaches its object from its parent at start but still destroys it when the parent entity is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticDrop

A **class** in `Root.Township`, the global namespace.

Detaches its object from its parent at start but still destroys it when the parent entity is destroyed.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticDrop()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" obj)"}</code> | Destroys this object. Called when the former parent's entity is destroyed. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the parent's destroyed event, then unparents itself. |

</details>
