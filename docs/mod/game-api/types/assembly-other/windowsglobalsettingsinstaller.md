---
title: "WindowsGlobalSettingsInstaller"
description: "Windows installer asset that keeps the XR general settings referenced and binds the Windows XR loader settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsGlobalSettingsInstaller

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Windows installer asset that keeps the XR general settings referenced and binds the Windows XR loader settings.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`PlatformSpecificScriptableObjectInstaller`](/mod/game-api/types/assembly-other/platformspecificscriptableobjectinstaller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindowsGlobalSettingsInstaller()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly ILogger logger"}</code> | Class logger. |
| <Link id="m-windowsxrsettings" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/windowsxrloadersettings">{"WindowsXRLoaderSettings"}</Link>{" windowsXRSettings"}</code> | Windows XR loader settings bound into the container. |
| <Link id="m-xrgeneralsettings" /><code>{"private XRGeneralSettings xrGeneralSettings"}</code> | XR general settings, referenced so they are included. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"override void Install(IContainerBuilder builder)"}</code> | Logs the XR settings (keeping them referenced in the build) and binds `IWindowsXRLoaderSettings`. |
