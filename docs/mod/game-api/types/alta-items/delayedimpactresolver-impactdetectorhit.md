---
title: "DelayedImpactResolver.ImpactDetectorHit"
description: "One collision between an impact tool and an impact detector, stored by DelayedImpactResolver.Hit so all of a tool's hits in a frame can be compared in late..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedImpactResolver.ImpactDetectorHit

A **private struct** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One collision between an impact tool and an impact detector, stored by `DelayedImpactResolver.Hit` so all of a tool's hits in a frame can be compared in late update.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`DelayedImpactResolver`](/mod/game-api/types/alta-items/delayedimpactresolver)
- **Attributes** `IsReadOnly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactDetectorHit("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector, Collision collision)"}</code> | <span className="api-desc">Creates a `DelayedImpactResolver.ImpactDetectorHit` from `tool`, `impactDetector` and `collision`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-contactstructures" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactStructures"}</code> | <span className="api-desc">Contact points of the collision, copied when the hit was stored.</span> |
| <Link id="m-impactdetector" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | <span className="api-desc">The detector that was hit.</span> |
| <Link id="m-impacttool" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> | <span className="api-desc">The tool that made the hit.</span> |
| <Link id="m-relativevelocity" /><code>{"private readonly Vector3 relativeVelocity"}</code> | <span className="api-desc">Relative velocity of the collision.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"bool Process(ref "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit)"}</code> | <span className="api-desc">Generates a hit for each contact point (letting collider modifiers block or change it) and keeps the most effective one in `bestHit`. True if this collision gave the new best.</span> |

## Used in

Members of other types that take, return or hold a `ImpactDetectorHit`:

<div className="api-used-in">

[`DelayedImpactResolver.frameHits`](/mod/game-api/types/alta-items/delayedimpactresolver#m-framehits), [`DelayedImpactResolver.hitsPool`](/mod/game-api/types/alta-items/delayedimpactresolver#m-hitspool), [`DelayedImpactResolver.PushHitsListIntoPool`](/mod/game-api/types/alta-items/delayedimpactresolver#m-pushhitslistintopool).

</div>
