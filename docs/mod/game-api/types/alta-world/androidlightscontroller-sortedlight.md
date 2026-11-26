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
| <Link id="m-ctor" /><code>{"SortedLight("}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light, Vector3 cameraPosition)"}</code> | Creates an `AndroidLightsController.SortedLight` from `light` and `cameraPosition`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-atten" /><code>{"float Atten { get; }"}</code> | Shader attenuation: 25 over range squared, or a huge value for a zero-range light. |
| <Link id="m-distance" /><code>{"float Distance { get; }"}</code> | Squared distance from the camera, used for sorting. |
| <Link id="m-light" /><code><Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" Light { get; }"}</code> | The light. |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | The light's position. |
| <Link id="m-shadercolor" /><code>{"Vector4 ShaderColor { get; }"}</code> | The light's colour times twice its intensity, as sent to the shader. |

## Used in

Members of other types that take, return or hold a `SortedLight`:

[`AndroidLightsController.sorter`](/mod/game-api/types/alta-world/androidlightscontroller#m-sorter).
