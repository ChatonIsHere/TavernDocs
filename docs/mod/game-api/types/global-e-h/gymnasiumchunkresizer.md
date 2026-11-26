---
title: "GymnasiumChunkResizer"
description: "Editor tool for the Gymnasium test scene: rebuilds its grid of chunks as LocationChunks of a set size."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumChunkResizer

A **class** in `Root.Township`, the global namespace.

Editor tool for the Gymnasium test scene: rebuilds its grid of chunks as `LocationChunk`s of a set size.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumChunkResizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btn" /><code>{"private bool btn"}</code> | <span className="api-desc">Inspector button that runs `Resize`.</span> |
| <Link id="m-btn2" /><code>{"private bool btn2"}</code> | <span className="api-desc">Inspector button that runs `SetAdjacent`.</span> |
| <Link id="m-chunksize" /><code>{"private int chunkSize"}</code> | <span className="api-desc">Width and depth in metres of each rebuilt chunk.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resize" /><code>{"void Resize()"}</code> | <span className="api-desc">Replaces each child `OverworldChunk` with a `LocationChunk` named `x-z`, with identifier `gym x-z` and bounds `chunkSize` wide and 100 high.</span> |
| <Link id="m-setadjacent" /><code>{"void SetAdjacent()"}</code> | <span className="api-desc">Works out the neighbours of each `x-z` named chunk on a 5 by 5 grid, but throws the result away, so it changes nothing.</span> |
