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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<IInteractAgent, AgentEatSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveEat()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | The scheduled `Consume` call on the timeline, so it can be cancelled. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Cancels if the target is lost. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Destroys the target at once if immediate, else starts interacting and schedules `Consume`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"private void Cancel("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Called when the interaction ends early; cancels the pending eat and the action. |
| <Link id="m-consume" /><code>{"private void Consume()"}</code> | Destroys the thing being eaten and finishes the action. |

</details>
