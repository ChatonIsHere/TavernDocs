---
title: "GenerationCore"
description: "A procedural set piece (an encounter, a camp) placed by forest or cave generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationCore

A **class** in `Root.Township`, the global namespace.

A procedural set piece (an encounter, a camp) placed by forest or cave generation. Its `GeneratablePart`s build static content first and, when the chunk is being generated, dynamic content after.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`StaticEnvironmentPieceInstance`](/mod/game-api/types/alta-world/staticenvironmentpieceinstance), [`IDistributionValue`](/mod/game-api/types/alta-world-generation/idistributionvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationCore()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private Logger logger"}</code> | <span className="api-desc">NLog logger, used to report generation errors.</span> |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> | <span className="api-desc">Backing field for `MaximumRadius`, the largest allowed generation radius.</span> |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> | <span className="api-desc">Backing field for `MinimumRadius`, the smallest allowed generation radius.</span> |
| <Link id="m-parts" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{"[] parts"}</code> | <span className="api-desc">Generatable parts run by `Generate`, set in the prefab.</span> |
| <Link id="m-workingparts" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{"> workingParts"}</code> | <span className="api-desc">Parts for the current generation: a copy of `parts` plus any added with `AddPart`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Chunk the core is in: its chunking parent's chunk, or the best chunk at its position.</span> |
| <Link id="m-chunkingparent" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ChunkingParent { get; private set; }"}</code> | <span className="api-desc">Entity spawned content is chunked under, if any.</span> |
| <Link id="m-isdynamic" /><code>{"bool IsDynamic { get; private set; }"}</code> | <span className="api-desc">Whether the core is dynamic. Never set in this code, so always false.</span> |
| <Link id="m-maximumradius-2" /><code>{"float MaximumRadius { get; }"}</code> | <span className="api-desc">Largest radius this core may be placed with. Also used to filter it in distributions.</span> |
| <Link id="m-minimumradius-2" /><code>{"float MinimumRadius { get; }"}</code> | <span className="api-desc">Smallest radius this core may be placed with.</span> |
| <Link id="m-radius" /><code>{"float Radius { get; private set; }"}</code> | <span className="api-desc">Radius chosen for this placement.</span> |
| <Link id="m-seed" /><code>{"int Seed { get; private set; }"}</code> | <span className="api-desc">Seed passed to `Generate`.</span> |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Spawn data passed to `Generate`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpart" /><code>{"void AddPart("}<Link to="/mod/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{" part)"}</code> | <span className="api-desc">Adds a part to the list being generated this run.</span> |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" chunkingParent, bool isModifyingTerrain, float radius, int seed = 0)"}</code> | <span className="api-desc">Runs every part's static generation with the given spawn data, radius and seed.</span> |
| <Link id="m-generatedynamic" /><code>{"void GenerateDynamic()"}</code> | <span className="api-desc">If the spawn data is generating, runs every part's dynamic generation and the static generation helper.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Destroys the core's object.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"private float Alta.Caves.IDistributionValue.Evaluate("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" set)"}</code> | <span className="api-desc">Distribution weight: 1 when the set's special biome radius is inside the min and max radius, else 0.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws the minimum and maximum radius circles.</span> |
| <Link id="m-testgenerate" /><code>{"private void TestGenerate()"}</code> | <span className="api-desc">Editor context menu "Test": generates with default spawn data and a random radius.</span> |
| <Link id="m-testnodegenerate" /><code>{"private void TestNodeGenerate()"}</code> | <span className="api-desc">Editor context menu "Test Node": generates as if on the nearest forest node in this chunk.</span> |
| <Link id="m-testpathgenerate" /><code>{"private void TestPathGenerate()"}</code> | <span className="api-desc">Editor context menu "Test Path": generates as if on the nearest forest edge in this chunk.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenerationCore`:

<div className="api-used-in">

[`AlignWithPath.GenerateStatic`](/mod/game-api/types/global-a-b/alignwithpath#m-generatestatic), [`AlignWithPathSlope.GenerateStatic`](/mod/game-api/types/global-a-b/alignwithpathslope#m-generatestatic), [`AlignWithTerrainSlope.GenerateStatic`](/mod/game-api/types/global-a-b/alignwithterrainslope#m-generatestatic), [`ForestGCoreInstruction.GetGcore`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction#m-getgcore), [`RiverGCoreInstruction.RiverGCoreInstruction`](/mod/game-api/types/alta-world-generation/rivergcoreinstruction#m-ctor-2), [`DynamicPathPart.GenerateDynamic`](/mod/game-api/types/global-c-d/dynamicpathpart#m-generatedynamic), [`GeneratablePart.GenerateDynamic`](/mod/game-api/types/global-e-h/generatablepart#m-generatedynamic), [`GeneratablePart.GenerateStatic`](/mod/game-api/types/global-e-h/generatablepart#m-generatestatic), [`GenerationStarter.core`](/mod/game-api/types/global-e-h/generationstarter#m-core), [`GenerationStarter.prefab`](/mod/game-api/types/global-e-h/generationstarter#m-prefab), [`LinearPartClonerPart.GenerateDynamic`](/mod/game-api/types/global-i-l/linearpartclonerpart#m-generatedynamic), [`LinearPartClonerPart.GenerateStatic`](/mod/game-api/types/global-i-l/linearpartclonerpart#m-generatestatic), [`LinearPartClonerPart.Process`](/mod/game-api/types/global-i-l/linearpartclonerpart#m-process), [`LinkerPart.GenerateDynamic`](/mod/game-api/types/global-i-l/linkerpart#m-generatedynamic), [`PathEndsPart.GenerateStatic`](/mod/game-api/types/global-p/pathendspart#m-generatestatic), [`PointTowardsEachotherPart.GenerateDynamic`](/mod/game-api/types/global-p/pointtowardseachotherpart#m-generatedynamic), [`RandomRotation3d.GenerateStatic`](/mod/game-api/types/global-q-r/randomrotation3d#m-generatestatic), [`RandomRotationPart.GenerateStatic`](/mod/game-api/types/global-q-r/randomrotationpart#m-generatestatic), [`SafetySpline.GenerateStatic`](/mod/game-api/types/global-s/safetyspline#m-generatestatic), [`SignPointPart.GenerateStatic`](/mod/game-api/types/global-s/signpointpart#m-generatestatic), [`SnapToTerrain.GenerateStatic`](/mod/game-api/types/global-s/snaptoterrain#m-generatestatic), [`SpawnerPart.GenerateDynamic`](/mod/game-api/types/global-s/spawnerpart#m-generatedynamic), [`TerrainOffsetPart.GenerateStatic`](/mod/game-api/types/global-t-x/terrainoffsetpart#m-generatestatic), [`TerrainSplatPart.GenerateStatic`](/mod/game-api/types/global-t-x/terrainsplatpart#m-generatestatic), [`TerrainSpline.GenerateStatic`](/mod/game-api/types/global-t-x/terrainspline#m-generatestatic).

</div>
