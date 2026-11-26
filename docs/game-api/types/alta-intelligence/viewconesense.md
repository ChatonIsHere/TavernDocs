---
title: "ViewConeSense"
description: "Sense asset giving where a target sits in the creature's view cone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ViewConeSense

A **class** in `Root.Township`, `Alta.Intelligence`.

Sense asset giving where a target sits in the creature's view cone. The creature must implement `IHasViewCone`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/game-api/types/alta-intelligence/sense)
- **Derived types** [`ViewConeSense.Create`](/game-api/types/alta-intelligence/viewconesense-create)
- **Nested types** [`Create`](/game-api/types/alta-intelligence/viewconesense-create)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ViewConeSense()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | The view cone ratio for the target's position, as `ViewCone.Contains` reports it. |
