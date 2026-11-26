---
title: "TownshipXRMode"
description: "Which XR backend the game runs with: OpenXR, Valve (SteamVR) or no VR."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TownshipXRMode

An **enum** in `Alta.XRManagement`, `Alta.XRLoaders`.

Which XR backend the game runs with: OpenXR, Valve (SteamVR) or no VR.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Values

| Member |
| --- |
| <Link id="m-novr" /><code>{"NoVR = 2"}</code> |
| <Link id="m-openxr" /><code>{"OpenXR = 0"}</code> |
| <Link id="m-valve" /><code>{"Valve = 1"}</code> |

## Used in

Members of other types that take, return or hold a `TownshipXRMode`:

[`IWindowsXRLoaderSettings.XrMode`](/mod/game-api/types/assembly-other/iwindowsxrloadersettings#m-xrmode), [`IXRSupportSystem.IsValid`](/mod/game-api/types/assembly-other/ixrsupportsystem#m-isvalid), [`SteamOpenVrInitializer.IsValid`](/mod/game-api/types/assembly-other/steamopenvrinitializer#m-isvalid), [`WindowsXRLoaderInitializer.ConfigureRuntime`](/mod/game-api/types/assembly-other/windowsxrloaderinitializer#m-configureruntime), [`WindowsXRLoaderInitializer.mode`](/mod/game-api/types/assembly-other/windowsxrloaderinitializer#m-mode), [`WindowsXRLoaderSettings.SetXrMode`](/mod/game-api/types/assembly-other/windowsxrloadersettings#m-setxrmode), [`WindowsXRLoaderSettings.xrMode`](/mod/game-api/types/assembly-other/windowsxrloadersettings#m-xrmode), [`WindowsXRLoaderSettings.XrMode`](/mod/game-api/types/assembly-other/windowsxrloadersettings#m-xrmode-2), [`XRUtility.DefaultMode`](/mod/game-api/types/assembly-other/xrutility#m-defaultmode), [`XRUtility.GetCommandMode`](/mod/game-api/types/assembly-other/xrutility#m-getcommandmode), [`XRUtility.GetCommandXRMode`](/mod/game-api/types/assembly-other/xrutility#m-getcommandxrmode).
