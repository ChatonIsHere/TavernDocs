---
title: "MapBoardDirectRenderer.MapElement"
description: "Private serializable pair of a texture and its offset and scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapBoardDirectRenderer.MapElement

A **private class** in `Root.Township`, `Alta.Map`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private serializable pair of a texture and its offset and scale. Not used by any code in `MapBoardDirectRenderer`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`MapBoardDirectRenderer`](/mod/game-api/types/alta-world/mapboarddirectrenderer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapElement()"}</code> | Creates a `MapBoardDirectRenderer.MapElement` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-element" /><code>{"Texture2D element"}</code> | The texture. |
| <Link id="m-offsetscale" /><code>{"Vector3 offsetScale"}</code> | Offset and scale for the texture. |
