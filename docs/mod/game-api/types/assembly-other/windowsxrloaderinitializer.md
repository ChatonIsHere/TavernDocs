---
title: "WindowsXRLoaderInitializer"
description: "PC startup service (VContainer) that picks OpenXR, Valve OpenVR or no VR, swaps the XR loaders to match, runs support systems and starts the XR manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsXRLoaderInitializer

A **class** in `Alta.XRManagement.Windows`, `Alta.XRLoaders`.

PC startup service (VContainer) that picks OpenXR, Valve OpenVR or no VR, swaps the XR loaders to match, runs support systems and starts the XR manager.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IInitializable`, [`IXRLoaderInitializer`](/mod/game-api/types/assembly-other/ixrloaderinitializer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindowsXRLoaderInitializer("}<Link to="/mod/game-api/types/assembly-other/iwindowsxrloadersettings">{"IWindowsXRLoaderSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/assembly-other/ixrmanagersettingscontroller">{"IXRManagerSettingsController"}</Link>{" xrManagerController, IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/ixrsupportsystem">{"IXRSupportSystem"}</Link>{"> xrSupportSystems)"}</code> | Creates a `WindowsXRLoaderInitializer` from `settings`, `xrManagerController` and `xrSupportSystems`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode"}</code> | The XR mode picked at startup. |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/iwindowsxrloadersettings">{"IWindowsXRLoaderSettings"}</Link>{" settings"}</code> | Injected settings with the editor XR mode and loader assets. |
| <Link id="m-xrmanagercontroller" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ixrmanagersettingscontroller">{"IXRManagerSettingsController"}</Link>{" xrManagerController"}</code> | Injected controller that starts and stops the XR manager. |
| <Link id="m-xrsupportsystems" /><code>{"private readonly IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/ixrsupportsystem">{"IXRSupportSystem"}</Link>{"> xrSupportSystems"}</code> | Injected support systems; those valid for the mode are preconfigured before start. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenostripping" /><code>{"static void __ForceNoStripping()"}</code> | Never called. References SteamVR and OpenVR helpers so the build does not strip them. |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> | Waits for the XR manager, then sets up the loaders. Called by VContainer at startup. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-configurenovr" /><code>{"private void ConfigureNoVR(XRManagerSettings manager, bool hasValve, bool hasOpenXr)"}</code> | Removes the OpenVR and OpenXR loaders if present. |
| <Link id="m-configureopenxr" /><code>{"private void ConfigureOpenXr(XRManagerSettings manager, bool hasValve, bool hasOpenXr)"}</code> | Removes the OpenVR loader and adds the OpenXR loader if missing. |
| <Link id="m-configureruntime" /><code>{"private void ConfigureRuntime(XRManagerSettings manager, "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode)"}</code> | Applies the loader set for the mode, then initializes the loader for any VR mode. |
| <Link id="m-configurevalve" /><code>{"private void ConfigureValve(XRManagerSettings manager, bool hasOpenXr, bool hasValve)"}</code> | Removes the OpenXR loader and adds the OpenVR loader if missing. Logs an error when the add succeeds, the check is inverted. |
| <Link id="m-initializewindowsloaders" /><code>{"private async Task InitializeWindowsLoaders(XRManagerSettings manager)"}</code> | Shuts down any running XR, reads the mode (editor setting or command line), and unless no VR, configures loaders, support systems and the manager. |
| <Link id="m-tryremoveloader" /><code>{"private void TryRemoveLoader(XRManagerSettings manager, string loaderName)"}</code> | Removes the active loader with the given type name. Throws if none matches. |

</details>
