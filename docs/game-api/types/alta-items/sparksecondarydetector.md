---
title: "SparkSecondaryDetector"
description: "Makes sparks when certain colliders are struck on spark channels, which can light nearby flammables."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SparkSecondaryDetector

A **class** in `Root.Township`, `Alta.Impact`.

Makes sparks when certain colliders are struck on spark channels, which can light nearby flammables. The wielding client reports its hit and the server runs the sparks.

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

| Member | What it is |
| --- | --- |
| <Link id="m-basedetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" baseDetector"}</code> | The impact detector whose hits are checked. |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | Colliders that make sparks when struck. |
| <Link id="m-hitsettings" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hitSettings"}</code> | Settings used to play the hit effects. |
| <Link id="m-maximumfirechance" /><code>{"private float maximumFireChance"}</code> | Chance to light at full effectiveness. |
| <Link id="m-minimumfirechance" /><code>{"private float minimumFireChance"}</code> | Chance to light at zero effectiveness. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Radius of the spark check. |
| <Link id="m-sparkchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] sparkChannels"}</code> | Impact channels that can make sparks. |
| <Link id="m-syncspark" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-items/sparksecondarydetector-sparkargument">{"SparkSecondaryDetector.SparkArgument"}</Link>{"> syncSpark"}</code> | Synced method that sends sparks from client to server. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the base detector's hits on the server or client side and sets up the spark message. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientspark" /><code>{"private void ClientSpark("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | Client: on a valid hit by the local player's tool, sends the spark to the server and plays effects. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the spark radius in the editor. |
| <Link id="m-serverspark" /><code>{"private void ServerSpark("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | Server: on a valid hit, runs `Fire.SimulateSparks` at the hit point. |
| <Link id="m-syncspark-2" /><code>{"private void SyncSpark("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/sparksecondarydetector-sparkargument">{"SparkSecondaryDetector.SparkArgument"}</Link>{" arguments)"}</code> | Sends the hit point (relative, within 10 m) and effectiveness; the server runs `Fire.SimulateSparks` on receipt. |
| <Link id="m-validatehit" /><code>{"private bool ValidateHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | True if the hit is on a spark channel and struck one of `colliders`. |

</details>
