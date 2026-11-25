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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Setup(Random rowRandom, "}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code><Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; private set; }"}</code> | The forest layout being filled. |
| <Link id="m-random" /><code>{"Random Random { get; private set; }"}</code> | Random generator for this row, seeded so results repeat. |
| <Link id="m-spawnmodifiers" /><code><Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; set; }"}</code> | Spawn modifiers applied to what this row places. |

## Used in

Members of other types that take, return or hold a `Setup`:

[`AlignWithNormalModifier.Filter`](/game-api/types/global-a-b/alignwithnormalmodifier#m-filter), [`SpawnModifiers.Process`](/game-api/types/alta-world-generation/spawnmodifiers#m-process), [`BiomeSwitchFilter.Filter`](/game-api/types/global-a-b/biomeswitchfilter#m-filter), [`DistanceFilter.EvaluateDistance`](/game-api/types/global-c-d/distancefilter#m-evaluatedistance), [`DistanceFilter.Filter`](/game-api/types/global-c-d/distancefilter#m-filter), [`DistanceToEdgeFilter.EvaluateDistance`](/game-api/types/global-c-d/distancetoedgefilter#m-evaluatedistance), [`DistanceToPathFilter.EvaluateDistance`](/game-api/types/global-c-d/distancetopathfilter#m-evaluatedistance), [`DistanceToRiverFilter.EvaluateDistance`](/game-api/types/global-c-d/distancetoriverfilter#m-evaluatedistance), [`EdgeCutFilter.Filter`](/game-api/types/global-e-h/edgecutfilter#m-filter), [`ElevationFromPath.Filter`](/game-api/types/global-e-h/elevationfrompath#m-filter), [`HeightFilter.Filter`](/game-api/types/global-e-h/heightfilter#m-filter), [`HeightProgressFilter.Filter`](/game-api/types/global-e-h/heightprogressfilter#m-filter), [`InsetModifier.Filter`](/game-api/types/global-i-l/insetmodifier#m-filter), [`NormalFilter.Filter`](/game-api/types/global-m-o/normalfilter#m-filter), [`RandomCutFilter.Filter`](/game-api/types/global-q-r/randomcutfilter#m-filter), [`RandomCutPointNormalFilter.Filter`](/game-api/types/global-q-r/randomcutpointnormalfilter#m-filter), [`RandomOffsetFilter.Filter`](/game-api/types/global-q-r/randomoffsetfilter#m-filter), [`RandomRotationModifier.Filter`](/game-api/types/global-q-r/randomrotationmodifier#m-filter), [`RandomScaleModifier.Filter`](/game-api/types/global-q-r/randomscalemodifier#m-filter), [`ScaleWithScoreModifier.Filter`](/game-api/types/global-s/scalewithscoremodifier#m-filter), [`SetKinematicModifier.Filter`](/game-api/types/global-s/setkinematicmodifier#m-filter), [`SetNetworkPrefabModifier.Filter`](/game-api/types/global-s/setnetworkprefabmodifier#m-filter), [`SetPrefabModifier.Filter`](/game-api/types/global-s/setprefabmodifier#m-filter), [`SimpleNoiseFilter.Filter`](/game-api/types/global-s/simplenoisefilter#m-filter), [`SpaceFilter.Filter`](/game-api/types/global-s/spacefilter#m-filter), [`SpawnModifier<T>.Filter`](/game-api/types/global-s/spawnmodifier-t#m-filter), [`SpawnModifierPointNormalRedirect.Filter`](/game-api/types/global-s/spawnmodifierpointnormalredirect#m-filter), [`SpawnModifierPointRedirect.Filter`](/game-api/types/global-s/spawnmodifierpointredirect#m-filter), [`SpawnModifierSpawnParametersRedirect.Filter`](/game-api/types/global-s/spawnmodifierspawnparametersredirect#m-filter), [`SphereCastFilter.Filter`](/game-api/types/global-s/spherecastfilter#m-filter).
