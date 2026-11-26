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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`ImpactDetectorCentral`](/game-api/types/alta-items/impactdetectorcentral)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/alta-items/impactdetector-impactsyncarguments">{"ImpactDetector.ImpactSyncArguments"}</Link>{" arguments"}</code> | The detector's own impact sync data. |
| <Link id="m-detector" /><code><Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | The impact detector this message is for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"[] availableDetectors)"}</code> | Writes or reads the detector as an index into the entity's detector list. |

## Used in

Members of other types that take, return or hold a `CentralizedArguments`:

[`ImpactDetectorCentral.syncImpact`](/game-api/types/alta-items/impactdetectorcentral#m-syncimpact), [`ImpactDetectorCentral.SyncImpact`](/game-api/types/alta-items/impactdetectorcentral#m-syncimpact-2).
