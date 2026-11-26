---
title: "PCLightsController"
description: "Client lights controller on PC: every 0.5 seconds makes the nearest lights per-pixel and the rest per-vertex when there are more than the quality setting..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PCLightsController

A **class** in `Root.Township`, `Alta.Lighting`.

Client lights controller on PC: every 0.5 seconds makes the nearest lights per-pixel and the rest per-vertex when there are more than the quality setting allows.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`BaseLightsController`](/mod/game-api/types/alta-world/baselightscontroller)
- **Nested types** [`PCSortedLight`](/mod/game-api/types/alta-world/pclightscontroller-pcsortedlight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PCLightsController()"}</code> | <span className="api-desc">Creates a `PCLightsController` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-nextupdate" /><code>{"private float nextUpdate"}</code> | <span className="api-desc">Time of the next update.</span> |
| <Link id="m-sorter" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/lightsorter-t">{"LightSorter"}</Link>{"<"}<Link to="/mod/game-api/types/alta-world/pclightscontroller-pcsortedlight">{"PCLightsController.PCSortedLight"}</Link>{"> sorter"}</code> | <span className="api-desc">Sorts lights by distance from the head.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlight" /><code>{"override void AddLight("}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> | <span className="api-desc">Enables the light's Unity `Light` and starts tracking it. Warns if it has none.</span> |
| <Link id="m-removelight" /><code>{"override void RemoveLight("}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> | <span className="api-desc">Disables the light's Unity `Light` and stops tracking it.</span> |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | <span className="api-desc">Sets render modes by distance from the head. Lights marked not important always sort as if 10 units away.</span> |
