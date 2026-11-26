---
title: "ImpactDetectorCentral.CentralizedArguments"
description: "Wraps an impact sync message with which of the entity's impact detectors it belongs to, so several detectors can share one network channel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactDetectorCentral.CentralizedArguments

A **private struct** in `Root.Township`, `Alta.Impact`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Wraps an impact sync message with which of the entity's impact detectors it belongs to, so several detectors can share one network channel.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`ImpactDetectorCentral`](/mod/game-api/types/alta-items/impactdetectorcentral)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-items/impactdetector-impactsyncarguments">{"ImpactDetector.ImpactSyncArguments"}</Link>{" arguments"}</code> | <span className="api-desc">The detector's own impact sync data.</span> |
| <Link id="m-detector" /><code><Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | <span className="api-desc">The impact detector this message is for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"[] availableDetectors)"}</code> | <span className="api-desc">Writes or reads the detector as an index into the entity's detector list.</span> |

## Used in

Members of other types that take, return or hold a `CentralizedArguments`:

<div className="api-used-in">

[`ImpactDetectorCentral.syncImpact`](/mod/game-api/types/alta-items/impactdetectorcentral#m-syncimpact), [`ImpactDetectorCentral.SyncImpact`](/mod/game-api/types/alta-items/impactdetectorcentral#m-syncimpact-2).

</div>
