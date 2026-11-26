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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SparkArgument`](/mod/game-api/types/alta-items/sparksecondarydetector-sparkargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SparkSecondaryDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basedetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" baseDetector"}</code> | <span className="api-desc">The impact detector whose hits are checked.</span> |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | <span className="api-desc">Colliders that make sparks when struck.</span> |
| <Link id="m-hitsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hitSettings"}</code> | <span className="api-desc">Settings used to play the hit effects.</span> |
| <Link id="m-maximumfirechance" /><code>{"private float maximumFireChance"}</code> | <span className="api-desc">Chance to light at full effectiveness.</span> |
| <Link id="m-minimumfirechance" /><code>{"private float minimumFireChance"}</code> | <span className="api-desc">Chance to light at zero effectiveness.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius of the spark check.</span> |
| <Link id="m-sparkchannels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] sparkChannels"}</code> | <span className="api-desc">Impact channels that can make sparks.</span> |
| <Link id="m-syncspark" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/sparksecondarydetector-sparkargument">{"SparkSecondaryDetector.SparkArgument"}</Link>{"> syncSpark"}</code> | <span className="api-desc">Synced method that sends sparks from client to server.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the base detector's hits on the server or client side and sets up the spark message.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientspark" /><code>{"private void ClientSpark("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">Client: on a valid hit by the local player's tool, sends the spark to the server and plays effects.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the spark radius in the editor.</span> |
| <Link id="m-serverspark" /><code>{"private void ServerSpark("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">Server: on a valid hit, runs `Fire.SimulateSparks` at the hit point.</span> |
| <Link id="m-syncspark-2" /><code>{"private void SyncSpark("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/sparksecondarydetector-sparkargument">{"SparkSecondaryDetector.SparkArgument"}</Link>{" arguments)"}</code> | <span className="api-desc">Sends the hit point (relative, within 10 m) and effectiveness; the server runs `Fire.SimulateSparks` on receipt.</span> |
| <Link id="m-validatehit" /><code>{"private bool ValidateHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">True if the hit is on a spark channel and struck one of `colliders`.</span> |

</details>
