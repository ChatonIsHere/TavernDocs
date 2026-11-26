---
title: "MicroTutorialAnalyticsEvent"
description: "Analytics event for micro tutorials (enter, exit, step completed), with the tutorial name, session ID, replay flag and step details."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialAnalyticsEvent

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Analytics event for micro tutorials (enter, exit, step completed), with the tutorial name, session ID, replay flag and step details.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`TownshipAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/townshipanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialAnalyticsEvent(string eventName, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Creates a `MicroTutorialAnalyticsEvent` from `eventName`, `tutorial` and `player`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-enterevent" /><code>{"const string EnterEvent"}</code> | <span className="api-desc">Event name sent when a player enters a tutorial.</span> |
| <Link id="m-exitevent" /><code>{"const string ExitEvent"}</code> | <span className="api-desc">Event name sent when a player leaves a tutorial.</span> |
| <Link id="m-stepcompletedevent" /><code>{"const string StepCompletedEvent"}</code> | <span className="api-desc">Event name sent when a tutorial step is completed.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isreplaykey" /><code>{"private const string IsReplayKey"}</code> | <span className="api-desc">Property key for whether the player had already completed the tutorial (the key text has a typo, "Turorial").</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-namekey" /><code>{"private const string NameKey"}</code> | <span className="api-desc">Property key for the tutorial name.</span> |
| <Link id="m-sessionidkey" /><code>{"private const string SessionIdKey"}</code> | <span className="api-desc">Property key for the tutorial session ID.</span> |
| <Link id="m-stepcountkey" /><code>{"private const string StepCountKey"}</code> | <span className="api-desc">Property key for the number of steps.</span> |
| <Link id="m-stepnamekey" /><code>{"private const string StepNameKey"}</code> | <span className="api-desc">Property key for the current step's name.</span> |
| <Link id="m-stepnumberkey" /><code>{"private const string StepNumberKey"}</code> | <span className="api-desc">Property key for the current step number, counted from 1.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentstepdata" /><code>{"private static ValueTuple<int, string> GetCurrentStepData("}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> | <span className="api-desc">Returns the step index and name to report, based on the tutorial state; logs and returns "Error" for a bad index.</span> |

</details>
