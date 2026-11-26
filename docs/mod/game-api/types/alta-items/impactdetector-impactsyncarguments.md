---
title: "ImpactDetector.ImpactSyncArguments"
description: "A hit on an ImpactDetector, sent to the chunk by the client whose player hit something or was hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactDetector.ImpactSyncArguments

A **struct** in `Root.Township`, `Alta.Impact`.

A hit on an `ImpactDetector`, sent to the chunk by the client whose player hit something or was hit. Built from an `ImpactHitWithTool`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`ImpactDetector`](/mod/game-api/types/alta-items/impactdetector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSyncArguments("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" impactWithTool)"}</code> | Creates an `ImpactDetector.ImpactSyncArguments` from `impactWithTool`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channelindex" /><code>{"int channelIndex"}</code> | Index of the impactor's channel that hit (0 to 7). |
| <Link id="m-effectiveness" /><code>{"float effectiveness"}</code> | How effective the hit was, 0 to 1. |
| <Link id="m-impactorindex" /><code>{"int impactorIndex"}</code> | Index of the impactor on the tool (0 to 63). |
| <Link id="m-impacttoolidentifier" /><code>{"uint impactToolIdentifier"}</code> | Entity id of the tool that hit. |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | Surface normal at the hit. |
| <Link id="m-point" /><code>{"Vector3 point"}</code> | World position of the hit. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 center)"}</code> | Writes or reads the hit, sending the point as an offset of up to 10 metres from the detector's position. |

## Used in

Members of other types that take, return or hold a `ImpactSyncArguments`:

[`ImpactDetector.syncImpact`](/mod/game-api/types/alta-items/impactdetector#m-syncimpact), [`ImpactDetector.SyncImpact`](/mod/game-api/types/alta-items/impactdetector#m-syncimpact-2), [`ImpactDetectorCentral.SendArguments`](/mod/game-api/types/alta-items/impactdetectorcentral#m-sendarguments), [`ImpactDetectorCentral.CentralizedArguments.arguments`](/mod/game-api/types/alta-items/impactdetectorcentral-centralizedarguments#m-arguments).
