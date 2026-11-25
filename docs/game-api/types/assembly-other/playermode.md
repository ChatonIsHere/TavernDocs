---
title: "PlayerMode"
description: "Flags for how a player is playing: flat modes (Fly, AutoCam) or a VR runtime (OpenVR, Oculus, OpenXR, Meta Quest, Pico)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerMode

An **enum** in `Alta.Platform`, no namespace.

Flags for how a player is playing: flat modes (`Fly`, `AutoCam`) or a VR runtime (OpenVR, Oculus, OpenXR, Meta Quest, Pico). `Unassigned` (0) means not yet known. `ControllerExtension` and the `game` commands use it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Attributes** `Flags`
- **Documented in** [Player](/game-api/networking/player#playermode)

## Values

| Member |
| --- |
| <Link id="m-autocam" /><code>{"AutoCam = 2"}</code> |
| <Link id="m-fly" /><code>{"Fly = 1"}</code> |
| <Link id="m-metaquest" /><code>{"MetaQuest = 40"}</code> |
| <Link id="m-oculus" /><code>{"Oculus = 8"}</code> |
| <Link id="m-openvr" /><code>{"OpenVR = 4"}</code> |
| <Link id="m-openxr" /><code>{"OpenXR = 28"}</code> |
| <Link id="m-picoxr" /><code>{"PicoXR = 64"}</code> |
| <Link id="m-unassigned" /><code>{"Unassigned = 0"}</code> |

## Used in

Members of other types that take, return or hold a `PlayerMode`:

[`Hand.platform`](/game-api/types/alta-player/hand#m-platform), [`PlatformHandAlignment.platform`](/game-api/types/alta-player/platformhandalignment#m-platform), [`PlatformHandAlignment.Platform`](/game-api/types/alta-player/platformhandalignment#m-platform-2), [`GameCommandModule.ConnectToPlayer`](/game-api/types/alta-console/gamecommandmodule#m-connecttoplayer), [`GameCommandModule.ConnectToServer`](/game-api/types/alta-console/gamecommandmodule#m-connecttoserver), [`GameCommandModule.JoinServerAsync`](/game-api/types/alta-console/gamecommandmodule#m-joinserverasync), [`GameCommandModule.JoinServerAtIpAsync`](/game-api/types/alta-console/gamecommandmodule#m-joinserveratipasync), [`GameCommandModule.JoinServerAtLocalIpAsync`](/game-api/types/alta-console/gamecommandmodule#m-joinserveratlocalipasync), [`GameCommandModule.StartLocalTestAsync`](/game-api/types/alta-console/gamecommandmodule#m-startlocaltestasync), [`GameCommandModule.StartLocalTestWithSceneAsync`](/game-api/types/alta-console/gamecommandmodule#m-startlocaltestwithsceneasync), [`RequestJoinMessage.playerMode`](/game-api/types/alta-networking/requestjoinmessage#m-playermode), [`RequestJoinMessage.PlayerMode`](/game-api/types/alta-networking/requestjoinmessage#m-playermode-2), [`RequestJoinMessage.RequestJoinMessage`](/game-api/types/alta-networking/requestjoinmessage#m-ctor-2), [`IPlayer.PlayerMode`](/game-api/types/alta-networking/iplayer#m-playermode), [`PlayerJoinLeaveData.mode`](/game-api/types/alta-networking/playerjoinleavedata#m-mode), [`ServerHandler.playerModes`](/game-api/types/alta-networking/serverhandler#m-playermodes), [`ServerHandler.UserJoined`](/game-api/types/alta-networking/serverhandler#m-userjoined), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowed`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowed), [`ServerPlayerConnectionHandlerOld.CheckIfPlayerIsAllowedCustom`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-checkifplayerisallowedcustom), [`ServerPlayerConnectionHandlerOld.PlayerAccepted`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-playeraccepted), [`ServerPlayerConnectionHandlerOld.UserJoined`](/game-api/types/alta-networking/serverplayerconnectionhandlerold#m-userjoined), [`SettingBasedToggler.expectedModes`](/game-api/types/alta-utilities/settingbasedtoggler#m-expectedmodes), [`PlayerControllerPrefabs.GetController`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-getcontroller), [`PlayerControllerPrefabs.GetMenuController`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-getmenucontroller), [`AutoCamDeviceController.Mode`](/game-api/types/global-a-b/autocamdevicecontroller#m-mode), [`ControllerActionMode.GetMapping`](/game-api/types/global-c-d/controlleractionmode#m-getmapping), [`ControllerActionMode.platformActionMappings`](/game-api/types/global-c-d/controlleractionmode#m-platformactionmappings), [`ControllerActionMode.PlatformActionMappings`](/game-api/types/global-c-d/controlleractionmode#m-platformactionmappings-2), [`ControllerExtension.activeFor`](/game-api/types/global-c-d/controllerextension#m-activefor), [`ControllerOffsetSettings.GetControllerOffsetForHand`](/game-api/types/global-c-d/controlleroffsetsettings#m-getcontrolleroffsetforhand), [`DeviceControllerFactory.Create`](/game-api/types/global-c-d/devicecontrollerfactory#m-create), [`FlyCamDeviceController.Mode`](/game-api/types/global-e-h/flycamdevicecontroller#m-mode), [`InputToActionMapping.GetButtonsForPlatform`](/game-api/types/global-i-l/inputtoactionmapping#m-getbuttonsforplatform), [`IPlatformPlayer.PlayerMode`](/game-api/types/global-i-l/iplatformplayer#m-playermode), [`IXrDeviceSdkController.Mode`](/game-api/types/global-i-l/ixrdevicesdkcontroller#m-mode), [`LocomotionlessPlayerController.PlayerMode`](/game-api/types/global-i-l/locomotionlessplayercontroller#m-playermode), [`MainMenuPlayerController.PlayerMode`](/game-api/types/global-m-o/mainmenuplayercontroller#m-playermode), [`OpenXRDeviceController.Mode`](/game-api/types/global-m-o/openxrdevicecontroller#m-mode), [`PlatformActionMapping.AddMapping`](/game-api/types/global-p/platformactionmapping#m-addmapping), [`PlatformActionMapping.platform`](/game-api/types/global-p/platformactionmapping#m-platform), [`PlatformActionMapping.Platform`](/game-api/types/global-p/platformactionmapping#m-platform-2), [`PlatformDriver.mode`](/game-api/types/global-p/platformdriver#m-mode), [`PlatformDriver.Mode`](/game-api/types/global-p/platformdriver#m-mode-2), [`PlatformDriver.SetupPlatform`](/game-api/types/global-p/platformdriver#m-setupplatform), [`PlatformDriver.StartPlatform`](/game-api/types/global-p/platformdriver#m-startplatform), [`PlatformDriver.StartPlatformCoroutine`](/game-api/types/global-p/platformdriver#m-startplatformcoroutine), [`PlatformHandler.BeginInvoke`](/game-api/types/global-p/platformhandler#m-begininvoke), [`PlatformHandler.Invoke`](/game-api/types/global-p/platformhandler#m-invoke), [`PlatformModeHandler.BeginInvoke`](/game-api/types/global-p/platformmodehandler#m-begininvoke), [`PlatformModeHandler.Invoke`](/game-api/types/global-p/platformmodehandler#m-invoke), [`Player.InitializePlayerOnServer`](/game-api/types/global-p/player#m-initializeplayeronserver), [`Player.playerMode`](/game-api/types/global-p/player#m-playermode), [`Player.PlayerMode`](/game-api/types/global-p/player#m-playermode-2), [`Player.SetPlayerMode`](/game-api/types/global-p/player#m-setplayermode), [`Player.validSavingModes`](/game-api/types/global-p/player#m-validsavingmodes), [`PlayerModeExtensions.CheckCosmetics`](/game-api/types/assembly-other/playermodeextensions#m-checkcosmetics), [`PlayerModeExtensions.CheckVR`](/game-api/types/assembly-other/playermodeextensions#m-checkvr), [`PlayerModeExtensions.Cosmetics`](/game-api/types/assembly-other/playermodeextensions#m-cosmetics), [`PlayerModeExtensions.VR`](/game-api/types/assembly-other/playermodeextensions#m-vr), [`PlayerModeOverride.Override`](/game-api/types/global-p/playermodeoverride#m-override) and 13 more.
