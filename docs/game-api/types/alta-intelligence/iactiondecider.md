---
title: "IActionDecider"
description: "interface IActionDecider in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IActionDecider

An **interface** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`ActionDecider<TAgent>`](/game-api/types/alta-intelligence/actiondecider-tagent)

## Properties

| Member |
| --- |
| <Link id="m-possibletargets" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> PossibleTargets { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |

## Used in

Members of other types that take, return or hold a `IActionDecider`:

[`Agent.GeneralActionDecider`](/game-api/types/alta-intelligence/agent#m-generalactiondecider), [`Agent<TThis>.GeneralActionDecider`](/game-api/types/alta-intelligence/agent-tthis#m-generalactiondecider).
