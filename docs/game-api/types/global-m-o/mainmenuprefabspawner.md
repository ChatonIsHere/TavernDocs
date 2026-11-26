---
title: "MainMenuPrefabSpawner"
description: "Spawns a network prefab unchunked as a child of this object when the scene starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuPrefabSpawner

A **class** in `Root.Township`, no namespace.

Spawns a network prefab unchunked as a child of this object when the scene starts. Used in the main menu.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MainMenuPrefabSpawner()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | The prefab to spawn. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Spawns `prefab` and resets its local position, rotation and scale under this object. |

</details>
