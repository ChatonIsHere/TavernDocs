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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`DelayedImpactResolver`](/game-api/types/alta-items/delayedimpactresolver)
- **Attributes** `IsReadOnly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactDetectorHit("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector, Collision collision)"}</code> | Creates a `DelayedImpactResolver.ImpactDetectorHit` from `tool`, `impactDetector` and `collision`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-contactstructures" /><code>{"private readonly "}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{"[] contactStructures"}</code> | Contact points of the collision, copied when the hit was stored. |
| <Link id="m-impactdetector" /><code>{"private readonly "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | The detector that was hit. |
| <Link id="m-impacttool" /><code>{"private readonly "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" impactTool"}</code> | The tool that made the hit. |
| <Link id="m-relativevelocity" /><code>{"private readonly Vector3 relativeVelocity"}</code> | Relative velocity of the collision. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-process" /><code>{"bool Process(ref "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" bestHit)"}</code> | Generates a hit for each contact point (letting collider modifiers block or change it) and keeps the most effective one in `bestHit`. True if this collision gave the new best. |

## Used in

Members of other types that take, return or hold a `ImpactDetectorHit`:

[`DelayedImpactResolver.frameHits`](/game-api/types/alta-items/delayedimpactresolver#m-framehits), [`DelayedImpactResolver.hitsPool`](/game-api/types/alta-items/delayedimpactresolver#m-hitspool), [`DelayedImpactResolver.PushHitsListIntoPool`](/game-api/types/alta-items/delayedimpactresolver#m-pushhitslistintopool).
