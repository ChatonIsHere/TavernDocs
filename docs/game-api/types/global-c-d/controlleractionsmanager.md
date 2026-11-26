---
title: "ControllerActionsManager"
description: "Per-hand component that holds the hand's ControllerActions and adds, sets or removes controller modes (input mapping sets) for the active XR platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionsManager

A **class** in `Root.Township`, no namespace.

Per-hand component that holds the hand's `ControllerActions` and adds, sets or removes controller modes (input mapping sets) for the active XR platform. On each `PlayerInput`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionsManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controllersettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllermodesettings">{"ControllerModeSettings"}</Link>{" controllerSettings"}</code> | Settings asset that maps mode types to their per-platform mappings. |
| <Link id="m-defaultmodes" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"[] defaultModes"}</code> | Modes added by `AddDefaultModes`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | This hand's `PlayerInput`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlleractions" /><code><Link to="/game-api/types/global-c-d/controlleractions">{"ControllerActions"}</Link>{" "}<Link to="/game-api/types/global-c-d/controlleractions">{"ControllerActions"}</Link>{" { get; private set; }"}</code> | This hand's action set, made in `Awake`. |
| <Link id="m-item" /><code><Link to="/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" this["}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" type] { get; }"}</code> | Gets this hand's controller action of the given type. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-otheractionsmanager" /><code>{"private "}<Link to="/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" OtherActionsManager { get; }"}</code> | The other hand's actions manager, used for the both-hands options. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcontrollermode" /><code>{"void AddControllerMode("}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> | Adds the mode's mapping for the active platform on top of the current ones, optionally on both hands. |
| <Link id="m-adddefaultmodes" /><code>{"void AddDefaultModes()"}</code> | Adds every mode in `defaultModes` to this hand. |
| <Link id="m-clearallcontrollermappings" /><code>{"void ClearAllControllerMappings(bool isForBothHands)"}</code> | Removes every action mapping from this hand, optionally from both hands. |
| <Link id="m-removecontrollermode" /><code>{"void RemoveControllerMode("}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> | Removes the mode's mapping for the active platform, optionally on both hands. |
| <Link id="m-setcontrollermode" /><code>{"void SetControllerMode("}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> | Replaces the current mappings with the mode's mapping for the active platform, optionally on both hands. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates the `ControllerActions` for this hand's input. |

</details>

## Used in

Members of other types that take, return or hold a `ControllerActionsManager`:

[`ControllerActionsManagerProxy.linkedActionsManager`](/game-api/types/global-c-d/controlleractionsmanagerproxy#m-linkedactionsmanager), [`ControllerActionsManagerProxy.LinkToActionsManager`](/game-api/types/global-c-d/controlleractionsmanagerproxy#m-linktoactionsmanager), [`PlayerInput.actionsManager`](/game-api/types/global-p/playerinput#m-actionsmanager), [`PlayerInput.ActionsManager`](/game-api/types/global-p/playerinput#m-actionsmanager-2).
