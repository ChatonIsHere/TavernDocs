---
title: "PlatformObjects.PlatformObjectSetup"
description: "A list of GameObjects turned on or off at bake time depending on the runtime platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformObjects.PlatformObjectSetup

A **class** in `Root.Township`, no namespace.

A list of GameObjects turned on or off at bake time depending on the runtime platform.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlatformObjects`](/game-api/types/global-p/platformobjects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformObjectSetup()"}</code> | Creates a `PlatformObjects.PlatformObjectSetup` from `runtime` and `targets`. |
| <Link id="m-ctor-2" /><code>{"PlatformObjectSetup("}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime, List<GameObject> targets)"}</code> | Creates a `PlatformObjects.PlatformObjectSetup` from `runtime` and `targets`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultisinactive" /><code>{"private bool defaultIsInactive"}</code> | If true, targets start inactive even on a matching platform. |
| <Link id="m-iskeepingwhennotvalid" /><code>{"private bool isKeepingWhenNotValid"}</code> | Serialized flag that nothing in this class reads. |
| <Link id="m-targetplatforms" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatforms"}</code> | The platforms the targets are meant for. Defaults to Windows. |
| <Link id="m-targets" /><code>{"private GameObject[] targets"}</code> | The GameObjects to turn on or off. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | Runs `ProcessActiveTargets` if the current platform is one of `targetPlatforms`, otherwise `ProcessInactiveTargets`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processactivetargets" /><code>{"private void ProcessActiveTargets()"}</code> | Sets each target active, or inactive if `defaultIsInactive` is set. |
| <Link id="m-processinactivetargets" /><code>{"private void ProcessInactiveTargets()"}</code> | Sets each target inactive. |

</details>

## Used in

Members of other types that take, return or hold a `PlatformObjectSetup`:

[`PlatformObjects.platformObjects`](/game-api/types/global-p/platformobjects#m-platformobjects).
