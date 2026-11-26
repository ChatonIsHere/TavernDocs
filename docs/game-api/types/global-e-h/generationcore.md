---
title: "GenerationCore"
description: "A procedural set piece (an encounter, a camp) placed by forest or cave generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationCore

A **class** in `Root.Township`, no namespace.

A procedural set piece (an encounter, a camp) placed by forest or cave generation. Its `GeneratablePart`s build static content first and, when the chunk is being generated, dynamic content after.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`StaticEnvironmentPieceInstance`](/game-api/types/alta-world/staticenvironmentpieceinstance), [`IDistributionValue`](/game-api/types/alta-world-generation/idistributionvalue)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GenerationCore()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private Logger logger"}</code> | NLog logger, used to report generation errors. |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> | Backing field for `MaximumRadius`, the largest allowed generation radius. |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> | Backing field for `MinimumRadius`, the smallest allowed generation radius. |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{"[] parts"}</code> | Generatable parts run by `Generate`, set in the prefab. |
| <Link id="m-workingparts" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{"> workingParts"}</code> | Parts for the current generation: a copy of `parts` plus any added with `AddPart`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> | Chunk the core is in: its chunking parent's chunk, or the best chunk at its position. |
| <Link id="m-chunkingparent" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ChunkingParent { get; private set; }"}</code> | Entity spawned content is chunked under, if any. |
| <Link id="m-isdynamic" /><code>{"bool IsDynamic { get; private set; }"}</code> | Whether the core is dynamic. Never set in this code, so always false. |
| <Link id="m-maximumradius-2" /><code>{"float MaximumRadius { get; }"}</code> | Largest radius this core may be placed with. Also used to filter it in distributions. |
| <Link id="m-minimumradius-2" /><code>{"float MinimumRadius { get; }"}</code> | Smallest radius this core may be placed with. |
| <Link id="m-radius" /><code>{"float Radius { get; private set; }"}</code> | Radius chosen for this placement. |
| <Link id="m-seed" /><code>{"int Seed { get; private set; }"}</code> | Seed passed to `Generate`. |
| <Link id="m-spawndata" /><code><Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; private set; }"}</code> | Spawn data passed to `Generate`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpart" /><code>{"void AddPart("}<Link to="/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{" part)"}</code> | Adds a part to the list being generated this run. |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" chunkingParent, bool isModifyingTerrain, float radius, int seed = 0)"}</code> | Runs every part's static generation with the given spawn data, radius and seed. |
| <Link id="m-generatedynamic" /><code>{"void GenerateDynamic()"}</code> | If the spawn data is generating, runs every part's dynamic generation and the static generation helper. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Destroys the core's object. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"private float Alta.Caves.IDistributionValue.Evaluate("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" set)"}</code> | Distribution weight: 1 when the set's special biome radius is inside the min and max radius, else 0. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws the minimum and maximum radius circles. |
| <Link id="m-testgenerate" /><code>{"private void TestGenerate()"}</code> | Editor context menu "Test": generates with default spawn data and a random radius. |
| <Link id="m-testnodegenerate" /><code>{"private void TestNodeGenerate()"}</code> | Editor context menu "Test Node": generates as if on the nearest forest node in this chunk. |
| <Link id="m-testpathgenerate" /><code>{"private void TestPathGenerate()"}</code> | Editor context menu "Test Path": generates as if on the nearest forest edge in this chunk. |

</details>

## Used in

Members of other types that take, return or hold a `GenerationCore`:

[`AlignWithPath.GenerateStatic`](/game-api/types/global-a-b/alignwithpath#m-generatestatic), [`AlignWithPathSlope.GenerateStatic`](/game-api/types/global-a-b/alignwithpathslope#m-generatestatic), [`AlignWithTerrainSlope.GenerateStatic`](/game-api/types/global-a-b/alignwithterrainslope#m-generatestatic), [`ForestGCoreInstruction.GetGcore`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-getgcore), [`RiverGCoreInstruction.RiverGCoreInstruction`](/game-api/types/alta-world-generation/rivergcoreinstruction#m-ctor-2), [`DynamicPathPart.GenerateDynamic`](/game-api/types/global-c-d/dynamicpathpart#m-generatedynamic), [`GeneratablePart.GenerateDynamic`](/game-api/types/global-e-h/generatablepart#m-generatedynamic), [`GeneratablePart.GenerateStatic`](/game-api/types/global-e-h/generatablepart#m-generatestatic), [`GenerationStarter.core`](/game-api/types/global-e-h/generationstarter#m-core), [`GenerationStarter.prefab`](/game-api/types/global-e-h/generationstarter#m-prefab), [`LinearPartClonerPart.GenerateDynamic`](/game-api/types/global-i-l/linearpartclonerpart#m-generatedynamic), [`LinearPartClonerPart.GenerateStatic`](/game-api/types/global-i-l/linearpartclonerpart#m-generatestatic), [`LinearPartClonerPart.Process`](/game-api/types/global-i-l/linearpartclonerpart#m-process), [`LinkerPart.GenerateDynamic`](/game-api/types/global-i-l/linkerpart#m-generatedynamic), [`PathEndsPart.GenerateStatic`](/game-api/types/global-p/pathendspart#m-generatestatic), [`PointTowardsEachotherPart.GenerateDynamic`](/game-api/types/global-p/pointtowardseachotherpart#m-generatedynamic), [`RandomRotation3d.GenerateStatic`](/game-api/types/global-q-r/randomrotation3d#m-generatestatic), [`RandomRotationPart.GenerateStatic`](/game-api/types/global-q-r/randomrotationpart#m-generatestatic), [`SafetySpline.GenerateStatic`](/game-api/types/global-s/safetyspline#m-generatestatic), [`SignPointPart.GenerateStatic`](/game-api/types/global-s/signpointpart#m-generatestatic), [`SnapToTerrain.GenerateStatic`](/game-api/types/global-s/snaptoterrain#m-generatestatic), [`SpawnerPart.GenerateDynamic`](/game-api/types/global-s/spawnerpart#m-generatedynamic), [`TerrainOffsetPart.GenerateStatic`](/game-api/types/global-t-x/terrainoffsetpart#m-generatestatic), [`TerrainSplatPart.GenerateStatic`](/game-api/types/global-t-x/terrainsplatpart#m-generatestatic), [`TerrainSpline.GenerateStatic`](/game-api/types/global-t-x/terrainspline#m-generatestatic).
