---
title: "PixelMapChunkDisplay"
description: "Debug cave chunk display that draws one Y slice of its layer as a greyscale texture on a flat quad."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PixelMapChunkDisplay

A **class** in `Root.Township`, `Alta.Caves.Displays`.

Debug cave chunk display that draws one Y slice of its layer as a greyscale texture on a flat quad.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PixelMapChunkDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | The `MeshFilter` showing the quad. |
| <Link id="m-pool" /><code>{"private static Queue<Texture2D> pool"}</code> | Shared pool of reusable textures. |
| <Link id="m-quad" /><code>{"private static Mesh quad"}</code> | Shared quad mesh used by every instance. |
| <Link id="m-quadrenderer" /><code>{"private MeshRenderer quadRenderer"}</code> | The renderer whose material shows the texture. |
| <Link id="m-texture" /><code>{"private Texture2D texture"}</code> | This chunk's texture. |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | Which Y slice of the layer to draw. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Builds the shared quad mesh if needed, assigns a pooled texture and scales the quad to the chunk size. |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | Writes the layer values at `yIndex` into the texture as black to white pixels. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettexture" /><code>{"private Texture2D GetTexture()"}</code> | Takes a texture from the shared pool, filling the pool with 100 new chunk-sized textures when empty. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Returns the texture to the pool. |

</details>
