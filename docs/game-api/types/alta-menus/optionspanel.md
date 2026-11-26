---
title: "OptionsPanel"
description: "Menu popup that shows a message and a column of option buttons; pressing one runs its action and closes the panel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptionsPanel

A **class** in `Root.Township`, `Alta.Meta.UI`.

Menu popup that shows a message and a column of option buttons; pressing one runs its action and closes the panel.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/game-api/types/alta-menus/panel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptionsPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonconfig" /><code>{"private "}<Link to="/game-api/types/alta-menus/optionspanelbuttonconfig">{"OptionsPanelButtonConfig"}</Link>{"[] buttonConfig"}</code> | Button prefab for each button type. |
| <Link id="m-currentbuttons" /><code>{"private List<GameObject> currentButtons"}</code> | Buttons made by the last `Setup`. |
| <Link id="m-parent" /><code>{"private Transform parent"}</code> | Where buttons are created. |
| <Link id="m-smallbackground" /><code>{"private GameObject smallBackground"}</code> | Background for two options or fewer. |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | Vertical gap between buttons. |
| <Link id="m-tallbackground" /><code>{"private GameObject tallBackground"}</code> | Background for more than two options. |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | Text for the message. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(IEnumerable<"}<Link to="/game-api/types/alta-menus/optionsconfig">{"OptionsConfig"}</Link>{"> optionsConfig, string message = null)"}</code> | Builds a button per option with the right prefab and the message, using the tall background for more than two options. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Uses its own transform as the button parent if none is set. |
| <Link id="m-getprefab" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" GetPrefab("}<Link to="/game-api/types/alta-menus/uibuttontype">{"UIButtonType"}</Link>{" type)"}</code> | Returns the button prefab for a button type. |
| <Link id="m-resetbuttons" /><code>{"private void ResetButtons()"}</code> | Destroys the current buttons and hides the panel. |

</details>

## Used in

Members of other types that take, return or hold a `OptionsPanel`:

[`Window.optionsPanel`](/game-api/types/alta-menus/window#m-optionspanel).
