---
title: "CustomFixedJoint"
description: "A scripted stand-in for a fixed joint used when a pickup's joint type is CustomFixedJoint: each physics step it snaps the held rigidbody to the hand,..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomFixedJoint

A **class** in `Root.Township`, the global namespace.

A scripted stand-in for a fixed joint used when a pickup's joint type is `CustomFixedJoint`: each physics step it snaps the held rigidbody to the hand, optionally capped at arm's length. Added to the interaction point by `PickupJoints`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomFixedJoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachedobject" /><code>{"private Rigidbody attachedObject"}</code> | <span className="api-desc">The held rigidbody being moved.</span> |
| <Link id="m-grippointposition" /><code>{"private Vector3 gripPointPosition"}</code> | <span className="api-desc">Last grip point position read in `FixedUpdate`.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether `FixedUpdate` moves the object.</span> |
| <Link id="m-iscollisionenabled" /><code>{"private bool isCollisionEnabled"}</code> | <span className="api-desc">If false, collisions between hand and object are ignored while active.</span> |
| <Link id="m-islimitingarmlength" /><code>{"private bool isLimitingArmLength"}</code> | <span className="api-desc">Whether the object is kept within arm's length of the shoulder.</span> |
| <Link id="m-limitedposition" /><code>{"private Vector3 limitedPosition"}</code> | <span className="api-desc">Hand position after the arm-length cap.</span> |
| <Link id="m-offset" /><code>{"private Vector3 offset"}</code> | <span className="api-desc">Held object's position offset in this transform's local space.</span> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">This object's own rigidbody, whose colliders are ignored against the held object.</span> |
| <Link id="m-rotationoffset" /><code>{"private Quaternion rotationOffset"}</code> | <span className="api-desc">Held object's rotation relative to this transform.</span> |
| <Link id="m-roteulers" /><code>{"private Vector3 rotEulers"}</code> | <span className="api-desc">Rotation offset as Euler angles; reapplied to `rotationOffset` each step.</span> |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | <span className="api-desc">Shoulder transform from the arm IK, used for the reach limit.</span> |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> | <span className="api-desc">Last shoulder position read in `FixedUpdate`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The hand controller holding the object; its grip point and arm length are used for the reach limit.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Stops moving the object and turns collisions between hand and object back on.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Starts moving the object and, unless collisions are enabled, ignores collisions between hand and object.</span> |
| <Link id="m-setup" /><code>{"void Setup(Rigidbody attachedObject, Vector3 offset, Quaternion rotationOffset, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, bool isCollisionEnabled = false)"}</code> | <span className="api-desc">Sets the held rigidbody, offset, rotation offset, collision setting and the arm's shoulder from the interactor. Logs the offsets.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Zeroes the object's velocity and places it at the hand (or the arm-length limit) plus the stored offset and rotation.</span> |
| <Link id="m-ignorecollisions" /><code>{"private void IgnoreCollisions(bool isIgnoring)"}</code> | <span className="api-desc">Sets ignore-collision between every collider under the hand and under the held object.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Works out the offset from current positions if none was given, then calls `Enable`.</span> |

</details>
