---
title: "CopyBone"
description: "Makes this object follow a Bone's local pose, by joint target, by moving its rigidbody, or by setting the transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CopyBone

A **class** in `Root.Township`, no namespace.

Makes this object follow a `Bone`'s local pose, by joint target, by moving its rigidbody, or by setting the transform.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CopyBoneGroup`](/game-api/types/global-c-d/copybonegroup)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CopyBone()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autofind" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/bone">{"Bone"}</Link>{"> autoFind"}</code> | Bones list, probably for an editor auto-assign. Not read here. |
| <Link id="m-bone" /><code>{"private "}<Link to="/game-api/types/global-a-b/bone">{"Bone"}</Link>{" bone"}</code> | Bone to copy. |
| <Link id="m-bonetransform" /><code>{"private Transform boneTransform"}</code> | Transform of `bone`. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's transform. |
| <Link id="m-isjointed" /><code>{"private bool isJointed"}</code> | True when a `ConfigurableJoint` was found. |
| <Link id="m-ispreviewingpose" /><code>{"private bool isPreviewingPose"}</code> | Serialized but not read here. |
| <Link id="m-isrigidbody" /><code>{"private bool isRigidbody"}</code> | True when this object has a rigidbody. |
| <Link id="m-istransformforced" /><code>{"private bool isTransformForced"}</code> | Always copy the transform directly even with a rigidbody. |
| <Link id="m-joint" /><code>{"private ConfigurableJoint joint"}</code> | The configurable joint on this object. |
| <Link id="m-jointtoworld" /><code>{"private Quaternion jointToWorld"}</code> | Inverse of `worldToJoint`. |
| <Link id="m-maximumtorque" /><code>{"private float maximumTorque"}</code> | Serialized but not read here. |
| <Link id="m-topic" /><code>{"private Rigidbody topic"}</code> | The rigidbody on this object. |
| <Link id="m-torquemultiplier" /><code>{"private float torqueMultiplier"}</code> | Serialized but not read here. |
| <Link id="m-worldtojoint" /><code>{"private Quaternion worldToJoint"}</code> | Rotation into the joint's space. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys itself with no bone. Finds a rigidbody and joint, links the joint to the parent's body, and caches joint space. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | When the bone moved, drives the joint target, moves the rigidbody, or copies the local transform. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Resets local rotation. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Snaps local position and rotation to the bone. |

</details>
