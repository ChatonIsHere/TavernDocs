---
title: "WindowsXRLoaderInitializer"
description: "class WindowsXRLoaderInitializer in Alta.XRManagement.Windows."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsXRLoaderInitializer

A **class** in `Alta.XRManagement.Windows`, `Alta.XRLoaders`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IInitializable`, [`IXRLoaderInitializer`](/game-api/types/assembly-other/ixrloaderinitializer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WindowsXRLoaderInitializer("}<Link to="/game-api/types/assembly-other/iwindowsxrloadersettings">{"IWindowsXRLoaderSettings"}</Link>{" settings, "}<Link to="/game-api/types/assembly-other/ixrmanagersettingscontroller">{"IXRManagerSettingsController"}</Link>{" xrManagerController, IEnumerable<"}<Link to="/game-api/types/assembly-other/ixrsupportsystem">{"IXRSupportSystem"}</Link>{"> xrSupportSystems)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-mode" /><code>{"private "}<Link to="/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode"}</code> |
| <Link id="m-settings" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/iwindowsxrloadersettings">{"IWindowsXRLoaderSettings"}</Link>{" settings"}</code> |
| <Link id="m-xrmanagercontroller" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ixrmanagersettingscontroller">{"IXRManagerSettingsController"}</Link>{" xrManagerController"}</code> |
| <Link id="m-xrsupportsystems" /><code>{"private readonly IEnumerable<"}<Link to="/game-api/types/assembly-other/ixrsupportsystem">{"IXRSupportSystem"}</Link>{"> xrSupportSystems"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-forcenostripping" /><code>{"static void __ForceNoStripping()"}</code> |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-configurenovr" /><code>{"private void ConfigureNoVR(XRManagerSettings manager, bool hasValve, bool hasOpenXr)"}</code> |
| <Link id="m-configureopenxr" /><code>{"private void ConfigureOpenXr(XRManagerSettings manager, bool hasValve, bool hasOpenXr)"}</code> |
| <Link id="m-configureruntime" /><code>{"private void ConfigureRuntime(XRManagerSettings manager, "}<Link to="/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode)"}</code> |
| <Link id="m-configurevalve" /><code>{"private void ConfigureValve(XRManagerSettings manager, bool hasOpenXr, bool hasValve)"}</code> |
| <Link id="m-initializewindowsloaders" /><code>{"private async Task InitializeWindowsLoaders(XRManagerSettings manager)"}</code> |
| <Link id="m-tryremoveloader" /><code>{"private void TryRemoveLoader(XRManagerSettings manager, string loaderName)"}</code> |

</details>
