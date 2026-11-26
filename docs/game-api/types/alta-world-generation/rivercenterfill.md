---
title: "RiverCenterFill"
description: "Forest fill step that places objects on points along the middle of rivers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverCenterFill

A **class** in `Root.Township`, `Alta.Forests`.

Forest fill step that places objects on points along the middle of rivers.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverCenterFill()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extraradius" /><code>{"private float extraRadius"}</code> | Extra radius passed to the segments when getting points. |
| <Link id="m-isspawningonwaterfalls" /><code>{"private bool isSpawningOnWaterfalls"}</code> | Also use waterfall segments. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-river" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | River generator to read segments from. |
| <Link id="m-step" /><code>{"private float step"}</code> | Spacing between points. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override async Task GenerateInternal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | Takes points from river segments in the chunk, raycasts them and adds spawn instructions for those that pass. |
