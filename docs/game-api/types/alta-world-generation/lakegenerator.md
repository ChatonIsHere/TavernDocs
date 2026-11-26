---
title: "LakeGenerator"
description: "Editor test tool that builds lake meshes where rivers end in a basin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LakeGenerator

A **class** in `Root.Township`, `Alta.Forests`.

Editor test tool that builds lake meshes where rivers end in a basin. Not part of normal generation.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LakeGenerator()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alldebugedges" /><code>{"private List<List<Vector3>> allDebugEdges"}</code> | Shorelines traced, for gizmos. |
| <Link id="m-btnregenerate" /><code>{"private bool btnRegenerate"}</code> | Inspector button for `Regenerate`. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Material for lake meshes. |
| <Link id="m-rivergenerator" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" riverGenerator"}</code> | River generator to read nodes from. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Least river volume that makes a lake. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatewateredge" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> EvaluateWaterEdge(float waterHeight, ref "}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{" path)"}</code> | Walks the shoreline at the water height. Returns null if it doesn't close within 100 steps. |
| <Link id="m-generatelake" /><code>{"private void GenerateLake("}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" center, float waterHeight)"}</code> | Builds a flat lake mesh object inside the shoreline at the water height. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the traced shorelines. |
| <Link id="m-regenerate" /><code>{"private void Regenerate()"}</code> | Editor button: finds river end nodes with enough volume, works out how high they'd fill and makes lakes. |

</details>
