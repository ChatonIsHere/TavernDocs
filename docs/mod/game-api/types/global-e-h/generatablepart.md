---
title: "GeneratablePart"
description: "Base for parts of a GenerationCore (a procedurally placed static piece) that adjust or add to it when it generates, such as aligning to a path or the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratablePart

An **abstract class** in `Root.Township`, the global namespace.

Base for parts of a `GenerationCore` (a procedurally placed static piece) that adjust or add to it when it generates, such as aligning to a path or the terrain slope.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AlignWithPath`](/mod/game-api/types/global-a-b/alignwithpath), [`AlignWithPathSlope`](/mod/game-api/types/global-a-b/alignwithpathslope), [`AlignWithTerrainSlope`](/mod/game-api/types/global-a-b/alignwithterrainslope), [`DynamicPathPart`](/mod/game-api/types/global-c-d/dynamicpathpart), [`LinearPartClonerPart`](/mod/game-api/types/global-i-l/linearpartclonerpart), [`LinkerPart`](/mod/game-api/types/global-i-l/linkerpart), [`PathEndsPart`](/mod/game-api/types/global-p/pathendspart), [`PointTowardsEachotherPart`](/mod/game-api/types/global-p/pointtowardseachotherpart), [`RandomRotation3d`](/mod/game-api/types/global-q-r/randomrotation3d), [`RandomRotationPart`](/mod/game-api/types/global-q-r/randomrotationpart), [`SignPointPart`](/mod/game-api/types/global-s/signpointpart), [`SnapToTerrain`](/mod/game-api/types/global-s/snaptoterrain), [`SpawnerPart`](/mod/game-api/types/global-s/spawnerpart), [`TerrainOffsetPart`](/mod/game-api/types/global-t-x/terrainoffsetpart), [`TerrainSplatPart`](/mod/game-api/types/global-t-x/terrainsplatpart), [`TerrainSpline`](/mod/game-api/types/global-t-x/terrainspline)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GeneratablePart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"virtual void GenerateDynamic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | Called after `GenerateStatic`, only when the spawn data is generating (first time). Use it to make saved, dynamic content. |
| <Link id="m-generatestatic" /><code>{"virtual void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Called every time the piece generates, with whether terrain may be changed. Use it for the parts rebuilt on each load. |

## Used in

Members of other types that take, return or hold a `GeneratablePart`:

[`GenerationCore.AddPart`](/mod/game-api/types/global-e-h/generationcore#m-addpart), [`GenerationCore.parts`](/mod/game-api/types/global-e-h/generationcore#m-parts), [`GenerationCore.workingParts`](/mod/game-api/types/global-e-h/generationcore#m-workingparts).
