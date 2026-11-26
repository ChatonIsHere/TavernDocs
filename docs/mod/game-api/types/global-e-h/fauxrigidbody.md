---
title: "FauxRigidbody"
description: "Moves a transform by a velocity and angular velocity each time Update is called, without physics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FauxRigidbody

A **class** in `Root.Township`, the global namespace.

Moves a transform by a velocity and angular velocity each time `Update` is called, without physics. Also has a helper to work out acceleration toward a point.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FauxRigidbody(Transform targetTransform)"}</code> | <span className="api-desc">Creates a `FauxRigidbody` from `targetTransform`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"Vector3 angularVelocity"}</code> | <span className="api-desc">Euler degrees per second applied to rotation.</span> |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> | <span className="api-desc">Units per second applied to position.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">Transform that is moved.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateaccelerationtoreachpoint" /><code>{"static Vector3 CalculateAccelerationToReachPoint(Vector3 deltaPosition, Vector3 currentVelocity, float acceleration, float maxSpeed)"}</code> | <span className="api-desc">Searches for the acceleration that reaches a point offset from here, within the given acceleration limit. `maxSpeed` isn't used.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Moves and rotates the transform by the velocities times delta time.</span> |

## Used in

Members of other types that take, return or hold a `FauxRigidbody`:

<div className="api-used-in">

[`HoverPickup.selectionOrbRigidbody`](/mod/game-api/types/global-e-h/hoverpickup#m-selectionorbrigidbody), [`PageAutoAddEffect.RigidBody`](/mod/game-api/types/global-p/pageautoaddeffect#m-rigidbody), [`SkillOrb.fauxRigidBody`](/mod/game-api/types/global-s/skillorb#m-fauxrigidbody), [`SkillOrbReplacer.fauxRigidBody`](/mod/game-api/types/global-s/skillorbreplacer#m-fauxrigidbody).

</div>
