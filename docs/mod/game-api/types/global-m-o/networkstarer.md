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
| <Link id="m-ctor" /><code>{"NetworkStarer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changedturning" /><code><Link to="/mod/game-api/types/global-m-o/networkstarer-changedstate">{"NetworkStarer.ChangedState"}</Link>{" ChangedTurning"}</code> | Called when body turning starts or stops. |
| <Link id="m-changedturningdirection" /><code><Link to="/mod/game-api/types/global-m-o/networkstarer-changeddirection">{"NetworkStarer.ChangedDirection"}</Link>{" ChangedTurningDirection"}</code> | Called with the turn direction (1, -1, or 0 when stopped). |

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodydotwhenrotating" /><code>{"private float bodyDotWhenRotating"}</code> | Turning stops once the facing dot reaches this value. |
| <Link id="m-isstaring" /><code>{"private bool isStaring"}</code> | Backing field for `IsStaring`. |
| <Link id="m-lefteye" /><code>{"private Transform leftEye"}</code> | Left eye transform. |
| <Link id="m-lefteyeoriginallocaltransform" /><code>{"private Quaternion leftEyeOriginalLocalTransform"}</code> | Left eye's rest rotation. |
| <Link id="m-maxeyeangle" /><code>{"private float maxEyeAngle"}</code> | Furthest an eye can turn from rest, in degrees. |
| <Link id="m-neck" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/networkstarer-rotatingstructure">{"NetworkStarer.RotatingStructure"}</Link>{" neck"}</code> | Chain of neck joints, each with its own angle limit. |
| <Link id="m-networktarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkTarget"}</code> | Network entity of the target, used to sync it. |
| <Link id="m-righteye" /><code>{"private Transform rightEye"}</code> | Right eye transform. |
| <Link id="m-righteyeoriginallocaltransform" /><code>{"private Quaternion rightEyeOriginalLocalTransform"}</code> | Right eye's rest rotation. |
| <Link id="m-syncserialize" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSerialize"}</code> | Method sync for the staring state. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Backing field for `Target`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isstaring-2" /><code>{"bool IsStaring { get; set; }"}</code> | Whether the creature is staring. Setting it sends the state and target to nearby chunks. |
| <Link id="m-isturning" /><code>{"bool IsTurning { get; set; }"}</code> | Whether the body is turning toward the target. Set when the neck runs out of range. |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> | Transform to stare at. Setting it also finds its network entity for syncing. |
| <Link id="m-turningspeed" /><code>{"float TurningSpeed { get; set; }"}</code> | Lerp factor per frame used while turning the body. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync message. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores the eyes' rest rotations and sets up the neck. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Runs `Stare` while staring at a target. |
| <Link id="m-stare" /><code>{"private void Stare()"}</code> | Points the eye on the target's side at it, bending the neck when the eye can't reach and turning the body when the neck can't. |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the staring flag and target entity ID; a client stops staring if the target is missing. |

</details>
