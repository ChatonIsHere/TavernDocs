---
title: "ControllerAction"
description: "Client: one input action (such as interact or jump) for a player's hand, bound to one or more buttons, key pairs, D-pad directions or swipes from the "
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerAction

A **class** in `Root.Township`, no namespace.

Client: one input action (such as interact or jump) for a player's hand, bound to one or more buttons, key pairs, D-pad directions or swipes from the platform mapping. Reads as a bool for whether it is held.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`IControllerAction`](/game-api/types/global-i-l/icontrolleraction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerAction()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allinputsources" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/inputsourcepair">{"InputSourcePair"}</Link>{"> allInputSources"}</code> |  |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> |  |
| <Link id="m-state" /><code>{"private bool state"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-state-2" /><code>{"bool State { get; }"}</code> | True while any binding is held. |
| <Link id="m-type" /><code><Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Type { get; set; }"}</code> | Which action this is. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ended" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedendeventhandler">{"ClickedEndEventHandler"}</Link>{" Ended"}</code> | Raised when the action stops being held, or is disabled while held. |
| <Link id="m-started" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Started"}</code> | Raised when the action becomes held. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinputandlisteners" /><code>{"void AddInputAndListeners(List<object[]> buttonsList, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, "}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" mapping)"}</code> | Adds more bindings from a mapping without removing the current ones. |
| <Link id="m-op-implicit" /><code>{"static bool op_Implicit("}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" input)"}</code> | Lets the action be used as a bool, giving `State`. |
| <Link id="m-removeallinputsandlisteners" /><code>{"void RemoveAllInputsAndListeners("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Removes every binding and ends the action if it was held. |
| <Link id="m-removeinputsandlisteners" /><code>{"void RemoveInputsAndListeners("}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" mapping, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Removes the bindings that came from one mapping. Ends the action if none are left. |
| <Link id="m-setinputandlisteners" /><code>{"void SetInputAndListeners(List<object[]> buttonsList, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, "}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" mapping)"}</code> | Replaces the bindings with ones from a mapping. For a pair, the second input must be pressed while the first is held. |
| <Link id="m-onactionended" /><code>{"private void OnActionEnded("}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" inputSource, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-onactionended-2" /><code>{"private void OnActionEnded("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> |  |
| <Link id="m-onactionstarted" /><code>{"private void OnActionStarted("}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{" inputSource, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-onactionstarted-2" /><code>{"private void OnActionStarted("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-populateinputsourcepair" /><code>{"private void PopulateInputSourcePair(object[] buttons, "}<Link to="/game-api/types/global-i-l/inputsourcepair">{"InputSourcePair"}</Link>{" inputSourcePair, "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-removeinputsource" /><code>{"private void RemoveInputSource("}<Link to="/game-api/types/global-i-l/inputsourcepair">{"InputSourcePair"}</Link>{" inputToRemove)"}</code> |  |
| <Link id="m-setuplisteners" /><code>{"private void SetupListeners(List<"}<Link to="/game-api/types/global-i-l/inputsourcepair">{"InputSourcePair"}</Link>{"> sourceToListenTo)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ControllerAction`:

[`ControllerActionProxy.LinkedControllerAction`](/game-api/types/global-c-d/controlleractionproxy#m-linkedcontrolleraction), [`ControllerActionProxy.LinkToControllerAction`](/game-api/types/global-c-d/controlleractionproxy#m-linktocontrolleraction), [`ControllerActions.actions`](/game-api/types/global-c-d/controlleractions#m-actions), [`ControllerActions.actionsMap`](/game-api/types/global-c-d/controlleractions#m-actionsmap), [`ControllerActions.ActionsMap`](/game-api/types/global-c-d/controlleractions#m-actionsmap-2), [`ControllerActionsManager.Item`](/game-api/types/global-c-d/controlleractionsmanager#m-item).
