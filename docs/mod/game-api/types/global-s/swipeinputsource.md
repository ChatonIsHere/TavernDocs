---
title: "SwipeInputSource"
description: "Input source that fires a single press and release when the controller's d-pad reports a swipe in its direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwipeInputSource

A **class** in `Root.Township`, the global namespace.

Input source that fires a single press and release when the controller's d-pad reports a swipe in its direction.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`InputSource`](/mod/game-api/types/global-i-l/inputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SwipeInputSource(int direction, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Creates a `SwipeInputSource` from `direction` and `controller`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | The hand input whose d-pad is watched. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"int Direction { get; }"}</code> | The swipe direction this source reacts to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"void AddListeners()"}</code> | Subscribes to the d-pad's swipe event. |
| <Link id="m-removelisteners" /><code>{"void RemoveListeners()"}</code> | Unsubscribes from the d-pad's swipe event. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keypressed" /><code>{"private void KeyPressed(int direction)"}</code> | On a swipe in this direction, presses and immediately releases. |

</details>
