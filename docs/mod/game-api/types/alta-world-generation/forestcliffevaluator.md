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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/mod/game-api/types/alta-world-generation/nodemapmodifier)
- **Nested types** [`CliffPoint`](/mod/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestCliffEvaluator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cliffmaximum" /><code>{"private float cliffMaximum"}</code> | <span className="api-desc">Serialized but not used in this class.</span> |
| <Link id="m-cliffminimum" /><code>{"private float cliffMinimum"}</code> | <span className="api-desc">Smallest height drop across an edge that counts as a cliff.</span> |
| <Link id="m-cliffpoints" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint">{"ForestCliffEvaluator.CliffPoint"}</Link>{"> cliffPoints"}</code> | <span className="api-desc">Backing field for `Points`.</span> |
| <Link id="m-cliffs" /><code>{"private List<List<"}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{">> cliffs"}</code> | <span className="api-desc">Backing field for `Cliffs`.</span> |
| <Link id="m-currentevaluation" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> currentEvaluation"}</code> | <span className="api-desc">Paths visited by the current `EvaluateCliff` walk, to stop loops.</span> |
| <Link id="m-evaluated" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> evaluated"}</code> | <span className="api-desc">Edges already added to a cliff.</span> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | <span className="api-desc">Terrain layer mask. Set in `Awake` but not used in this class.</span> |
| <Link id="m-stepx" /><code>{"private float stepX"}</code> | <span className="api-desc">Spacing between cliff points.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cliffs-2" /><code>{"List<List<"}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{">> Cliffs { get; }"}</code> | <span className="api-desc">Each cliff found, as an ordered list of downhill paths.</span> |
| <Link id="m-points" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint">{"ForestCliffEvaluator.CliffPoint"}</Link>{"> Points { get; }"}</code> | <span className="api-desc">Points spaced along every cliff, with direction and height.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Finds every cliff in the forest, then places a `CliffPoint` every `stepX` metres along each one.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the raycast layer mask to Terrain.</span> |
| <Link id="m-evaluatecliff" /><code>{"private void EvaluateCliff("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, List<"}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> cliff, "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" first)"}</code> | <span className="api-desc">Walks round from a steep path to collect the neighbouring steep paths that form one cliff.</span> |
| <Link id="m-islegitimateedge" /><code>{"private bool IsLegitimateEdge("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> | <span className="api-desc">False for edges touching an entrance node.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ForestCliffEvaluator`:

<div className="api-used-in">

[`CliffFill.cliffEvaluator`](/mod/game-api/types/alta-world-generation/clifffill#m-cliffevaluator).

</div>
