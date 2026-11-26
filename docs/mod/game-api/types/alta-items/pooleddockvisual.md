---
title: "PooledDockVisual"
description: "Pooled visual for a dock: the bubble mesh, its filter and a 3D count label."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledDockVisual

A **class** in `Root.Township`, `Alta.Inventory`.

Pooled visual for a dock: the bubble mesh, its filter and a 3D count label.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledDockVisual()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-countlabel3d" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" countLabel3D"}</code> | Backing field for `CountLabel3D`. |
| <Link id="m-defaultandroidmesh" /><code>{"private Mesh defaultAndroidMesh"}</code> | Default mesh for the dock on Android (renamed from `defaultMesh`). |
| <Link id="m-dockbubble" /><code>{"private MeshRenderer dockBubble"}</code> | Backing field for `DockBubble`. |
| <Link id="m-dockfilter" /><code>{"private MeshFilter dockFilter"}</code> | Backing field for `DockFilter`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-countlabel3d-2" /><code><Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" CountLabel3D { get; }"}</code> | 3D text showing the docked count. |
| <Link id="m-dockbubble-2" /><code>{"MeshRenderer DockBubble { get; }"}</code> | Renderer for the dock bubble. |
| <Link id="m-dockfilter-2" /><code>{"MeshFilter DockFilter { get; }"}</code> | Mesh filter for the dock shape. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Clears the count label and returns the visual to its pool. |

## Used in

Members of other types that take, return or hold a `PooledDockVisual`:

[`DockVisual.activePooledVisual`](/mod/game-api/types/alta-items/dockvisual#m-activepooledvisual).
