---
title: "GenerationCore"
description: "class GenerationCore in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationCore

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`StaticEnvironmentPieceInstance`](/game-api/types/alta-world/staticenvironmentpieceinstance), [`IDistributionValue`](/game-api/types/alta-world-generation/idistributionvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationCore()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private Logger logger"}</code> |  |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> |  |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> |  |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{"[] parts"}</code> |  |
| <Link id="m-workingparts" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{"> workingParts"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-chunkingparent" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" ChunkingParent { get; private set; }"}</code> |  |
| <Link id="m-isdynamic" /><code>{"bool IsDynamic { get; private set; }"}</code> |  |
| <Link id="m-maximumradius-2" /><code>{"float MaximumRadius { get; }"}</code> |  |
| <Link id="m-minimumradius-2" /><code>{"float MinimumRadius { get; }"}</code> |  |
| <Link id="m-radius" /><code>{"float Radius { get; private set; }"}</code> |  |
| <Link id="m-seed" /><code>{"int Seed { get; private set; }"}</code> |  |
| <Link id="m-spawndata" /><code><Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpart" /><code>{"void AddPart("}<Link to="/game-api/types/global-e-h/generatablepart">{"GeneratablePart"}</Link>{" part)"}</code> |  |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" chunkingParent, bool isModifyingTerrain, float radius, int seed = 0)"}</code> |  |
| <Link id="m-generatedynamic" /><code>{"void GenerateDynamic()"}</code> |  |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-evaluate" /><code>{"private float Alta.Caves.IDistributionValue.Evaluate("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" set)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-testgenerate" /><code>{"private void TestGenerate()"}</code> |  |
| <Link id="m-testnodegenerate" /><code>{"private void TestNodeGenerate()"}</code> |  |
| <Link id="m-testpathgenerate" /><code>{"private void TestPathGenerate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenerationCore`:

[`AlignWithPath.GenerateStatic`](/game-api/types/global-a-b/alignwithpath#m-generatestatic), [`AlignWithPathSlope.GenerateStatic`](/game-api/types/global-a-b/alignwithpathslope#m-generatestatic), [`AlignWithTerrainSlope.GenerateStatic`](/game-api/types/global-a-b/alignwithterrainslope#m-generatestatic), [`ForestGCoreInstruction.GetGcore`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-getgcore), [`RiverGCoreInstruction.RiverGCoreInstruction`](/game-api/types/alta-world-generation/rivergcoreinstruction#m-ctor-2), [`DynamicPathPart.GenerateDynamic`](/game-api/types/global-c-d/dynamicpathpart#m-generatedynamic), [`GeneratablePart.GenerateDynamic`](/game-api/types/global-e-h/generatablepart#m-generatedynamic), [`GeneratablePart.GenerateStatic`](/game-api/types/global-e-h/generatablepart#m-generatestatic), [`GenerationStarter.core`](/game-api/types/global-e-h/generationstarter#m-core), [`GenerationStarter.prefab`](/game-api/types/global-e-h/generationstarter#m-prefab), [`LinearPartClonerPart.GenerateDynamic`](/game-api/types/global-i-l/linearpartclonerpart#m-generatedynamic), [`LinearPartClonerPart.GenerateStatic`](/game-api/types/global-i-l/linearpartclonerpart#m-generatestatic), [`LinearPartClonerPart.Process`](/game-api/types/global-i-l/linearpartclonerpart#m-process), [`LinkerPart.GenerateDynamic`](/game-api/types/global-i-l/linkerpart#m-generatedynamic), [`PathEndsPart.GenerateStatic`](/game-api/types/global-p/pathendspart#m-generatestatic), [`PointTowardsEachotherPart.GenerateDynamic`](/game-api/types/global-p/pointtowardseachotherpart#m-generatedynamic), [`RandomRotation3d.GenerateStatic`](/game-api/types/global-q-r/randomrotation3d#m-generatestatic), [`RandomRotationPart.GenerateStatic`](/game-api/types/global-q-r/randomrotationpart#m-generatestatic), [`SafetySpline.GenerateStatic`](/game-api/types/global-s/safetyspline#m-generatestatic), [`SignPointPart.GenerateStatic`](/game-api/types/global-s/signpointpart#m-generatestatic), [`SnapToTerrain.GenerateStatic`](/game-api/types/global-s/snaptoterrain#m-generatestatic), [`SpawnerPart.GenerateDynamic`](/game-api/types/global-s/spawnerpart#m-generatedynamic), [`TerrainOffsetPart.GenerateStatic`](/game-api/types/global-t-x/terrainoffsetpart#m-generatestatic), [`TerrainSplatPart.GenerateStatic`](/game-api/types/global-t-x/terrainsplatpart#m-generatestatic), [`TerrainSpline.GenerateStatic`](/game-api/types/global-t-x/terrainspline#m-generatestatic).
