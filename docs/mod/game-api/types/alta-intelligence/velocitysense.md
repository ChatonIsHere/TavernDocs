---
title: "VelocitySense"
description: "Sense asset meant to give a target's speed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocitySense

A **class** in `Root.Township`, `Alta.Intelligence`.

Sense asset meant to give a target's speed. Every target returns 0 in this build, since nothing overrides `GetVelocity`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/mod/game-api/types/alta-intelligence/sense)
- **Derived types** [`VelocitySense.Create`](/mod/game-api/types/alta-intelligence/velocitysense-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-intelligence/velocitysense-create)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VelocitySense()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | The target's `GetVelocity`, which is always 0 in this build. |
