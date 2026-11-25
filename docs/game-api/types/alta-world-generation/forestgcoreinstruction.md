---
title: "ForestGCoreInstruction"
description: "class ForestGCoreInstruction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestGCoreInstruction

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Instruction`](/game-api/types/alta-world/instruction)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestGCoreInstruction()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"ForestGCoreInstruction("}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" core, uint seed, Vector3 position, Quaternion rotation, "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node, "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" content"}</code> |  |
| <Link id="m-contentid" /><code>{"private uint contentId"}</code> |  |
| <Link id="m-edgea" /><code>{"private int edgeA"}</code> |  |
| <Link id="m-edgeb" /><code>{"private int edgeB"}</code> |  |
| <Link id="m-node" /><code>{"private int node"}</code> |  |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |  |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |  |
| <Link id="m-seed" /><code>{"private uint seed"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edgea-2" /><code>{"int EdgeA { get; }"}</code> |  |
| <Link id="m-edgeb-2" /><code>{"int EdgeB { get; }"}</code> |  |
| <Link id="m-node-2" /><code>{"int Node { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-execute" /><code>{"override "}<Link to="/game-api/types/alta-world/iinstructionresult">{"IInstructionResult"}</Link>{" Execute(object context)"}</code> |  |
| <Link id="m-getgcore" /><code><Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" GetGcore()"}</code> |  |
| <Link id="m-serializeinternal" /><code>{"protected override void SerializeInternal("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ForestGCoreInstruction`:

[`ForestGenerator.GetAllGCores`](/game-api/types/alta-world-generation/forestgenerator#m-getallgcores).
