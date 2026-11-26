---
title: "ISortedLight"
description: "A PlatformLight with a position and distance, used by the lights controllers to pick the nearest lights."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISortedLight

An **internal interface** in `Root.Township`, `Alta.Lighting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A `PlatformLight` with a position and distance, used by the lights controllers to pick the nearest lights.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`AndroidLightsController.SortedLight`](/game-api/types/alta-world/androidlightscontroller-sortedlight), [`PCLightsController.PCSortedLight`](/game-api/types/alta-world/pclightscontroller-pcsortedlight)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance { get; }"}</code> | Squared distance from the camera; lower sorts first. |
| <Link id="m-light" /><code><Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" Light { get; }"}</code> | The light. |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | The light's position. |
