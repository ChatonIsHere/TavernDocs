---
title: "ProjectileShooter.AimMode"
description: "How a ProjectileShooter aims: straight forward, at the target, or mixing forward and target direction per axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProjectileShooter.AimMode

An **enum** in `Root.Township`, `Alta.Intelligence`.

How a `ProjectileShooter` aims: straight forward, at the target, or mixing forward and target direction per axis.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`ProjectileShooter`](/game-api/types/alta-intelligence/projectileshooter)

## Values

| Member |
| --- |
| <Link id="m-forward" /><code>{"Forward = 0"}</code> |
| <Link id="m-forwardxztargety" /><code>{"ForwardXZTargetY = 2"}</code> |
| <Link id="m-forwardytargetxz" /><code>{"ForwardYTargetXZ = 3"}</code> |
| <Link id="m-target" /><code>{"Target = 1"}</code> |

## Used in

Members of other types that take, return or hold a `AimMode`:

[`ProjectileShooter.aimMode`](/game-api/types/alta-intelligence/projectileshooter#m-aimmode).
