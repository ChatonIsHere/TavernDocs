---
title: "XRManagerSettingsController"
description: "Startup service (VContainer) that finds Unity's XR manager and starts or shuts down its active loader and subsystems."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XRManagerSettingsController

A **class** in `Alta.XRManagement`, `Alta.XRLoaders`.

Startup service (VContainer) that finds Unity's XR manager and starts or shuts down its active loader and subsystems.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IXRManagerSettingsController`](/mod/game-api/types/assembly-other/ixrmanagersettingscontroller), `IInitializable`
- **Attributes** `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"XRManagerSettingsController()"}</code> | <span className="api-desc">Creates a `XRManagerSettingsController` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-xrmanager" /><code>{"private XRManagerSettings xrManager"}</code> | <span className="api-desc">The cached XR manager.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getxrmanager" /><code>{"async Task<XRManagerSettings> GetXRManager()"}</code> | <span className="api-desc">Waits, polling every 100 ms, until `XRGeneralSettings.Instance.Manager` exists, then caches and returns it.</span> |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> | <span className="api-desc">Gets the XR manager and logs its state. Called by VContainer at startup.</span> |
| <Link id="m-initializexrmanager" /><code>{"async Task InitializeXRManager()"}</code> | <span className="api-desc">Gets the XR manager and starts its active loader and subsystems.</span> |
| <Link id="m-tryshutdownxrmanager" /><code>{"async Task TryShutdownXRManager()"}</code> | <span className="api-desc">Shuts the XR manager down if one has been found.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeloadershutdown" /><code>{"private void ActiveLoaderShutdown(XRManagerSettings manager)"}</code> | <span className="api-desc">Stops and deinitializes the active loader, logging failures.</span> |
| <Link id="m-initializexrmanager-2" /><code>{"private async Task InitializeXrManager()"}</code> | <span className="api-desc">Initializes and starts the active loader, hooks shutdown on quit, then starts subsystems. Throws if the loader fails to initialize.</span> |
| <Link id="m-logxrmanagersettings" /><code>{"private void LogXRManagerSettings(XRManagerSettings manager)"}</code> | <span className="api-desc">Logs the manager, whether init is complete, and the active loader.</span> |
| <Link id="m-shutdownxrmanager" /><code>{"private async Task ShutdownXrManager()"}</code> | <span className="api-desc">Stops subsystems and deinitializes the loader if running, then shuts down any active loader.</span> |

</details>
