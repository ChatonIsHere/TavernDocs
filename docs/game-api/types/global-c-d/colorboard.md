---
title: "ColorBoard"
description: "Lays out one ColorBoardItem per colour in a cosmetic palette, in a grid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorBoard

A **class** in `Root.Township`, no namespace.

Lays out one `ColorBoardItem` per colour in a cosmetic palette, in a grid.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ColorBoard()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpalette">{"CosmeticPalette"}</Link>{" colors"}</code> | Palette whose colours are shown. |
| <Link id="m-colorvalue" /><code>{"private float colorValue"}</code> | Serialized but not used by this class. |
| <Link id="m-columns" /><code>{"private int columns"}</code> | Items per row. |
| <Link id="m-spacingx" /><code>{"private float spacingX"}</code> | Local spacing between columns. |
| <Link id="m-spacingy" /><code>{"private float spacingY"}</code> | Local spacing between rows (along z). |
| <Link id="m-template" /><code>{"private "}<Link to="/game-api/types/global-c-d/colorboarditem">{"ColorBoardItem"}</Link>{" template"}</code> | Board item copied for each colour. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates a board item from the template for each palette colour and places it by row and column. |

</details>
