---
title: "Facing2DSense"
description: "Sense asset giving how much the creature faces a target on the flat: 1 straight ahead, 0 to the side, -1 behind."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Facing2DSense

A **class** in `Root.Township`, `Alta.Intelligence`.

Sense asset giving how much the creature faces a target on the flat: 1 straight ahead, 0 to the side, -1 behind.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/mod/game-api/types/alta-intelligence/sense)
- **Derived types** [`Facing2DSense.Create`](/mod/game-api/types/alta-intelligence/facing2dsense-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-intelligence/facing2dsense-create)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Facing2DSense()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Dot product of the creature's flat forward and the flat direction to the target.</span> |
