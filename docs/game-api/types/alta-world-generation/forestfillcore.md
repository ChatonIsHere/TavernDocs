---
title: "ForestFillCore"
description: "Base for a forest fill step that places static environment pieces (trees, rocks) in a location chunk during world generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestFillCore

An **abstract class** in `Root.Township`, `Alta.Forests`.

Base for a forest fill step that places static environment pieces (trees, rocks) in a location chunk during world generation. Subclasses do the placing in `GenerateInternal`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/game-api/types/alta-world-generation/iforestgeneration)
- **Derived types** [`CliffFill`](/game-api/types/alta-world-generation/clifffill), [`CutoutPathEdgeFill`](/game-api/types/alta-world-generation/cutoutpathedgefill), [`ForestFill`](/game-api/types/alta-world-generation/forestfill), [`RiverCenterFill`](/game-api/types/alta-world-generation/rivercenterfill), [`RiverEdgeFill`](/game-api/types/alta-world-generation/riveredgefill)
- **Nested types** [`Setup`](/game-api/types/alta-world-generation/forestfillcore-setup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ForestFillCore()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fillset" /><code>{"protected "}<Link to="/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" fillSet"}</code> | The `ForestFillSet` with this fill's prefabs and spawn modifiers. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code><Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; private set; }"}</code> | The `ForestGeneration` this fill last generated for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinstructions" /><code>{"void AddInstructions("}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions, IEnumerable<"}<Link to="/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{"> spawnParameters)"}</code> | Turns spawn parameters for static environment pieces into spawn instructions. Other prefab kinds are skipped. |
| <Link id="m-cleardynamic" /><code>{"virtual void ClearDynamic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Hook to clear dynamic content from a chunk. Does nothing in the base class. |
| <Link id="m-clearstatic" /><code>{"virtual void ClearStatic("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Hook to clear static content from a chunk. Does nothing in the base class. |
| <Link id="m-generatedynamic" /><code>{"virtual async Task GenerateDynamic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Hook for dynamic content. Does nothing in the base class. |
| <Link id="m-generateglobal" /><code>{"Task GenerateGlobal("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Does nothing; returns a completed task. |
| <Link id="m-generatestatic" /><code>{"virtual async Task GenerateStatic("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | Stores the forest and runs `GenerateInternal` for the chunk. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Initializes the fill set's spawn modifiers. |
| <Link id="m-generateinternal" /><code>{"protected abstract Task GenerateInternal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | Implemented by subclasses to add this fill's instructions for a chunk. |
| <Link id="m-raycasts" /><code>{"protected virtual IEnumerable Raycasts("}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{"[] raycastRequests, int pointCount, "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"[] pointNormals) (iterator)"}</code> | Looks up terrain height and normal at each requested point, yielding after each one. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" instance)"}</code> | Disables an instanced prefab. Nothing in this class calls it. |

</details>
