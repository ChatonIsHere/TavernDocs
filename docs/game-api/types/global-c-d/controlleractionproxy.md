---
title: "ControllerActionProxy"
description: "A stand-in controller action that forwards the state and events of whichever ControllerAction it is linked to, and can be switched off on its own. Cli"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionProxy

A **class** in `Root.Township`, no namespace.

A stand-in controller action that forwards the state and events of whichever `ControllerAction` it is linked to, and can be switched off on its own. Client input.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`IControllerAction`](/game-api/types/global-i-l/icontrolleraction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionProxy()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | When false, `Started` and `Ended` are not forwarded and the bool conversion is false. True by default. |
| <Link id="m-state" /><code>{"bool State { get; }"}</code> | The linked action's current state, or false when nothing is linked. Ignores `IsEnabled`. |
| <Link id="m-type" /><code><Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Type { get; set; }"}</code> | Which controller action type this proxy stands for. |
| <Link id="m-linkedcontrolleraction" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" LinkedControllerAction { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disabled" /><code>{"event "}<Link to="/game-api/types/global-c-d/controlleractioneventhandler">{"ControllerActionEventHandler"}</Link>{" Disabled"}</code> | Raised when `IsEnabled` changes to false. |
| <Link id="m-enabled" /><code>{"event "}<Link to="/game-api/types/global-c-d/controlleractioneventhandler">{"ControllerActionEventHandler"}</Link>{" Enabled"}</code> | Raised when `IsEnabled` changes to true. |
| <Link id="m-ended" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedendeventhandler">{"ClickedEndEventHandler"}</Link>{" Ended"}</code> | Forwarded from the linked action when it ends, only while this proxy is enabled. |
| <Link id="m-started" /><code>{"event "}<Link to="/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Started"}</code> | Forwarded from the linked action when it starts, only while this proxy is enabled. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-linktocontrolleraction" /><code>{"void LinkToControllerAction("}<Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" controllerAction)"}</code> | Links the proxy to a controller action, unlinking any previous one first. |
| <Link id="m-op-implicit" /><code>{"static bool op_Implicit("}<Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" input)"}</code> | Converts to bool: true only when the linked action is active and the proxy is enabled. |
| <Link id="m-unlinkfromaction" /><code>{"void UnlinkFromAction()"}</code> | Stops following the linked action. |
| <Link id="m-invokeended" /><code>{"private void InvokeEnded("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input, bool isDisabling)"}</code> |  |
| <Link id="m-invokestarted" /><code>{"private void InvokeStarted("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ControllerActionProxy`:

[`ControllerActionEventHandler.BeginInvoke`](/game-api/types/global-c-d/controlleractioneventhandler#m-begininvoke), [`ControllerActionEventHandler.Invoke`](/game-api/types/global-c-d/controlleractioneventhandler#m-invoke), [`ControllerActionsManagerProxy.actionsMap`](/game-api/types/global-c-d/controlleractionsmanagerproxy#m-actionsmap), [`ControllerActionsManagerProxy.ActionsMap`](/game-api/types/global-c-d/controlleractionsmanagerproxy#m-actionsmap-2), [`ControllerActionsManagerProxy.Item`](/game-api/types/global-c-d/controlleractionsmanagerproxy#m-item), [`HandHandler.GestureProxy`](/game-api/types/global-e-h/handhandler#m-gestureproxy), [`Teleporter.CancelTeleport`](/game-api/types/global-t-x/teleporter#m-cancelteleport).
