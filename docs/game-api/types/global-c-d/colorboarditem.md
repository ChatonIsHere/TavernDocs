---
title: "ColorBoardItem"
description: "One colour swatch on a cosmetics colour board."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorBoardItem

A **class** in `Root.Township`, no namespace.

One colour swatch on a cosmetics colour board. Shows its `CosmeticColor` on its own material, and plays an effect when a brush is dipped in it.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ColorBoardItem()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> | Material for Android. Not read in this build. |
| <Link id="m-androidmesh" /><code>{"private Mesh androidMesh"}</code> | Mesh for Android. Not read in this build. |
| <Link id="m-color" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color"}</code> | Backing field for `CosmeticColor`. |
| <Link id="m-dipped" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" dipped"}</code> | Event invoked when a brush dips in this swatch. |
| <Link id="m-dippedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" dippedEffect"}</code> | Pooled effect spawned on a dip and coloured by `CosmeticParticleColorer`. |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | The swatch's mesh filter. |
| <Link id="m-material" /><code>{"private Material material"}</code> | This swatch's own copy of the renderer material. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | Mesh cleaned up on destroy. |
| <Link id="m-renderer" /><code>{"private MeshRenderer renderer"}</code> | Renderer whose material shows the colour. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticcolor" /><code><Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" { get; set; }"}</code> | The swatch's colour. Setting it updates the material. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-brushdipped" /><code>{"void BrushDipped()"}</code> | Spawns the dipped effect in this colour and invokes the `dipped` event. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the material and mesh this object made. |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial()"}</code> | Makes a copy of the renderer's material if needed and applies the colour to it. |

</details>

## Used in

Members of other types that take, return or hold a `ColorBoardItem`:

[`ColorBoard.template`](/game-api/types/global-c-d/colorboard#m-template).
