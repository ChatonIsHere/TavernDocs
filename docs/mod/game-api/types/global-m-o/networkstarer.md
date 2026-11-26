---
title: "NetworkStarer"
description: "Makes a creature look at a target with its eyes, then its neck joints, and optionally turn its body."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer

A **class** in `Root.Township`, the global namespace.

Makes a creature look at a target with its eyes, then its neck joints, and optionally turn its body. Staring and the target sync to clients.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ChangedDirection`](/mod/game-api/types/global-m-o/networkstarer-changeddirection), [`ChangedState`](/mod/game-api/types/global-m-o/networkstarer-changedstate), [`RotatingJoint`](/mod/game-api/types/global-m-o/networkstarer-rotatingjoint), [`RotatingStructure`](/mod/game-api/types/global-m-o/networkstarer-rotatingstructure)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkStarer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changedturning" /><code><Link to="/mod/game-api/types/global-m-o/networkstarer-changedstate">{"NetworkStarer.ChangedState"}</Link>{" ChangedTurning"}</code> | <span className="api-desc">Called when body turning starts or stops.</span> |
| <Link id="m-changedturningdirection" /><code><Link to="/mod/game-api/types/global-m-o/networkstarer-changeddirection">{"NetworkStarer.ChangedDirection"}</Link>{" ChangedTurningDirection"}</code> | <span className="api-desc">Called with the turn direction (1, -1, or 0 when stopped).</span> |

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodydotwhenrotating" /><code>{"private float bodyDotWhenRotating"}</code> | <span className="api-desc">Turning stops once the facing dot reaches this value.</span> |
| <Link id="m-isstaring" /><code>{"private bool isStaring"}</code> | <span className="api-desc">Backing field for `IsStaring`.</span> |
| <Link id="m-lefteye" /><code>{"private Transform leftEye"}</code> | <span className="api-desc">Left eye transform.</span> |
| <Link id="m-lefteyeoriginallocaltransform" /><code>{"private Quaternion leftEyeOriginalLocalTransform"}</code> | <span className="api-desc">Left eye's rest rotation.</span> |
| <Link id="m-maxeyeangle" /><code>{"private float maxEyeAngle"}</code> | <span className="api-desc">Furthest an eye can turn from rest, in degrees.</span> |
| <Link id="m-neck" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/networkstarer-rotatingstructure">{"NetworkStarer.RotatingStructure"}</Link>{" neck"}</code> | <span className="api-desc">Chain of neck joints, each with its own angle limit.</span> |
| <Link id="m-networktarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkTarget"}</code> | <span className="api-desc">Network entity of the target, used to sync it.</span> |
| <Link id="m-righteye" /><code>{"private Transform rightEye"}</code> | <span className="api-desc">Right eye transform.</span> |
| <Link id="m-righteyeoriginallocaltransform" /><code>{"private Quaternion rightEyeOriginalLocalTransform"}</code> | <span className="api-desc">Right eye's rest rotation.</span> |
| <Link id="m-syncserialize" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSerialize"}</code> | <span className="api-desc">Method sync for the staring state.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isstaring-2" /><code>{"bool IsStaring { get; set; }"}</code> | <span className="api-desc">Whether the creature is staring. Setting it sends the state and target to nearby chunks.</span> |
| <Link id="m-isturning" /><code>{"bool IsTurning { get; set; }"}</code> | <span className="api-desc">Whether the body is turning toward the target. Set when the neck runs out of range.</span> |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> | <span className="api-desc">Transform to stare at. Setting it also finds its network entity for syncing.</span> |
| <Link id="m-turningspeed" /><code>{"float TurningSpeed { get; set; }"}</code> | <span className="api-desc">Lerp factor per frame used while turning the body.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync message.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores the eyes' rest rotations and sets up the neck.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Runs `Stare` while staring at a target.</span> |
| <Link id="m-stare" /><code>{"private void Stare()"}</code> | <span className="api-desc">Points the eye on the target's side at it, bending the neck when the eye can't reach and turning the body when the neck can't.</span> |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the staring flag and target entity ID; a client stops staring if the target is missing.</span> |

</details>
