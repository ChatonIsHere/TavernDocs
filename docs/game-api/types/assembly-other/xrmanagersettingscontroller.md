---
title: "XRManagerSettingsController"
description: "class XRManagerSettingsController in Alta.XRManagement."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XRManagerSettingsController

A **class** in `Alta.XRManagement`, `Alta.XRLoaders`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IXRManagerSettingsController`](/game-api/types/assembly-other/ixrmanagersettingscontroller), `IInitializable`
- **Attributes** `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"XRManagerSettingsController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private readonly Logger logger"}</code> |  |
| <Link id="m-xrmanager" /><code>{"private XRManagerSettings xrManager"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getxrmanager" /><code>{"async Task<XRManagerSettings> GetXRManager()"}</code> |  |
| <Link id="m-initialize" /><code>{"async void Initialize()"}</code> |  |
| <Link id="m-initializexrmanager" /><code>{"async Task InitializeXRManager()"}</code> |  |
| <Link id="m-tryshutdownxrmanager" /><code>{"async Task TryShutdownXRManager()"}</code> |  |
| <Link id="m-activeloadershutdown" /><code>{"private void ActiveLoaderShutdown(XRManagerSettings manager)"}</code> |  |
| <Link id="m-initializexrmanager-2" /><code>{"private async Task InitializeXrManager()"}</code> |  |
| <Link id="m-logxrmanagersettings" /><code>{"private void LogXRManagerSettings(XRManagerSettings manager)"}</code> |  |
| <Link id="m-shutdownxrmanager" /><code>{"private async Task ShutdownXrManager()"}</code> |  |
