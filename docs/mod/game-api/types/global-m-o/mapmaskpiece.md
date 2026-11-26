---
title: "MapMaskPiece"
description: "Pooled UI image for one piece of the map mask; Setup places and sizes it from a MapPiece."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapMaskPiece

A **class** in `Root.Township`, the global namespace.

Pooled UI image for one piece of the map mask; `Setup` places and sizes it from a `MapPiece`. Client.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapMaskPiece()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-image" /><code>{"private Image image"}</code> | <span className="api-desc">The image showing the piece's sprite.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-recttransform" /><code>{"RectTransform RectTransform { get; private set; }"}</code> | <span className="api-desc">This piece's rect transform.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" piece, RectTransform parent, float resolution)"}</code> | <span className="api-desc">Sets the sprite, parent, size, position and scale from the map piece and the map resolution.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the image and rect transform.</span> |

</details>
