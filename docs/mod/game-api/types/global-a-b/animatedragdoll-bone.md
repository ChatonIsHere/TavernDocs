---
title: "AnimatedRagdoll.Bone"
description: "One bone of an AnimatedRagdoll: the animated bone it follows, the physics body and joint that follow it, and per bone drive multipliers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedRagdoll.Bone

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One bone of an `AnimatedRagdoll`: the animated bone it follows, the physics body and joint that follow it, and per bone drive multipliers.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`AnimatedRagdoll`](/mod/game-api/types/global-a-b/animatedragdoll)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Bone()"}</code> | <span className="api-desc">Creates an `AnimatedRagdoll.Bone` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbone" /><code>{"Transform animatedBone"}</code> | <span className="api-desc">Animated skeleton bone whose rotation the ragdoll bone tries to match.</span> |
| <Link id="m-connectedmassscale" /><code>{"float connectedMassScale"}</code> | <span className="api-desc">Mass scale for the joint's connected body.</span> |
| <Link id="m-dampeningmultiplier" /><code>{"float dampeningMultiplier"}</code> | <span className="api-desc">Multiplier on the ragdoll's dampening for this joint's drive.</span> |
| <Link id="m-massscale" /><code>{"float massScale"}</code> | <span className="api-desc">Mass scale set on the joint (default 5).</span> |
| <Link id="m-maximumforcemultiplier" /><code>{"float maximumForceMultiplier"}</code> | <span className="api-desc">Multiplier on the ragdoll's maximum drive force for this joint.</span> |
| <Link id="m-ragdollbone" /><code>{"Rigidbody ragdollBone"}</code> | <span className="api-desc">Rigidbody of the physics bone.</span> |
| <Link id="m-ragdolljoint" /><code>{"ConfigurableJoint ragdollJoint"}</code> | <span className="api-desc">Joint driven towards the animated bone's rotation.</span> |
| <Link id="m-torquemultiplier" /><code>{"float torqueMultiplier"}</code> | <span className="api-desc">Multiplier on the ragdoll's torque for this joint's drive spring.</span> |

## Used in

Members of other types that take, return or hold a `Bone`:

<div className="api-used-in">

[`AnimatedRagdoll.bones`](/mod/game-api/types/global-a-b/animatedragdoll#m-bones).

</div>
