---
title: "ActiveCircleTarget"
description: "class ActiveCircleTarget in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveCircleTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

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

| Member |
| --- |
| <Link id="m-ismovingright" /><code>{"private bool isMovingRight"}</code> |
| <Link id="m-movingtowards" /><code>{"private Vector3 movingTowards"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clean" /><code>{"private void Clean("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |
| <Link id="m-getposition" /><code>{"private bool GetPosition(Vector3 targetPosition, Vector3 topicPosition, Vector3 toPosition, ref Vector3 intendedPosition)"}</code> |

</details>
