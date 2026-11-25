---
title: "ActiveIdle"
description: "class ActiveIdle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveIdle

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentIdleSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveIdle()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isslowing" /><code>{"private bool isSlowing"}</code> |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/activeidle">{"ActiveIdle"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{"> GetAction("}<Link to="/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{" settings)"}</code> |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ActiveIdle`:

[`ActiveSchmeecheePlant.GetAction`](/game-api/types/alta-intelligence/activeschmeecheeplant#m-getaction).
