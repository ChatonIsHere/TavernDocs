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
| <Link id="m-ctor" /><code>{"ForestGCoreInstruction()"}</code> | Creates a `ForestGCoreInstruction` from `core`, `seed`, `position`, `rotation`, `node` and `edge`. |
| <Link id="m-ctor-2" /><code>{"ForestGCoreInstruction("}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" core, uint seed, Vector3 position, Quaternion rotation, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node, "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | Creates a `ForestGCoreInstruction` from `core`, `seed`, `position`, `rotation`, `node` and `edge`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> | The static environment piece being placed; cleared after serializing and loaded again from `contentId`. |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> | Index of the static environment piece. |
| <Link id="m-edgea" /><code>{"private int edgeA"}</code> | Backing field for `EdgeA`. |
| <Link id="m-edgeb" /><code>{"private int edgeB"}</code> | Backing field for `EdgeB`. |
| <Link id="m-node" /><code>{"private int node"}</code> | Backing field for `Node`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | World position to place the core at. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Rotation to place the core with. |
| <Link id="m-seed" /><code>{"private uint seed"}</code> | Random seed passed to the core's generation. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edgea-2" /><code>{"int EdgeA { get; }"}</code> | Index of the first node of the edge the core belongs to, or -1. |
| <Link id="m-edgeb-2" /><code>{"int EdgeB { get; }"}</code> | Index of the second node of the edge the core belongs to, or -1. |
| <Link id="m-node-2" /><code>{"int Node { get; }"}</code> | Index of the forest node the core belongs to, or -1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> | Spawns the generation core at its position and generates it for the node or edge, using its saved seed and the node or edge radius. |
| <Link id="m-getgcore" /><code><Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" GetGcore()"}</code> | Loads the static environment piece by id if needed and returns its `GenerationCore` prefab, logging an error if missing. |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the seed, content id, position, rotation, node and edge indexes. |

## Used in

Members of other types that take, return or hold a `ForestGCoreInstruction`:

[`ForestGenerator.GetAllGCores`](/mod/game-api/types/alta-world-generation/forestgenerator#m-getallgcores).
