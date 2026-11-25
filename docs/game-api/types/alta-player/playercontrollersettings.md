---
title: "PlayerControllerSettings"
description: "An asset holding the settings for the parts of a player's body rig: body, clavicles, elbows, eye focus, hands and ghost hands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerSettings

A **class** in `Root.Township`, `Alta.Character`.

An asset holding the settings for the parts of a player's body rig: body, clavicles, elbows, eye focus, hands and ghost hands.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PlayerControllerSettings.Create`](/game-api/types/alta-player/playercontrollersettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/playercontrollersettings-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerControllerSettings()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bodycontrollersettings" /><code>{"private "}<Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" bodyControllerSettings"}</code> |
| <Link id="m-claviclecontrollersettings" /><code>{"private "}<Link to="/game-api/types/alta-player/claviclecontrollersettings">{"ClavicleControllerSettings"}</Link>{" clavicleControllerSettings"}</code> |
| <Link id="m-controllersettings" /><code>{"private "}<Link to="/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" controllerSettings"}</code> |
| <Link id="m-elbowcontrollersettings" /><code>{"private "}<Link to="/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" elbowControllerSettings"}</code> |
| <Link id="m-elbowdatapointset" /><code>{"private "}<Link to="/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" elbowDataPointSet"}</code> |
| <Link id="m-eyefocusdetectionsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/eyefocuscontrollersettings">{"EyeFocusControllerSettings"}</Link>{" eyeFocusDetectionSettings"}</code> |
| <Link id="m-ghosthandsettings" /><code>{"private "}<Link to="/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" ghostHandSettings"}</code> |
| <Link id="m-handsettings" /><code>{"private "}<Link to="/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" handSettings"}</code> |
| <Link id="m-isdebugging" /><code>{"private bool isDebugging"}</code> |
| <Link id="m-saveraycastlayer" /><code>{"private LayerMask saveRaycastLayer"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodycontrollersettings-2" /><code><Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" "}<Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" { get; }"}</code> |  |
| <Link id="m-claviclecontrollersettings-2" /><code><Link to="/game-api/types/alta-player/claviclecontrollersettings">{"ClavicleControllerSettings"}</Link>{" "}<Link to="/game-api/types/alta-player/claviclecontrollersettings">{"ClavicleControllerSettings"}</Link>{" { get; }"}</code> |  |
| <Link id="m-controllersettings-2" /><code><Link to="/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" ControllerSettings { get; }"}</code> | Hand settings for the controllers. A separate field from `HandSettings`. |
| <Link id="m-elbowcontrollersettings-2" /><code><Link to="/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" "}<Link to="/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" { get; }"}</code> |  |
| <Link id="m-elbowdatapointset-2" /><code><Link to="/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" "}<Link to="/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" { get; set; }"}</code> | Recorded elbow data points used to place the elbows. |
| <Link id="m-eyefocusdetectionsettings-2" /><code><Link to="/game-api/types/alta-player/eyefocuscontrollersettings">{"EyeFocusControllerSettings"}</Link>{" EyeFocusDetectionSettings { get; }"}</code> |  |
| <Link id="m-ghosthandsettings-2" /><code><Link to="/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" "}<Link to="/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" { get; }"}</code> |  |
| <Link id="m-handsettings-2" /><code><Link to="/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" "}<Link to="/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isdebugging-2" /><code>{"bool IsDebugging { get; }"}</code> | Debug flag set in the asset. |
| <Link id="m-saveraycastlayer-2" /><code>{"LayerMask SaveRaycastLayer { get; }"}</code> | Layer mask set in the asset for save raycasts. |

## Used in

Members of other types that take, return or hold a `PlayerControllerSettings`:

[`CharacterComponentController.PlayerSettings`](/game-api/types/alta-player/charactercomponentcontroller#m-playersettings), [`PlayerController.playerSettings`](/game-api/types/global-p/playercontroller#m-playersettings), [`PlayerController.Settings`](/game-api/types/global-p/playercontroller#m-settings).
