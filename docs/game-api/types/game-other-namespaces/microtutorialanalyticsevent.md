---
title: "MicroTutorialAnalyticsEvent"
description: "class MicroTutorialAnalyticsEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialAnalyticsEvent

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`TownshipAnalyticsEvent`](/game-api/types/game-other-namespaces/townshipanalyticsevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialAnalyticsEvent(string eventName, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-enterevent" /><code>{"const string EnterEvent"}</code> |  |
| <Link id="m-exitevent" /><code>{"const string ExitEvent"}</code> |  |
| <Link id="m-stepcompletedevent" /><code>{"const string StepCompletedEvent"}</code> |  |
| <Link id="m-isreplaykey" /><code>{"private const string IsReplayKey"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-namekey" /><code>{"private const string NameKey"}</code> |  |
| <Link id="m-sessionidkey" /><code>{"private const string SessionIdKey"}</code> |  |
| <Link id="m-stepcountkey" /><code>{"private const string StepCountKey"}</code> |  |
| <Link id="m-stepnamekey" /><code>{"private const string StepNameKey"}</code> |  |
| <Link id="m-stepnumberkey" /><code>{"private const string StepNumberKey"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentstepdata" /><code>{"private static ValueTuple<int, string> GetCurrentStepData("}<Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" tutorial)"}</code> |  |
