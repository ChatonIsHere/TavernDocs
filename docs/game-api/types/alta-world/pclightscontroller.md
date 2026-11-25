---
title: "PCLightsController"
description: "class PCLightsController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PCLightsController

A **class** in `Root.Township`, `Alta.Lighting`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`BaseLightsController`](/game-api/types/alta-world/baselightscontroller)
- **Nested types** [`PCSortedLight`](/game-api/types/alta-world/pclightscontroller-pcsortedlight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PCLightsController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-nextupdate" /><code>{"private float nextUpdate"}</code> |  |
| <Link id="m-sorter" /><code>{"private "}<Link to="/game-api/types/alta-world/lightsorter-t">{"LightSorter"}</Link>{"<"}<Link to="/game-api/types/alta-world/pclightscontroller-pcsortedlight">{"PCLightsController.PCSortedLight"}</Link>{"> sorter"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlight" /><code>{"override void AddLight("}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> |  |
| <Link id="m-removelight" /><code>{"override void RemoveLight("}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> |  |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> |  |
