---
title: "SplineInstruction"
description: "Generation instruction that builds a bezier spline and lays a static environment piece along it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineInstruction

A **class** in `Root.Township`, `Alta.Forests`.

Generation instruction that builds a bezier spline and lays a static environment piece along it. Used for forest bridges.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Instruction`](/mod/game-api/types/alta-world/instruction)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineInstruction()"}</code> | <span className="api-desc">Creates a `SplineInstruction` from `a`, `b`, `c`, `d` and `content`.</span> |
| <Link id="m-ctor-2" /><code>{"SplineInstruction(Vector3 a, Vector3 b, Vector3 c, Vector3 d, "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content)"}</code> | <span className="api-desc">Creates a `SplineInstruction` from `a`, `b`, `c`, `d` and `content`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private Vector3 a"}</code> | <span className="api-desc">Start point.</span> |
| <Link id="m-b" /><code>{"private Vector3 b"}</code> | <span className="api-desc">First control point.</span> |
| <Link id="m-c" /><code>{"private Vector3 c"}</code> | <span className="api-desc">Second control point.</span> |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> | <span className="api-desc">The piece, loaded from `contentId` when missing.</span> |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> | <span className="api-desc">Index of the piece, as saved.</span> |
| <Link id="m-d" /><code>{"private Vector3 d"}</code> | <span className="api-desc">End point.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | <span className="api-desc">Loads the piece if needed and creates the spline with the piece as its display. Logs an error if the piece is missing.</span> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the four points and the piece index, and drops the cached piece.</span> |
