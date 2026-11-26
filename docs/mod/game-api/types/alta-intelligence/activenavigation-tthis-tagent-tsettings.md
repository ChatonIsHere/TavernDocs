---
title: "ActiveNavigation<TThis, TAgent, TSettings>"
description: "Base for creature actions that walk the agent to its target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveNavigation&lt;TThis, TAgent, TSettings&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

Base for creature actions that walk the agent to its target. Applies speed and acceleration from the settings and finishes when the navigator reaches the target.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<TAgent, TSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Derived types** [`ActiveDistanceFromTarget`](/mod/game-api/types/alta-intelligence/activedistancefromtarget), [`ActiveFollow`](/mod/game-api/types/alta-intelligence/activefollow), [`ActiveInteractApproach`](/mod/game-api/types/alta-intelligence/activeinteractapproach), [`ActiveNest`](/mod/game-api/types/alta-intelligence/activenest), [`ActiveWander`](/mod/game-api/types/alta-intelligence/activewander)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveNavigation()"}</code> | <span className="api-desc">Creates an `ActiveNavigation` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Does nothing here. Movement is left to the director and walker.</span> |
| <Link id="m-failed" /><code>{"protected virtual void Failed()"}</code> | <span className="api-desc">Runs when pathfinding fails. Cancels the action, and removes the target for a while first if the settings say to.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Applies the walker settings and hooks target reached and path failure. With overshooting on, finishes when the walker stops instead.</span> |
| <Link id="m-targetreached" /><code>{"protected virtual void TargetReached()"}</code> | <span className="api-desc">Runs when the target is reached. Finishes the action.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stop" /><code>{"private void Stop("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | <span className="api-desc">Runs when the action finishes or is cancelled: unhooks navigator events, stops the director and clears the blocked state.</span> |
| <Link id="m-stopfollow" /><code>{"private void StopFollow()"}</code> | <span className="api-desc">Overshooting mode: when the navigator reaches its target, stops the director and finishes if the path is done.</span> |

</details>
