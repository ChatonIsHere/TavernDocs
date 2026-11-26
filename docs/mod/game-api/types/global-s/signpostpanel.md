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
| <Link id="m-ctor" /><code>{"SignPostPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private Transform content"}</code> | <span className="api-desc">Transform scaled on Z by the panel depth.</span> |
| <Link id="m-mesh" /><code>{"private Transform mesh"}</code> | <span className="api-desc">Transform scaled on X and Y by the panel size.</span> |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | <span className="api-desc">Panel width, height and depth.</span> |
| <Link id="m-text" /><code>{"private Text text"}</code> | <span className="api-desc">The panel's UI text; its canvas is resized to fit.</span> |
| <Link id="m-textscale" /><code>{"private Vector2 textScale"}</code> | <span className="api-desc">Canvas units per unit of panel size.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Applies `size` to the mesh and content scales and sizes the text canvas from `textScale`.</span> |

</details>
