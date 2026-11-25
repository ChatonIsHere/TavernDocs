---
title: "ForestCliffEvaluator"
description: "class ForestCliffEvaluator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestCliffEvaluator

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier)
- **Nested types** [`CliffPoint`](/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestCliffEvaluator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cliffmaximum" /><code>{"private float cliffMaximum"}</code> |  |
| <Link id="m-cliffminimum" /><code>{"private float cliffMinimum"}</code> |  |
| <Link id="m-cliffpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint">{"ForestCliffEvaluator.CliffPoint"}</Link>{"> cliffPoints"}</code> |  |
| <Link id="m-cliffs" /><code>{"private List<List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{">> cliffs"}</code> |  |
| <Link id="m-currentevaluation" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> currentEvaluation"}</code> |  |
| <Link id="m-evaluated" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> evaluated"}</code> |  |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> |  |
| <Link id="m-stepx" /><code>{"private float stepX"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cliffs-2" /><code>{"List<List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{">> Cliffs { get; }"}</code> |  |
| <Link id="m-points" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint">{"ForestCliffEvaluator.CliffPoint"}</Link>{"> Points { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-evaluatecliff" /><code>{"private void EvaluateCliff("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> cliff, "}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{" first)"}</code> |  |
| <Link id="m-islegitimateedge" /><code>{"private bool IsLegitimateEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ForestCliffEvaluator`:

[`CliffFill.cliffEvaluator`](/game-api/types/alta-world-generation/clifffill#m-cliffevaluator).
