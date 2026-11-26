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
| <Link id="m-allloadernames" /><code>{"static readonly string[] AllLoaderNames"}</code> | All four loader type names: Oculus, Pico, OpenXR and OpenVR. |
| <Link id="m-oculusloadernames" /><code>{"static readonly string[] OculusLoaderNames"}</code> | Loaders for Oculus builds: only OpenXR. |
| <Link id="m-openxrloadername" /><code>{"const string OpenXrLoaderName"}</code> | "UnityEngine.XR.OpenXR.OpenXRLoader". |
| <Link id="m-picoloadernames" /><code>{"static readonly string[] PicoLoaderNames"}</code> | Loaders for Pico builds: the PXR loader. |
| <Link id="m-valveopenvrloadername" /><code>{"const string ValveOpenVrLoaderName"}</code> | "Unity.XR.OpenVR.OpenVRLoader". |
| <Link id="m-windowsloadernames" /><code>{"static readonly string[] WindowsLoaderNames"}</code> | Loaders for PC builds: OpenXR and OpenVR. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oculusloadername" /><code>{"private const string OculusLoaderName"}</code> | "Unity.XR.Oculus.OculusLoader". |
| <Link id="m-pxrloadername" /><code>{"private const string PxrLoaderName"}</code> | "Unity.XR.PXR.PXR_Loader". |

</details>
