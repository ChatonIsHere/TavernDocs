---
title: "ControllerInputButtonPressed"
description: "Base class for components that react to one raw input button on a given controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerInputButtonPressed

An **abstract class** in `Root.Township`, no namespace.

Base class for components that react to one raw input button on a given controller.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CharacterPoseSaver`](/game-api/types/global-c-d/characterposesaver), [`PauseEditor`](/game-api/types/global-p/pauseeditor)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ControllerInputButtonPressed()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" button"}</code> | The input button to listen for. |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | The controller whose input is watched. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Hooks the button's pressed event on the controller's raw input. |
| <Link id="m-buttonpressed" /><code>{"protected abstract void ButtonPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Called when the button is pressed. |
