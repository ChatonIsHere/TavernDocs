---
title: "ControllerModeType"
description: "The kinds of controller mode the player's hands can be in, such as play, combat, teleport, interact, customization and debug."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerModeType

An **enum** in `Root.Township`, the global namespace.

The kinds of controller mode the player's hands can be in, such as play, combat, teleport, interact, customization and debug.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Values

| Member |
| --- |
| <Link id="m-charactercustomizationmode" /><code>{"CharacterCustomizationMode = 2"}</code> |
| <Link id="m-combatmode" /><code>{"CombatMode = 4"}</code> |
| <Link id="m-debugmode" /><code>{"DebugMode = 3"}</code> |
| <Link id="m-elbowdatapointeditor" /><code>{"ElbowDataPointEditor = 5"}</code> |
| <Link id="m-equipmentmode" /><code>{"EquipmentMode = 10"}</code> |
| <Link id="m-gesturemode" /><code>{"GestureMode = 8"}</code> |
| <Link id="m-interactmode" /><code>{"InteractMode = 7"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-playmode" /><code>{"PlayMode = 1"}</code> |
| <Link id="m-rotateroommode" /><code>{"RotateRoomMode = 9"}</code> |
| <Link id="m-teleportmode" /><code>{"TeleportMode = 6"}</code> |

## Used in

Members of other types that take, return or hold a `ControllerModeType`:

<div className="api-used-in">

[`IPlayerStateSettings.ControlsToAdd`](/mod/game-api/types/alta-player/iplayerstatesettings#m-controlstoadd), [`IPlayerStateSettings.ControlsToRemove`](/mod/game-api/types/alta-player/iplayerstatesettings#m-controlstoremove), [`PlayerStateSettings.controlsToAdd`](/mod/game-api/types/alta-player/playerstatesettings#m-controlstoadd), [`PlayerStateSettings.ControlsToAdd`](/mod/game-api/types/alta-player/playerstatesettings#m-controlstoadd-2), [`PlayerStateSettings.controlsToRemove`](/mod/game-api/types/alta-player/playerstatesettings#m-controlstoremove), [`PlayerStateSettings.ControlsToRemove`](/mod/game-api/types/alta-player/playerstatesettings#m-controlstoremove-2), [`ControllerActionMode.type`](/mod/game-api/types/global-c-d/controlleractionmode#m-type), [`ControllerActionMode.Type`](/mod/game-api/types/global-c-d/controlleractionmode#m-type-2), [`ControllerActionsManager.AddControllerMode`](/mod/game-api/types/global-c-d/controlleractionsmanager#m-addcontrollermode), [`ControllerActionsManager.defaultModes`](/mod/game-api/types/global-c-d/controlleractionsmanager#m-defaultmodes), [`ControllerActionsManager.RemoveControllerMode`](/mod/game-api/types/global-c-d/controlleractionsmanager#m-removecontrollermode), [`ControllerActionsManager.SetControllerMode`](/mod/game-api/types/global-c-d/controlleractionsmanager#m-setcontrollermode), [`ControllerModeSettings.GetMode`](/mod/game-api/types/global-c-d/controllermodesettings#m-getmode), [`ControllerModeSettings.modesMap`](/mod/game-api/types/global-c-d/controllermodesettings#m-modesmap), [`ControllerModeSettings.ModesMap`](/mod/game-api/types/global-c-d/controllermodesettings#m-modesmap-2), [`IKControllSettings.controllerModesToEnable`](/mod/game-api/types/global-i-l/ikcontrollsettings#m-controllermodestoenable), [`IKControllSettings.ControllerModesToEnable`](/mod/game-api/types/global-i-l/ikcontrollsettings#m-controllermodestoenable-2), [`PlatformActionMapping.Type`](/mod/game-api/types/global-p/platformactionmapping#m-type).

</div>
