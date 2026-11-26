---
title: "ForestGCoreInstruction"
description: "A forest generation instruction that places one generation core (a static environment piece) at a position, tied to a forest node or edge."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestGCoreInstruction

A **class** in `Root.Township`, `Alta.Forests`.

A forest generation instruction that places one generation core (a static environment piece) at a position, tied to a forest node or edge. It is serialized with the forest and replayed by `ForestGenerator`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Instruction`](/mod/game-api/types/alta-world/instruction)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestGCoreInstruction()"}</code> | <span className="api-desc">Creates a `ForestGCoreInstruction` from `core`, `seed`, `position`, `rotation`, `node` and `edge`.</span> |
| <Link id="m-ctor-2" /><code>{"ForestGCoreInstruction("}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" core, uint seed, Vector3 position, Quaternion rotation, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node, "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | <span className="api-desc">Creates a `ForestGCoreInstruction` from `core`, `seed`, `position`, `rotation`, `node` and `edge`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> | <span className="api-desc">The static environment piece being placed; cleared after serializing and loaded again from `contentId`.</span> |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> | <span className="api-desc">Index of the static environment piece.</span> |
| <Link id="m-edgea" /><code>{"private int edgeA"}</code> | <span className="api-desc">Backing field for `EdgeA`.</span> |
| <Link id="m-edgeb" /><code>{"private int edgeB"}</code> | <span className="api-desc">Backing field for `EdgeB`.</span> |
| <Link id="m-node" /><code>{"private int node"}</code> | <span className="api-desc">Backing field for `Node`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">World position to place the core at.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Rotation to place the core with.</span> |
| <Link id="m-seed" /><code>{"private uint seed"}</code> | <span className="api-desc">Random seed passed to the core's generation.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edgea-2" /><code>{"int EdgeA { get; }"}</code> | <span className="api-desc">Index of the first node of the edge the core belongs to, or -1.</span> |
| <Link id="m-edgeb-2" /><code>{"int EdgeB { get; }"}</code> | <span className="api-desc">Index of the second node of the edge the core belongs to, or -1.</span> |
| <Link id="m-node-2" /><code>{"int Node { get; }"}</code> | <span className="api-desc">Index of the forest node the core belongs to, or -1.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | <span className="api-desc">Spawns the generation core at its position and generates it for the node or edge, using its saved seed and the node or edge radius.</span> |
| <Link id="m-getgcore" /><code><Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" GetGcore()"}</code> | <span className="api-desc">Loads the static environment piece by id if needed and returns its `GenerationCore` prefab, logging an error if missing.</span> |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the seed, content id, position, rotation, node and edge indexes.</span> |

## Used in

Members of other types that take, return or hold a `ForestGCoreInstruction`:

<div className="api-used-in">

[`ForestGenerator.GetAllGCores`](/mod/game-api/types/alta-world-generation/forestgenerator#m-getallgcores).

</div>
