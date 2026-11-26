---
title: "Instantiator"
description: "Spawns a local, non-networked copy of a prefab at a target transform when InstantiatePrefab is called, for example from a Unity event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Instantiator

A **class** in `Root.Township`, the global namespace.

Spawns a local, non-networked copy of a prefab at a target transform when `InstantiatePrefab` is called, for example from a Unity event.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Instantiator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | The object to copy. |
| <Link id="m-targetorientation" /><code>{"private Transform targetOrientation"}</code> | Where the copy is placed and how it is rotated and scaled. |
| <Link id="m-targetparent" /><code>{"private Transform targetParent"}</code> | Parent for the copy. Can be null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-instantiateprefab" /><code>{"void InstantiatePrefab()"}</code> | Instantiates the prefab with the target's position, rotation and local scale, then parents it to `targetParent`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Uses this object's transform when no target orientation is set. |

</details>
