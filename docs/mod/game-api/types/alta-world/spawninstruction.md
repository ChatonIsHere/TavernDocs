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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`Instruction`](/mod/game-api/types/alta-world/instruction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnInstruction()"}</code> | <span className="api-desc">Creates a `SpawnInstruction` from `content`, `position`, `rotation` and `scale`.</span> |
| <Link id="m-ctor-2" /><code>{"SpawnInstruction("}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content, Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | <span className="api-desc">Creates a `SpawnInstruction` from `content`, `position`, `rotation` and `scale`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> | <span className="api-desc">The piece to spawn, loaded from `contentId` when needed.</span> |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> | <span className="api-desc">Index of the piece.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Where to spawn the piece.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">The piece's rotation.</span> |
| <Link id="m-scale" /><code>{"private Vector3 scale"}</code> | <span className="api-desc">The piece's scale.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | <span className="api-desc">Loads the piece by its index if needed and spawns it. Logs an error and returns null if the piece is missing.</span> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the piece index, position, rotation and scale, and drops the cached piece.</span> |
