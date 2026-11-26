---
title: "ControllerInputButtonPressed"
description: "Base class for components that react to one raw input button on a given controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerInputButtonPressed

An **abstract class** in `Root.Township`, the global namespace.

Base class for components that react to one raw input button on a given controller.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CharacterPoseSaver`](/mod/game-api/types/global-c-d/characterposesaver), [`PauseEditor`](/mod/game-api/types/global-p/pauseeditor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ControllerInputButtonPressed()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" button"}</code> | <span className="api-desc">The input button to listen for.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | <span className="api-desc">The controller whose input is watched.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Hooks the button's pressed event on the controller's raw input.</span> |
| <Link id="m-buttonpressed" /><code>{"protected abstract void ButtonPressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Called when the button is pressed.</span> |
