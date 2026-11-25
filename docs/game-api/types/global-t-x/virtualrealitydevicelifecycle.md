---
title: "VirtualRealityDeviceLifecycle"
description: "abstract class VirtualRealityDeviceLifecycle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualRealityDeviceLifecycle

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`DeviceLifecycle`](/game-api/types/global-c-d/devicelifecycle)
- **Derived types** [`OpenXRDeviceLifecycle`](/game-api/types/global-m-o/openxrdevicelifecycle), [`SteamVRDeviceLifecycle`](/game-api/types/global-s/steamvrdevicelifecycle)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VirtualRealityDeviceLifecycle("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-poses" /><code>{"protected List<Pose> poses"}</code> |

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maximumadaptiveresolution" /><code>{"private float maximumAdaptiveResolution"}</code> |
| <Link id="m-minimumadaptiveresolution" /><code>{"private float minimumAdaptiveResolution"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isadaptiveresolutionenabled" /><code>{"bool IsAdaptiveResolutionEnabled { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-update" /><code>{"override void Update()"}</code> |
| <Link id="m-calculaterecommendedresolutionscale" /><code>{"protected virtual float CalculateRecommendedResolutionScale(float minimum, float maximum)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-updateadaptiveresolution" /><code>{"private void UpdateAdaptiveResolution()"}</code> |

</details>
