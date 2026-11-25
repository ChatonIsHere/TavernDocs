---
title: "PixelMapChunkDisplay"
description: "class PixelMapChunkDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PixelMapChunkDisplay

A **class** in `Root.Township`, `Alta.Caves.Displays`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PixelMapChunkDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> |  |
| <Link id="m-pool" /><code>{"private static Queue<Texture2D> pool"}</code> |  |
| <Link id="m-quad" /><code>{"private static Mesh quad"}</code> |  |
| <Link id="m-quadrenderer" /><code>{"private MeshRenderer quadRenderer"}</code> |  |
| <Link id="m-texture" /><code>{"private Texture2D texture"}</code> |  |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> |  |
| <Link id="m-gettexture" /><code>{"private Texture2D GetTexture()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
