---
title: "RiverMeshTest"
description: "Builds the river's visual mesh as RAM splines, one per run of merged river paths, and shows or hides each path with its chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverMeshTest

A **class** in `Root.Township`, `Alta.Forests`.

Builds the river's visual mesh as RAM splines, one per run of merged river paths, and shows or hides each path with its chunk.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IRiverVisual`](/mod/game-api/types/alta-world-generation/irivervisual)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverMeshTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elevationcurve" /><code>{"private AnimationCurve elevationCurve"}</code> | <span className="api-desc">Elevation curve passed to each spline point.</span> |
| <Link id="m-forest" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | <span className="api-desc">The forest generator, set in the inspector.</span> |
| <Link id="m-mergealignmentminimum" /><code>{"private float mergeAlignmentMinimum"}</code> | <span className="api-desc">Minimum dot product of directions for two paths to count as one flow.</span> |
| <Link id="m-mergepercentageminimum" /><code>{"private float mergePercentageMinimum"}</code> | <span className="api-desc">Minimum volume, as a share of the downstream volume, for a path to count as merging.</span> |
| <Link id="m-offset" /><code>{"private float offset"}</code> | <span className="api-desc">Vertical offset of the spline from the river path.</span> |
| <Link id="m-pathsplines" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{", "}<Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> pathSplines"}</code> | <span className="api-desc">The spline built for each starting river node.</span> |
| <Link id="m-piecesparent" /><code>{"private static Transform piecesParent"}</code> | <span className="api-desc">Static transform field; this code doesn't use it.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" prefab"}</code> | <span className="api-desc">RAM spline prefab cloned for each run.</span> |
| <Link id="m-river" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | <span className="api-desc">The river generator, set in the inspector.</span> |
| <Link id="m-riversegments" /><code>{"private int riverSegments"}</code> | <span className="api-desc">How many spline points are added along each river path.</span> |
| <Link id="m-riverswithchunksassigned" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> riversWithChunksAssigned"}</code> | <span className="api-desc">Paths already hooked to their chunk's load and unload events.</span> |
| <Link id="m-splines" /><code>{"private List<"}<Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> splines"}</code> | <span className="api-desc">All splines built so far.</span> |
| <Link id="m-terrainmask" /><code>{"private LayerMask terrainMask"}</code> | <span className="api-desc">Layers the spline snaps to.</span> |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> | <span className="api-desc">Spline width as a multiple of river width.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/mod/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" generation)"}</code> | <span className="api-desc">Builds splines working back from each river end. The private overloads handle a node or a path and recurse upstream.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatemergepower" /><code>{"private float EvaluateMergePower("}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> | <span className="api-desc">Share of the incoming flow this path brings to its end node, by width, or 0 if it isn't a valid merge.</span> |
| <Link id="m-evaluatevalidmerge" /><code>{"private bool EvaluateValidMerge("}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> | <span className="api-desc">Whether a path joins smoothly into the next one: overground, enough volume, and aligned or dropping.</span> |
| <Link id="m-generate-2" /><code>{"private void Generate("}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" end)"}</code> | <span className="api-desc">Builds splines working back from each river end. The private overloads handle a node or a path and recurse upstream.</span> |
| <Link id="m-generate-3" /><code>{"private void Generate("}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" lastPath)"}</code> | <span className="api-desc">Builds splines working back from each river end. The private overloads handle a node or a path and recurse upstream.</span> |
| <Link id="m-traceback" /><code>{"private void TraceBack(ref "}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" from)"}</code> | <span className="api-desc">Walks upstream from a node while there is exactly one valid merging path.</span> |

</details>
