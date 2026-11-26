---
title: "SignPostPanel"
description: "Editor sizing helper for a sign post panel: scales the mesh, content and text canvas to one size."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SignPostPanel

A **class** in `Root.Township`, the global namespace.

Editor sizing helper for a sign post panel: scales the mesh, content and text canvas to one size. Kept out of static flattening and splitting.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SignPostPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private Transform content"}</code> | Transform scaled on Z by the panel depth. |
| <Link id="m-mesh" /><code>{"private Transform mesh"}</code> | Transform scaled on X and Y by the panel size. |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | Panel width, height and depth. |
| <Link id="m-text" /><code>{"private Text text"}</code> | The panel's UI text; its canvas is resized to fit. |
| <Link id="m-textscale" /><code>{"private Vector2 textScale"}</code> | Canvas units per unit of panel size. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Applies `size` to the mesh and content scales and sizes the text canvas from `textScale`. |

</details>
