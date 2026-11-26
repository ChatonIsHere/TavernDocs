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
| <Link id="m-ctor" /><code>{"SwipeInputSource(int direction, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Creates a `SwipeInputSource` from `direction` and `controller`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | <span className="api-desc">The hand input whose d-pad is watched.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"int Direction { get; }"}</code> | <span className="api-desc">The swipe direction this source reacts to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"void AddListeners()"}</code> | <span className="api-desc">Subscribes to the d-pad's swipe event.</span> |
| <Link id="m-removelisteners" /><code>{"void RemoveListeners()"}</code> | <span className="api-desc">Unsubscribes from the d-pad's swipe event.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keypressed" /><code>{"private void KeyPressed(int direction)"}</code> | <span className="api-desc">On a swipe in this direction, presses and immediately releases.</span> |

</details>
