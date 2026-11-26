---
title: "PCLightsController.PCSortedLight"
description: "A light with its distance from the player's head, used on PC to pick which lights render per pixel when there are too many."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PCLightsController.PCSortedLight

A **private struct** in `Root.Township`, `Alta.Lighting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A light with its distance from the player's head, used on PC to pick which lights render per pixel when there are too many.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`PCLightsController`](/mod/game-api/types/alta-world/pclightscontroller)
- **Inherits or implements** [`ISortedLight`](/mod/game-api/types/alta-world/isortedlight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PCSortedLight("}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light, Vector3 cameraPosition)"}</code> | <span className="api-desc">Creates a `PCLightsController.PCSortedLight` from `light` and `cameraPosition`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance { get; }"}</code> | <span className="api-desc">Squared distance from the camera, or 100 for lights marked not important.</span> |
| <Link id="m-light" /><code><Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" Light { get; }"}</code> | <span className="api-desc">The light.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">The light's world position.</span> |

## Used in

Members of other types that take, return or hold a `PCSortedLight`:

<div className="api-used-in">

[`PCLightsController.sorter`](/mod/game-api/types/alta-world/pclightscontroller#m-sorter).

</div>
