---
title: "BreakOnImpact"
description: "class BreakOnImpact in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BreakOnImpact

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant)
- **Derived types** [`PickupBreakOnImpact`](/game-api/types/alta-items/pickupbreakonimpact)
- **Nested types** [`TransformProxyEvent`](/game-api/types/global-a-b/breakonimpact-transformproxyevent), [`TransformProxyHandler`](/game-api/types/global-a-b/breakonimpact-transformproxyhandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BreakOnImpact()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-breakvelocitysquared" /><code>{"protected float breakVelocitySquared"}</code> |

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-hitvelocitysquared" /><code>{"private float hitVelocitySquared"}</code> |
| <Link id="m-isalignedwithhitnormal" /><code>{"private bool isAlignedWithHitNormal"}</code> |
| <Link id="m-lastsafetylock" /><code>{"private float lastSafetyLock"}</code> |
| <Link id="m-onclientbreak" /><code>{"private "}<Link to="/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" onClientBreak"}</code> |
| <Link id="m-onhit" /><code>{"private UnityEvent onHit"}</code> |
| <Link id="m-onserverbreak" /><code>{"private "}<Link to="/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" onServerBreak"}</code> |
| <Link id="m-safetylockduration" /><code>{"private float safetyLockDuration"}</code> |
| <Link id="m-syncbreaking" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{"> syncBreaking"}</code> |
| <Link id="m-synchitting" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{"> syncHitting"}</code> |
| <Link id="m-trackedplayers" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{"> trackedPlayers"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-onbreak" /><code><Link to="/game-api/types/global-a-b/breakonimpact-transformproxyevent">{"BreakOnImpact.TransformProxyEvent"}</Link>{" OnBreak { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-oncollisionenter" /><code>{"protected virtual void OnCollisionEnter(Collision collision)"}</code> |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-endinteraction" /><code>{"private void EndInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-oncollided" /><code>{"private void Alta.Impact.IToolHitDependant.OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |
| <Link id="m-onhit-2" /><code>{"private void Alta.Impact.IToolHitDependant.OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |
| <Link id="m-resetsafetylock" /><code>{"private void ResetSafetyLock()"}</code> |
| <Link id="m-resetteleport" /><code>{"private void ResetTeleport("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-startinteraction" /><code>{"private void StartInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncbreaking-2" /><code>{"private void SyncBreaking("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy)"}</code> |
| <Link id="m-synceffect" /><code>{"private void SyncEffect("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy, bool isBreak)"}</code> |
| <Link id="m-synchitting-2" /><code>{"private void SyncHitting("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" proxy)"}</code> |

</details>
