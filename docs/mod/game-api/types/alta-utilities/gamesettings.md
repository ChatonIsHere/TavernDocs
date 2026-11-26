---
title: "GameSettings"
description: "The player's local game options, saved as JSON in the storage folder as GameConfiguration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameSettings

A **class** in `Root.Township`, `Alta.Utilities`.

The player's local game options, saved as JSON in the storage folder as `GameConfiguration`. Marked obsolete but still read everywhere through `SettingsManager.GameConfig.Settings`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `Settings`, `ICloneable`
- **Attributes** `Obsolete`
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#gamesettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameSettings()"}</code> | Creates a `GameSettings` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accessibledocksaretoggle" /><code>{"bool AccessibleDocksAreToggle { get; set; }"}</code> | Whether accessible docks open as a toggle rather than only while held. |
| <Link id="m-apiendpoint" /><code><Link to="/mod/game-api/types/global-a-b/apiendpoint">{"ApiEndpoint"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/apiendpoint">{"ApiEndpoint"}</Link>{" { get; set; }"}</code> | Which web API endpoint `ApiAccess` connects to. |
| <Link id="m-audiofxvolumemultiplier" /><code>{"float AudioFXVolumeMultiplier { get; set; }"}</code> | Volume multiplier for sound effects, 0 to 2. |
| <Link id="m-cameraphotoresolutionscale" /><code>{"float CameraPhotoResolutionScale { get; set; }"}</code> | Resolution scale for photos taken with the in-game camera. |
| <Link id="m-cansellskillswithchildren" /><code>{"bool CanSellSkillsWithChildren { get; set; }"}</code> | Lets a player sell back a skill that has skills unlocked after it. Off by default. |
| <Link id="m-defaultcullingdistance" /><code>{"float DefaultCullingDistance { get; set; }"}</code> | Camera cull distance for layer 0 (default layer), applied to the player camera. Default 100. |
| <Link id="m-hapticsstrengthmultiplier" /><code>{"float HapticsStrengthMultiplier { get; set; }"}</code> | Multiplier for controller haptic strength. |
| <Link id="m-hasaccessibilityfeatures" /><code>{"bool HasAccessibilityFeatures { get; set; }"}</code> | Whether accessibility features are on. Set from the accessibility board. |
| <Link id="m-hasambientocclusionenabled" /><code>{"bool HasAmbientOcclusionEnabled { get; set; }"}</code> | Whether ambient occlusion is on. |
| <Link id="m-hasgrabassist" /><code>{"bool HasGrabAssist { get; set; }"}</code> | Whether grab assist helps the hand pick up nearby items. |
| <Link id="m-hashapticswhentoggleholding" /><code>{"bool HasHapticsWhenToggleHolding { get; set; }"}</code> | Whether docks give haptics while an item is held with toggle grip. |
| <Link id="m-heightassistvalue" /><code>{"int HeightAssistValue { get; set; }"}</code> | Saved height adjustment for the player, or -1 when not set. |
| <Link id="m-isbendingbodyonlocalbody" /><code>{"bool IsBendingBodyOnLocalBody { get; set; }"}</code> | Whether the local player's body bends with movement. |
| <Link id="m-isinvertingsmoothwalkandrun" /><code>{"bool IsInvertingSmoothWalkAndRun { get; set; }"}</code> | Swaps walk and run for smooth locomotion, so running is the default. |
| <Link id="m-issmoothrotationonswipe" /><code><Link to="/mod/game-api/types/global-s/smoothrotationmode">{"SmoothRotationMode"}</Link>{" IsSmoothRotationOnSwipe { get; set; }"}</code> | Smooth rotation mode used when swiping. |
| <Link id="m-isusingfreegesturemode" /><code>{"bool IsUsingFreeGestureMode { get; set; }"}</code> | Uses free hand gestures when the controller tracks finger skeletons. |
| <Link id="m-isusingsmoothlocomotion" /><code>{"bool IsUsingSmoothLocomotion { get; set; }"}</code> | Whether smooth locomotion is on. |
| <Link id="m-logsettingspath" /><code>{"string LogSettingsPath { get; set; }"}</code> | Path to a custom NLog config file. Empty uses the default. |
| <Link id="m-modsdirectorypath" /><code>{"string ModsDirectoryPath { get; set; }"}</code> | Folder the built-in C# script loader and debug command runner read from. Stored as `mods_directory_path`. |
| <Link id="m-movementcomfortspeed" /><code><Link to="/mod/game-api/types/global-m-o/movementconfortspeed">{"MovementConfortSpeed"}</Link>{" MovementComfortSpeed { get; set; }"}</code> | Comfort vignette speed setting. |
| <Link id="m-movementcomfortstrength" /><code><Link to="/mod/game-api/types/global-m-o/movementconfortstrength">{"MovementConfortStrength"}</Link>{" MovementComfortStrength { get; set; }"}</code> | Comfort vignette strength setting. |
| <Link id="m-pixellightcount" /><code>{"int PixelLightCount { get; set; }"}</code> | Maximum per-pixel lights, 1 to 8 (default 5). |
| <Link id="m-playernamestoggle" /><code>{"bool PlayerNamesToggle { get; set; }"}</code> | Whether player names stay shown as a toggle rather than on a timer. |
| <Link id="m-presslocomotionmode" /><code><Link to="/mod/game-api/types/global-c-d/directionmode">{"DirectionMode"}</Link>{" PressLocomotionMode { get; set; }"}</code> | Direction mode for smooth locomotion on a stick press. |
| <Link id="m-renderonecamerafromotherplayers" /><code>{"bool RenderOneCameraFromOtherPlayers { get; set; }"}</code> | Whether one hand camera held by another player is rendered for you. |
| <Link id="m-screenshotdockhideoptions" /><code><Link to="/mod/game-api/types/alta-items/dockhideoptions">{"DockHideOptions"}</Link>{" ScreenshotDockHideOptions { get; set; }"}</code> | When docks hide themselves in screenshots (never, when empty, and so on). |
| <Link id="m-selfstepvolume" /><code>{"float SelfStepVolume { get; set; }"}</code> | Volume of your own footstep sounds. |
| <Link id="m-smoothlocomotionactivehand" /><code><Link to="/mod/game-api/types/global-a-b/activehandindex">{"ActiveHandIndex"}</Link>{" SmoothLocomotionActiveHand { get; set; }"}</code> | Which hand drives smooth locomotion. |
| <Link id="m-smoothlocomotionrunmode" /><code><Link to="/mod/game-api/types/global-q-r/runmode">{"RunMode"}</Link>{" SmoothLocomotionRunMode { get; set; }"}</code> | How running is triggered in smooth locomotion. |
| <Link id="m-smoothrotationspeed" /><code><Link to="/mod/game-api/types/global-s/smoothrotationspeed">{"SmoothRotationSpeed"}</Link>{" "}<Link to="/mod/game-api/types/global-s/smoothrotationspeed">{"SmoothRotationSpeed"}</Link>{" { get; set; }"}</code> | Speed preset for smooth turning. |
| <Link id="m-snaprotation" /><code><Link to="/mod/game-api/types/global-q-r/roomrotationmode">{"RoomRotationMode"}</Link>{" SnapRotation { get; set; }"}</code> | Room rotation mode, snap by default. |
| <Link id="m-snaprotationmode" /><code><Link to="/mod/game-api/types/global-s/snaprotationmode">{"SnapRotationMode"}</Link>{" "}<Link to="/mod/game-api/types/global-s/snaprotationmode">{"SnapRotationMode"}</Link>{" { get; set; }"}</code> | Which snap rotation style is used. |
| <Link id="m-streamingresolutionscale" /><code>{"float StreamingResolutionScale { get; set; }"}</code> | Resolution scale for the streaming camera. |
| <Link id="m-swipesensitivitylevelvalue" /><code><Link to="/mod/game-api/types/global-s/swipesensitivitylevel">{"SwipeSensitivityLevel"}</Link>{" SwipeSensitivityLevelValue { get; set; }"}</code> | Sensitivity preset for swipe input. |
| <Link id="m-touchlocomotionmode" /><code><Link to="/mod/game-api/types/global-c-d/directionmode">{"DirectionMode"}</Link>{" TouchLocomotionMode { get; set; }"}</code> | Direction mode for smooth locomotion on a stick touch. |
| <Link id="m-usegrabpositionmemory" /><code>{"bool UseGrabPositionMemory { get; set; }"}</code> | Whether grabbing from a dock remembers how the item was last held. |
| <Link id="m-viewfinderresolutionscale" /><code>{"float ViewFinderResolutionScale { get; set; }"}</code> | Resolution scale for the camera's viewfinder (default 0.2). |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | Returns a shallow copy of the settings (`MemberwiseClone`). |

</details>

## Used in

Members of other types that take, return or hold a `GameSettings`:

[`SettingsManager.gameConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-gameconfig), [`SettingsManager.GameConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-gameconfig-2), [`ControllerDPad.CheckForSwipeSensitivityLevelInSettings`](/mod/game-api/types/global-c-d/controllerdpad#m-checkforswipesensitivitylevelinsettings), [`PlayerAdjustableHeightFixerSettings.UpdateSettings`](/mod/game-api/types/global-p/playeradjustableheightfixersettings#m-updatesettings), [`PlayerController.UpdateCameraCulling`](/mod/game-api/types/global-p/playercontroller#m-updatecameraculling).
