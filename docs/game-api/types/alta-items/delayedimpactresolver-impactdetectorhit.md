---
title: "DelayedImpactResolver.ImpactDetectorHit"
description: "struct DelayedImpactResolver.ImpactDetectorHit in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedImpactResolver.ImpactDetectorHit

A **private struct** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`DelayedImpactResolver`](/game-api/types/alta-items/delayedimpactresolver)
- **Attributes** `IsReadOnly`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactDetectorHit("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector, Collision collision)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-contactstructures" /><code>{"private readonly "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactStructures"}</code> |
| <Link id="m-impactdetector" /><code>{"private readonly "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> |
| <Link id="m-impacttool" /><code>{"private readonly "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> |
| <Link id="m-relativevelocity" /><code>{"private readonly Vector3 relativeVelocity"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-process" /><code>{"bool Process(ref "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit)"}</code> |

## Used in

Members of other types that take, return or hold a `ImpactDetectorHit`:

[`DelayedImpactResolver.frameHits`](/game-api/types/alta-items/delayedimpactresolver#m-framehits), [`DelayedImpactResolver.hitsPool`](/game-api/types/alta-items/delayedimpactresolver#m-hitspool), [`DelayedImpactResolver.PushHitsListIntoPool`](/game-api/types/alta-items/delayedimpactresolver#m-pushhitslistintopool).
