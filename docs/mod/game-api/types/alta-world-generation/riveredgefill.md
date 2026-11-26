---
title: "RiverEdgeFill"
description: "Forest fill step that places objects along river banks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverEdgeFill

A **class** in `Root.Township`, `Alta.Forests`.

Forest fill step that places objects along river banks.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`ForestFillCore`](/mod/game-api/types/alta-world-generation/forestfillcore)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverEdgeFill()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extraradius" /><code>{"private float extraRadius"}</code> | Extra distance from the river passed to the segments. |
| <Link id="m-isspawningonrivers" /><code>{"private bool isSpawningOnRivers"}</code> | Use normal river segments. Off means waterfalls only. |
| <Link id="m-isspawningonwaterfalls" /><code>{"private bool isSpawningOnWaterfalls"}</code> | Also use waterfall segments. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-river" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | River generator to read edge segments from. |
| <Link id="m-step" /><code>{"private float step"}</code> | Spacing between points. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override async Task GenerateInternal("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | Takes points from river edge segments in the chunk, raycasts them and adds spawn instructions for those that pass. |
