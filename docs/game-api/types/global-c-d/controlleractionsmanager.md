---
title: "ControllerActionsManager"
description: "class ControllerActionsManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionsManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionsManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controllersettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllermodesettings">{"ControllerModeSettings"}</Link>{" controllerSettings"}</code> |  |
| <Link id="m-defaultmodes" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"[] defaultModes"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlleractions" /><code><Link to="/game-api/types/global-c-d/controlleractions">{"ControllerActions"}</Link>{" "}<Link to="/game-api/types/global-c-d/controlleractions">{"ControllerActions"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-item" /><code><Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" this["}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" type] { get; }"}</code> |  |
| <Link id="m-otheractionsmanager" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" OtherActionsManager { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcontrollermode" /><code>{"void AddControllerMode("}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> |  |
| <Link id="m-adddefaultmodes" /><code>{"void AddDefaultModes()"}</code> |  |
| <Link id="m-clearallcontrollermappings" /><code>{"void ClearAllControllerMappings(bool isForBothHands)"}</code> |  |
| <Link id="m-removecontrollermode" /><code>{"void RemoveControllerMode("}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> |  |
| <Link id="m-setcontrollermode" /><code>{"void SetControllerMode("}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ControllerActionsManager`:

[`ControllerActionsManagerProxy.linkedActionsManager`](/game-api/types/global-c-d/controlleractionsmanagerproxy#m-linkedactionsmanager), [`ControllerActionsManagerProxy.LinkToActionsManager`](/game-api/types/global-c-d/controlleractionsmanagerproxy#m-linktoactionsmanager), [`PlayerInput.actionsManager`](/game-api/types/global-p/playerinput#m-actionsmanager), [`PlayerInput.ActionsManager`](/game-api/types/global-p/playerinput#m-actionsmanager-2).
