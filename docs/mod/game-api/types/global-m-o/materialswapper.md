---
title: "MaterialSwapper"
description: "Swaps a set of renderers between their own materials and one swap material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialSwapper

A **class** in `Root.Township`, the global namespace.

Swaps a set of renderers between their own materials and one swap material. Does nothing on a headless server.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialSwapper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basematerials" /><code>{"private Material[] baseMaterials"}</code> | <span className="api-desc">Original material of each target.</span> |
| <Link id="m-swapmaterial" /><code>{"private Material swapMaterial"}</code> | <span className="api-desc">Material put on when swapped.</span> |
| <Link id="m-swaponstart" /><code>{"private bool swapOnStart"}</code> | <span className="api-desc">Whether to swap when the object wakes.</span> |
| <Link id="m-targetrenderers" /><code>{"private Renderer[] targetRenderers"}</code> | <span className="api-desc">Renderers whose material is swapped.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-swap" /><code>{"void Swap(bool isSwapped)"}</code> | <span className="api-desc">True puts the swap material on every target, false restores the originals.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores the original materials and swaps at once if `swapOnStart` is set.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that drops null renderers.</span> |

</details>
