---
title: "HurtSense"
description: "Sense asset giving how much a target has hurt the creature, from its Hurt record."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HurtSense

A **class** in `Root.Township`, `Alta.Intelligence`.

Sense asset giving how much a target has hurt the creature, from its `Hurt` record.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/mod/game-api/types/alta-intelligence/sense)
- **Derived types** [`HurtSense.Create`](/mod/game-api/types/alta-intelligence/hurtsense-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-intelligence/hurtsense-create)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HurtSense()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">The creature's hurt value for the target, or 0 if the target hasn't hurt it.</span> |
