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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IRiverVisual`](/game-api/types/alta-world-generation/irivervisual)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverMeshTest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elevationcurve" /><code>{"private AnimationCurve elevationCurve"}</code> | Elevation curve passed to each spline point. |
| <Link id="m-forest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | The forest generator, set in the inspector. |
| <Link id="m-mergealignmentminimum" /><code>{"private float mergeAlignmentMinimum"}</code> | Minimum dot product of directions for two paths to count as one flow. |
| <Link id="m-mergepercentageminimum" /><code>{"private float mergePercentageMinimum"}</code> | Minimum volume, as a share of the downstream volume, for a path to count as merging. |
| <Link id="m-offset" /><code>{"private float offset"}</code> | Vertical offset of the spline from the river path. |
| <Link id="m-pathsplines" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{", "}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> pathSplines"}</code> | The spline built for each starting river node. |
| <Link id="m-piecesparent" /><code>{"private static Transform piecesParent"}</code> | Static transform field; this code doesn't use it. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" prefab"}</code> | RAM spline prefab cloned for each run. |
| <Link id="m-river" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | The river generator, set in the inspector. |
| <Link id="m-riversegments" /><code>{"private int riverSegments"}</code> | How many spline points are added along each river path. |
| <Link id="m-riverswithchunksassigned" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> riversWithChunksAssigned"}</code> | Paths already hooked to their chunk's load and unload events. |
| <Link id="m-splines" /><code>{"private List<"}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> splines"}</code> | All splines built so far. |
| <Link id="m-terrainmask" /><code>{"private LayerMask terrainMask"}</code> | Layers the spline snaps to. |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> | Spline width as a multiple of river width. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" generation)"}</code> | Builds splines working back from each river end. The private overloads handle a node or a path and recurse upstream. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatemergepower" /><code>{"private float EvaluateMergePower("}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> | Share of the incoming flow this path brings to its end node, by width, or 0 if it isn't a valid merge. |
| <Link id="m-evaluatevalidmerge" /><code>{"private bool EvaluateValidMerge("}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> | Whether a path joins smoothly into the next one: overground, enough volume, and aligned or dropping. |
| <Link id="m-generate-2" /><code>{"private void Generate("}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" end)"}</code> | Builds splines working back from each river end. The private overloads handle a node or a path and recurse upstream. |
| <Link id="m-generate-3" /><code>{"private void Generate("}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" lastPath)"}</code> | Builds splines working back from each river end. The private overloads handle a node or a path and recurse upstream. |
| <Link id="m-traceback" /><code>{"private void TraceBack(ref "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" from)"}</code> | Walks upstream from a node while there is exactly one valid merging path. |

</details>
