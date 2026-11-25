---
title: "OptionsPanel"
description: "class OptionsPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptionsPanel

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/game-api/types/alta-menus/panel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptionsPanel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-buttonconfig" /><code>{"private "}<Link to="/game-api/types/alta-menus/optionspanelbuttonconfig">{"OptionsPanelButtonConfig"}</Link>{"[] buttonConfig"}</code> |  |
| <Link id="m-currentbuttons" /><code>{"private List<GameObject> currentButtons"}</code> |  |
| <Link id="m-parent" /><code>{"private Transform parent"}</code> |  |
| <Link id="m-smallbackground" /><code>{"private GameObject smallBackground"}</code> |  |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> |  |
| <Link id="m-tallbackground" /><code>{"private GameObject tallBackground"}</code> |  |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(IEnumerable<"}<Link to="/game-api/types/alta-menus/optionsconfig">{"OptionsConfig"}</Link>{"> optionsConfig, string message = null)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-getprefab" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" GetPrefab("}<Link to="/game-api/types/alta-menus/uibuttontype">{"UIButtonType"}</Link>{" type)"}</code> |  |
| <Link id="m-resetbuttons" /><code>{"private void ResetButtons()"}</code> |  |

## Used in

Members of other types that take, return or hold a `OptionsPanel`:

[`Window.optionsPanel`](/game-api/types/alta-menus/window#m-optionspanel).
