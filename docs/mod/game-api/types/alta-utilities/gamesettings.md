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
| <Link id="m-ctor" /><code>{"GameSettings()"}</code> | <span className="api-desc">Creates a `GameSettings` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accessibledocksaretoggle" /><code>{"bool AccessibleDocksAreToggle { get; set; }"}</code> | <span className="api-desc">Whether accessible docks open as a toggle rather than only while held.</span> |
| <Link id="m-apiendpoint" /><code><Link to="/mod/game-api/types/global-a-b/apiendpoint">{"ApiEndpoint"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/apiendpoint">{"ApiEndpoint"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which web API endpoint `ApiAccess` connects to.</span> |
| <Link id="m-audiofxvolumemultiplier" /><code>{"float AudioFXVolumeMultiplier { get; set; }"}</code> | <span className="api-desc">Volume multiplier for sound effects, 0 to 2.</span> |
| <Link id="m-cameraphotoresolutionscale" /><code>{"float CameraPhotoResolutionScale { get; set; }"}</code> | <span className="api-desc">Resolution scale for photos taken with the in-game camera.</span> |
| <Link id="m-cansellskillswithchildren" /><code>{"bool CanSellSkillsWithChildren { get; set; }"}</code> | <span className="api-desc">Lets a player sell back a skill that has skills unlocked after it. Off by default.</span> |
| <Link id="m-defaultcullingdistance" /><code>{"float DefaultCullingDistance { get; set; }"}</code> | <span className="api-desc">Camera cull distance for layer 0 (default layer), applied to the player camera. Default 100.</span> |
| <Link id="m-hapticsstrengthmultiplier" /><code>{"float HapticsStrengthMultiplier { get; set; }"}</code> | <span className="api-desc">Multiplier for controller haptic strength.</span> |
| <Link id="m-hasaccessibilityfeatures" /><code>{"bool HasAccessibilityFeatures { get; set; }"}</code> | <span className="api-desc">Whether accessibility features are on. Set from the accessibility board.</span> |
| <Link id="m-hasambientocclusionenabled" /><code>{"bool HasAmbientOcclusionEnabled { get; set; }"}</code> | <span className="api-desc">Whether ambient occlusion is on.</span> |
| <Link id="m-hasgrabassist" /><code>{"bool HasGrabAssist { get; set; }"}</code> | <span className="api-desc">Whether grab assist helps the hand pick up nearby items.</span> |
| <Link id="m-hashapticswhentoggleholding" /><code>{"bool HasHapticsWhenToggleHolding { get; set; }"}</code> | <span className="api-desc">Whether docks give haptics while an item is held with toggle grip.</span> |
| <Link id="m-heightassistvalue" /><code>{"int HeightAssistValue { get; set; }"}</code> | <span className="api-desc">Saved height adjustment for the player, or -1 when not set.</span> |
| <Link id="m-isbendingbodyonlocalbody" /><code>{"bool IsBendingBodyOnLocalBody { get; set; }"}</code> | <span className="api-desc">Whether the local player's body bends with movement.</span> |
| <Link id="m-isinvertingsmoothwalkandrun" /><code>{"bool IsInvertingSmoothWalkAndRun { get; set; }"}</code> | <span className="api-desc">Swaps walk and run for smooth locomotion, so running is the default.</span> |
| <Link id="m-issmoothrotationonswipe" /><code><Link to="/mod/game-api/types/global-s/smoothrotationmode">{"SmoothRotationMode"}</Link>{" IsSmoothRotationOnSwipe { get; set; }"}</code> | <span className="api-desc">Smooth rotation mode used when swiping.</span> |
| <Link id="m-isusingfreegesturemode" /><code>{"bool IsUsingFreeGestureMode { get; set; }"}</code> | <span className="api-desc">Uses free hand gestures when the controller tracks finger skeletons.</span> |
| <Link id="m-isusingsmoothlocomotion" /><code>{"bool IsUsingSmoothLocomotion { get; set; }"}</code> | <span className="api-desc">Whether smooth locomotion is on.</span> |
| <Link id="m-logsettingspath" /><code>{"string LogSettingsPath { get; set; }"}</code> | <span className="api-desc">Path to a custom NLog config file. Empty uses the default.</span> |
| <Link id="m-modsdirectorypath" /><code>{"string ModsDirectoryPath { get; set; }"}</code> | <span className="api-desc">Folder the built-in C# script loader and debug command runner read from. Stored as `mods_directory_path`.</span> |
| <Link id="m-movementcomfortspeed" /><code><Link to="/mod/game-api/types/global-m-o/movementconfortspeed">{"MovementConfortSpeed"}</Link>{" MovementComfortSpeed { get; set; }"}</code> | <span className="api-desc">Comfort vignette speed setting.</span> |
| <Link id="m-movementcomfortstrength" /><code><Link to="/mod/game-api/types/global-m-o/movementconfortstrength">{"MovementConfortStrength"}</Link>{" MovementComfortStrength { get; set; }"}</code> | <span className="api-desc">Comfort vignette strength setting.</span> |
| <Link id="m-pixellightcount" /><code>{"int PixelLightCount { get; set; }"}</code> | <span className="api-desc">Maximum per-pixel lights, 1 to 8 (default 5).</span> |
| <Link id="m-playernamestoggle" /><code>{"bool PlayerNamesToggle { get; set; }"}</code> | <span className="api-desc">Whether player names stay shown as a toggle rather than on a timer.</span> |
| <Link id="m-presslocomotionmode" /><code><Link to="/mod/game-api/types/global-c-d/directionmode">{"DirectionMode"}</Link>{" PressLocomotionMode { get; set; }"}</code> | <span className="api-desc">Direction mode for smooth locomotion on a stick press.</span> |
| <Link id="m-renderonecamerafromotherplayers" /><code>{"bool RenderOneCameraFromOtherPlayers { get; set; }"}</code> | <span className="api-desc">Whether one hand camera held by another player is rendered for you.</span> |
| <Link id="m-screenshotdockhideoptions" /><code><Link to="/mod/game-api/types/alta-items/dockhideoptions">{"DockHideOptions"}</Link>{" ScreenshotDockHideOptions { get; set; }"}</code> | <span className="api-desc">When docks hide themselves in screenshots (never, when empty, and so on).</span> |
| <Link id="m-selfstepvolume" /><code>{"float SelfStepVolume { get; set; }"}</code> | <span className="api-desc">Volume of your own footstep sounds.</span> |
| <Link id="m-smoothlocomotionactivehand" /><code><Link to="/mod/game-api/types/global-a-b/activehandindex">{"ActiveHandIndex"}</Link>{" SmoothLocomotionActiveHand { get; set; }"}</code> | <span className="api-desc">Which hand drives smooth locomotion.</span> |
| <Link id="m-smoothlocomotionrunmode" /><code><Link to="/mod/game-api/types/global-q-r/runmode">{"RunMode"}</Link>{" SmoothLocomotionRunMode { get; set; }"}</code> | <span className="api-desc">How running is triggered in smooth locomotion.</span> |
| <Link id="m-smoothrotationspeed" /><code><Link to="/mod/game-api/types/global-s/smoothrotationspeed">{"SmoothRotationSpeed"}</Link>{" "}<Link to="/mod/game-api/types/global-s/smoothrotationspeed">{"SmoothRotationSpeed"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Speed preset for smooth turning.</span> |
| <Link id="m-snaprotation" /><code><Link to="/mod/game-api/types/global-q-r/roomrotationmode">{"RoomRotationMode"}</Link>{" SnapRotation { get; set; }"}</code> | <span className="api-desc">Room rotation mode, snap by default.</span> |
| <Link id="m-snaprotationmode" /><code><Link to="/mod/game-api/types/global-s/snaprotationmode">{"SnapRotationMode"}</Link>{" "}<Link to="/mod/game-api/types/global-s/snaprotationmode">{"SnapRotationMode"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which snap rotation style is used.</span> |
| <Link id="m-streamingresolutionscale" /><code>{"float StreamingResolutionScale { get; set; }"}</code> | <span className="api-desc">Resolution scale for the streaming camera.</span> |
| <Link id="m-swipesensitivitylevelvalue" /><code><Link to="/mod/game-api/types/global-s/swipesensitivitylevel">{"SwipeSensitivityLevel"}</Link>{" SwipeSensitivityLevelValue { get; set; }"}</code> | <span className="api-desc">Sensitivity preset for swipe input.</span> |
| <Link id="m-touchlocomotionmode" /><code><Link to="/mod/game-api/types/global-c-d/directionmode">{"DirectionMode"}</Link>{" TouchLocomotionMode { get; set; }"}</code> | <span className="api-desc">Direction mode for smooth locomotion on a stick touch.</span> |
| <Link id="m-usegrabpositionmemory" /><code>{"bool UseGrabPositionMemory { get; set; }"}</code> | <span className="api-desc">Whether grabbing from a dock remembers how the item was last held.</span> |
| <Link id="m-viewfinderresolutionscale" /><code>{"float ViewFinderResolutionScale { get; set; }"}</code> | <span className="api-desc">Resolution scale for the camera's viewfinder (default 0.2).</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | <span className="api-desc">Returns a shallow copy of the settings (`MemberwiseClone`).</span> |

</details>

## Used in

Members of other types that take, return or hold a `GameSettings`:

<div className="api-used-in">

[`SettingsManager.gameConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-gameconfig), [`SettingsManager.GameConfig`](/mod/game-api/types/alta-utilities/settingsmanager#m-gameconfig-2), [`ControllerDPad.CheckForSwipeSensitivityLevelInSettings`](/mod/game-api/types/global-c-d/controllerdpad#m-checkforswipesensitivitylevelinsettings), [`PlayerAdjustableHeightFixerSettings.UpdateSettings`](/mod/game-api/types/global-p/playeradjustableheightfixersettings#m-updatesettings), [`PlayerController.UpdateCameraCulling`](/mod/game-api/types/global-p/playercontroller#m-updatecameraculling).

</div>
