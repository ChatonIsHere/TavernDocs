---
title: "ControllerActionsManager"
description: "Per-hand component that holds the hand's ControllerActions and adds, sets or removes controller modes (input mapping sets) for the active XR platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionsManager

A **class** in `Root.Township`, the global namespace.

Per-hand component that holds the hand's `ControllerActions` and adds, sets or removes controller modes (input mapping sets) for the active XR platform. On each `PlayerInput`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionsManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controllersettings" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllermodesettings">{"ControllerModeSettings"}</Link>{" controllerSettings"}</code> | <span className="api-desc">Settings asset that maps mode types to their per-platform mappings.</span> |
| <Link id="m-defaultmodes" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"[] defaultModes"}</code> | <span className="api-desc">Modes added by `AddDefaultModes`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-playerinput" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput"}</code> | <span className="api-desc">This hand's `PlayerInput`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlleractions" /><code><Link to="/mod/game-api/types/global-c-d/controlleractions">{"ControllerActions"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controlleractions">{"ControllerActions"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">This hand's action set, made in `Awake`.</span> |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/global-c-d/controlleraction">{"ControllerAction"}</Link>{" this["}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" type] { get; }"}</code> | <span className="api-desc">Gets this hand's controller action of the given type.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-otheractionsmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controlleractionsmanager">{"ControllerActionsManager"}</Link>{" OtherActionsManager { get; }"}</code> | <span className="api-desc">The other hand's actions manager, used for the both-hands options.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcontrollermode" /><code>{"void AddControllerMode("}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> | <span className="api-desc">Adds the mode's mapping for the active platform on top of the current ones, optionally on both hands.</span> |
| <Link id="m-adddefaultmodes" /><code>{"void AddDefaultModes()"}</code> | <span className="api-desc">Adds every mode in `defaultModes` to this hand.</span> |
| <Link id="m-clearallcontrollermappings" /><code>{"void ClearAllControllerMappings(bool isForBothHands)"}</code> | <span className="api-desc">Removes every action mapping from this hand, optionally from both hands.</span> |
| <Link id="m-removecontrollermode" /><code>{"void RemoveControllerMode("}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> | <span className="api-desc">Removes the mode's mapping for the active platform, optionally on both hands.</span> |
| <Link id="m-setcontrollermode" /><code>{"void SetControllerMode("}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" modeType, bool isForBothHands)"}</code> | <span className="api-desc">Replaces the current mappings with the mode's mapping for the active platform, optionally on both hands.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates the `ControllerActions` for this hand's input.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ControllerActionsManager`:

<div className="api-used-in">

[`ControllerActionsManagerProxy.linkedActionsManager`](/mod/game-api/types/global-c-d/controlleractionsmanagerproxy#m-linkedactionsmanager), [`ControllerActionsManagerProxy.LinkToActionsManager`](/mod/game-api/types/global-c-d/controlleractionsmanagerproxy#m-linktoactionsmanager), [`PlayerInput.actionsManager`](/mod/game-api/types/global-p/playerinput#m-actionsmanager), [`PlayerInput.ActionsManager`](/mod/game-api/types/global-p/playerinput#m-actionsmanager-2).

</div>
