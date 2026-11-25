---
title: "KeyboardInputSource"
description: "class KeyboardInputSource in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardInputSource

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`InputSource`](/game-api/types/global-i-l/inputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyboardInputSource(Key keyCode, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> |  |
| <Link id="m-pressedhandler" /><code>{"private "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" pressedHandler"}</code> |  |
| <Link id="m-releasedhandler" /><code>{"private "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" releasedHandler"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-keycode" /><code>{"Key KeyCode { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"void AddListeners()"}</code> |  |
| <Link id="m-removelisteners" /><code>{"void RemoveListeners()"}</code> |  |
| <Link id="m-keypressed" /><code>{"private void KeyPressed(Key code)"}</code> |  |
| <Link id="m-keyunpressed" /><code>{"private void KeyUnpressed(Key code)"}</code> |  |
