---
title: "SimpleTextPanel"
description: "Client UI panel that just shows a block of text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleTextPanel

A **class** in `Root.Township`, `Alta.Meta.UI`.

Client UI panel that just shows a block of text.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/mod/game-api/types/alta-menus/panel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleTextPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | The text renderer the text goes into. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(string text)"}</code> | Sets the text and shows the panel. |

## Used in

Members of other types that take, return or hold a `SimpleTextPanel`:

[`Window.simpleTextPanel`](/mod/game-api/types/alta-menus/window#m-simpletextpanel).
