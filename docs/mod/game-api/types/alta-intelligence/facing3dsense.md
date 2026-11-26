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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/mod/game-api/types/alta-intelligence/sense)
- **Derived types** [`Facing3DSense.Create`](/mod/game-api/types/alta-intelligence/facing3dsense-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-intelligence/facing3dsense-create)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Facing3DSense()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Dot product of the creature's forward and the direction to the target, height included. |
