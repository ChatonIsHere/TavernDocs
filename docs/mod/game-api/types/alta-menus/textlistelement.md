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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ListElement`](/mod/game-api/types/alta-menus/listelement)
- **Derived types** [`ListElementWithButton`](/mod/game-api/types/alta-menus/listelementwithbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextListElement()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | <span className="api-desc">Backing field for `Text`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-text-2" /><code><Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" Text { get; }"}</code> | <span className="api-desc">The row's text renderer.</span> |
