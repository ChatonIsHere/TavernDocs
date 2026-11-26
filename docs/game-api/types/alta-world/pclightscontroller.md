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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`BaseLightsController`](/game-api/types/alta-world/baselightscontroller)
- **Nested types** [`PCSortedLight`](/game-api/types/alta-world/pclightscontroller-pcsortedlight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PCLightsController()"}</code> | Creates a `PCLightsController` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-nextupdate" /><code>{"private float nextUpdate"}</code> | Time of the next update. |
| <Link id="m-sorter" /><code>{"private "}<Link to="/game-api/types/alta-world/lightsorter-t">{"LightSorter"}</Link>{"<"}<Link to="/game-api/types/alta-world/pclightscontroller-pcsortedlight">{"PCLightsController.PCSortedLight"}</Link>{"> sorter"}</code> | Sorts lights by distance from the head. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlight" /><code>{"override void AddLight("}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> | Enables the light's Unity `Light` and starts tracking it. Warns if it has none. |
| <Link id="m-removelight" /><code>{"override void RemoveLight("}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> | Disables the light's Unity `Light` and stops tracking it. |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | Sets render modes by distance from the head. Lights marked not important always sort as if 10 units away. |
