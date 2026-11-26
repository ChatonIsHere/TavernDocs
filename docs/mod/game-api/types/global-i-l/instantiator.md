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
| <Link id="m-ctor" /><code>{"Instantiator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">The object to copy.</span> |
| <Link id="m-targetorientation" /><code>{"private Transform targetOrientation"}</code> | <span className="api-desc">Where the copy is placed and how it is rotated and scaled.</span> |
| <Link id="m-targetparent" /><code>{"private Transform targetParent"}</code> | <span className="api-desc">Parent for the copy. Can be null.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-instantiateprefab" /><code>{"void InstantiatePrefab()"}</code> | <span className="api-desc">Instantiates the prefab with the target's position, rotation and local scale, then parents it to `targetParent`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Uses this object's transform when no target orientation is set.</span> |

</details>
