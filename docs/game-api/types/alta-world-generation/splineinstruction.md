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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Instruction`](/game-api/types/alta-world/instruction)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SplineInstruction()"}</code> |
| <Link id="m-ctor-2" /><code>{"SplineInstruction(Vector3 a, Vector3 b, Vector3 c, Vector3 d, "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private Vector3 a"}</code> | Start point. |
| <Link id="m-b" /><code>{"private Vector3 b"}</code> | First control point. |
| <Link id="m-c" /><code>{"private Vector3 c"}</code> | Second control point. |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> | The piece, loaded from `contentId` when missing. |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> | Index of the piece, as saved. |
| <Link id="m-d" /><code>{"private Vector3 d"}</code> | End point. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | Loads the piece if needed and creates the spline with the piece as its display. Logs an error if the piece is missing. |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the four points and the piece index, and drops the cached piece. |
