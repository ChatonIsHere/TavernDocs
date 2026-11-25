---
title: "CliffFill"
description: "class CliffFill in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CliffFill

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore)
- **Nested types** [`RaycastRequest`](/game-api/types/alta-world-generation/clifffill-raycastrequest)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CliffFill()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cliffevaluator" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestcliffevaluator">{"ForestCliffEvaluator"}</Link>{" cliffEvaluator"}</code> |  |
| <Link id="m-horizontalstep" /><code>{"private int horizontalStep"}</code> |  |
| <Link id="m-horizontalvariation" /><code>{"private float horizontalVariation"}</code> |  |
| <Link id="m-isbottomaligned" /><code>{"private bool isBottomAligned"}</code> |  |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maximumheight" /><code>{"private float maximumHeight"}</code> |  |
| <Link id="m-maximumheightratio" /><code>{"private float maximumHeightRatio"}</code> |  |
| <Link id="m-minimumheight" /><code>{"private float minimumHeight"}</code> |  |
| <Link id="m-minimumheightratio" /><code>{"private float minimumHeightRatio"}</code> |  |
| <Link id="m-verticalcutchance" /><code>{"private float verticalCutChance"}</code> |  |
| <Link id="m-verticalspacing" /><code>{"private float verticalSpacing"}</code> |  |
| <Link id="m-verticalvariation" /><code>{"private float verticalVariation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override async Task GenerateInternal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world/instructionset">{"InstructionSet"}</Link>{" instructions)"}</code> |  |
| <Link id="m-raycasts" /><code>{"protected virtual IEnumerable Raycasts(Vector3 direction, float distance, "}<Link to="/game-api/types/alta-world-generation/clifffill-raycastrequest">{"CliffFill.RaycastRequest"}</Link>{"[] raycastRequests, int pointCount, "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"[] pointNormals) (iterator)"}</code> |  |
