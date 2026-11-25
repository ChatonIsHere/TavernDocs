---
title: "ForestAttributeEvaluator"
description: "class ForestAttributeEvaluator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestAttributeEvaluator

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestAttributeEvaluator()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-biomes" /><code>{"private "}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] biomes"}</code> |
| <Link id="m-definitions" /><code>{"private "}<Link to="/game-api/types/global-s/specialbiomeattributes">{"SpecialBiomeAttributes"}</Link>{" definitions"}</code> |
| <Link id="m-isdoingnodes" /><code>{"private bool isDoingNodes"}</code> |
| <Link id="m-isdoingpaths" /><code>{"private bool isDoingPaths"}</code> |
| <Link id="m-isevaluatingbiomes" /><code>{"private bool isEvaluatingBiomes"}</code> |
| <Link id="m-isevaluatingnodecontext" /><code>{"private bool isEvaluatingNodeContext"}</code> |
| <Link id="m-isevaluatingpathcontext" /><code>{"private bool isEvaluatingPathContext"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-evaluateedge" /><code>{"private void EvaluateEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random random, "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge)"}</code> |
| <Link id="m-evaluatenode" /><code>{"private void EvaluateNode("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random random, "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" node)"}</code> |

</details>
