---
title: "TriggerImpactTool.DelayedHit"
description: "A hit TriggerImpactTool collects during a frame and runs later with a delayed call."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerImpactTool.DelayedHit

A **private struct** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A hit `TriggerImpactTool` collects during a frame and runs later with a delayed call.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`TriggerImpactTool`](/game-api/types/alta-items/triggerimpacttool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayedHit("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactHit)"}</code> | Creates a `TriggerImpactTool.DelayedHit` from `detector` and `impactHit`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-detector" /><code><Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | The impact detector that was hit. |
| <Link id="m-impacthit" /><code><Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactHit"}</code> | The best hit found for that detector. |

## Used in

Members of other types that take, return or hold a `DelayedHit`:

[`TriggerImpactTool.frameHits`](/game-api/types/alta-items/triggerimpacttool#m-framehits).
