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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/game-api/types/alta-intelligence/sense)
- **Derived types** [`HurtSense.Create`](/game-api/types/alta-intelligence/hurtsense-create)
- **Nested types** [`Create`](/game-api/types/alta-intelligence/hurtsense-create)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HurtSense()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | The creature's hurt value for the target, or 0 if the target hasn't hurt it. |
