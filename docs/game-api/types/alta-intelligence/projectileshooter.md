---
title: "ProjectileShooter"
description: "Component that spawns and fires a projectile from a creature, aimed forward or at its target with some random spread."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProjectileShooter

A **class** in `Root.Township`, `Alta.Intelligence`.

Component that spawns and fires a projectile from a creature, aimed forward or at its target with some random spread. Server only; nothing in code calls `Shoot`, so prefab events probably do.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`AimMode`](/game-api/types/alta-intelligence/projectileshooter-aimmode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProjectileShooter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | The creature shooting. Its target is aimed at and it becomes the projectile's `Shooter`. |
| <Link id="m-aimmode" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/projectileshooter-aimmode">{"ProjectileShooter.AimMode"}</Link>{" aimMode"}</code> | How to aim: `Forward`, `Target`, or a mix of forward and the target direction for the vertical or horizontal part. |
| <Link id="m-direction" /><code>{"private Transform direction"}</code> | Transform whose forward is used as the forward aim. Falls back to this transform. |
| <Link id="m-maximumaccuracyangle" /><code>{"private float maximumAccuracyAngle"}</code> | Largest random spread in degrees (default 5). 0 shoots perfectly straight. |
| <Link id="m-projectileprefab" /><code>{"private "}<Link to="/game-api/types/global-p/projectile">{"Projectile"}</Link>{" projectilePrefab"}</code> | The projectile spawned. |
| <Link id="m-velocitymaximum" /><code>{"private float velocityMaximum"}</code> | Highest launch speed (default 15). |
| <Link id="m-velocityminimum" /><code>{"private float velocityMinimum"}</code> | Lowest launch speed (default 15). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inaccuracymultiplier" /><code>{"float InaccuracyMultiplier { get; set; }"}</code> | Scales the random spread angle (default 1). Nothing in code sets it. |
| <Link id="m-velocitymultiplier" /><code>{"float VelocityMultiplier { get; set; }"}</code> | Scales the launch speed (default 1). Nothing in code sets it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shoot" /><code>{"void Shoot()"}</code> | Server: fires a projectile at the end of the frame. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sety" /><code>{"private Vector3 SetY(Vector3 vector, float y)"}</code> | Returns the vector's flat direction rescaled so its Y component is the given value and its length is 1. |
| <Link id="m-shootatendofframe" /><code>{"private IEnumerator ShootAtEndOfFrame() (iterator)"}</code> | Coroutine behind `Shoot`: skips dead creatures, aims, adds spread, spawns the projectile in the creature's chunk and sets the creature as its shooter. |

</details>
