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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IXRSupportSystem`](/mod/game-api/types/assembly-other/ixrsupportsystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamOpenVrInitializer()"}</code> | <span className="api-desc">Creates a `SteamOpenVrInitializer` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-steamvr" /><code>{"private SteamVR steamVR"}</code> | <span className="api-desc">Held SteamVR instance.</span> |
| <Link id="m-steamvrsettings" /><code>{"private SteamVR_Settings steamVRSettings"}</code> | <span className="api-desc">Held SteamVR settings.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid("}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode)"}</code> | <span className="api-desc">True only for `TownshipXRMode.Valve`.</span> |
| <Link id="m-preconfigureinitialize" /><code>{"void PreconfigureInitialize()"}</code> | <span className="api-desc">Reads `SteamVR_Settings.instance` and `SteamVR.instance` so SteamVR sets itself up.</span> |
