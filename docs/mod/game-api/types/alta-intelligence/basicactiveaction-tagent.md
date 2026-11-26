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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`IBasicActiveAction<TAgent>`](/mod/game-api/types/alta-intelligence/ibasicactiveaction-intagent), [`IActiveAction`](/mod/game-api/types/alta-intelligence/iactiveaction)
- **Derived types** [`BasicActiveAction<TAgent, TSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicActiveAction()"}</code> | <span className="api-desc">Creates a `BasicActiveAction` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">Shared logger for actions.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" finishEntry"}</code> | <span className="api-desc">Timeline entry that calls `Finish` when the duration set by `SetDuration` runs out. Cancelled on finish or cancel.</span> |
| <Link id="m-finishtime" /><code>{"private float finishTime"}</code> | <span className="api-desc">Reset to -1 on start but never read in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code><Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" Action { get; private set; }"}</code> | <span className="api-desc">The action definition this run came from.</span> |
| <Link id="m-editorduration" /><code>{"float EditorDuration { get; private set; }"}</code> | <span className="api-desc">The full timed length set by `SetDuration`, including the agent's base action duration.</span> |
| <Link id="m-generaltopic" /><code><Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" GeneralTopic { get; }"}</code> | <span className="api-desc">The agent, as `IAgent`.</span> |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> | <span className="api-desc">True once the run has finished or been cancelled.</span> |
| <Link id="m-topic" /><code>{"TAgent Topic { get; private set; }"}</code> | <span className="api-desc">The agent running the action.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cancelled" /><code>{"event "}<Link to="/mod/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Cancelled"}</code> | <span className="api-desc">Raised once when the run is cancelled. Cleared on each `Start`.</span> |
| <Link id="m-finished" /><code>{"event "}<Link to="/mod/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Finished"}</code> | <span className="api-desc">Raised once when the run finishes. Cleared on each `Start`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | <span className="api-desc">Ends the run as cancelled and raises `Cancelled`, unless it already ended.</span> |
| <Link id="m-start" /><code>{"void Start("}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" action, TAgent topic)"}</code> | <span className="api-desc">Starts a run of the action on an agent, clearing old listeners and state.</span> |
| <Link id="m-update" /><code>{"abstract void Update(bool hasTarget)"}</code> | <span className="api-desc">Called while the action runs, with whether the agent has a target.</span> |
| <Link id="m-finish" /><code>{"protected void Finish()"}</code> | <span className="api-desc">Ends the run as finished and raises `Finished`, unless it already ended.</span> |
| <Link id="m-onstart" /><code>{"protected abstract void OnStart()"}</code> | <span className="api-desc">Subclasses start their behaviour here.</span> |
| <Link id="m-setduration" /><code>{"protected void SetDuration(float min, float max)"}</code> | <span className="api-desc">Makes the run finish by itself after the agent's action duration plus a fixed or random extra time.</span> |
| <Link id="m-setduration-2" /><code>{"protected void SetDuration(float duration)"}</code> | <span className="api-desc">Makes the run finish by itself after the agent's action duration plus a fixed or random extra time.</span> |
