---
title: "ImpactDetectorCentral"
description: "Sends impact syncs for all the ImpactDetector components on one entity through a single method sync, with the detector's index in the message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactDetectorCentral

A **class** in `Root.Township`, `Alta.Impact`.

Sends impact syncs for all the `ImpactDetector` components on one entity through a single method sync, with the detector's index in the message. Both sides.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`CentralizedArguments`](/game-api/types/alta-items/impactdetectorcentral-centralizedarguments)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactDetectorCentral()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availabledetectors" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"[] availableDetectors"}</code> | The `ImpactDetector` components on this object, found automatically. |
| <Link id="m-syncimpact" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/impactdetectorcentral-centralizedarguments">{"ImpactDetectorCentral.CentralizedArguments"}</Link>{"> syncImpact"}</code> | The shared impact method sync. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `syncImpact` method sync. |
| <Link id="m-sendarguments" /><code>{"void SendArguments("}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector, "}<Link to="/game-api/types/alta-items/impactdetector-impactsyncarguments">{"ImpactDetector.ImpactSyncArguments"}</Link>{" arguments)"}</code> | Sends an impact for one of the entity's detectors to the chunk. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncimpact-2" /><code>{"private void SyncImpact("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/impactdetectorcentral-centralizedarguments">{"ImpactDetectorCentral.CentralizedArguments"}</Link>{" arguments)"}</code> | Method sync handler: writes or reads which detector it is, then lets that detector sync the impact. |

</details>

## Used in

Members of other types that take, return or hold a `ImpactDetectorCentral`:

[`ImpactDetector.detectorCentral`](/game-api/types/alta-items/impactdetector#m-detectorcentral).
