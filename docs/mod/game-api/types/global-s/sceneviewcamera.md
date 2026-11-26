---
title: "SceneViewCamera"
description: "Networked component that only stays on the server; clients remove it on initialize."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneViewCamera

A **class** in `Root.Township`, the global namespace.

Networked component that only stays on the server; clients remove it on initialize. Its other methods are empty in this build.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneViewCamera()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mesh" /><code>{"private GameObject mesh"}</code> | Unused mesh object reference. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Destroys this component on clients. |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | Empty. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Empty. |

</details>
