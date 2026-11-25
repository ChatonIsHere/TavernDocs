---
title: "ActiveNavigation<TThis, TAgent, TSettings>"
description: "class ActiveNavigation<TThis, TAgent, TSettings> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveNavigation&lt;TThis, TAgent, TSettings&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<TAgent, TSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Derived types** [`ActiveDistanceFromTarget`](/game-api/types/alta-intelligence/activedistancefromtarget), [`ActiveFollow`](/game-api/types/alta-intelligence/activefollow), [`ActiveInteractApproach`](/game-api/types/alta-intelligence/activeinteractapproach), [`ActiveNest`](/game-api/types/alta-intelligence/activenest), [`ActiveWander`](/game-api/types/alta-intelligence/activewander)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveNavigation()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> |  |
| <Link id="m-failed" /><code>{"protected virtual void Failed()"}</code> |  |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |  |
| <Link id="m-stop" /><code>{"private void Stop("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> |  |
| <Link id="m-stopfollow" /><code>{"private void StopFollow()"}</code> |  |
| <Link id="m-targetreached" /><code>{"protected virtual void TargetReached()"}</code> |  |
