---
title: "CustomFixedJoint"
description: "A scripted stand-in for a fixed joint used when a pickup's joint type is CustomFixedJoint: each physics step it snaps the held rigidbody to the hand,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomFixedJoint

A **class** in `Root.Township`, no namespace.

A scripted stand-in for a fixed joint used when a pickup's joint type is `CustomFixedJoint`: each physics step it snaps the held rigidbody to the hand, optionally capped at arm's length. Added to the interaction point by `PickupJoints`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomFixedJoint()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachedobject" /><code>{"private Rigidbody attachedObject"}</code> | The held rigidbody being moved. |
| <Link id="m-grippointposition" /><code>{"private Vector3 gripPointPosition"}</code> | Last grip point position read in `FixedUpdate`. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether `FixedUpdate` moves the object. |
| <Link id="m-iscollisionenabled" /><code>{"private bool isCollisionEnabled"}</code> | If false, collisions between hand and object are ignored while active. |
| <Link id="m-islimitingarmlength" /><code>{"private bool isLimitingArmLength"}</code> | Whether the object is kept within arm's length of the shoulder. |
| <Link id="m-limitedposition" /><code>{"private Vector3 limitedPosition"}</code> | Hand position after the arm-length cap. |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> | Held object's position offset in this transform's local space. |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | This object's own rigidbody, whose colliders are ignored against the held object. |
| <Link id="m-rotationoffset" /><code>{"private Quaternion rotationOffset"}</code> | Held object's rotation relative to this transform. |
| <Link id="m-roteulers" /><code>{"private Vector3 rotEulers"}</code> | Rotation offset as Euler angles; reapplied to `rotationOffset` each step. |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | Shoulder transform from the arm IK, used for the reach limit. |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> | Last shoulder position read in `FixedUpdate`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; set; }"}</code> | The hand controller holding the object; its grip point and arm length are used for the reach limit. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Stops moving the object and turns collisions between hand and object back on. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Starts moving the object and, unless collisions are enabled, ignores collisions between hand and object. |
| <Link id="m-setup" /><code>{"void Setup(Rigidbody attachedObject, Vector3 offset, Quaternion rotationOffset, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isCollisionEnabled = false)"}</code> | Sets the held rigidbody, offset, rotation offset, collision setting and the arm's shoulder from the interactor. Logs the offsets. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Zeroes the object's velocity and places it at the hand (or the arm-length limit) plus the stored offset and rotation. |
| <Link id="m-ignorecollisions" /><code>{"private void IgnoreCollisions(bool isIgnoring)"}</code> | Sets ignore-collision between every collider under the hand and under the held object. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Works out the offset from current positions if none was given, then calls `Enable`. |

</details>
