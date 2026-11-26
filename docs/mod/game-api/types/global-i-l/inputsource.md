---
title: "InputSource"
description: "Base for one button-like input on a controller (see ControllerInput)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputSource

An **abstract class** in `Root.Township`, the global namespace.

Base for one button-like input on a controller (see `ControllerInput`). It holds pressed state, notes when it changed, and raises pressed and released events.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`BooleanInput`](/mod/game-api/types/global-a-b/booleaninput), [`DPadInputSource`](/mod/game-api/types/global-c-d/dpadinputsource), [`InputSourcePair`](/mod/game-api/types/global-i-l/inputsourcepair), [`KeyboardInputSource`](/mod/game-api/types/global-i-l/keyboardinputsource), [`SwipeInputSource`](/mod/game-api/types/global-s/swipeinputsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected InputSource()"}</code> | <span className="api-desc">Creates an `InputSource` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-state" /><code>{"protected bool state"}</code> | <span className="api-desc">Backing field for `State`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischanged" /><code>{"bool IsChanged { get; private set; }"}</code> | <span className="api-desc">True if the last `EventSet` changed the state.</span> |
| <Link id="m-state-2" /><code>{"bool State { get; set; }"}</code> | <span className="api-desc">True while pressed.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-inputended" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/inputsourcehandler">{"InputSourceHandler"}</Link>{" InputEnded"}</code> | <span className="api-desc">Raised by `OnInputEnded`.</span> |
| <Link id="m-inputstarted" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/inputsourcehandler">{"InputSourceHandler"}</Link>{" InputStarted"}</code> | <span className="api-desc">Raised by `OnInputStarted`.</span> |
| <Link id="m-pressed" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Pressed"}</code> | <span className="api-desc">Raised when the input is pressed.</span> |
| <Link id="m-unpressed" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Unpressed"}</code> | <span className="api-desc">Raised when the input is released.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-event" /><code>{"void Event("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Raises `Pressed` or `Unpressed` depending on the current state.</span> |
| <Link id="m-eventset" /><code>{"void EventSet("}<Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" source)"}</code> | <span className="api-desc">Copies the state from another input and records whether it changed.</span> |
| <Link id="m-oninputended" /><code>{"void OnInputEnded("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Raises `InputEnded`.</span> |
| <Link id="m-oninputstarted" /><code>{"void OnInputStarted("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Raises `InputStarted`.</span> |
| <Link id="m-onpressed" /><code>{"void OnPressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Raises `Pressed`.</span> |
| <Link id="m-onunpressed" /><code>{"void OnUnpressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Raises `Unpressed`.</span> |
| <Link id="m-internaleventset" /><code>{"protected virtual void InternalEventSet("}<Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" source)"}</code> | <span className="api-desc">Hook for subclasses to copy extra data in `EventSet`.</span> |

## Used in

Members of other types that take, return or hold a `InputSource`:

<div className="api-used-in">

[`ControllerAction.OnActionEnded`](/mod/game-api/types/global-c-d/controlleraction#m-onactionended), [`ControllerAction.OnActionStarted`](/mod/game-api/types/global-c-d/controlleraction#m-onactionstarted), [`ControllerInput.booleanInputs`](/mod/game-api/types/global-c-d/controllerinput#m-booleaninputs), [`InputSourceHandler.BeginInvoke`](/mod/game-api/types/global-i-l/inputsourcehandler#m-begininvoke), [`InputSourceHandler.Invoke`](/mod/game-api/types/global-i-l/inputsourcehandler#m-invoke), [`InputSourcePair.primaryInput`](/mod/game-api/types/global-i-l/inputsourcepair#m-primaryinput), [`InputSourcePair.secondaryInput`](/mod/game-api/types/global-i-l/inputsourcepair#m-secondaryinput).

</div>
