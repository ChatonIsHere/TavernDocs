---
title: "IAction<TAgent>"
description: "An AI action that can be started on a given agent type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAction&lt;TAgent&gt;

An **interface** in `Root.Township`, `Alta.Intelligence`.

An AI action that can be started on a given agent type.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`IAction`](/mod/game-api/types/alta-intelligence/iaction)
- **Derived types** [`Action<TAgent>`](/mod/game-api/types/alta-intelligence/action-tagent)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code><Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" Start(TAgent agent)"}</code> | <span className="api-desc">Starts the action on the agent and returns the running `IActiveAction`.</span> |

## Used in

Members of other types that take, return or hold a `IAction&lt;TAgent>`:

<div className="api-used-in">

[`ActionSet<TAgent>.AddAction`](/mod/game-api/types/alta-intelligence/actionset-tagent#m-addaction), [`ActionSet<TAgent>.baseActions`](/mod/game-api/types/alta-intelligence/actionset-tagent#m-baseactions), [`ActionSet<TAgent>.BaseActions`](/mod/game-api/types/alta-intelligence/actionset-tagent#m-baseactions-2), [`ActionSet<TAgent>.RemoveAction`](/mod/game-api/types/alta-intelligence/actionset-tagent#m-removeaction), [`ActionSet<TAgent>.targetActions`](/mod/game-api/types/alta-intelligence/actionset-tagent#m-targetactions), [`ActionSet<TAgent>.TargetActions`](/mod/game-api/types/alta-intelligence/actionset-tagent#m-targetactions-2), [`ActionTarget<TAgent>.Action`](/mod/game-api/types/alta-intelligence/actiontarget-tagent#m-action), [`ActionTarget<TAgent>.ActionTarget<TAgent>`](/mod/game-api/types/alta-intelligence/actiontarget-tagent#m-ctor), [`Agent.InternalStartAction`](/mod/game-api/types/alta-intelligence/agent#m-internalstartaction), [`Agent<TThis>.actions`](/mod/game-api/types/alta-intelligence/agent-tthis#m-actions), [`Babu.Stunned`](/mod/game-api/types/alta-intelligence/babu#m-stunned).

</div>
