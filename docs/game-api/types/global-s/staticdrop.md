---
title: "StaticDrop"
description: "Detaches its object from its parent at start but still destroys it when the parent entity is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticDrop

A **class** in `Root.Township`, no namespace.

Detaches its object from its parent at start but still destroys it when the parent entity is destroyed.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaticDrop()"}</code> |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" obj)"}</code> | Destroys this object. Called when the former parent's entity is destroyed. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the parent's destroyed event, then unparents itself. |

</details>
