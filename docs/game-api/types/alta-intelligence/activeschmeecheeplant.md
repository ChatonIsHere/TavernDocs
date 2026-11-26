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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Schmeechee, SchmeecheePlantSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveSchmeecheePlant()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishplant" /><code>{"private float finishPlant"}</code> | Time the embed curve ends. |
| <Link id="m-isplanting" /><code>{"private bool isPlanting"}</code> | Whether it is still sinking in. |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | Time planting started. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/activeidle">{"ActiveIdle"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{"> GetAction("}<Link to="/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{" settings)"}</code> | Returns an `ActiveIdle` action for the given idle settings, not a plant action. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | While planting, sinks the model along `embedOffset` and goes kinematic once not held. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Sets a random duration, tells clients to embed, sets the sleeping bool and hooks finish and cancel. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Wakes it, makes it non-kinematic and pops it upwards. |

</details>
