---
title: "ProjectileShooter"
description: "class ProjectileShooter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProjectileShooter

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`AimMode`](/game-api/types/alta-intelligence/projectileshooter-aimmode)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProjectileShooter()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> |
| <Link id="m-aimmode" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/projectileshooter-aimmode">{"ProjectileShooter.AimMode"}</Link>{" aimMode"}</code> |
| <Link id="m-direction" /><code>{"private Transform direction"}</code> |
| <Link id="m-maximumaccuracyangle" /><code>{"private float maximumAccuracyAngle"}</code> |
| <Link id="m-projectileprefab" /><code>{"private "}<Link to="/game-api/types/global-p/projectile">{"Projectile"}</Link>{" projectilePrefab"}</code> |
| <Link id="m-velocitymaximum" /><code>{"private float velocityMaximum"}</code> |
| <Link id="m-velocityminimum" /><code>{"private float velocityMinimum"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-inaccuracymultiplier" /><code>{"float InaccuracyMultiplier { get; set; }"}</code> |
| <Link id="m-velocitymultiplier" /><code>{"float VelocityMultiplier { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-shoot" /><code>{"void Shoot()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-sety" /><code>{"private Vector3 SetY(Vector3 vector, float y)"}</code> |
| <Link id="m-shootatendofframe" /><code>{"private IEnumerator ShootAtEndOfFrame() (iterator)"}</code> |

</details>
