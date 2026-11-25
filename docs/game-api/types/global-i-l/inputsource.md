---
title: "InputSource"
description: "abstract class InputSource in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputSource

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`BooleanInput`](/game-api/types/global-a-b/booleaninput), [`DPadInputSource`](/game-api/types/global-c-d/dpadinputsource), [`InputSourcePair`](/game-api/types/global-i-l/inputsourcepair), [`KeyboardInputSource`](/game-api/types/global-i-l/keyboardinputsource), [`SwipeInputSource`](/game-api/types/global-s/swipeinputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected InputSource()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-state" /><code>{"protected bool state"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischanged" /><code>{"bool IsChanged { get; private set; }"}</code> |  |
| <Link id="m-state-2" /><code>{"bool State { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-inputended" /><code>{"event "}<Link to="/game-api/types/global-i-l/inputsourcehandler">{"InputSourceHandler"}</Link>{" InputEnded"}</code> |  |
| <Link id="m-inputstarted" /><code>{"event "}<Link to="/game-api/types/global-i-l/inputsourcehandler">{"InputSourceHandler"}</Link>{" InputStarted"}</code> |  |
| <Link id="m-pressed" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Pressed"}</code> |  |
| <Link id="m-unpressed" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Unpressed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-event" /><code>{"void Event("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-eventset" /><code>{"void EventSet("}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" source)"}</code> |  |
| <Link id="m-oninputended" /><code>{"void OnInputEnded("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-oninputstarted" /><code>{"void OnInputStarted("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-onpressed" /><code>{"void OnPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-onunpressed" /><code>{"void OnUnpressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-internaleventset" /><code>{"protected virtual void InternalEventSet("}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" source)"}</code> |  |

## Used in

Members of other types that take, return or hold a `InputSource`:

[`ControllerAction.OnActionEnded`](/game-api/types/global-c-d/controlleraction#m-onactionended), [`ControllerAction.OnActionStarted`](/game-api/types/global-c-d/controlleraction#m-onactionstarted), [`ControllerInput.booleanInputs`](/game-api/types/global-c-d/controllerinput#m-booleaninputs), [`InputSourceHandler.BeginInvoke`](/game-api/types/global-i-l/inputsourcehandler#m-begininvoke), [`InputSourceHandler.Invoke`](/game-api/types/global-i-l/inputsourcehandler#m-invoke), [`InputSourcePair.primaryInput`](/game-api/types/global-i-l/inputsourcepair#m-primaryinput), [`InputSourcePair.secondaryInput`](/game-api/types/global-i-l/inputsourcepair#m-secondaryinput).
