---
title: "TextListElement"
description: "A ListElement that just holds a text renderer, for plain text rows in a UI list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextListElement

A **class** in `Root.Township`, `Alta.Meta.UI`.

A `ListElement` that just holds a text renderer, for plain text rows in a UI list.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ListElement`](/game-api/types/alta-menus/listelement)
- **Derived types** [`ListElementWithButton`](/game-api/types/alta-menus/listelementwithbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextListElement()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | Backing field for `Text`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-text-2" /><code><Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" Text { get; }"}</code> | The row's text renderer. |
