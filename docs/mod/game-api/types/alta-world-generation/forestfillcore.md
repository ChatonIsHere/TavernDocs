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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IForestGeneration`](/mod/game-api/types/alta-world-generation/iforestgeneration)
- **Derived types** [`CliffFill`](/mod/game-api/types/alta-world-generation/clifffill), [`CutoutPathEdgeFill`](/mod/game-api/types/alta-world-generation/cutoutpathedgefill), [`ForestFill`](/mod/game-api/types/alta-world-generation/forestfill), [`RiverCenterFill`](/mod/game-api/types/alta-world-generation/rivercenterfill), [`RiverEdgeFill`](/mod/game-api/types/alta-world-generation/riveredgefill)
- **Nested types** [`Setup`](/mod/game-api/types/alta-world-generation/forestfillcore-setup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ForestFillCore()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fillset" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" fillSet"}</code> | <span className="api-desc">The `ForestFillSet` with this fill's prefabs and spawn modifiers.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code><Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; private set; }"}</code> | <span className="api-desc">The `ForestGeneration` this fill last generated for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinstructions" /><code>{"void AddInstructions("}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions, IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{"> spawnParameters)"}</code> | <span className="api-desc">Turns spawn parameters for static environment pieces into spawn instructions. Other prefab kinds are skipped.</span> |
| <Link id="m-cleardynamic" /><code>{"virtual void ClearDynamic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Hook to clear dynamic content from a chunk. Does nothing in the base class.</span> |
| <Link id="m-clearstatic" /><code>{"virtual void ClearStatic("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Hook to clear static content from a chunk. Does nothing in the base class.</span> |
| <Link id="m-generatedynamic" /><code>{"virtual async Task GenerateDynamic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Hook for dynamic content. Does nothing in the base class.</span> |
| <Link id="m-generateglobal" /><code>{"Task GenerateGlobal("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Does nothing; returns a completed task.</span> |
| <Link id="m-generatestatic" /><code>{"virtual async Task GenerateStatic("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | <span className="api-desc">Stores the forest and runs `GenerateInternal` for the chunk.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Initializes the fill set's spawn modifiers.</span> |
| <Link id="m-generateinternal" /><code>{"protected abstract Task GenerateInternal("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | <span className="api-desc">Implemented by subclasses to add this fill's instructions for a chunk.</span> |
| <Link id="m-raycasts" /><code>{"protected virtual IEnumerable Raycasts("}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{"[] raycastRequests, int pointCount, "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"[] pointNormals) (iterator)"}</code> | <span className="api-desc">Looks up terrain height and normal at each requested point, yielding after each one.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"private void Destroy("}<Link to="/mod/game-api/types/global-i-l/instancedprefab">{"InstancedPrefab"}</Link>{" instance)"}</code> | <span className="api-desc">Disables an instanced prefab. Nothing in this class calls it.</span> |

</details>
