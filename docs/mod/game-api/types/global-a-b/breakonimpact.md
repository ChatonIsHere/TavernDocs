---
title: "BreakOnImpact"
description: "Server checks collisions on a networked object: a fast enough hit plays a hit effect, a faster one breaks it and runs the server break event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BreakOnImpact

A **class** in `Root.Township`, the global namespace.

Server checks collisions on a networked object: a fast enough hit plays a hit effect, a faster one breaks it and runs the server break event. Effects are synced to nearby clients.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IToolHitDependant`](/mod/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`PickupBreakOnImpact`](/mod/game-api/types/alta-items/pickupbreakonimpact)
- **Nested types** [`TransformProxyEvent`](/mod/game-api/types/global-a-b/breakonimpact-transformproxyevent), [`TransformProxyHandler`](/mod/game-api/types/global-a-b/breakonimpact-transformproxyhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BreakOnImpact()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-breakvelocitysquared" /><code>{"protected float breakVelocitySquared"}</code> | <span className="api-desc">Squared relative speed needed to break (64, so 8 m/s).</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitvelocitysquared" /><code>{"private float hitVelocitySquared"}</code> | <span className="api-desc">Squared relative speed needed for a hit effect (16, so 4 m/s).</span> |
| <Link id="m-isalignedwithhitnormal" /><code>{"private bool isAlignedWithHitNormal"}</code> | <span className="api-desc">If true, effects face the contact normal and their position is sent; otherwise they use the object's transform.</span> |
| <Link id="m-lastsafetylock" /><code>{"private float lastSafetyLock"}</code> | <span className="api-desc">Time the safety lock last started.</span> |
| <Link id="m-onclientbreak" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" onClientBreak"}</code> | <span className="api-desc">Break effect event. Not run on a headless server.</span> |
| <Link id="m-onhit" /><code>{"private UnityEvent onHit"}</code> | <span className="api-desc">Hit effect event. Not run on a headless server.</span> |
| <Link id="m-onserverbreak" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" onServerBreak"}</code> | <span className="api-desc">Server event when the object breaks, for the gameplay result.</span> |
| <Link id="m-safetylockduration" /><code>{"private float safetyLockDuration"}</code> | <span className="api-desc">Seconds after a grab or teleport during which it can't break (0.5 by default).</span> |
| <Link id="m-syncbreaking" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{"> syncBreaking"}</code> | <span className="api-desc">Network sync for break effects.</span> |
| <Link id="m-synchitting" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{"> syncHitting"}</code> | <span className="api-desc">Network sync for hit effects.</span> |
| <Link id="m-trackedplayers" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> trackedPlayers"}</code> | <span className="api-desc">Players whose teleports are being watched.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onbreak" /><code><Link to="/mod/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" OnBreak { get; set; }"}</code> | <span className="api-desc">The client break event (`onClientBreak`), with where the effect should play.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Starts the safety lock and creates the break and hit sync messages.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: for a pickup, tracks grabs so grabbing and teleporting reset the safety lock.</span> |
| <Link id="m-oncollisionenter" /><code>{"protected virtual void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Server: after the safety lock, compares relative speed to the hit and break thresholds and fires and syncs the matching events.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-endinteraction" /><code>{"private void EndInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops listening to the player's teleports when they let go. It never removes them from `trackedPlayers`, so later grabs by the same player don't resubscribe.</span> |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Tool hit callback: passes the collision on if one of its contacts belongs to this object.</span> |
| <Link id="m-onhit-2" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Tool hit callback; does nothing.</span> |
| <Link id="m-resetsafetylock" /><code>{"private void ResetSafetyLock()"}</code> | <span className="api-desc">Restarts the safety lock timer, during which no break can happen.</span> |
| <Link id="m-resetteleport" /><code>{"private void ResetTeleport("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Resets the safety lock when a holding player recovers, repositions or teleports.</span> |
| <Link id="m-startinteraction" /><code>{"private void StartInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Resets the safety lock on grab and starts watching the player's teleports.</span> |
| <Link id="m-syncbreaking-2" /><code>{"private void SyncBreaking("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy)"}</code> | <span className="api-desc">Message handler for a break effect.</span> |
| <Link id="m-synceffect" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy, bool isBreak)"}</code> | <span className="api-desc">Reads the effect position (only sent when aligned with the hit normal) and plays the break or hit event on clients.</span> |
| <Link id="m-synchitting-2" /><code>{"private void SyncHitting("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy)"}</code> | <span className="api-desc">Message handler for a hit effect.</span> |

</details>
