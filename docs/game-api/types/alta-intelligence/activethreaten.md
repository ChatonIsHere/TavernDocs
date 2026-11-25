---
title: "ActiveThreaten"
description: "class ActiveThreaten in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveThreaten

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentThreatenSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveThreaten()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cancelsquared" /><code>{"private float cancelSquared"}</code> |
| <Link id="m-instantsquared" /><code>{"private float instantSquared"}</code> |

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
| <Link id="m-handlecancelled" /><code>{"private void HandleCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" cancelled)"}</code> |
| <Link id="m-handlefinished" /><code>{"private void HandleFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |

</details>
