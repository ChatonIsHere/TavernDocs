---
title: "ControllerAction"
description: "Client: one input action (such as interact or jump) for a player's hand, bound to one or more buttons, key pairs, D-pad directions or swipes from the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerAction

A **class** in `Root.Township`, the global namespace.

Client: one input action (such as interact or jump) for a player's hand, bound to one or more buttons, key pairs, D-pad directions or swipes from the platform mapping. Reads as a bool for whether it is held.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`IControllerAction`](/mod/game-api/types/global-i-l/icontrolleraction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerAction()"}</code> | <span className="api-desc">Creates a `ControllerAction` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allinputsources" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/inputsourcepair">{"InputSourcePair"}</Link>{"> allInputSources"}</code> | <span className="api-desc">Every input pair currently bound to this action, across platform mappings.</span> |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> | <span className="api-desc">Unused flag.</span> |
| <Link id="m-state" /><code>{"private bool state"}</code> | <span className="api-desc">Whether the action is currently held. Backing field for `State`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-state-2" /><code>{"bool State { get; }"}</code> | <span className="api-desc">True while any binding is held.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">Which action this is.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ended" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/clickedendeventhandler">{"ClickedEndEventHandler"}</Link>{" Ended"}</code> | <span className="api-desc">Raised when the action stops being held, or is disabled while held.</span> |
| <Link id="m-started" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Started"}</code> | <span className="api-desc">Raised when the action becomes held.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinputandlisteners" /><code>{"void AddInputAndListeners(List<object[]> buttonsList, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, "}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" mapping)"}</code> | <span className="api-desc">Adds more bindings from a mapping without removing the current ones.</span> |
| <Link id="m-op-implicit" /><code>{"static bool op_Implicit("}<Link to="/mod/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" input)"}</code> | <span className="api-desc">Lets the action be used as a bool, giving `State`.</span> |
| <Link id="m-removeallinputsandlisteners" /><code>{"void RemoveAllInputsAndListeners("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Removes every binding and ends the action if it was held.</span> |
| <Link id="m-removeinputsandlisteners" /><code>{"void RemoveInputsAndListeners("}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" mapping, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Removes the bindings that came from one mapping. Ends the action if none are left.</span> |
| <Link id="m-setinputandlisteners" /><code>{"void SetInputAndListeners(List<object[]> buttonsList, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, "}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" mapping)"}</code> | <span className="api-desc">Replaces the bindings with ones from a mapping. For a pair, the second input must be pressed while the first is held.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onactionended" /><code>{"private void OnActionEnded("}<Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" inputSource, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Sets the state to off and raises `Ended` if it was on; the overload taking an input source is the per-input listener.</span> |
| <Link id="m-onactionended-2" /><code>{"private void OnActionEnded("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> | <span className="api-desc">Sets the state to off and raises `Ended` if it was on; the overload taking an input source is the per-input listener.</span> |
| <Link id="m-onactionstarted" /><code>{"private void OnActionStarted("}<Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" inputSource, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Sets the state to on and raises `Started` if it was off; for two-key combos it first checks the primary input is held.</span> |
| <Link id="m-onactionstarted-2" /><code>{"private void OnActionStarted("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Sets the state to on and raises `Started` if it was off; for two-key combos it first checks the primary input is held.</span> |
| <Link id="m-populateinputsourcepair" /><code>{"private void PopulateInputSourcePair(object[] buttons, "}<Link to="/mod/game-api/types/global-i-l/inputsourcepair">{"InputSourcePair"}</Link>{" inputSourcePair, "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Builds the primary and optional secondary input for one binding from a key code or a `GeneralInputType`.</span> |
| <Link id="m-removeinputsource" /><code>{"private void RemoveInputSource("}<Link to="/mod/game-api/types/global-i-l/inputsourcepair">{"InputSourcePair"}</Link>{" inputToRemove)"}</code> | <span className="api-desc">Unhooks one input pair's listeners and removes it from the action.</span> |
| <Link id="m-setuplisteners" /><code>{"private void SetupListeners(List<"}<Link to="/mod/game-api/types/global-i-l/inputsourcepair">{"InputSourcePair"}</Link>{"> sourceToListenTo)"}</code> | <span className="api-desc">Hooks the press and release events of each input pair to this action.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ControllerAction`:

<div className="api-used-in">

[`ControllerActionProxy.LinkedControllerAction`](/mod/game-api/types/global-c-d/controlleractionproxy#m-linkedcontrolleraction), [`ControllerActionProxy.LinkToControllerAction`](/mod/game-api/types/global-c-d/controlleractionproxy#m-linktocontrolleraction), [`ControllerActions.actions`](/mod/game-api/types/global-c-d/controlleractions#m-actions), [`ControllerActions.actionsMap`](/mod/game-api/types/global-c-d/controlleractions#m-actionsmap), [`ControllerActions.ActionsMap`](/mod/game-api/types/global-c-d/controlleractions#m-actionsmap-2), [`ControllerActionsManager.Item`](/mod/game-api/types/global-c-d/controlleractionsmanager#m-item).

</div>
