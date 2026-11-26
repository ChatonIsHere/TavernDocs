---
title: "CliffFill"
description: "Forest fill step that places objects up the face of cliffs, using the points from a ForestCliffEvaluator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CliffFill

A **class** in `Root.Township`, `Alta.Forests`.

Forest fill step that places objects up the face of cliffs, using the points from a `ForestCliffEvaluator`. Runs during static chunk generation, mostly off the main thread.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore)
- **Nested types** [`RaycastRequest`](/game-api/types/alta-world-generation/clifffill-raycastrequest)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CliffFill()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cliffevaluator" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestcliffevaluator">{"ForestCliffEvaluator"}</Link>{" cliffEvaluator"}</code> | Source of cliff points with their position, height, facing and ray length. |
| <Link id="m-horizontalstep" /><code>{"private int horizontalStep"}</code> | Uses every Nth cliff point. |
| <Link id="m-horizontalvariation" /><code>{"private float horizontalVariation"}</code> | Random sideways offset along the cliff. |
| <Link id="m-isbottomaligned" /><code>{"private bool isBottomAligned"}</code> | Count rows up from the bottom instead of down from the top. |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | Layers the cliff raycasts hit. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maximumheight" /><code>{"private float maximumHeight"}</code> | Highest point on a cliff that gets objects, in metres. |
| <Link id="m-maximumheightratio" /><code>{"private float maximumHeightRatio"}</code> | Highest point as a fraction of the cliff's height. |
| <Link id="m-minimumheight" /><code>{"private float minimumHeight"}</code> | Lowest point on a cliff that gets objects, in metres. |
| <Link id="m-minimumheightratio" /><code>{"private float minimumHeightRatio"}</code> | Lowest point as a fraction of the cliff's height. |
| <Link id="m-verticalcutchance" /><code>{"private float verticalCutChance"}</code> | Chance each row is skipped. |
| <Link id="m-verticalspacing" /><code>{"private float verticalSpacing"}</code> | Metres between rows up the cliff. |
| <Link id="m-verticalvariation" /><code>{"private float verticalVariation"}</code> | Random up and down offset per row. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override async Task GenerateInternal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> | For each cliff point in the chunk, picks heights up the cliff, raycasts into the face on the main thread and adds spawn instructions for hits that pass the fill's modifiers. |
| <Link id="m-raycasts" /><code>{"protected virtual IEnumerable Raycasts(Vector3 direction, float distance, "}<Link to="/game-api/types/alta-world-generation/clifffill-raycastrequest">{"CliffFill.RaycastRequest"}</Link>{"[] raycastRequests, int pointCount, "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"[] pointNormals) (iterator)"}</code> | Main-thread job: casts each request into the cliff along its direction and records the hit point and normal. |
