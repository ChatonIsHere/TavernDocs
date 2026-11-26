---
title: "KeyboardInputSource"
description: "InputSource driven by one keyboard key, so a key can act like a controller button for a PlayerInput."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardInputSource

A **class** in `Root.Township`, the global namespace.

`InputSource` driven by one keyboard key, so a key can act like a controller button for a `PlayerInput`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`InputSource`](/mod/game-api/types/global-i-l/inputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyboardInputSource(Key keyCode, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Creates a `KeyboardInputSource` from `keyCode` and `controller`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | <span className="api-desc">The `PlayerInput` passed to the pressed and released events.</span> |
| <Link id="m-pressedhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" pressedHandler"}</code> | <span className="api-desc">Handle for the key down registration.</span> |
| <Link id="m-releasedhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" releasedHandler"}</code> | <span className="api-desc">Handle for the key up registration.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keycode" /><code>{"Key KeyCode { get; }"}</code> | <span className="api-desc">The key this source listens to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"void AddListeners()"}</code> | <span className="api-desc">Registers key down and key up handlers with `KeyboardEventTriggers`. Called by the constructor.</span> |
| <Link id="m-removelisteners" /><code>{"void RemoveListeners()"}</code> | <span className="api-desc">Removes both key handlers.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keypressed" /><code>{"private void KeyPressed(Key code)"}</code> | <span className="api-desc">Fires the source's pressed event for the controller.</span> |
| <Link id="m-keyunpressed" /><code>{"private void KeyUnpressed(Key code)"}</code> | <span className="api-desc">Fires the source's released event for the controller.</span> |

</details>
