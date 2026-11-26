---
title: "ActiveEat"
description: "Action where an agent eats its target: it interacts with it, waits Delay, then destroys it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveEat

A **class** in `Root.Township`, `Alta.Intelligence`.

Action where an agent eats its target: it interacts with it, waits `Delay`, then destroys it. With `IsImmediate` the target is destroyed at once.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<IInteractAgent, AgentEatSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveEat()"}</code> | <span className="api-desc">Creates an `ActiveEat` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">The scheduled `Consume` call on the timeline, so it can be cancelled.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Cancels if the target is lost.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Destroys the target at once if immediate, else starts interacting and schedules `Consume`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"private void Cancel("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Called when the interaction ends early; cancels the pending eat and the action.</span> |
| <Link id="m-consume" /><code>{"private void Consume()"}</code> | <span className="api-desc">Destroys the thing being eaten and finishes the action.</span> |

</details>
