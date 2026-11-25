---
title: "SparkSecondaryDetector"
description: "class SparkSecondaryDetector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SparkSecondaryDetector

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SparkArgument`](/game-api/types/alta-items/sparksecondarydetector-sparkargument)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SparkSecondaryDetector()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basedetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" baseDetector"}</code> |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> |
| <Link id="m-hitsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hitSettings"}</code> |
| <Link id="m-maximumfirechance" /><code>{"private float maximumFireChance"}</code> |
| <Link id="m-minimumfirechance" /><code>{"private float minimumFireChance"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |
| <Link id="m-sparkchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] sparkChannels"}</code> |
| <Link id="m-syncspark" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/sparksecondarydetector-sparkargument">{"SparkSecondaryDetector.SparkArgument"}</Link>{"> syncSpark"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clientspark" /><code>{"private void ClientSpark("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-serverspark" /><code>{"private void ServerSpark("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> |
| <Link id="m-syncspark-2" /><code>{"private void SyncSpark("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/sparksecondarydetector-sparkargument">{"SparkSecondaryDetector.SparkArgument"}</Link>{" arguments)"}</code> |
| <Link id="m-validatehit" /><code>{"private bool ValidateHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> |

</details>
