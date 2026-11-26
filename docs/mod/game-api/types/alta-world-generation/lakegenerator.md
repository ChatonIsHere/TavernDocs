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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LakeGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alldebugedges" /><code>{"private List<List<Vector3>> allDebugEdges"}</code> | <span className="api-desc">Shorelines traced, for gizmos.</span> |
| <Link id="m-btnregenerate" /><code>{"private bool btnRegenerate"}</code> | <span className="api-desc">Inspector button for `Regenerate`.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Material for lake meshes.</span> |
| <Link id="m-rivergenerator" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" riverGenerator"}</code> | <span className="api-desc">River generator to read nodes from.</span> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | <span className="api-desc">Least river volume that makes a lake.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatewateredge" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> EvaluateWaterEdge(float waterHeight, ref "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" path)"}</code> | <span className="api-desc">Walks the shoreline at the water height. Returns null if it doesn't close within 100 steps.</span> |
| <Link id="m-generatelake" /><code>{"private void GenerateLake("}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" center, float waterHeight)"}</code> | <span className="api-desc">Builds a flat lake mesh object inside the shoreline at the water height.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the traced shorelines.</span> |
| <Link id="m-regenerate" /><code>{"private void Regenerate()"}</code> | <span className="api-desc">Editor button: finds river end nodes with enough volume, works out how high they'd fill and makes lakes.</span> |

</details>
