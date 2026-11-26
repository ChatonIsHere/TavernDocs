---
title: "IXRSupportSystem"
description: "Client (Windows): extra setup for one XR mode, run before XR starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IXRSupportSystem

An **interface** in `Alta.XRManagement.Windows`, `Alta.XRLoaders`.

Client (Windows): extra setup for one XR mode, run before XR starts. `SteamOpenVrInitializer` is one; the Windows loader initializer runs each one that is valid for the mode.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`SteamOpenVrInitializer`](/mod/game-api/types/assembly-other/steamopenvrinitializer)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid("}<Link to="/mod/game-api/types/assembly-other/townshipxrmode">{"TownshipXRMode"}</Link>{" mode)"}</code> | <span className="api-desc">Whether this system applies to the given XR mode.</span> |
| <Link id="m-preconfigureinitialize" /><code>{"void PreconfigureInitialize()"}</code> | <span className="api-desc">Prepares the system before the XR loader starts, such as creating the SteamVR instances.</span> |

## Used in

Members of other types that take, return or hold a `IXRSupportSystem`:

<div className="api-used-in">

[`WindowsXRLoaderInitializer.WindowsXRLoaderInitializer`](/mod/game-api/types/assembly-other/windowsxrloaderinitializer#m-ctor), [`WindowsXRLoaderInitializer.xrSupportSystems`](/mod/game-api/types/assembly-other/windowsxrloaderinitializer#m-xrsupportsystems).

</div>
