---
title: "TrialEventData"
description: "Payload of the TrialStarted and TrialFinished console events, raised by TrialLogic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrialEventData

A **class** in `Root.Township`, the global namespace.

Payload of the `TrialStarted` and `TrialFinished` console events, raised by `TrialLogic`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrialEventData()"}</code> | <span className="api-desc">Creates a `TrialEventData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-players" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> players"}</code> | <span className="api-desc">Account info of the players in the trial.</span> |
| <Link id="m-trial" /><code>{"string trial"}</code> | <span className="api-desc">The trial's key: the chunk identifier of the trial.</span> |

## Used in

Members of other types that take, return or hold a `TrialEventData`:

<div className="api-used-in">

[`ConsoleEvents.TrialFinished`](/mod/game-api/types/alta-console/consoleevents#m-trialfinished), [`ConsoleEvents.TrialStarted`](/mod/game-api/types/alta-console/consoleevents#m-trialstarted).

</div>
