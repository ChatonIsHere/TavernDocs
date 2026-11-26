---
title: "ForestCliffEvaluator"
description: "Forest generation modifier that finds cliffs: chains of normal edges where the height drops by at least cliffMinimum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestCliffEvaluator

A **class** in `Root.Township`, `Alta.Forests`.

Forest generation modifier that finds cliffs: chains of normal edges where the height drops by at least `cliffMinimum`. It records points along them for cliff fills to use.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier)
- **Nested types** [`CliffPoint`](/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestCliffEvaluator()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cliffmaximum" /><code>{"private float cliffMaximum"}</code> | Serialized but not used in this class. |
| <Link id="m-cliffminimum" /><code>{"private float cliffMinimum"}</code> | Smallest height drop across an edge that counts as a cliff. |
| <Link id="m-cliffpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint">{"ForestCliffEvaluator.CliffPoint"}</Link>{"> cliffPoints"}</code> | Backing field for `Points`. |
| <Link id="m-cliffs" /><code>{"private List<List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{">> cliffs"}</code> | Backing field for `Cliffs`. |
| <Link id="m-currentevaluation" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> currentEvaluation"}</code> | Paths visited by the current `EvaluateCliff` walk, to stop loops. |
| <Link id="m-evaluated" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> evaluated"}</code> | Edges already added to a cliff. |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | Terrain layer mask. Set in `Awake` but not used in this class. |
| <Link id="m-stepx" /><code>{"private float stepX"}</code> | Spacing between cliff points. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cliffs-2" /><code>{"List<List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{">> Cliffs { get; }"}</code> | Each cliff found, as an ordered list of downhill paths. |
| <Link id="m-points" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint">{"ForestCliffEvaluator.CliffPoint"}</Link>{"> Points { get; }"}</code> | Points spaced along every cliff, with direction and height. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Finds every cliff in the forest, then places a `CliffPoint` every `stepX` metres along each one. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the raycast layer mask to Terrain. |
| <Link id="m-evaluatecliff" /><code>{"private void EvaluateCliff("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> cliff, "}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{" first)"}</code> | Walks round from a steep path to collect the neighbouring steep paths that form one cliff. |
| <Link id="m-islegitimateedge" /><code>{"private bool IsLegitimateEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | False for edges touching an entrance node. |

</details>

## Used in

Members of other types that take, return or hold a `ForestCliffEvaluator`:

[`CliffFill.cliffEvaluator`](/game-api/types/alta-world-generation/clifffill#m-cliffevaluator).
