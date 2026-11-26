---
title: "RiverGCoreInstruction"
description: "A generation instruction that spawns a generation core on a river node or path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverGCoreInstruction

A **class** in `Root.Township`, `Alta.Forests`.

A generation instruction that spawns a generation core on a river node or path. Stored and sent by content ID and node indices, then rebuilt and run with the `ForestGenerator` as context.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Instruction`](/game-api/types/alta-world/instruction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverGCoreInstruction()"}</code> | Creates a `RiverGCoreInstruction` from `core`, `seed`, `position`, `rotation`, `node` and `path`. |
| <Link id="m-ctor-2" /><code>{"RiverGCoreInstruction("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, uint seed, Vector3 position, Quaternion rotation, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" node, "}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> | Creates a `RiverGCoreInstruction` from `core`, `seed`, `position`, `rotation`, `node` and `path`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> | The static environment piece holding the core. Cleared after serializing and reloaded from `contentId`. |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> | Index of the static environment piece to spawn. |
| <Link id="m-node" /><code>{"private int node"}</code> | Index of the river node, or -1. |
| <Link id="m-patha" /><code>{"private int pathA"}</code> | Index of the path's start node, or -1. |
| <Link id="m-pathb" /><code>{"private int pathB"}</code> | Index of the path's end node, or -1. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | World position to spawn the core at. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Rotation to spawn the core with. |
| <Link id="m-seed" /><code>{"private uint seed"}</code> | Seed passed to the core's generation. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | Loads the core, instantiates it at the stored spot and generates it for the stored river node or path. Returns null and logs if missing. |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes seed, content ID, position, rotation and node and path indices, then drops the cached content. |
