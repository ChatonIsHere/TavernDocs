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
| <Link id="m-ctor" /><code>{"BasemapDistanceSet()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">Backing field for `Distance` (2000 by default).</span> |
| <Link id="m-terrain" /><code>{"private Terrain terrain"}</code> | <span className="api-desc">The terrain on this object.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance-2" /><code>{"float Distance { get; set; }"}</code> | <span className="api-desc">Basemap distance to apply. Setting it doesn't reapply until the next enable.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Gets the terrain, disables itself if headless, then applies the distance.</span> |
| <Link id="m-set" /><code>{"private void Set()"}</code> | <span className="api-desc">Applies the distance to the terrain if it differs. If the terrain wasn't cached yet it only fetches it and doesn't apply.</span> |

</details>
