---
title: "SteamOpenVrInitializer"
description: "XR support system for Valve OpenVR mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamOpenVrInitializer

A **class** in `Alta.XRManagement.Windows`, `Alta.XRLoaders`.

XR support system for Valve OpenVR mode. Touches the SteamVR settings and instance before the XR manager starts.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IXRSupportSystem`](/game-api/types/assembly-other/ixrsupportsystem)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SteamOpenVrInitializer()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-steamvr" /><code>{"private SteamVR steamVR"}</code> | Held SteamVR instance. |
| <Link id="m-steamvrsettings" /><code>{"private SteamVR_Settings steamVRSettings"}</code> | Held SteamVR settings. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid("}<Link to="/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode)"}</code> | True only for `TownshipXRMode.Valve`. |
| <Link id="m-preconfigureinitialize" /><code>{"void PreconfigureInitialize()"}</code> | Reads `SteamVR_Settings.instance` and `SteamVR.instance` so SteamVR sets itself up. |
