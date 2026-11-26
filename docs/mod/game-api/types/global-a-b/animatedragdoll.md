---
title: "AnimatedRagdoll"
description: "Drives a physics ragdoll to follow an animated skeleton: each ragdoll bone has a ConfigurableJoint whose slerp drive targets the matching animated bone's..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedRagdoll

A **class** in `Root.Township`, the global namespace.

Drives a physics ragdoll to follow an animated skeleton: each ragdoll bone has a `ConfigurableJoint` whose slerp drive targets the matching animated bone's rotation, and the root is pulled to the animated root.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Bone`](/mod/game-api/types/global-a-b/animatedragdoll-bone)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedRagdoll()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedskeletonroot" /><code>{"private Transform animatedSkeletonRoot"}</code> | <span className="api-desc">Setup only: root of the animated skeleton. Setting it with `ragdollSkeletonRoot` rebuilds `bones` and clears it.</span> |
| <Link id="m-bones" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/animatedragdoll-bone">{"AnimatedRagdoll.Bone"}</Link>{"[] bones"}</code> | <span className="api-desc">Per bone: the animated transform, ragdoll rigidbody and joint, plus torque, damping, force and mass multipliers.</span> |
| <Link id="m-colliders" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" colliders"}</code> | <span className="api-desc">Collider group for the ragdoll. Not read in this class.</span> |
| <Link id="m-dampening" /><code>{"private float dampening"}</code> | <span className="api-desc">Base joint drive damper, scaled per bone.</span> |
| <Link id="m-initialrotation" /><code>{"private Quaternion[] initialRotation"}</code> | <span className="api-desc">Each bone's starting rotation in joint space, used to work out target rotations.</span> |
| <Link id="m-jointtolocal" /><code>{"private Quaternion[] jointToLocal"}</code> | <span className="api-desc">Inverse of `localToJoint` per bone.</span> |
| <Link id="m-localtojoint" /><code>{"private Quaternion[] localToJoint"}</code> | <span className="api-desc">Per bone, the rotation from bone space to the joint's axis space.</span> |
| <Link id="m-maximumforce" /><code>{"private float maximumForce"}</code> | <span className="api-desc">Base joint drive force limit, scaled per bone.</span> |
| <Link id="m-ragdollskeletonroot" /><code>{"private Transform ragdollSkeletonRoot"}</code> | <span className="api-desc">Setup only: root of the physics skeleton that bones are matched in.</span> |
| <Link id="m-torque" /><code>{"private float torque"}</code> | <span className="api-desc">Base joint drive spring, scaled per bone.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Works out each joint's local-to-joint rotation and initial rotation, and loosens the root joint so it can move.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Moves the root joint's anchor to the animated root and sets every joint's drive strength, mass scales and target rotation.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Snaps the ragdoll bones to the animated pose and records it as the initial rotation.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor setup: when both skeleton roots are set, rebuilds the bone list by matching names and adds rigidbodies and locked joints, then clears the roots.</span> |

</details>
