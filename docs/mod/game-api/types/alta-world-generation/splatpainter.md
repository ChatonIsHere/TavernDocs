---
title: "SplatPainter"
description: "Paints terrain splat (texture) values during forest generation by running a SplatPaintSet's paint modifiers on each terrain point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplatPainter

A **class** in `Root.Township`, `Alta.Forests`.

Paints terrain splat (texture) values during forest generation by running a `SplatPaintSet`'s paint modifiers on each terrain point.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`ISplatPainter`](/mod/game-api/types/alta-world-generation/isplatpainter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplatPainter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs errors thrown while painting. |
| <Link id="m-paintset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/splatpaintset">{"SplatPaintSet"}</Link>{" paintSet"}</code> | The paint set that decides where and how strongly to paint. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-paint" /><code>{"void Paint("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random rowRandom, "}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int x, int z, Vector2 position, ref "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | Rolls a fail score, runs the point through the modifiers and, if it passes, applies the paint with strength from the score left over. |
