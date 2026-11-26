---
title: "ColorBoard"
description: "Lays out one ColorBoardItem per colour in a cosmetic palette, in a grid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorBoard

A **class** in `Root.Township`, the global namespace.

Lays out one `ColorBoardItem` per colour in a cosmetic palette, in a grid.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpalette">{"CosmeticPalette"}</Link>{" colors"}</code> | <span className="api-desc">Palette whose colours are shown.</span> |
| <Link id="m-colorvalue" /><code>{"private float colorValue"}</code> | <span className="api-desc">Serialized but not used by this class.</span> |
| <Link id="m-columns" /><code>{"private int columns"}</code> | <span className="api-desc">Items per row.</span> |
| <Link id="m-spacingx" /><code>{"private float spacingX"}</code> | <span className="api-desc">Local spacing between columns.</span> |
| <Link id="m-spacingy" /><code>{"private float spacingY"}</code> | <span className="api-desc">Local spacing between rows (along z).</span> |
| <Link id="m-template" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colorboarditem">{"ColorBoardItem"}</Link>{" template"}</code> | <span className="api-desc">Board item copied for each colour.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates a board item from the template for each palette colour and places it by row and column.</span> |

</details>
