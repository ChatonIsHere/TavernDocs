---
title: "IXRManagerSettingsController"
description: "Client: starts and stops Unity's XR manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IXRManagerSettingsController

An **interface** in `Alta.XRManagement`, `Alta.XRLoaders`.

Client: starts and stops Unity's XR manager. Implemented by `XRManagerSettingsController`, injected through VContainer.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`XRManagerSettingsController`](/mod/game-api/types/assembly-other/xrmanagersettingscontroller)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getxrmanager" /><code>{"Task<XRManagerSettings> GetXRManager()"}</code> | <span className="api-desc">Waits until Unity's XR general settings and manager exist, then returns the manager.</span> |
| <Link id="m-initializexrmanager" /><code>{"Task InitializeXRManager()"}</code> | <span className="api-desc">Initializes and starts the active XR loader and its subsystems. Throws if the loader fails to initialize.</span> |
| <Link id="m-tryshutdownxrmanager" /><code>{"Task TryShutdownXRManager()"}</code> | <span className="api-desc">Stops subsystems and deinitializes the active loader, if the manager was found.</span> |

## Used in

Members of other types that take, return or hold a `IXRManagerSettingsController`:

<div className="api-used-in">

[`WindowsXRLoaderInitializer.WindowsXRLoaderInitializer`](/mod/game-api/types/assembly-other/windowsxrloaderinitializer#m-ctor), [`WindowsXRLoaderInitializer.xrManagerController`](/mod/game-api/types/assembly-other/windowsxrloaderinitializer#m-xrmanagercontroller).

</div>
