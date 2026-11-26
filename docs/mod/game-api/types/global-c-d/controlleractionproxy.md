---
title: "ControllerActionProxy"
description: "A stand-in controller action that forwards the state and events of whichever ControllerAction it is linked to, and can be switched off on its own."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionProxy

A **class** in `Root.Township`, the global namespace.

A stand-in controller action that forwards the state and events of whichever `ControllerAction` it is linked to, and can be switched off on its own. Client input.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`IControllerAction`](/mod/game-api/types/global-i-l/icontrolleraction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionProxy()"}</code> | <span className="api-desc">Creates a `ControllerActionProxy` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">When false, `Started` and `Ended` are not forwarded and the bool conversion is false. True by default.</span> |
| <Link id="m-state" /><code>{"bool State { get; }"}</code> | <span className="api-desc">The linked action's current state, or false when nothing is linked. Ignores `IsEnabled`.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">Which controller action type this proxy stands for.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-linkedcontrolleraction" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" LinkedControllerAction { get; set; }"}</code> | <span className="api-desc">The real controller action this proxy listens to, set by `LinkToControllerAction`.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-disabled" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/controlleractioneventhandler">{"ControllerActionEventHandler"}</Link>{" Disabled"}</code> | <span className="api-desc">Raised when `IsEnabled` changes to false.</span> |
| <Link id="m-enabled" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/controlleractioneventhandler">{"ControllerActionEventHandler"}</Link>{" Enabled"}</code> | <span className="api-desc">Raised when `IsEnabled` changes to true.</span> |
| <Link id="m-ended" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/clickedendeventhandler">{"ClickedEndEventHandler"}</Link>{" Ended"}</code> | <span className="api-desc">Forwarded from the linked action when it ends, only while this proxy is enabled.</span> |
| <Link id="m-started" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/clickedeventhandler">{"ClickedEventHandler"}</Link>{" Started"}</code> | <span className="api-desc">Forwarded from the linked action when it starts, only while this proxy is enabled.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-linktocontrolleraction" /><code>{"void LinkToControllerAction("}<Link to="/mod/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" controllerAction)"}</code> | <span className="api-desc">Links the proxy to a controller action, unlinking any previous one first.</span> |
| <Link id="m-op-implicit" /><code>{"static bool op_Implicit("}<Link to="/mod/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" input)"}</code> | <span className="api-desc">Converts to bool: true only when the linked action is active and the proxy is enabled.</span> |
| <Link id="m-unlinkfromaction" /><code>{"void UnlinkFromAction()"}</code> | <span className="api-desc">Stops following the linked action.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invokeended" /><code>{"private void InvokeEnded("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input, bool isDisabling)"}</code> | <span className="api-desc">Forwards the linked action's Ended event if the proxy is enabled.</span> |
| <Link id="m-invokestarted" /><code>{"private void InvokeStarted("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | <span className="api-desc">Forwards the linked action's Started event if the proxy is enabled.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ControllerActionProxy`:

<div className="api-used-in">

[`ControllerActionEventHandler.BeginInvoke`](/mod/game-api/types/global-c-d/controlleractioneventhandler#m-begininvoke), [`ControllerActionEventHandler.Invoke`](/mod/game-api/types/global-c-d/controlleractioneventhandler#m-invoke), [`ControllerActionsManagerProxy.actionsMap`](/mod/game-api/types/global-c-d/controlleractionsmanagerproxy#m-actionsmap), [`ControllerActionsManagerProxy.ActionsMap`](/mod/game-api/types/global-c-d/controlleractionsmanagerproxy#m-actionsmap-2), [`ControllerActionsManagerProxy.Item`](/mod/game-api/types/global-c-d/controlleractionsmanagerproxy#m-item), [`HandHandler.GestureProxy`](/mod/game-api/types/global-e-h/handhandler#m-gestureproxy), [`Teleporter.CancelTeleport`](/mod/game-api/types/global-t-x/teleporter#m-cancelteleport).

</div>
