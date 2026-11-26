---
title: "TrialEventData"
description: "Payload of the TrialStarted and TrialFinished console events, raised by TrialLogic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrialEventData

A **class** in `Root.Township`, no namespace.

Payload of the `TrialStarted` and `TrialFinished` console events, raised by `TrialLogic`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrialEventData()"}</code> | Creates a `TrialEventData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-players" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> players"}</code> | Account info of the players in the trial. |
| <Link id="m-trial" /><code>{"string trial"}</code> | The trial's key: the chunk identifier of the trial. |

## Used in

Members of other types that take, return or hold a `TrialEventData`:

[`ConsoleEvents.TrialFinished`](/game-api/types/alta-console/consoleevents#m-trialfinished), [`ConsoleEvents.TrialStarted`](/game-api/types/alta-console/consoleevents#m-trialstarted).
