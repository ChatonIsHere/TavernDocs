---
title: "BreakOnImpact"
description: "Server checks collisions on a networked object: a fast enough hit plays a hit effect, a faster one breaks it and runs the server break event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BreakOnImpact

A **class** in `Root.Township`, no namespace.

Server checks collisions on a networked object: a fast enough hit plays a hit effect, a faster one breaks it and runs the server break event. Effects are synced to nearby clients.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`PickupBreakOnImpact`](/game-api/types/alta-items/pickupbreakonimpact)
- **Nested types** [`TransformProxyEvent`](/game-api/types/global-a-b/breakonimpact-transformproxyevent), [`TransformProxyHandler`](/game-api/types/global-a-b/breakonimpact-transformproxyhandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BreakOnImpact()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-breakvelocitysquared" /><code>{"protected float breakVelocitySquared"}</code> | Squared relative speed needed to break (64, so 8 m/s). |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitvelocitysquared" /><code>{"private float hitVelocitySquared"}</code> | Squared relative speed needed for a hit effect (16, so 4 m/s). |
| <Link id="m-isalignedwithhitnormal" /><code>{"private bool isAlignedWithHitNormal"}</code> | If true, effects face the contact normal and their position is sent; otherwise they use the object's transform. |
| <Link id="m-lastsafetylock" /><code>{"private float lastSafetyLock"}</code> | Time the safety lock last started. |
| <Link id="m-onclientbreak" /><code>{"private "}<Link to="/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" onClientBreak"}</code> | Break effect event. Not run on a headless server. |
| <Link id="m-onhit" /><code>{"private UnityEvent onHit"}</code> | Hit effect event. Not run on a headless server. |
| <Link id="m-onserverbreak" /><code>{"private "}<Link to="/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" onServerBreak"}</code> | Server event when the object breaks, for the gameplay result. |
| <Link id="m-safetylockduration" /><code>{"private float safetyLockDuration"}</code> | Seconds after a grab or teleport during which it can't break (0.5 by default). |
| <Link id="m-syncbreaking" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{"> syncBreaking"}</code> | Network sync for break effects. |
| <Link id="m-synchitting" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{"> syncHitting"}</code> | Network sync for hit effects. |
| <Link id="m-trackedplayers" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> trackedPlayers"}</code> | Players whose teleports are being watched. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onbreak" /><code><Link to="/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" OnBreak { get; set; }"}</code> | The client break event (`onClientBreak`), with where the effect should play. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Starts the safety lock and creates the break and hit sync messages. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: for a pickup, tracks grabs so grabbing and teleporting reset the safety lock. |
| <Link id="m-oncollisionenter" /><code>{"protected virtual void OnCollisionEnter(Collision collision)"}</code> | Server: after the safety lock, compares relative speed to the hit and break thresholds and fires and syncs the matching events. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-endinteraction" /><code>{"private void EndInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops listening to the player's teleports when they let go. It never removes them from `trackedPlayers`, so later grabs by the same player don't resubscribe. |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Tool hit callback: passes the collision on if one of its contacts belongs to this object. |
| <Link id="m-onhit-2" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Tool hit callback; does nothing. |
| <Link id="m-resetsafetylock" /><code>{"private void ResetSafetyLock()"}</code> | Restarts the safety lock timer, during which no break can happen. |
| <Link id="m-resetteleport" /><code>{"private void ResetTeleport("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Resets the safety lock when a holding player recovers, repositions or teleports. |
| <Link id="m-startinteraction" /><code>{"private void StartInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Resets the safety lock on grab and starts watching the player's teleports. |
| <Link id="m-syncbreaking-2" /><code>{"private void SyncBreaking("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy)"}</code> | Message handler for a break effect. |
| <Link id="m-synceffect" /><code>{"private void SyncEffect("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy, bool isBreak)"}</code> | Reads the effect position (only sent when aligned with the hit normal) and plays the break or hit event on clients. |
| <Link id="m-synchitting-2" /><code>{"private void SyncHitting("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy)"}</code> | Message handler for a hit effect. |

</details>
