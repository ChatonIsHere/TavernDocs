---
title: "AndroidLightsController"
description: "Client lights controller on Android: packs up to 8 lights into a global shader array, and uses baked fake light meshes for lights beyond the nearest 8."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AndroidLightsController

A **class** in `Root.Township`, `Alta.Lighting`.

Client lights controller on Android: packs up to 8 lights into a global shader array, and uses baked fake light meshes for lights beyond the nearest 8.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`BaseLightsController`](/game-api/types/alta-world/baselightscontroller)
- **Nested types** [`SortedLight`](/game-api/types/alta-world/androidlightscontroller-sortedlight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AndroidLightsController()"}</code> | Creates an `AndroidLightsController` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customlight" /><code>{"private static readonly int _CustomLight"}</code> | Shader property ID of the global light array. |
| <Link id="m-buffer" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{"> buffer"}</code> | Lights that didn't make the nearest 8, which get fake lights. |
| <Link id="m-empty" /><code>{"private Vector4 empty"}</code> | Colour used for unused slots. |
| <Link id="m-shaderarray" /><code>{"private Vector4[] shaderArray"}</code> | The 16 vectors sent to the shader: positions, attenuation and colours for 8 lights. |
| <Link id="m-sorter" /><code>{"private "}<Link to="/game-api/types/alta-world/lightsorter-t">{"LightSorter"}</Link>{"<"}<Link to="/game-api/types/alta-world/androidlightscontroller-sortedlight">{"AndroidLightsController.SortedLight"}</Link>{"> sorter"}</code> | Sorts lights by distance from the head. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisabled" /><code>{"protected override void OnDisabled()"}</code> | Clears the shader array when no lights are left. |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | Fills the `_CustomLight` shader array with the lights, or the 8 nearest to the player's head, and toggles fake lights and the `EIGHT_LIGHTS` keyword. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-populatearray" /><code>{"private void PopulateArray(int offset)"}</code> | Writes 4 sorted lights into the shader array from an offset and turns their fake lights off. |

</details>
