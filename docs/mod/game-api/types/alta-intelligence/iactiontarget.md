---
title: "IActionTarget"
description: "A possible target for an AI action, with the weight it scored."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IActionTarget

An **interface** in `Root.Township`, `Alta.Intelligence`.

A possible target for an AI action, with the weight it scored.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`ActionTarget<TAgent>`](/mod/game-api/types/alta-intelligence/actiontarget-tagent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code><Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | The target. |
| <Link id="m-weight" /><code>{"float Weight { get; }"}</code> | How strongly the action wants this target. |

## Used in

Members of other types that take, return or hold a `IActionTarget`:

[`Agent.InternalStartAction`](/mod/game-api/types/alta-intelligence/agent#m-internalstartaction).
