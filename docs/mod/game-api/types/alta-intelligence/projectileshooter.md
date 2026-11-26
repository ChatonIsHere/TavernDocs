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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`AimMode`](/mod/game-api/types/alta-intelligence/projectileshooter-aimmode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProjectileShooter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | <span className="api-desc">The creature shooting. Its target is aimed at and it becomes the projectile's `Shooter`.</span> |
| <Link id="m-aimmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/projectileshooter-aimmode">{"ProjectileShooter.AimMode"}</Link>{" aimMode"}</code> | <span className="api-desc">How to aim: `Forward`, `Target`, or a mix of forward and the target direction for the vertical or horizontal part.</span> |
| <Link id="m-direction" /><code>{"private Transform direction"}</code> | <span className="api-desc">Transform whose forward is used as the forward aim. Falls back to this transform.</span> |
| <Link id="m-maximumaccuracyangle" /><code>{"private float maximumAccuracyAngle"}</code> | <span className="api-desc">Largest random spread in degrees (default 5). 0 shoots perfectly straight.</span> |
| <Link id="m-projectileprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-p/projectile">{"Projectile"}</Link>{" projectilePrefab"}</code> | <span className="api-desc">The projectile spawned.</span> |
| <Link id="m-velocitymaximum" /><code>{"private float velocityMaximum"}</code> | <span className="api-desc">Highest launch speed (default 15).</span> |
| <Link id="m-velocityminimum" /><code>{"private float velocityMinimum"}</code> | <span className="api-desc">Lowest launch speed (default 15).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inaccuracymultiplier" /><code>{"float InaccuracyMultiplier { get; set; }"}</code> | <span className="api-desc">Scales the random spread angle (default 1). Nothing in code sets it.</span> |
| <Link id="m-velocitymultiplier" /><code>{"float VelocityMultiplier { get; set; }"}</code> | <span className="api-desc">Scales the launch speed (default 1). Nothing in code sets it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-shoot" /><code>{"void Shoot()"}</code> | <span className="api-desc">Server: fires a projectile at the end of the frame.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sety" /><code>{"private Vector3 SetY(Vector3 vector, float y)"}</code> | <span className="api-desc">Returns the vector's flat direction rescaled so its Y component is the given value and its length is 1.</span> |
| <Link id="m-shootatendofframe" /><code>{"private IEnumerator ShootAtEndOfFrame() (iterator)"}</code> | <span className="api-desc">Coroutine behind `Shoot`: skips dead creatures, aims, adds spread, spawns the projectile in the creature's chunk and sets the creature as its shooter.</span> |

</details>
