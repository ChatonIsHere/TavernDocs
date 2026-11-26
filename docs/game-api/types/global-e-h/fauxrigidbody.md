---
title: "FauxRigidbody"
description: "Moves a transform by a velocity and angular velocity each time Update is called, without physics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FauxRigidbody

A **class** in `Root.Township`, no namespace.

Moves a transform by a velocity and angular velocity each time `Update` is called, without physics. Also has a helper to work out acceleration toward a point.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FauxRigidbody(Transform targetTransform)"}</code> | Creates a `FauxRigidbody` from `targetTransform`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"Vector3 angularVelocity"}</code> | Euler degrees per second applied to rotation. |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> | Units per second applied to position. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | Transform that is moved. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateaccelerationtoreachpoint" /><code>{"static Vector3 CalculateAccelerationToReachPoint(Vector3 deltaPosition, Vector3 currentVelocity, float acceleration, float maxSpeed)"}</code> | Searches for the acceleration that reaches a point offset from here, within the given acceleration limit. `maxSpeed` isn't used. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Moves and rotates the transform by the velocities times delta time. |

## Used in

Members of other types that take, return or hold a `FauxRigidbody`:

[`HoverPickup.selectionOrbRigidbody`](/game-api/types/global-e-h/hoverpickup#m-selectionorbrigidbody), [`PageAutoAddEffect.RigidBody`](/game-api/types/global-p/pageautoaddeffect#m-rigidbody), [`SkillOrb.fauxRigidBody`](/game-api/types/global-s/skillorb#m-fauxrigidbody), [`SkillOrbReplacer.fauxRigidBody`](/game-api/types/global-s/skillorbreplacer#m-fauxrigidbody).
