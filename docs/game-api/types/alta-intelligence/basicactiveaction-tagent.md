---
title: "BasicActiveAction<TAgent>"
description: "Base for a running creature action: one go of an action on one agent, which ends by finishing or being cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicActiveAction&lt;TAgent&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a running creature action: one go of an action on one agent, which ends by finishing or being cancelled. Subclasses fill in `OnStart` and `Update`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IBasicActiveAction<TAgent>`](/game-api/types/alta-intelligence/ibasicactiveaction-intagent), [`IActiveAction`](/game-api/types/alta-intelligence/iactiveaction)
- **Derived types** [`BasicActiveAction<TAgent, TSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected BasicActiveAction()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | Shared logger for actions. |

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-finishentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" finishEntry"}</code> |
| <Link id="m-finishtime" /><code>{"private float finishTime"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code><Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" Action { get; private set; }"}</code> | The action definition this run came from. |
| <Link id="m-editorduration" /><code>{"float EditorDuration { get; private set; }"}</code> | The full timed length set by `SetDuration`, including the agent's base action duration. |
| <Link id="m-generaltopic" /><code><Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" GeneralTopic { get; }"}</code> | The agent, as `IAgent`. |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> | True once the run has finished or been cancelled. |
| <Link id="m-topic" /><code>{"TAgent Topic { get; private set; }"}</code> | The agent running the action. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cancelled" /><code>{"event "}<Link to="/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Cancelled"}</code> | Raised once when the run is cancelled. Cleared on each `Start`. |
| <Link id="m-finished" /><code>{"event "}<Link to="/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Finished"}</code> | Raised once when the run finishes. Cleared on each `Start`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | Ends the run as cancelled and raises `Cancelled`, unless it already ended. |
| <Link id="m-start" /><code>{"void Start("}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" action, TAgent topic)"}</code> | Starts a run of the action on an agent, clearing old listeners and state. |
| <Link id="m-update" /><code>{"abstract void Update(bool hasTarget)"}</code> | Called while the action runs, with whether the agent has a target. |
| <Link id="m-finish" /><code>{"protected void Finish()"}</code> | Ends the run as finished and raises `Finished`, unless it already ended. |
| <Link id="m-onstart" /><code>{"protected abstract void OnStart()"}</code> | Subclasses start their behaviour here. |
| <Link id="m-setduration" /><code>{"protected void SetDuration(float min, float max)"}</code> | Makes the run finish by itself after the agent's action duration plus a fixed or random extra time. |
| <Link id="m-setduration-2" /><code>{"protected void SetDuration(float duration)"}</code> | Makes the run finish by itself after the agent's action duration plus a fixed or random extra time. |
