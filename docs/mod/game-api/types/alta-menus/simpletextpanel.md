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
| <Link id="m-ctor" /><code>{"SimpleTextPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">The text renderer the text goes into.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(string text)"}</code> | <span className="api-desc">Sets the text and shows the panel.</span> |

## Used in

Members of other types that take, return or hold a `SimpleTextPanel`:

<div className="api-used-in">

[`Window.simpleTextPanel`](/mod/game-api/types/alta-menus/window#m-simpletextpanel).

</div>
