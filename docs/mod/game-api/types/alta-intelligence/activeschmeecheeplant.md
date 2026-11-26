---
title: "ActiveSchmeecheePlant"
description: "Schmeechee action where it buries itself in the ground and sleeps for a while, then pops out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveSchmeecheePlant

A **class** in `Root.Township`, `Alta.Intelligence`.

Schmeechee action where it buries itself in the ground and sleeps for a while, then pops out.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Schmeechee, SchmeecheePlantSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSchmeecheePlant()"}</code> | <span className="api-desc">Creates an `ActiveSchmeecheePlant` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishplant" /><code>{"private float finishPlant"}</code> | <span className="api-desc">Time the embed curve ends.</span> |
| <Link id="m-isplanting" /><code>{"private bool isPlanting"}</code> | <span className="api-desc">Whether it is still sinking in.</span> |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | <span className="api-desc">Time planting started.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/activeidle">{"ActiveIdle"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{"> GetAction("}<Link to="/mod/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Returns an `ActiveIdle` action for the given idle settings, not a plant action.</span> |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">While planting, sinks the model along `embedOffset` and goes kinematic once not held.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Sets a random duration, tells clients to embed, sets the sleeping bool and hooks finish and cancel.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Wakes it, makes it non-kinematic and pops it upwards.</span> |

</details>
