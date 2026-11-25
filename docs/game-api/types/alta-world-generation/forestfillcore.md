---
title: "ForestFillCore"
description: "abstract class ForestFillCore in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestFillCore

An **abstract class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/game-api/types/alta-world-generation/iforestgeneration)
- **Derived types** [`CliffFill`](/game-api/types/alta-world-generation/clifffill), [`CutoutPathEdgeFill`](/game-api/types/alta-world-generation/cutoutpathedgefill), [`ForestFill`](/game-api/types/alta-world-generation/forestfill), [`RiverCenterFill`](/game-api/types/alta-world-generation/rivercenterfill), [`RiverEdgeFill`](/game-api/types/alta-world-generation/riveredgefill)
- **Nested types** [`Setup`](/game-api/types/alta-world-generation/forestfillcore-setup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ForestFillCore()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fillset" /><code>{"protected "}<Link to="/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" fillSet"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code><Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinstructions" /><code>{"void AddInstructions("}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions, IEnumerable<"}<Link to="/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{"> spawnParameters)"}</code> |  |
| <Link id="m-cleardynamic" /><code>{"virtual void ClearDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-clearstatic" /><code>{"virtual void ClearStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-generatedynamic" /><code>{"virtual async Task GenerateDynamic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-generateglobal" /><code>{"Task GenerateGlobal("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-generatestatic" /><code>{"virtual async Task GenerateStatic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" instance)"}</code> |  |
| <Link id="m-generateinternal" /><code>{"protected abstract Task GenerateInternal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> |  |
| <Link id="m-raycasts" /><code>{"protected virtual IEnumerable Raycasts("}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{"[] raycastRequests, int pointCount, "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"[] pointNormals) (iterator)"}</code> |  |
