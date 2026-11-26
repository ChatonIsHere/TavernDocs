---
title: "ActiveCircleTarget"
description: "Server: running action that walks a creature in a circle around its target at a set distance, for a random duration."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveCircleTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that walks a creature in a circle around its target at a set distance, for a random duration. Settings come from `AgentCircleTargetSettings`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentCircleTargetSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveCircleTarget()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismovingright" /><code>{"private bool isMovingRight"}</code> | Which way the creature circles. |
| <Link id="m-movingtowards" /><code>{"private Vector3 movingTowards"}</code> | The current circle point being walked to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Faces the target and walks to the next circle point when the last walk ends. Finishes if blocked or too far from the target. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Picks a random side, flips it if a wall is in the way, and finishes if both sides are blocked. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"private void Clean("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Unhooks the end events and clears the walker's forward facing flag. |
| <Link id="m-getposition" /><code>{"private bool GetPosition(Vector3 targetPosition, Vector3 topicPosition, Vector3 toPosition, ref Vector3 intendedPosition)"}</code> | Finds the next point on the circle around the target, checking for walls and ground. False if the way is blocked. |

</details>
