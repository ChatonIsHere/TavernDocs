---
title: "Waterfall"
description: "A waterfall in river generation, from a top river node to a bottom one, with the river paths that pass through it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Waterfall

A **class** in `Root.Township`, `Alta.Forests`.

A waterfall in river generation, from a top river node to a bottom one, with the river paths that pass through it.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Waterfall()"}</code> | Creates a `Waterfall` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-paths" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> paths"}</code> | River paths that flow over this waterfall, added with `AddPath`. Backing field for `Paths`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bottom" /><code><Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" Bottom { get; private set; }"}</code> | Bottom node. Set with `SetBottom`. |
| <Link id="m-direction" /><code>{"Vector2 Direction { get; private set; }"}</code> | Flat direction from top to bottom. |
| <Link id="m-height" /><code>{"float Height { get; private set; }"}</code> | Drop from top to bottom. |
| <Link id="m-lengthxz" /><code>{"float LengthXZ { get; private set; }"}</code> | Flat distance from top to bottom. |
| <Link id="m-paths-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> Paths { get; }"}</code> | River paths through the waterfall. |
| <Link id="m-top" /><code><Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" Top { get; set; }"}</code> | Top node. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpath" /><code>{"void AddPath("}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> | Adds a river path and links it to this waterfall. |
| <Link id="m-setbottom" /><code>{"void SetBottom("}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" bottom)"}</code> | Sets the bottom node and works out direction, flat length and height. |

## Used in

Members of other types that take, return or hold a `Waterfall`:

[`RiverGeneration.waterfalls`](/mod/game-api/types/alta-world-generation/rivergeneration#m-waterfalls), [`RiverGeneration.Waterfalls`](/mod/game-api/types/alta-world-generation/rivergeneration#m-waterfalls-2), [`RiverGeneration.WorkingWaterfalls`](/mod/game-api/types/alta-world-generation/rivergeneration#m-workingwaterfalls), [`RiverPath.Waterfall`](/mod/game-api/types/alta-world-generation/riverpath#m-waterfall), [`WaterfallEffect.AttachTo`](/mod/game-api/types/alta-world-generation/waterfalleffect#m-attachto).
