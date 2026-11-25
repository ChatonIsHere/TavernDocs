---
title: "RiverMeshTest"
description: "class RiverMeshTest in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverMeshTest

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IRiverVisual`](/game-api/types/alta-world-generation/irivervisual)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RiverMeshTest()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-elevationcurve" /><code>{"private AnimationCurve elevationCurve"}</code> |
| <Link id="m-forest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> |
| <Link id="m-mergealignmentminimum" /><code>{"private float mergeAlignmentMinimum"}</code> |
| <Link id="m-mergepercentageminimum" /><code>{"private float mergePercentageMinimum"}</code> |
| <Link id="m-offset" /><code>{"private float offset"}</code> |
| <Link id="m-pathsplines" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{", "}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> pathSplines"}</code> |
| <Link id="m-piecesparent" /><code>{"private static Transform piecesParent"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" prefab"}</code> |
| <Link id="m-river" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> |
| <Link id="m-riversegments" /><code>{"private int riverSegments"}</code> |
| <Link id="m-riverswithchunksassigned" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> riversWithChunksAssigned"}</code> |
| <Link id="m-splines" /><code>{"private List<"}<Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{"> splines"}</code> |
| <Link id="m-terrainmask" /><code>{"private LayerMask terrainMask"}</code> |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" generation)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-evaluatemergepower" /><code>{"private float EvaluateMergePower("}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> |
| <Link id="m-evaluatevalidmerge" /><code>{"private bool EvaluateValidMerge("}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" path)"}</code> |
| <Link id="m-generate-2" /><code>{"private void Generate("}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" end)"}</code> |
| <Link id="m-generate-3" /><code>{"private void Generate("}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" lastPath)"}</code> |
| <Link id="m-traceback" /><code>{"private void TraceBack(ref "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" from)"}</code> |

</details>
