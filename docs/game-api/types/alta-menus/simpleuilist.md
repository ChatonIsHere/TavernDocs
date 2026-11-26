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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`UIList`](/game-api/types/alta-menus/uilist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleUIList()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | Vertical offset between elements in local units (default -0.15, so each goes downward). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"override void AddElement("}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | Parents the element to the list and places it below the existing ones, `spacing` apart. |
