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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Instruction`](/mod/game-api/types/alta-world/instruction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverGCoreInstruction()"}</code> | <span className="api-desc">Creates a `RiverGCoreInstruction` from `core`, `seed`, `position`, `rotation`, `node` and `path`.</span> |
| <Link id="m-ctor-2" /><code>{"RiverGCoreInstruction("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, uint seed, Vector3 position, Quaternion rotation, "}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" node, "}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> | <span className="api-desc">Creates a `RiverGCoreInstruction` from `core`, `seed`, `position`, `rotation`, `node` and `path`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> | <span className="api-desc">The static environment piece holding the core. Cleared after serializing and reloaded from `contentId`.</span> |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> | <span className="api-desc">Index of the static environment piece to spawn.</span> |
| <Link id="m-node" /><code>{"private int node"}</code> | <span className="api-desc">Index of the river node, or -1.</span> |
| <Link id="m-patha" /><code>{"private int pathA"}</code> | <span className="api-desc">Index of the path's start node, or -1.</span> |
| <Link id="m-pathb" /><code>{"private int pathB"}</code> | <span className="api-desc">Index of the path's end node, or -1.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">World position to spawn the core at.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Rotation to spawn the core with.</span> |
| <Link id="m-seed" /><code>{"private uint seed"}</code> | <span className="api-desc">Seed passed to the core's generation.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | <span className="api-desc">Loads the core, instantiates it at the stored spot and generates it for the stored river node or path. Returns null and logs if missing.</span> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes seed, content ID, position, rotation and node and path indices, then drops the cached content.</span> |
