---
title: "IWindowsXRLoaderSettings"
description: "Client (Windows): settings the XR loader initializer reads to pick between OpenXR and SteamVR (OpenVR) loaders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IWindowsXRLoaderSettings

An **interface** in `Alta.XRManagement.Windows`, `Alta.XRLoaders`.

Client (Windows): settings the XR loader initializer reads to pick between OpenXR and SteamVR (OpenVR) loaders.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`WindowsXRLoaderSettings`](/mod/game-api/types/assembly-other/windowsxrloadersettings)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-openxrloader" /><code>{"OpenXRLoader OpenXrLoader { get; }"}</code> | <span className="api-desc">The OpenXR loader asset added to the XR manager.</span> |
| <Link id="m-valveopenvrloader" /><code>{"OpenVRLoader ValveOpenVrLoader { get; }"}</code> | <span className="api-desc">The OpenVR loader asset added for SteamVR mode.</span> |
| <Link id="m-xrmode" /><code><Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" XrMode { get; }"}</code> | <span className="api-desc">XR mode to use in the editor. Builds read the mode from the command line instead.</span> |

## Used in

Members of other types that take, return or hold a `IWindowsXRLoaderSettings`:

<div className="api-used-in">

[`WindowsXRLoaderInitializer.settings`](/mod/game-api/types/assembly-other/windowsxrloaderinitializer#m-settings), [`WindowsXRLoaderInitializer.WindowsXRLoaderInitializer`](/mod/game-api/types/assembly-other/windowsxrloaderinitializer#m-ctor).

</div>
