---
title: "GameSceneVisuals"
description: "Turns a scene's terrain and a list of objects on or off together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameSceneVisuals

A **class** in `Root.Township`, the global namespace.

Turns a scene's terrain and a list of objects on or off together.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameSceneVisuals()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameobjects" /><code>{"private GameObject[] gameObjects"}</code> | <span className="api-desc">Objects switched with the visuals.</span> |
| <Link id="m-terrain" /><code>{"private Terrain terrain"}</code> | <span className="api-desc">Terrain switched with the visuals.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setvisualsactive" /><code>{"void SetVisualsActive(bool isActive)"}</code> | <span className="api-desc">Enables or disables the terrain and sets each object active or inactive.</span> |
