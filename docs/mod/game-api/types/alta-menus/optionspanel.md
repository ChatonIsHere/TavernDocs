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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/mod/game-api/types/alta-menus/panel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptionsPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonconfig" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/optionspanelbuttonconfig">{"OptionsPanelButtonConfig"}</Link>{"[] buttonConfig"}</code> | <span className="api-desc">Button prefab for each button type.</span> |
| <Link id="m-currentbuttons" /><code>{"private List<GameObject> currentButtons"}</code> | <span className="api-desc">Buttons made by the last `Setup`.</span> |
| <Link id="m-parent" /><code>{"private Transform parent"}</code> | <span className="api-desc">Where buttons are created.</span> |
| <Link id="m-smallbackground" /><code>{"private GameObject smallBackground"}</code> | <span className="api-desc">Background for two options or fewer.</span> |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | <span className="api-desc">Vertical gap between buttons.</span> |
| <Link id="m-tallbackground" /><code>{"private GameObject tallBackground"}</code> | <span className="api-desc">Background for more than two options.</span> |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" text"}</code> | <span className="api-desc">Text for the message.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/optionsconfig">{"OptionsConfig"}</Link>{"> optionsConfig, string message = null)"}</code> | <span className="api-desc">Builds a button per option with the right prefab and the message, using the tall background for more than two options.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Uses its own transform as the button parent if none is set.</span> |
| <Link id="m-getprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" GetPrefab("}<Link to="/mod/game-api/types/alta-menus/uibuttontype">{"UIButtonType"}</Link>{" type)"}</code> | <span className="api-desc">Returns the button prefab for a button type.</span> |
| <Link id="m-resetbuttons" /><code>{"private void ResetButtons()"}</code> | <span className="api-desc">Destroys the current buttons and hides the panel.</span> |

</details>

## Used in

Members of other types that take, return or hold a `OptionsPanel`:

<div className="api-used-in">

[`Window.optionsPanel`](/mod/game-api/types/alta-menus/window#m-optionspanel).

</div>
