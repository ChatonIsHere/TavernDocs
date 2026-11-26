---
title: "CutoutPathEdgeFill"
description: "Forest fill step that places objects along both sides of paths scored by a CutoutPathModifier, just outside the path radius."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CutoutPathEdgeFill

A **class** in `Root.Township`, `Alta.Forests`.

Forest fill step that places objects along both sides of paths scored by a `CutoutPathModifier`, just outside the path radius.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CutoutPathEdgeFill()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cutoutpath" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/cutoutpathmodifier">{"CutoutPathModifier"}</Link>{" cutoutPath"}</code> | Modifier whose node scores decide which paths get edging. |
| <Link id="m-extraradius" /><code>{"private float extraRadius"}</code> | Distance beyond the path radius to place objects. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-step" /><code>{"private float step"}</code> | Metres between points along a path. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override Task GenerateInternal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | Walks each scored edge in the chunk in steps, places points either side and adds spawn instructions for those that pass. Seeded from `UnityEngine.Random`, so not repeatable. |
