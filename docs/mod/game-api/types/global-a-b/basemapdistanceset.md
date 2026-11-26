---
title: "BasemapDistanceSet"
description: "Sets the Terrain on the same object to a given basemap distance (where it switches to the low detail basemap)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasemapDistanceSet

A **class** in `Root.Township`, the global namespace.

Sets the `Terrain` on the same object to a given basemap distance (where it switches to the low detail basemap). Turns itself off on a headless server.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasemapDistanceSet()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | Backing field for `Distance` (2000 by default). |
| <Link id="m-terrain" /><code>{"private Terrain terrain"}</code> | The terrain on this object. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance-2" /><code>{"float Distance { get; set; }"}</code> | Basemap distance to apply. Setting it doesn't reapply until the next enable. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Gets the terrain, disables itself if headless, then applies the distance. |
| <Link id="m-set" /><code>{"private void Set()"}</code> | Applies the distance to the terrain if it differs. If the terrain wasn't cached yet it only fetches it and doesn't apply. |

</details>
