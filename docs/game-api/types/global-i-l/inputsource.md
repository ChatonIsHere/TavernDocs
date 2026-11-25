---
title: "InputSource"
description: "Base for one button-like input on a controller (see ControllerInput)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputSource

An **abstract class** in `Root.Township`, no namespace.

Base for one button-like input on a controller (see `ControllerInput`). It holds pressed state, notes when it changed, and raises pressed and released events.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`BooleanInput`](/game-api/types/global-a-b/booleaninput), [`DPadInputSource`](/game-api/types/global-c-d/dpadinputsource), [`InputSourcePair`](/game-api/types/global-i-l/inputsourcepair), [`KeyboardInputSource`](/game-api/types/global-i-l/keyboardinputsource), [`SwipeInputSource`](/game-api/types/global-s/swipeinputsource)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected InputSource()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-state" /><code>{"protected bool state"}</code> | Backing field for `State`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischanged" /><code>{"bool IsChanged { get; private set; }"}</code> | True if the last `EventSet` changed the state. |
| <Link id="m-state-2" /><code>{"bool State { get; set; }"}</code> | True while pressed. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-inputended" /><code>{"event "}<Link to="/game-api/types/global-i-l/inputsourcehandler">{"InputSourceHandler"}</Link>{" InputEnded"}</code> | Raised by `OnInputEnded`. |
| <Link id="m-inputstarted" /><code>{"event "}<Link to="/game-api/types/global-i-l/inputsourcehandler">{"InputSourceHandler"}</Link>{" InputStarted"}</code> | Raised by `OnInputStarted`. |
| <Link id="m-pressed" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Pressed"}</code> | Raised when the input is pressed. |
| <Link id="m-unpressed" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Unpressed"}</code> | Raised when the input is released. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-event" /><code>{"void Event("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Raises `Pressed` or `Unpressed` depending on the current state. |
| <Link id="m-eventset" /><code>{"void EventSet("}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" source)"}</code> | Copies the state from another input and records whether it changed. |
| <Link id="m-oninputended" /><code>{"void OnInputEnded("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Raises `InputEnded`. |
| <Link id="m-oninputstarted" /><code>{"void OnInputStarted("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Raises `InputStarted`. |
| <Link id="m-onpressed" /><code>{"void OnPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Raises `Pressed`. |
| <Link id="m-onunpressed" /><code>{"void OnUnpressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Raises `Unpressed`. |
| <Link id="m-internaleventset" /><code>{"protected virtual void InternalEventSet("}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" source)"}</code> | Hook for subclasses to copy extra data in `EventSet`. |

## Used in

Members of other types that take, return or hold a `InputSource`:

[`ControllerAction.OnActionEnded`](/game-api/types/global-c-d/controlleraction#m-onactionended), [`ControllerAction.OnActionStarted`](/game-api/types/global-c-d/controlleraction#m-onactionstarted), [`ControllerInput.booleanInputs`](/game-api/types/global-c-d/controllerinput#m-booleaninputs), [`InputSourceHandler.BeginInvoke`](/game-api/types/global-i-l/inputsourcehandler#m-begininvoke), [`InputSourceHandler.Invoke`](/game-api/types/global-i-l/inputsourcehandler#m-invoke), [`InputSourcePair.primaryInput`](/game-api/types/global-i-l/inputsourcepair#m-primaryinput), [`InputSourcePair.secondaryInput`](/game-api/types/global-i-l/inputsourcepair#m-secondaryinput).
