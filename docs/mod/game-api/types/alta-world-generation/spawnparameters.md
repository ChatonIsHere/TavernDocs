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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`SpawnModifierSpawnParameters`](/mod/game-api/types/global-s/spawnmodifierspawnparameters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnParameters("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" pointNormal, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Creates a `SpawnParameters` from `forest`, `pointNormal` and `spawnData`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | <span className="api-desc">Ground normal at the spawn point.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">World position to spawn at.</span> |
| <Link id="m-prefab" /><code>{"Object prefab"}</code> | <span className="api-desc">The prefab or asset to spawn. Null until set.</span> |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | <span className="api-desc">Spawn rotation. Identity by default.</span> |
| <Link id="m-scale" /><code>{"Vector3 scale"}</code> | <span className="api-desc">Spawn scale. One by default.</span> |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> | <span className="api-desc">Spawn data with the location attributes set.</span> |

## Used in

Members of other types that take, return or hold a `SpawnParameters`:

<div className="api-used-in">

[`AlignWithNormalModifier.Filter`](/mod/game-api/types/global-a-b/alignwithnormalmodifier#m-filter), [`ForestFillCore.AddInstructions`](/mod/game-api/types/alta-world-generation/forestfillcore#m-addinstructions), [`SpawnModifiers.Process`](/mod/game-api/types/alta-world-generation/spawnmodifiers#m-process-3), [`RandomRotationModifier.Filter`](/mod/game-api/types/global-q-r/randomrotationmodifier#m-filter), [`RandomScaleModifier.Filter`](/mod/game-api/types/global-q-r/randomscalemodifier#m-filter), [`ScaleWithScoreModifier.Filter`](/mod/game-api/types/global-s/scalewithscoremodifier#m-filter), [`SetNetworkPrefabModifier.Filter`](/mod/game-api/types/global-s/setnetworkprefabmodifier#m-filter), [`SetPrefabModifier.Filter`](/mod/game-api/types/global-s/setprefabmodifier#m-filter), [`SpawnModifierSpawnParametersRedirect.Filter`](/mod/game-api/types/global-s/spawnmodifierspawnparametersredirect#m-filter).

</div>
