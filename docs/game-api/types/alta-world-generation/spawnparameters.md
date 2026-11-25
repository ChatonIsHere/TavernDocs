---
title: "SpawnParameters"
description: "Where and what to spawn during forest generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnParameters

A **struct** in `Root.Township`, `Alta.Forests`.

Where and what to spawn during forest generation. The constructor fills the spawn data with location attributes: elevation, slope, distance from path and from the forest border.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`SpawnModifierSpawnParameters`](/game-api/types/global-s/spawnmodifierspawnparameters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnParameters("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | Ground normal at the spawn point. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position to spawn at. |
| <Link id="m-prefab" /><code>{"Object prefab"}</code> | The prefab or asset to spawn. Null until set. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Spawn rotation. Identity by default. |
| <Link id="m-scale" /><code>{"Vector3 scale"}</code> | Spawn scale. One by default. |
| <Link id="m-spawndata" /><code><Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> | Spawn data with the location attributes set. |

## Used in

Members of other types that take, return or hold a `SpawnParameters`:

[`AlignWithNormalModifier.Filter`](/game-api/types/global-a-b/alignwithnormalmodifier#m-filter), [`ForestFillCore.AddInstructions`](/game-api/types/alta-world-generation/forestfillcore#m-addinstructions), [`SpawnModifiers.Process`](/game-api/types/alta-world-generation/spawnmodifiers#m-process-3), [`RandomRotationModifier.Filter`](/game-api/types/global-q-r/randomrotationmodifier#m-filter), [`RandomScaleModifier.Filter`](/game-api/types/global-q-r/randomscalemodifier#m-filter), [`ScaleWithScoreModifier.Filter`](/game-api/types/global-s/scalewithscoremodifier#m-filter), [`SetNetworkPrefabModifier.Filter`](/game-api/types/global-s/setnetworkprefabmodifier#m-filter), [`SetPrefabModifier.Filter`](/game-api/types/global-s/setprefabmodifier#m-filter), [`SpawnModifierSpawnParametersRedirect.Filter`](/game-api/types/global-s/spawnmodifierspawnparametersredirect#m-filter).
