---
title: "BasicActiveAction<TAgent>"
description: "abstract class BasicActiveAction<TAgent> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicActiveAction&lt;TAgent&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IBasicActiveAction<TAgent>`](/game-api/types/alta-intelligence/ibasicactiveaction-intagent), [`IActiveAction`](/game-api/types/alta-intelligence/iactiveaction)
- **Derived types** [`BasicActiveAction<TAgent, TSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicActiveAction()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-finishentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" finishEntry"}</code> |  |
| <Link id="m-finishtime" /><code>{"private float finishTime"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code><Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" Action { get; private set; }"}</code> |  |
| <Link id="m-editorduration" /><code>{"float EditorDuration { get; private set; }"}</code> |  |
| <Link id="m-generaltopic" /><code><Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" GeneralTopic { get; }"}</code> |  |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> |  |
| <Link id="m-topic" /><code>{"TAgent Topic { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cancelled" /><code>{"event "}<Link to="/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Cancelled"}</code> |  |
| <Link id="m-finished" /><code>{"event "}<Link to="/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Finished"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> |  |
| <Link id="m-start" /><code>{"void Start("}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" action, TAgent topic)"}</code> |  |
| <Link id="m-update" /><code>{"abstract void Update(bool hasTarget)"}</code> |  |
| <Link id="m-finish" /><code>{"protected void Finish()"}</code> |  |
| <Link id="m-onstart" /><code>{"protected abstract void OnStart()"}</code> |  |
| <Link id="m-setduration" /><code>{"protected void SetDuration(float min, float max)"}</code> |  |
| <Link id="m-setduration-2" /><code>{"protected void SetDuration(float duration)"}</code> |  |
