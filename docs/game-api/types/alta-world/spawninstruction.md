---
title: "SpawnInstruction"
description: "Static environment instruction that places one StaticEnvironmentPiece at a position, rotation and scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnInstruction

A **class** in `Root.Township`, `Alta.Static`.

Static environment instruction that places one `StaticEnvironmentPiece` at a position, rotation and scale.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`Instruction`](/game-api/types/alta-world/instruction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnInstruction()"}</code> | Creates a `SpawnInstruction` from `content`, `position`, `rotation` and `scale`. |
| <Link id="m-ctor-2" /><code>{"SpawnInstruction("}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content, Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | Creates a `SpawnInstruction` from `content`, `position`, `rotation` and `scale`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> | The piece to spawn, loaded from `contentId` when needed. |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> | Index of the piece. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Where to spawn the piece. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | The piece's rotation. |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | The piece's scale. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | Loads the piece by its index if needed and spawns it. Logs an error and returns null if the piece is missing. |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the piece index, position, rotation and scale, and drops the cached piece. |
