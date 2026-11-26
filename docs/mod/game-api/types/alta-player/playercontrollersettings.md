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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PlayerControllerSettings.Create`](/mod/game-api/types/alta-player/playercontrollersettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/playercontrollersettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerControllerSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodycontrollersettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" bodyControllerSettings"}</code> | <span className="api-desc">Backing field for `BodyControllerSettings`.</span> |
| <Link id="m-claviclecontrollersettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/claviclecontrollersettings">{"ClavicleControllerSettings"}</Link>{" clavicleControllerSettings"}</code> | <span className="api-desc">Backing field for `ClavicleControllerSettings`.</span> |
| <Link id="m-controllersettings" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" controllerSettings"}</code> | <span className="api-desc">Backing field for `ControllerSettings`, a second `HandSettings` asset kept apart from `handSettings`.</span> |
| <Link id="m-elbowcontrollersettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" elbowControllerSettings"}</code> | <span className="api-desc">Backing field for `ElbowControllerSettings`.</span> |
| <Link id="m-elbowdatapointset" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" elbowDataPointSet"}</code> | <span className="api-desc">Backing field for `ElbowDataPointSet`, the elbow pose data the arm IK reads.</span> |
| <Link id="m-eyefocusdetectionsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/eyefocuscontrollersettings">{"EyeFocusControllerSettings"}</Link>{" eyeFocusDetectionSettings"}</code> | <span className="api-desc">Backing field for `EyeFocusDetectionSettings`.</span> |
| <Link id="m-ghosthandsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" ghostHandSettings"}</code> | <span className="api-desc">Backing field for `GhostHandSettings`.</span> |
| <Link id="m-handsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" handSettings"}</code> | <span className="api-desc">Backing field for `HandSettings`.</span> |
| <Link id="m-isdebugging" /><code>{"private bool isDebugging"}</code> | <span className="api-desc">Backing field for `IsDebugging`, an inspector debug toggle for the player rig.</span> |
| <Link id="m-saveraycastlayer" /><code>{"private LayerMask saveRaycastLayer"}</code> | <span className="api-desc">Backing field for `SaveRaycastLayer`, a layer mask. Nothing in the decompiled code reads it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodycontrollersettings-2" /><code><Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" { get; }"}</code> | <span className="api-desc">Settings asset for the player's body controller.</span> |
| <Link id="m-claviclecontrollersettings-2" /><code><Link to="/mod/game-api/types/alta-player/claviclecontrollersettings">{"ClavicleControllerSettings"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/claviclecontrollersettings">{"ClavicleControllerSettings"}</Link>{" { get; }"}</code> | <span className="api-desc">Settings asset for the clavicle (shoulder) part of the arm rig.</span> |
| <Link id="m-controllersettings-2" /><code><Link to="/mod/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" ControllerSettings { get; }"}</code> | <span className="api-desc">Hand settings for the controllers. A separate field from `HandSettings`.</span> |
| <Link id="m-elbowcontrollersettings-2" /><code><Link to="/mod/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/elbowcontrollersettings">{"ElbowControllerSettings"}</Link>{" { get; }"}</code> | <span className="api-desc">Settings asset for placing the elbows in the arm IK.</span> |
| <Link id="m-elbowdatapointset-2" /><code><Link to="/mod/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Recorded elbow data points used to place the elbows.</span> |
| <Link id="m-eyefocusdetectionsettings-2" /><code><Link to="/mod/game-api/types/alta-player/eyefocuscontrollersettings">{"EyeFocusControllerSettings"}</Link>{" EyeFocusDetectionSettings { get; }"}</code> | <span className="api-desc">Settings asset for detecting what the player is looking at.</span> |
| <Link id="m-ghosthandsettings-2" /><code><Link to="/mod/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/ghosthandsettings">{"GhostHandSettings"}</Link>{" { get; }"}</code> | <span className="api-desc">Settings asset for the player's ghost hands.</span> |
| <Link id="m-handsettings-2" /><code><Link to="/mod/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handsettings">{"HandSettings"}</Link>{" { get; }"}</code> | <span className="api-desc">Hand settings for the player rig.</span> |
| <Link id="m-isdebugging-2" /><code>{"bool IsDebugging { get; }"}</code> | <span className="api-desc">Debug flag set in the asset.</span> |
| <Link id="m-saveraycastlayer-2" /><code>{"LayerMask SaveRaycastLayer { get; }"}</code> | <span className="api-desc">Layer mask set in the asset for save raycasts.</span> |

## Used in

Members of other types that take, return or hold a `PlayerControllerSettings`:

<div className="api-used-in">

[`CharacterComponentController.PlayerSettings`](/mod/game-api/types/alta-player/charactercomponentcontroller#m-playersettings), [`PlayerController.playerSettings`](/mod/game-api/types/global-p/playercontroller#m-playersettings), [`PlayerController.Settings`](/mod/game-api/types/global-p/playercontroller#m-settings).

</div>
