---
title: "AnimatedRagdoll.Bone"
description: "One bone of an AnimatedRagdoll: the animated bone it follows, the physics body and joint that follow it, and per bone drive multipliers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedRagdoll.Bone

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One bone of an `AnimatedRagdoll`: the animated bone it follows, the physics body and joint that follow it, and per bone drive multipliers.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested in** [`AnimatedRagdoll`](/game-api/types/global-a-b/animatedragdoll)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Bone()"}</code> | Creates an `AnimatedRagdoll.Bone` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbone" /><code>{"Transform animatedBone"}</code> | Animated skeleton bone whose rotation the ragdoll bone tries to match. |
| <Link id="m-connectedmassscale" /><code>{"float connectedMassScale"}</code> | Mass scale for the joint's connected body. |
| <Link id="m-dampeningmultiplier" /><code>{"float dampeningMultiplier"}</code> | Multiplier on the ragdoll's dampening for this joint's drive. |
| <Link id="m-massscale" /><code>{"float massScale"}</code> | Mass scale set on the joint (default 5). |
| <Link id="m-maximumforcemultiplier" /><code>{"float maximumForceMultiplier"}</code> | Multiplier on the ragdoll's maximum drive force for this joint. |
| <Link id="m-ragdollbone" /><code>{"Rigidbody ragdollBone"}</code> | Rigidbody of the physics bone. |
| <Link id="m-ragdolljoint" /><code>{"ConfigurableJoint ragdollJoint"}</code> | Joint driven towards the animated bone's rotation. |
| <Link id="m-torquemultiplier" /><code>{"float torqueMultiplier"}</code> | Multiplier on the ragdoll's torque for this joint's drive spring. |

## Used in

Members of other types that take, return or hold a `Bone`:

[`AnimatedRagdoll.bones`](/game-api/types/global-a-b/animatedragdoll#m-bones).
