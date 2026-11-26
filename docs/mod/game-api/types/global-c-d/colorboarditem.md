---
title: "ColorBoardItem"
description: "One colour swatch on a cosmetics colour board."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorBoardItem

A **class** in `Root.Township`, the global namespace.

One colour swatch on a cosmetics colour board. Shows its `CosmeticColor` on its own material, and plays an effect when a brush is dipped in it.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorBoardItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> | <span className="api-desc">Material for Android. Not read in this build.</span> |
| <Link id="m-androidmesh" /><code>{"private Mesh androidMesh"}</code> | <span className="api-desc">Mesh for Android. Not read in this build.</span> |
| <Link id="m-color" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color"}</code> | <span className="api-desc">Backing field for `CosmeticColor`.</span> |
| <Link id="m-dipped" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" dipped"}</code> | <span className="api-desc">Event invoked when a brush dips in this swatch.</span> |
| <Link id="m-dippedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" dippedEffect"}</code> | <span className="api-desc">Pooled effect spawned on a dip and coloured by `CosmeticParticleColorer`.</span> |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">The swatch's mesh filter.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">This swatch's own copy of the renderer material.</span> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | <span className="api-desc">Mesh cleaned up on destroy.</span> |
| <Link id="m-renderer" /><code>{"private MeshRenderer renderer"}</code> | <span className="api-desc">Renderer whose material shows the colour.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticcolor" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The swatch's colour. Setting it updates the material.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-brushdipped" /><code>{"void BrushDipped()"}</code> | <span className="api-desc">Spawns the dipped effect in this colour and invokes the `dipped` event.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the material and mesh this object made.</span> |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial()"}</code> | <span className="api-desc">Makes a copy of the renderer's material if needed and applies the colour to it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ColorBoardItem`:

<div className="api-used-in">

[`ColorBoard.template`](/mod/game-api/types/global-c-d/colorboard#m-template).

</div>
