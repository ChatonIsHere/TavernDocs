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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptionsConfig(string text, Action action, "}<Link to="/game-api/types/alta-menus/uibuttontype">{"UIButtonType"}</Link>{" type = 0)"}</code> | Creates an `OptionsConfig` from `text`, `action` and `type`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"Action Action { get; }"}</code> | What runs when the option is picked. |
| <Link id="m-text" /><code>{"string Text { get; }"}</code> | The button label. |
| <Link id="m-type" /><code><Link to="/game-api/types/alta-menus/uibuttontype">{"UIButtonType"}</Link>{" Type { get; }"}</code> | The button style, `Normal` by default. |

## Used in

Members of other types that take, return or hold a `OptionsConfig`:

[`OptionsPanel.Setup`](/game-api/types/alta-menus/optionspanel#m-setup), [`Window.ShowOptions`](/game-api/types/alta-menus/window#m-showoptions).
