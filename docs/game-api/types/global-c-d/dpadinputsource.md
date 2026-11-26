---
title: "DPadInputSource"
description: "An InputSource that counts as pressed while the player's D-pad touch is on one direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DPadInputSource

A **class** in `Root.Township`, no namespace.

An `InputSource` that counts as pressed while the player's D-pad touch is on one direction. Built in code with a direction and `PlayerInput`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`InputSource`](/game-api/types/global-i-l/inputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DPadInputSource(int direction, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Creates a `DPadInputSource` from `direction` and `controller`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | The `PlayerInput` whose D-pad is watched. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"int Direction { get; }"}</code> | The D-pad direction this source listens for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"void AddListeners()"}</code> | Subscribes to the D-pad's `TouchChanged` event. Called by the constructor. |
| <Link id="m-removelisteners" /><code>{"void RemoveListeners()"}</code> | Unsubscribes from the D-pad. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keypressed" /><code>{"private void KeyPressed(int direction)"}</code> | Fires pressed when the touch moves onto `Direction` and unpressed when it moves off. |

</details>
