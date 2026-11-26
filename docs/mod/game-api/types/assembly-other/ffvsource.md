---
title: "FfvSource"
description: "Flags for why a platform effect called FFV should be on: movement, hurt, low performance or character baking (probably fixed foveated rendering)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FfvSource

An **enum** in `Alta.Platform`, the global namespace.

Flags for why a platform effect called FFV should be on: movement, hurt, low performance or character baking (probably fixed foveated rendering). Passed to `IPlatformDevice.SetFfvSource`; the server's fake device ignores it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
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

<div className="api-used-in">

[`FakePlatformDevice.SetFfvSource`](/mod/game-api/types/assembly-other/fakeplatformdevice#m-setffvsource), [`IPlatformDevice.SetFfvSource`](/mod/game-api/types/assembly-other/iplatformdevice#m-setffvsource).

</div>
