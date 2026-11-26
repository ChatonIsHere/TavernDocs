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
| <Link id="m-ctor" /><code>{"KeyboardInputSource(Key keyCode, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Creates a `KeyboardInputSource` from `keyCode` and `controller`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | The `PlayerInput` passed to the pressed and released events. |
| <Link id="m-pressedhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" pressedHandler"}</code> | Handle for the key down registration. |
| <Link id="m-releasedhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" releasedHandler"}</code> | Handle for the key up registration. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keycode" /><code>{"Key KeyCode { get; }"}</code> | The key this source listens to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"void AddListeners()"}</code> | Registers key down and key up handlers with `KeyboardEventTriggers`. Called by the constructor. |
| <Link id="m-removelisteners" /><code>{"void RemoveListeners()"}</code> | Removes both key handlers. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keypressed" /><code>{"private void KeyPressed(Key code)"}</code> | Fires the source's pressed event for the controller. |
| <Link id="m-keyunpressed" /><code>{"private void KeyUnpressed(Key code)"}</code> | Fires the source's released event for the controller. |

</details>
