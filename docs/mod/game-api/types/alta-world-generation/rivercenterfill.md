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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`ForestFillCore`](/mod/game-api/types/alta-world-generation/forestfillcore)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverCenterFill()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extraradius" /><code>{"private float extraRadius"}</code> | <span className="api-desc">Extra radius passed to the segments when getting points.</span> |
| <Link id="m-isspawningonwaterfalls" /><code>{"private bool isSpawningOnWaterfalls"}</code> | <span className="api-desc">Also use waterfall segments.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-river" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | <span className="api-desc">River generator to read segments from.</span> |
| <Link id="m-step" /><code>{"private float step"}</code> | <span className="api-desc">Spacing between points.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override async Task GenerateInternal("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | <span className="api-desc">Takes points from river segments in the chunk, raycasts them and adds spawn instructions for those that pass.</span> |
