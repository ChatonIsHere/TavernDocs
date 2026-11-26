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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IXRManagerSettingsController`](/game-api/types/assembly-other/ixrmanagersettingscontroller), `IInitializable`
- **Attributes** `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"XRManagerSettingsController()"}</code> | Creates a `XRManagerSettingsController` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-xrmanager" /><code>{"private XRManagerSettings xrManager"}</code> | The cached XR manager. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getxrmanager" /><code>{"async Task<XRManagerSettings> GetXRManager()"}</code> | Waits, polling every 100 ms, until `XRGeneralSettings.Instance.Manager` exists, then caches and returns it. |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> | Gets the XR manager and logs its state. Called by VContainer at startup. |
| <Link id="m-initializexrmanager" /><code>{"async Task InitializeXRManager()"}</code> | Gets the XR manager and starts its active loader and subsystems. |
| <Link id="m-tryshutdownxrmanager" /><code>{"async Task TryShutdownXRManager()"}</code> | Shuts the XR manager down if one has been found. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeloadershutdown" /><code>{"private void ActiveLoaderShutdown(XRManagerSettings manager)"}</code> | Stops and deinitializes the active loader, logging failures. |
| <Link id="m-initializexrmanager-2" /><code>{"private async Task InitializeXrManager()"}</code> | Initializes and starts the active loader, hooks shutdown on quit, then starts subsystems. Throws if the loader fails to initialize. |
| <Link id="m-logxrmanagersettings" /><code>{"private void LogXRManagerSettings(XRManagerSettings manager)"}</code> | Logs the manager, whether init is complete, and the active loader. |
| <Link id="m-shutdownxrmanager" /><code>{"private async Task ShutdownXrManager()"}</code> | Stops subsystems and deinitializes the loader if running, then shuts down any active loader. |

</details>
