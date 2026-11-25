---
title: "AltaAnalyticsDispatcher"
description: "class AltaAnalyticsDispatcher in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaAnalyticsDispatcher

A **class** in `Root.Township`, `ATT.Analytics`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AbstractAnalyticsDispatcher`](/game-api/types/assembly-other/abstractanalyticsdispatcher), `IIsolate`
- **Attributes** `Preserve`
- **Documented in** [Alta's web API](/game-api/console-and-utilities/alta-web-api)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaAnalyticsDispatcher("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-stringbuilder" /><code>{"private static readonly StringBuilder stringBuilder"}</code> |  |
| <Link id="m-userid" /><code>{"private static int userId"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-userid-2" /><code>{"private static int UserId { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedout" /><code>{"private static void LoggedOut()"}</code> |  |
| <Link id="m-logpretty" /><code>{"private static void LogPretty(string dataName, Dictionary<string, object> props)"}</code> |  |
| <Link id="m-onanalyticsevent" /><code>{"protected override void OnAnalyticsEvent("}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> |  |
| <Link id="m-senddata" /><code>{"private static async Task SendData("}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> |  |
