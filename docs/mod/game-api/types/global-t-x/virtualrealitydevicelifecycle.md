---
title: "VirtualRealityDeviceLifecycle"
description: "Base DeviceLifecycle for VR headsets (SteamVRDeviceLifecycle and OpenXRDeviceLifecycle build on it), adding adaptive render resolution."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualRealityDeviceLifecycle

An **abstract class** in `Root.Township`, the global namespace.

Base `DeviceLifecycle` for VR headsets (`SteamVRDeviceLifecycle` and `OpenXRDeviceLifecycle` build on it), adding adaptive render resolution. Client only.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`DeviceLifecycle`](/mod/game-api/types/global-c-d/devicelifecycle)
- **Derived types** [`OpenXRDeviceLifecycle`](/mod/game-api/types/global-m-o/openxrdevicelifecycle), [`SteamVRDeviceLifecycle`](/mod/game-api/types/global-s/steamvrdevicelifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualRealityDeviceLifecycle("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Creates a `VirtualRealityDeviceLifecycle` from `player` and `platformDevice`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-poses" /><code>{"protected List<Pose> poses"}</code> | Tracked poses list for subclasses. `SteamVRDeviceLifecycle` hides it with its own list. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-maximumadaptiveresolution" /><code>{"private float maximumAdaptiveResolution"}</code> | Highest render scale (1.0), raised if the eye texture scale is already higher. |
| <Link id="m-minimumadaptiveresolution" /><code>{"private float minimumAdaptiveResolution"}</code> | Lowest render scale allowed (0.7). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isadaptiveresolutionenabled" /><code>{"bool IsAdaptiveResolutionEnabled { get; private set; }"}</code> | Turns on adaptive viewport scaling each frame. Its setter is private and never called, so it's always false. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Runs `UpdateAdaptiveResolution` each frame when adaptive resolution is on. |
| <Link id="m-calculaterecommendedresolutionscale" /><code>{"protected virtual float CalculateRecommendedResolutionScale(float minimum, float maximum)"}</code> | Override to pick a render scale between the minimum and maximum. The base returns the maximum. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateadaptiveresolution" /><code>{"private void UpdateAdaptiveResolution()"}</code> | Raises the eye texture scale to the maximum, then sets `XRSettings.renderViewportScale` from the recommended scale. |

</details>
