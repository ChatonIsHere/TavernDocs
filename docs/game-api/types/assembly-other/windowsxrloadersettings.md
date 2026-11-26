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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings<WindowsXRLoaderSettings>`](/game-api/types/assembly-other/globalsettings-t), [`IWindowsXRLoaderSettings`](/game-api/types/assembly-other/iwindowsxrloadersettings)
- **Derived types** [`WindowsXRLoaderSettings`](/game-api/types/assembly-other/windowsxrloadersettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WindowsXRLoaderSettings()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-openxrloader" /><code>{"private OpenXRLoader openXrLoader"}</code> | Backing field for `OpenXrLoader`. |
| <Link id="m-valveopenvrloader" /><code>{"private OpenVRLoader valveOpenVrLoader"}</code> | Backing field for `ValveOpenVrLoader`. |
| <Link id="m-xrmode" /><code>{"private "}<Link to="/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" xrMode"}</code> | Backing field for `XrMode`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-openxrloader-2" /><code>{"OpenXRLoader OpenXrLoader { get; }"}</code> | Loader used for OpenXR mode. |
| <Link id="m-valveopenvrloader-2" /><code>{"OpenVRLoader ValveOpenVrLoader { get; }"}</code> | Loader used for Valve (OpenVR) mode. |
| <Link id="m-xrmode-2" /><code><Link to="/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" XrMode { get; }"}</code> | Which XR runtime to start: none, OpenXR or Valve. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setxrmode" /><code>{"void SetXrMode("}<Link to="/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode)"}</code> | Changes the XR mode in memory. |

## Used in

Members of other types that take, return or hold a `WindowsXRLoaderSettings`:

[`WindowsGlobalSettingsInstaller.windowsXRSettings`](/game-api/types/assembly-other/windowsglobalsettingsinstaller#m-windowsxrsettings).
