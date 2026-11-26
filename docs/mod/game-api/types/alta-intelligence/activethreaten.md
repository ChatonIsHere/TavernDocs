---
title: "ActiveThreaten"
description: "Action where the agent faces and threatens its target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveThreaten

A **class** in `Root.Township`, `Alta.Intelligence`.

Action where the agent faces and threatens its target. If the target comes too close it finishes and switches to the `ChangeTo` action set; if it leaves, it cancels.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentThreatenSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveThreaten()"}</code> | <span className="api-desc">Creates an `ActiveThreaten` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelsquared" /><code>{"private float cancelSquared"}</code> | <span className="api-desc">Squared distance beyond which the threat is dropped.</span> |
| <Link id="m-instantsquared" /><code>{"private float instantSquared"}</code> | <span className="api-desc">Squared distance within which the agent reacts at once.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Faces the target if set to, finishes when it is inside the instant distance, cancels past the cancel distance.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Sets a random duration and squares the instant and cancel distances.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlecancelled" /><code>{"private void HandleCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" cancelled)"}</code> | <span className="api-desc">Clears the facing target.</span> |
| <Link id="m-handlefinished" /><code>{"private void HandleFinished("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Switches the agent to the `ChangeTo` action set and clears facing.</span> |

</details>
