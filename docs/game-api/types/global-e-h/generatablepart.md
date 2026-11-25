---
title: "GeneratablePart"
description: "Base for parts of a GenerationCore (a procedurally placed static piece) that adjust or add to it when it generates, such as aligning to a path or the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratablePart

An **abstract class** in `Root.Township`, no namespace.

Base for parts of a `GenerationCore` (a procedurally placed static piece) that adjust or add to it when it generates, such as aligning to a path or the terrain slope.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AlignWithPath`](/game-api/types/global-a-b/alignwithpath), [`AlignWithPathSlope`](/game-api/types/global-a-b/alignwithpathslope), [`AlignWithTerrainSlope`](/game-api/types/global-a-b/alignwithterrainslope), [`DynamicPathPart`](/game-api/types/global-c-d/dynamicpathpart), [`LinearPartClonerPart`](/game-api/types/global-i-l/linearpartclonerpart), [`LinkerPart`](/game-api/types/global-i-l/linkerpart), [`PathEndsPart`](/game-api/types/global-p/pathendspart), [`PointTowardsEachotherPart`](/game-api/types/global-p/pointtowardseachotherpart), [`RandomRotation3d`](/game-api/types/global-q-r/randomrotation3d), [`RandomRotationPart`](/game-api/types/global-q-r/randomrotationpart), [`SignPointPart`](/game-api/types/global-s/signpointpart), [`SnapToTerrain`](/game-api/types/global-s/snaptoterrain), [`SpawnerPart`](/game-api/types/global-s/spawnerpart), [`TerrainOffsetPart`](/game-api/types/global-t-x/terrainoffsetpart), [`TerrainSplatPart`](/game-api/types/global-t-x/terrainsplatpart), [`TerrainSpline`](/game-api/types/global-t-x/terrainspline)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GeneratablePart()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"virtual void GenerateDynamic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | Called after `GenerateStatic`, only when the spawn data is generating (first time). Use it to make saved, dynamic content. |
| <Link id="m-generatestatic" /><code>{"virtual void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Called every time the piece generates, with whether terrain may be changed. Use it for the parts rebuilt on each load. |

## Used in

Members of other types that take, return or hold a `GeneratablePart`:

[`GenerationCore.AddPart`](/game-api/types/global-e-h/generationcore#m-addpart), [`GenerationCore.parts`](/game-api/types/global-e-h/generationcore#m-parts), [`GenerationCore.workingParts`](/game-api/types/global-e-h/generationcore#m-workingparts).
