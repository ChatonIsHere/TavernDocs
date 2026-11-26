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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/mod/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PixelMapChunkDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">The `MeshFilter` showing the quad.</span> |
| <Link id="m-pool" /><code>{"private static Queue<Texture2D> pool"}</code> | <span className="api-desc">Shared pool of reusable textures.</span> |
| <Link id="m-quad" /><code>{"private static Mesh quad"}</code> | <span className="api-desc">Shared quad mesh used by every instance.</span> |
| <Link id="m-quadrenderer" /><code>{"private MeshRenderer quadRenderer"}</code> | <span className="api-desc">The renderer whose material shows the texture.</span> |
| <Link id="m-texture" /><code>{"private Texture2D texture"}</code> | <span className="api-desc">This chunk's texture.</span> |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | <span className="api-desc">Which Y slice of the layer to draw.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Builds the shared quad mesh if needed, assigns a pooled texture and scales the quad to the chunk size.</span> |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | <span className="api-desc">Writes the layer values at `yIndex` into the texture as black to white pixels.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettexture" /><code>{"private Texture2D GetTexture()"}</code> | <span className="api-desc">Takes a texture from the shared pool, filling the pool with 100 new chunk-sized textures when empty.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Returns the texture to the pool.</span> |

</details>
