---
title: "WindowsXRLoaderSettings"
description: "Global settings for the Windows build's XR loaders: which XR mode to use and the OpenXR and OpenVR loaders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsXRLoaderSettings

A **class** in `Alta.XRManagement.Windows`, `Alta.XRLoaders`.

Global settings for the Windows build's XR loaders: which XR mode to use and the OpenXR and OpenVR loaders. Read by `WindowsXRLoaderInitializer`. Client only.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings<WindowsXRLoaderSettings>`](/mod/game-api/types/assembly-other/globalsettings-t), [`IWindowsXRLoaderSettings`](/mod/game-api/types/assembly-other/iwindowsxrloadersettings)
- **Derived types** [`WindowsXRLoaderSettings`](/mod/game-api/types/assembly-other/windowsxrloadersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindowsXRLoaderSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-openxrloader" /><code>{"private OpenXRLoader openXrLoader"}</code> | <span className="api-desc">Backing field for `OpenXrLoader`.</span> |
| <Link id="m-valveopenvrloader" /><code>{"private OpenVRLoader valveOpenVrLoader"}</code> | <span className="api-desc">Backing field for `ValveOpenVrLoader`.</span> |
| <Link id="m-xrmode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" xrMode"}</code> | <span className="api-desc">Backing field for `XrMode`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-openxrloader-2" /><code>{"OpenXRLoader OpenXrLoader { get; }"}</code> | <span className="api-desc">Loader used for OpenXR mode.</span> |
| <Link id="m-valveopenvrloader-2" /><code>{"OpenVRLoader ValveOpenVrLoader { get; }"}</code> | <span className="api-desc">Loader used for Valve (OpenVR) mode.</span> |
| <Link id="m-xrmode-2" /><code><Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" XrMode { get; }"}</code> | <span className="api-desc">Which XR runtime to start: none, OpenXR or Valve.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setxrmode" /><code>{"void SetXrMode("}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode)"}</code> | <span className="api-desc">Changes the XR mode in memory.</span> |

## Used in

Members of other types that take, return or hold a `WindowsXRLoaderSettings`:

<div className="api-used-in">

[`WindowsGlobalSettingsInstaller.windowsXRSettings`](/mod/game-api/types/assembly-other/windowsglobalsettingsinstaller#m-windowsxrsettings).

</div>
