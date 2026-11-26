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
| <Link id="m-ctor" /><code>{"WindowsXRLoaderInitializer("}<Link to="/mod/game-api/types/assembly-other/iwindowsxrloadersettings">{"IWindowsXRLoaderSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/assembly-other/ixrmanagersettingscontroller">{"IXRManagerSettingsController"}</Link>{" xrManagerController, IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/ixrsupportsystem">{"IXRSupportSystem"}</Link>{"> xrSupportSystems)"}</code> | <span className="api-desc">Creates a `WindowsXRLoaderInitializer` from `settings`, `xrManagerController` and `xrSupportSystems`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode"}</code> | <span className="api-desc">The XR mode picked at startup.</span> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/iwindowsxrloadersettings">{"IWindowsXRLoaderSettings"}</Link>{" settings"}</code> | <span className="api-desc">Injected settings with the editor XR mode and loader assets.</span> |
| <Link id="m-xrmanagercontroller" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ixrmanagersettingscontroller">{"IXRManagerSettingsController"}</Link>{" xrManagerController"}</code> | <span className="api-desc">Injected controller that starts and stops the XR manager.</span> |
| <Link id="m-xrsupportsystems" /><code>{"private readonly IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/ixrsupportsystem">{"IXRSupportSystem"}</Link>{"> xrSupportSystems"}</code> | <span className="api-desc">Injected support systems; those valid for the mode are preconfigured before start.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcenostripping" /><code>{"static void __ForceNoStripping()"}</code> | <span className="api-desc">Never called. References SteamVR and OpenVR helpers so the build does not strip them.</span> |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> | <span className="api-desc">Waits for the XR manager, then sets up the loaders. Called by VContainer at startup.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-configurenovr" /><code>{"private void ConfigureNoVR(XRManagerSettings manager, bool hasValve, bool hasOpenXr)"}</code> | <span className="api-desc">Removes the OpenVR and OpenXR loaders if present.</span> |
| <Link id="m-configureopenxr" /><code>{"private void ConfigureOpenXr(XRManagerSettings manager, bool hasValve, bool hasOpenXr)"}</code> | <span className="api-desc">Removes the OpenVR loader and adds the OpenXR loader if missing.</span> |
| <Link id="m-configureruntime" /><code>{"private void ConfigureRuntime(XRManagerSettings manager, "}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode)"}</code> | <span className="api-desc">Applies the loader set for the mode, then initializes the loader for any VR mode.</span> |
| <Link id="m-configurevalve" /><code>{"private void ConfigureValve(XRManagerSettings manager, bool hasOpenXr, bool hasValve)"}</code> | <span className="api-desc">Removes the OpenXR loader and adds the OpenVR loader if missing. Logs an error when the add succeeds, the check is inverted.</span> |
| <Link id="m-initializewindowsloaders" /><code>{"private async Task InitializeWindowsLoaders(XRManagerSettings manager)"}</code> | <span className="api-desc">Shuts down any running XR, reads the mode (editor setting or command line), and unless no VR, configures loaders, support systems and the manager.</span> |
| <Link id="m-tryremoveloader" /><code>{"private void TryRemoveLoader(XRManagerSettings manager, string loaderName)"}</code> | <span className="api-desc">Removes the active loader with the given type name. Throws if none matches.</span> |

</details>
