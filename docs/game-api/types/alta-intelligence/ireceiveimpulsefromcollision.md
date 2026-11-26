---
title: "IReceiveImpulseFromCollision"
description: "Implemented by things that want to know the strength of a collision impulse they took."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IReceiveImpulseFromCollision

An **interface** in `Root.Township`, `Alta.Intelligence`.

Implemented by things that want to know the strength of a collision impulse they took.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`FireBug`](/game-api/types/alta-intelligence/firebug)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivedimpulse" /><code>{"void ReceivedImpulse(float strength)"}</code> | Called with the strength of a collision impulse. |

## Used in

Members of other types that take, return or hold a `IReceiveImpulseFromCollision`:

[`CollisionImpulseReader.target`](/game-api/types/alta-intelligence/collisionimpulsereader#m-target).
