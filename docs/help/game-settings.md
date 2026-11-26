---
title: Game settings
description: What each setting in GameConfiguration.json does, the file the launcher's Game Settings window edits.
summary:
    - "Your in-game settings are in `GameConfiguration.json`."
    - 'It''s usually in `%APPDATA%\\A Township Tale`.'
    - "The launcher's **Game Settings** window edits this file."
    - "Close the game before you edit it by hand."
    - "A key you leave out keeps its default."
---

# Game settings

Your in-game settings (movement, turning, comfort, camera and more) are in `GameConfiguration.json`, usually in `%APPDATA%\A Township Tale`. Some installs have it in `%USERPROFILE%\AppData\LocalLow\Alta\A Township Tale` instead. See [Where files live](where-files-live.md).

The launcher's **Game Settings** window edits this file. You can also edit it by hand in any text editor.

**Close the game first.** The game writes the file when you change a setting in the game, so it can write over your edit. A key you leave out keeps its default.

## Moving

| Key | Default | What it does |
| --- | --- | --- |
| `IsUsingSmoothLocomotion` | `true` | Walk with the thumbstick. |
| `SmoothLocomotionActiveHand` | `Left` | Which hand's stick moves you: `Left` or `Right`. |
| `TouchLocomotionMode` | `Head` | Which way you walk when you touch the stick: `Head`, `Controller`, `LockedHead` or `LockedController`. |
| `PressLocomotionMode` | `Head` | The same, when you press the stick in. |
| `SmoothLocomotionRunMode` | `Toggle` | Running: `Toggle` (press to start and stop) or `Hold` (run while held). |
| `IsInvertingSmoothWalkAndRun` | `false` | Run by default, and walk when the run button is used. |
| `IsBendingBodyOnLocalBody` | `true` | Your own body bends with your movement. |

## Turning

| Key | Default | What it does |
| --- | --- | --- |
| `SnapRotation` | `Snap` | How you turn: `Disabled`, `Snap` (jumps) or `Smooth`. |
| `SmoothRotationSpeed` | `Medium` | Smooth turning speed: `Slow`, `Medium`, `Fast` or `SuperFast`. |
| `SnapRotationMode` | `Swipe` | Snap turns with a `Swipe` or a `Press` of the stick. |
| `IsSmoothRotationOnSwipe` | `Centered` | `Centered` or `Relative`. How a swipe turns you with smooth turning. |
| `SwipeSensitivityLevelValue` | `Medium` | How much swipe it takes: `Low`, `Medium` or `High`. |

## Comfort

| Key | Default | What it does |
| --- | --- | --- |
| `MovementComfortStrength` | `Disabled` | An effect on your view while you move, to help with motion sickness: `Disabled`, `Low`, `Medium` or `High`. |
| `MovementComfortSpeed` | `Immediate` | How quickly that effect comes in: `Immediate` or `Delayed`. |

## Hands and grabbing

| Key | Default | What it does |
| --- | --- | --- |
| `HasGrabAssist` | `true` | Helps your hand find the thing you reach for. |
| `UseGrabPositionMemory` | `true` | Items taken from a holster or dock go back into your hand the way you last held them. |
| `IsUsingFreeGestureMode` | `true` | On controllers that track your fingers, your hand follows your fingers. |
| `HasHapticsWhenToggleHolding` | `true` | Vibration while you toggle-hold something. |
| `HapticsStrengthMultiplier` | `1` | How strong vibration is, times this. `0` turns it off. |

## Accessibility

| Key | Default | What it does |
| --- | --- | --- |
| `HasAccessibilityFeatures` | `true` | Turns on the accessibility features: the height assist below, and opening your docks by holding both quick-access buttons. If it's off, the game asks you about it once. |
| `HeightAssistValue` | `-1` | Height assist level, picked in the game. `-1` means not set yet, and the game picks no change. Only used with `HasAccessibilityFeatures` on. |
| `AccessibleDocksAreToggle` | `true` | Both quick-access buttons open and close your docks. Off, they stay open only while you hold the buttons. |

## Camera and screenshots

| Key | Default | What it does |
| --- | --- | --- |
| `CameraPhotoResolutionScale` | `1` | Resolution of photos from the hand camera, times this. |
| `StreamingResolutionScale` | `1` | Resolution of the hand camera when it's streaming, times this. |
| `ViewFinderResolutionScale` | `0.2` | Resolution of the hand camera's viewfinder, times this. Higher is sharper and costs more. |
| `RenderOneCameraFromOtherPlayers` | `true` | Draw what another player's camera sees, for one camera at a time. |
| `ScreenshotDockHideOptions` | `Never` | Hide dock outlines in photos: `Never`, `WhenEmpty` or `Always`. |

## Other

| Key | Default | What it does |
| --- | --- | --- |
| `PlayerNamesToggle` | `true` | Name tags stay up when you show them. Off, they fade after a while. |
| `DefaultCullingDistance` | `100` | How far away, in metres, things on the game's default layer are still drawn. Lower can help on a slow PC. |
| `SelfStepVolume` | `1` | Volume of your own footsteps. |
| `CanSellSkillsWithChildren` | `false` | Lets you sell a skill that skills you own depend on. |
| `LogSettingsPath` | `""` | A different logging config file. Leave it empty. |
| `mods_directory_path` | none | A folder for Alta's old developer scripts. Nothing to do with MelonLoader mods. Leave it out. |
| `ApiEndpoint` | `Production` | Which Alta web service the game talks to. Leave it as `Production`. |
| `HasAmbientOcclusionEnabled` | `false` | Not used by this version of the game. |
| `AudioFXVolumeMultiplier` | `1` | Not used by this version of the game. 0 to 2. |
| `PixelLightCount` | `5` | Not used by this version of the game. 1 to 8. |

"Not used by this version of the game" means the game keeps the key but nothing in the game reads it, so changing it does nothing.
