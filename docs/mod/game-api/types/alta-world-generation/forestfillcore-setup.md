---
title: "ForestFillCore.Setup"
description: "Per-row state handed to forest fill code: the forest layout, a seeded random and the spawn modifiers in use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestFillCore.Setup

A **class** in `Root.Township`, `Alta.Forests`.

Per-row state handed to forest fill code: the forest layout, a seeded random and the spawn modifiers in use.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`ForestFillCore`](/mod/game-api/types/alta-world-generation/forestfillcore)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Setup(Random rowRandom, "}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Creates a `ForestFillCore.Setup` from `rowRandom` and `forest`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code><Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; private set; }"}</code> | The forest layout being filled. |
| <Link id="m-random" /><code>{"Random Random { get; private set; }"}</code> | Random generator for this row, seeded so results repeat. |
| <Link id="m-spawnmodifiers" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; set; }"}</code> | Spawn modifiers applied to what this row places. |

## Used in

Members of other types that take, return or hold a `Setup`:

[`AlignWithNormalModifier.Filter`](/mod/game-api/types/global-a-b/alignwithnormalmodifier#m-filter), [`SpawnModifiers.Process`](/mod/game-api/types/alta-world-generation/spawnmodifiers#m-process), [`BiomeSwitchFilter.Filter`](/mod/game-api/types/global-a-b/biomeswitchfilter#m-filter), [`DistanceFilter.EvaluateDistance`](/mod/game-api/types/global-c-d/distancefilter#m-evaluatedistance), [`DistanceFilter.Filter`](/mod/game-api/types/global-c-d/distancefilter#m-filter), [`DistanceToEdgeFilter.EvaluateDistance`](/mod/game-api/types/global-c-d/distancetoedgefilter#m-evaluatedistance), [`DistanceToPathFilter.EvaluateDistance`](/mod/game-api/types/global-c-d/distancetopathfilter#m-evaluatedistance), [`DistanceToRiverFilter.EvaluateDistance`](/mod/game-api/types/global-c-d/distancetoriverfilter#m-evaluatedistance), [`EdgeCutFilter.Filter`](/mod/game-api/types/global-e-h/edgecutfilter#m-filter), [`ElevationFromPath.Filter`](/mod/game-api/types/global-e-h/elevationfrompath#m-filter), [`HeightFilter.Filter`](/mod/game-api/types/global-e-h/heightfilter#m-filter), [`HeightProgressFilter.Filter`](/mod/game-api/types/global-e-h/heightprogressfilter#m-filter), [`InsetModifier.Filter`](/mod/game-api/types/global-i-l/insetmodifier#m-filter), [`NormalFilter.Filter`](/mod/game-api/types/global-m-o/normalfilter#m-filter), [`RandomCutFilter.Filter`](/mod/game-api/types/global-q-r/randomcutfilter#m-filter), [`RandomCutPointNormalFilter.Filter`](/mod/game-api/types/global-q-r/randomcutpointnormalfilter#m-filter), [`RandomOffsetFilter.Filter`](/mod/game-api/types/global-q-r/randomoffsetfilter#m-filter), [`RandomRotationModifier.Filter`](/mod/game-api/types/global-q-r/randomrotationmodifier#m-filter), [`RandomScaleModifier.Filter`](/mod/game-api/types/global-q-r/randomscalemodifier#m-filter), [`ScaleWithScoreModifier.Filter`](/mod/game-api/types/global-s/scalewithscoremodifier#m-filter), [`SetKinematicModifier.Filter`](/mod/game-api/types/global-s/setkinematicmodifier#m-filter), [`SetNetworkPrefabModifier.Filter`](/mod/game-api/types/global-s/setnetworkprefabmodifier#m-filter), [`SetPrefabModifier.Filter`](/mod/game-api/types/global-s/setprefabmodifier#m-filter), [`SimpleNoiseFilter.Filter`](/mod/game-api/types/global-s/simplenoisefilter#m-filter), [`SpaceFilter.Filter`](/mod/game-api/types/global-s/spacefilter#m-filter), [`SpawnModifier<T>.Filter`](/mod/game-api/types/global-s/spawnmodifier-t#m-filter), [`SpawnModifierPointNormalRedirect.Filter`](/mod/game-api/types/global-s/spawnmodifierpointnormalredirect#m-filter), [`SpawnModifierPointRedirect.Filter`](/mod/game-api/types/global-s/spawnmodifierpointredirect#m-filter), [`SpawnModifierSpawnParametersRedirect.Filter`](/mod/game-api/types/global-s/spawnmodifierspawnparametersredirect#m-filter), [`SphereCastFilter.Filter`](/mod/game-api/types/global-s/spherecastfilter#m-filter).
