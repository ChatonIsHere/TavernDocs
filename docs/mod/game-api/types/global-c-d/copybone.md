---
title: "CopyBone"
description: "Makes this object follow a Bone's local pose, by joint target, by moving its rigidbody, or by setting the transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CopyBone

A **class** in `Root.Township`, the global namespace.

Makes this object follow a `Bone`'s local pose, by joint target, by moving its rigidbody, or by setting the transform.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CopyBoneGroup`](/mod/game-api/types/global-c-d/copybonegroup)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CopyBone()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autofind" /><code>{"private List<"}<Link to="/mod/game-api/types/global-a-b/bone">{"Bone"}</Link>{"> autoFind"}</code> | <span className="api-desc">Bones list, probably for an editor auto-assign. Not read here.</span> |
| <Link id="m-bone" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bone">{"Bone"}</Link>{" bone"}</code> | <span className="api-desc">Bone to copy.</span> |
| <Link id="m-bonetransform" /><code>{"private Transform boneTransform"}</code> | <span className="api-desc">Transform of `bone`.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">This object's transform.</span> |
| <Link id="m-isjointed" /><code>{"private bool isJointed"}</code> | <span className="api-desc">True when a `ConfigurableJoint` was found.</span> |
| <Link id="m-ispreviewingpose" /><code>{"private bool isPreviewingPose"}</code> | <span className="api-desc">Serialized but not read here.</span> |
| <Link id="m-isrigidbody" /><code>{"private bool isRigidbody"}</code> | <span className="api-desc">True when this object has a rigidbody.</span> |
| <Link id="m-istransformforced" /><code>{"private bool isTransformForced"}</code> | <span className="api-desc">Always copy the transform directly even with a rigidbody.</span> |
| <Link id="m-joint" /><code>{"private ConfigurableJoint joint"}</code> | <span className="api-desc">The configurable joint on this object.</span> |
| <Link id="m-jointtoworld" /><code>{"private Quaternion jointToWorld"}</code> | <span className="api-desc">Inverse of `worldToJoint`.</span> |
| <Link id="m-maximumtorque" /><code>{"private float maximumTorque"}</code> | <span className="api-desc">Serialized but not read here.</span> |
| <Link id="m-topic" /><code>{"private Rigidbody topic"}</code> | <span className="api-desc">The rigidbody on this object.</span> |
| <Link id="m-torquemultiplier" /><code>{"private float torqueMultiplier"}</code> | <span className="api-desc">Serialized but not read here.</span> |
| <Link id="m-worldtojoint" /><code>{"private Quaternion worldToJoint"}</code> | <span className="api-desc">Rotation into the joint's space.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys itself with no bone. Finds a rigidbody and joint, links the joint to the parent's body, and caches joint space.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">When the bone moved, drives the joint target, moves the rigidbody, or copies the local transform.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Resets local rotation.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Snaps local position and rotation to the bone.</span> |

</details>
