---
title: "SimpleUIList"
description: "A UIList that stacks its elements in a column with a fixed vertical gap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleUIList

A **class** in `Root.Township`, `Alta.Meta.UI`.

A `UIList` that stacks its elements in a column with a fixed vertical gap. Client UI.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`UIList`](/mod/game-api/types/alta-menus/uilist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleUIList()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | <span className="api-desc">Vertical offset between elements in local units (default -0.15, so each goes downward).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"override void AddElement("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | <span className="api-desc">Parents the element to the list and places it below the existing ones, `spacing` apart.</span> |
