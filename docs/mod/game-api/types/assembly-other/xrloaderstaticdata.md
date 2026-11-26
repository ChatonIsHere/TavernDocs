---
title: "XRLoaderStaticData"
description: "Type names of the Unity XR loaders the game knows about, grouped by platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XRLoaderStaticData

A **static class** in `Alta.XRManagement`, `Alta.XRLoaders`.

Type names of the Unity XR loaders the game knows about, grouped by platform.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allloadernames" /><code>{"static readonly string[] AllLoaderNames"}</code> | <span className="api-desc">All four loader type names: Oculus, Pico, OpenXR and OpenVR.</span> |
| <Link id="m-oculusloadernames" /><code>{"static readonly string[] OculusLoaderNames"}</code> | <span className="api-desc">Loaders for Oculus builds: only OpenXR.</span> |
| <Link id="m-openxrloadername" /><code>{"const string OpenXrLoaderName"}</code> | <span className="api-desc">"UnityEngine.XR.OpenXR.OpenXRLoader".</span> |
| <Link id="m-picoloadernames" /><code>{"static readonly string[] PicoLoaderNames"}</code> | <span className="api-desc">Loaders for Pico builds: the PXR loader.</span> |
| <Link id="m-valveopenvrloadername" /><code>{"const string ValveOpenVrLoaderName"}</code> | <span className="api-desc">"Unity.XR.OpenVR.OpenVRLoader".</span> |
| <Link id="m-windowsloadernames" /><code>{"static readonly string[] WindowsLoaderNames"}</code> | <span className="api-desc">Loaders for PC builds: OpenXR and OpenVR.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oculusloadername" /><code>{"private const string OculusLoaderName"}</code> | <span className="api-desc">"Unity.XR.Oculus.OculusLoader".</span> |
| <Link id="m-pxrloadername" /><code>{"private const string PxrLoaderName"}</code> | <span className="api-desc">"Unity.XR.PXR.PXR_Loader".</span> |

</details>
