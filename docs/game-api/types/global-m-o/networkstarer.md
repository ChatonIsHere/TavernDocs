---
title: "NetworkStarer"
description: "class NetworkStarer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ChangedDirection`](/game-api/types/global-m-o/networkstarer-changeddirection), [`ChangedState`](/game-api/types/global-m-o/networkstarer-changedstate), [`RotatingJoint`](/game-api/types/global-m-o/networkstarer-rotatingjoint), [`RotatingStructure`](/game-api/types/global-m-o/networkstarer-rotatingstructure)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkStarer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changedturning" /><code><Link to="/game-api/types/global-m-o/networkstarer-changedstate">{"NetworkStarer.ChangedState"}</Link>{" ChangedTurning"}</code> |  |
| <Link id="m-changedturningdirection" /><code><Link to="/game-api/types/global-m-o/networkstarer-changeddirection">{"NetworkStarer.ChangedDirection"}</Link>{" ChangedTurningDirection"}</code> |  |
| <Link id="m-bodydotwhenrotating" /><code>{"private float bodyDotWhenRotating"}</code> |  |
| <Link id="m-isstaring" /><code>{"private bool isStaring"}</code> |  |
| <Link id="m-lefteye" /><code>{"private Transform leftEye"}</code> |  |
| <Link id="m-lefteyeoriginallocaltransform" /><code>{"private Quaternion leftEyeOriginalLocalTransform"}</code> |  |
| <Link id="m-maxeyeangle" /><code>{"private float maxEyeAngle"}</code> |  |
| <Link id="m-neck" /><code>{"private "}<Link to="/game-api/types/global-m-o/networkstarer-rotatingstructure">{"NetworkStarer.RotatingStructure"}</Link>{" neck"}</code> |  |
| <Link id="m-networktarget" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkTarget"}</code> |  |
| <Link id="m-righteye" /><code>{"private Transform rightEye"}</code> |  |
| <Link id="m-righteyeoriginallocaltransform" /><code>{"private Quaternion rightEyeOriginalLocalTransform"}</code> |  |
| <Link id="m-syncserialize" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSerialize"}</code> |  |
| <Link id="m-target" /><code>{"private Transform target"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isstaring-2" /><code>{"bool IsStaring { get; set; }"}</code> |  |
| <Link id="m-isturning" /><code>{"bool IsTurning { get; set; }"}</code> |  |
| <Link id="m-target-2" /><code>{"Transform Target { get; set; }"}</code> |  |
| <Link id="m-turningspeed" /><code>{"float TurningSpeed { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-stare" /><code>{"private void Stare()"}</code> |  |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
