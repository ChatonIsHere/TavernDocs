---
title: "MaterialSwapper"
description: "Swaps a set of renderers between their own materials and one swap material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialSwapper

A **class** in `Root.Township`, no namespace.

Swaps a set of renderers between their own materials and one swap material. Does nothing on a headless server.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialSwapper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basematerials" /><code>{"private Material[] baseMaterials"}</code> | Original material of each target. |
| <Link id="m-swapmaterial" /><code>{"private Material swapMaterial"}</code> | Material put on when swapped. |
| <Link id="m-swaponstart" /><code>{"private bool swapOnStart"}</code> | Whether to swap when the object wakes. |
| <Link id="m-targetrenderers" /><code>{"private Renderer[] targetRenderers"}</code> | Renderers whose material is swapped. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-swap" /><code>{"void Swap(bool isSwapped)"}</code> | True puts the swap material on every target, false restores the originals. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores the original materials and swaps at once if `swapOnStart` is set. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step that drops null renderers. |

</details>
