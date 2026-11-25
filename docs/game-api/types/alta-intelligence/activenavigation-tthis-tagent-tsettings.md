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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<TAgent, TSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Derived types** [`ActiveDistanceFromTarget`](/game-api/types/alta-intelligence/activedistancefromtarget), [`ActiveFollow`](/game-api/types/alta-intelligence/activefollow), [`ActiveInteractApproach`](/game-api/types/alta-intelligence/activeinteractapproach), [`ActiveNest`](/game-api/types/alta-intelligence/activenest), [`ActiveWander`](/game-api/types/alta-intelligence/activewander)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveNavigation()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing here. Movement is left to the director and walker. |
| <Link id="m-failed" /><code>{"protected virtual void Failed()"}</code> | Runs when pathfinding fails. Cancels the action, and removes the target for a while first if the settings say to. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Applies the walker settings and hooks target reached and path failure. With overshooting on, finishes when the walker stops instead. |
| <Link id="m-targetreached" /><code>{"protected virtual void TargetReached()"}</code> | Runs when the target is reached. Finishes the action. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-stop" /><code>{"private void Stop("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> |
| <Link id="m-stopfollow" /><code>{"private void StopFollow()"}</code> |

</details>
