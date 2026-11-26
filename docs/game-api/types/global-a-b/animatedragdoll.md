---
title: "AnimatedRagdoll"
description: "Drives a physics ragdoll to follow an animated skeleton: each ragdoll bone has a ConfigurableJoint whose slerp drive targets the matching animated bone's..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedRagdoll

A **class** in `Root.Township`, no namespace.

Drives a physics ragdoll to follow an animated skeleton: each ragdoll bone has a `ConfigurableJoint` whose slerp drive targets the matching animated bone's rotation, and the root is pulled to the animated root.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Bone`](/game-api/types/global-a-b/animatedragdoll-bone)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedRagdoll()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedskeletonroot" /><code>{"private Transform animatedSkeletonRoot"}</code> | Setup only: root of the animated skeleton. Setting it with `ragdollSkeletonRoot` rebuilds `bones` and clears it. |
| <Link id="m-bones" /><code>{"private "}<Link to="/game-api/types/global-a-b/animatedragdoll-bone">{"AnimatedRagdoll.Bone"}</Link>{"[] bones"}</code> | Per bone: the animated transform, ragdoll rigidbody and joint, plus torque, damping, force and mass multipliers. |
| <Link id="m-colliders" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliders"}</code> | Collider group for the ragdoll. Not read in this class. |
| <Link id="m-dampening" /><code>{"private float dampening"}</code> | Base joint drive damper, scaled per bone. |
| <Link id="m-initialrotation" /><code>{"private Quaternion[] initialRotation"}</code> | Each bone's starting rotation in joint space, used to work out target rotations. |
| <Link id="m-jointtolocal" /><code>{"private Quaternion[] jointToLocal"}</code> | Inverse of `localToJoint` per bone. |
| <Link id="m-localtojoint" /><code>{"private Quaternion[] localToJoint"}</code> | Per bone, the rotation from bone space to the joint's axis space. |
| <Link id="m-maximumforce" /><code>{"private float maximumForce"}</code> | Base joint drive force limit, scaled per bone. |
| <Link id="m-ragdollskeletonroot" /><code>{"private Transform ragdollSkeletonRoot"}</code> | Setup only: root of the physics skeleton that bones are matched in. |
| <Link id="m-torque" /><code>{"private float torque"}</code> | Base joint drive spring, scaled per bone. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Works out each joint's local-to-joint rotation and initial rotation, and loosens the root joint so it can move. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Moves the root joint's anchor to the animated root and sets every joint's drive strength, mass scales and target rotation. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Snaps the ragdoll bones to the animated pose and records it as the initial rotation. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor setup: when both skeleton roots are set, rebuilds the bone list by matching names and adds rigidbodies and locked joints, then clears the roots. |

</details>
