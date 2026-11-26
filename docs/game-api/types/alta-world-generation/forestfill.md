---
title: "ForestFill"
description: "Forest fill step that scatters objects on a grid across the forest, outside path nodes (or in open spaces)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestFill

A **class** in `Root.Township`, `Alta.Forests`.

Forest fill step that scatters objects on a grid across the forest, outside path nodes (or in open spaces).

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestFill()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-step" /><code>{"private float step"}</code> | Grid spacing in metres. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override async Task GenerateInternal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | Tests grid points in the chunk row by row on worker threads, raycasts the ground on the main thread and adds spawn instructions for points that pass. |
