---
title: "DPadInputSource"
description: "An InputSource that counts as pressed while the player's D-pad touch is on one direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DPadInputSource

A **class** in `Root.Township`, the global namespace.

An `InputSource` that counts as pressed while the player's D-pad touch is on one direction. Built in code with a direction and `PlayerInput`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`InputSource`](/mod/game-api/types/global-i-l/inputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DPadInputSource(int direction, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Creates a `DPadInputSource` from `direction` and `controller`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | <span className="api-desc">The `PlayerInput` whose D-pad is watched.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"int Direction { get; }"}</code> | <span className="api-desc">The D-pad direction this source listens for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"void AddListeners()"}</code> | <span className="api-desc">Subscribes to the D-pad's `TouchChanged` event. Called by the constructor.</span> |
| <Link id="m-removelisteners" /><code>{"void RemoveListeners()"}</code> | <span className="api-desc">Unsubscribes from the D-pad.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keypressed" /><code>{"private void KeyPressed(int direction)"}</code> | <span className="api-desc">Fires pressed when the touch moves onto `Direction` and unpressed when it moves off.</span> |

</details>
