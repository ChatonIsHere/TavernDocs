---
title: "ActiveFaceTarget"
description: "Server: running action that turns a creature until its target is close enough to the centre of its view cone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveFaceTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that turns a creature until its target is close enough to the centre of its view cone. The creature must implement `IHasViewCone`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentFaceTargetSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveFaceTarget()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> | The creature's view cone. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Finishes when the target is inside the view cone within `TargetRatio`, otherwise turns towards it. Cancels if there's no target. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Gets the creature's view cone. |
