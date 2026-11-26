---
title: "PlatformObjects.PlatformObjectSetup"
description: "A list of GameObjects turned on or off at bake time depending on the runtime platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformObjects.PlatformObjectSetup

A **class** in `Root.Township`, the global namespace.

A list of GameObjects turned on or off at bake time depending on the runtime platform.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlatformObjects`](/mod/game-api/types/global-p/platformobjects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformObjectSetup()"}</code> | <span className="api-desc">Creates a `PlatformObjects.PlatformObjectSetup` from `runtime` and `targets`.</span> |
| <Link id="m-ctor-2" /><code>{"PlatformObjectSetup("}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" runtime, List<GameObject> targets)"}</code> | <span className="api-desc">Creates a `PlatformObjects.PlatformObjectSetup` from `runtime` and `targets`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultisinactive" /><code>{"private bool defaultIsInactive"}</code> | <span className="api-desc">If true, targets start inactive even on a matching platform.</span> |
| <Link id="m-iskeepingwhennotvalid" /><code>{"private bool isKeepingWhenNotValid"}</code> | <span className="api-desc">Serialized flag that nothing in this class reads.</span> |
| <Link id="m-targetplatforms" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatforms"}</code> | <span className="api-desc">The platforms the targets are meant for. Defaults to Windows.</span> |
| <Link id="m-targets" /><code>{"private GameObject[] targets"}</code> | <span className="api-desc">The GameObjects to turn on or off.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | <span className="api-desc">Runs `ProcessActiveTargets` if the current platform is one of `targetPlatforms`, otherwise `ProcessInactiveTargets`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processactivetargets" /><code>{"private void ProcessActiveTargets()"}</code> | <span className="api-desc">Sets each target active, or inactive if `defaultIsInactive` is set.</span> |
| <Link id="m-processinactivetargets" /><code>{"private void ProcessInactiveTargets()"}</code> | <span className="api-desc">Sets each target inactive.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlatformObjectSetup`:

<div className="api-used-in">

[`PlatformObjects.platformObjects`](/mod/game-api/types/global-p/platformobjects#m-platformobjects).

</div>
