---
title: "FfvSource"
description: "Flags for reasons to turn on fixed foveated rendering on the device (movement, hurt, low performance, character baking)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FfvSource

An **enum** in `Alta.Platform`, no namespace.

Flags for reasons to turn on fixed foveated rendering on the device (movement, hurt, low performance, character baking). Passed to `SetFfvSource` on the platform device.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-characterpaking" /><code>{"CharacterPaking = 8"}</code> |
| <Link id="m-hurt" /><code>{"Hurt = 2"}</code> |
| <Link id="m-lowperformance" /><code>{"LowPerformance = 4"}</code> |
| <Link id="m-movement" /><code>{"Movement = 1"}</code> |

## Used in

Members of other types that take, return or hold a `FfvSource`:

[`FakePlatformDevice.SetFfvSource`](/game-api/types/assembly-other/fakeplatformdevice#m-setffvsource), [`IPlatformDevice.SetFfvSource`](/game-api/types/assembly-other/iplatformdevice#m-setffvsource).
