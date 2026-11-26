---
title: "MapMaskPiece"
description: "Pooled UI image for one piece of the map mask; Setup places and sizes it from a MapPiece."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapMaskPiece

A **class** in `Root.Township`, no namespace.

Pooled UI image for one piece of the map mask; `Setup` places and sizes it from a `MapPiece`. Client.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapMaskPiece()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"private Image image"}</code> | The image showing the piece's sprite. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-recttransform" /><code>{"RectTransform RectTransform { get; private set; }"}</code> | This piece's rect transform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" piece, RectTransform parent, float resolution)"}</code> | Sets the sprite, parent, size, position and scale from the map piece and the map resolution. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the image and rect transform. |

</details>
