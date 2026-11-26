---
title: "AndroidLightsController.SortedLight"
description: "A light with its distance from the player's head, used to pick the eight nearest lights for the Android shader when there are more than eight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AndroidLightsController.SortedLight

A **private struct** in `Root.Township`, `Alta.Lighting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A light with its distance from the player's head, used to pick the eight nearest lights for the Android shader when there are more than eight.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`AndroidLightsController`](/mod/game-api/types/alta-world/androidlightscontroller)
- **Inherits or implements** [`ISortedLight`](/mod/game-api/types/alta-world/isortedlight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SortedLight("}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light, Vector3 cameraPosition)"}</code> | <span className="api-desc">Creates an `AndroidLightsController.SortedLight` from `light` and `cameraPosition`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-atten" /><code>{"float Atten { get; }"}</code> | <span className="api-desc">Shader attenuation: 25 over range squared, or a huge value for a zero-range light.</span> |
| <Link id="m-distance" /><code>{"float Distance { get; }"}</code> | <span className="api-desc">Squared distance from the camera, used for sorting.</span> |
| <Link id="m-light" /><code><Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" Light { get; }"}</code> | <span className="api-desc">The light.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">The light's position.</span> |
| <Link id="m-shadercolor" /><code>{"Vector4 ShaderColor { get; }"}</code> | <span className="api-desc">The light's colour times twice its intensity, as sent to the shader.</span> |

## Used in

Members of other types that take, return or hold a `SortedLight`:

<div className="api-used-in">

[`AndroidLightsController.sorter`](/mod/game-api/types/alta-world/androidlightscontroller#m-sorter).

</div>
