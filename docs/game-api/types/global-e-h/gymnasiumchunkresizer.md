---
title: "GymnasiumChunkResizer"
description: "Editor tool for the Gymnasium test scene: rebuilds its grid of chunks as LocationChunks of a set size."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumChunkResizer

A **class** in `Root.Township`, no namespace.

Editor tool for the Gymnasium test scene: rebuilds its grid of chunks as `LocationChunk`s of a set size.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumChunkResizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btn" /><code>{"private bool btn"}</code> | Inspector button that runs `Resize`. |
| <Link id="m-btn2" /><code>{"private bool btn2"}</code> | Inspector button that runs `SetAdjacent`. |
| <Link id="m-chunksize" /><code>{"private int chunkSize"}</code> | Width and depth in metres of each rebuilt chunk. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resize" /><code>{"void Resize()"}</code> | Replaces each child `OverworldChunk` with a `LocationChunk` named `x-z`, with identifier `gym x-z` and bounds `chunkSize` wide and 100 high. |
| <Link id="m-setadjacent" /><code>{"void SetAdjacent()"}</code> | Works out the neighbours of each `x-z` named chunk on a 5 by 5 grid, but throws the result away, so it changes nothing. |
