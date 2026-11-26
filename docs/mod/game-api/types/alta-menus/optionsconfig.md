---
title: "OptionsConfig"
description: "One option button for a menu window's options popup: label, action to run and button style."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptionsConfig

A **class** in `Root.Township`, `Alta.Meta.UI`.

One option button for a menu window's options popup: label, action to run and button style. Used by friend panels for things like Revoke.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptionsConfig(string text, Action action, "}<Link to="/mod/game-api/types/alta-menus/uibuttontype">{"UIButtonType"}</Link>{" type = 0)"}</code> | <span className="api-desc">Creates an `OptionsConfig` from `text`, `action` and `type`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"Action Action { get; }"}</code> | <span className="api-desc">What runs when the option is picked.</span> |
| <Link id="m-text" /><code>{"string Text { get; }"}</code> | <span className="api-desc">The button label.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/alta-menus/uibuttontype">{"UIButtonType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The button style, `Normal` by default.</span> |

## Used in

Members of other types that take, return or hold a `OptionsConfig`:

<div className="api-used-in">

[`OptionsPanel.Setup`](/mod/game-api/types/alta-menus/optionspanel#m-setup), [`Window.ShowOptions`](/mod/game-api/types/alta-menus/window#m-showoptions).

</div>
