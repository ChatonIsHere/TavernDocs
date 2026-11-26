---
title: "Facing3DSense"
description: "Sense asset giving how much the creature faces a target in 3D: 1 straight ahead, -1 behind."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Facing3DSense

A **class** in `Root.Township`, `Alta.Intelligence`.

Sense asset giving how much the creature faces a target in 3D: 1 straight ahead, -1 behind.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/game-api/types/alta-intelligence/sense)
- **Derived types** [`Facing3DSense.Create`](/game-api/types/alta-intelligence/facing3dsense-create)
- **Nested types** [`Create`](/game-api/types/alta-intelligence/facing3dsense-create)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Facing3DSense()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Dot product of the creature's forward and the direction to the target, height included. |
