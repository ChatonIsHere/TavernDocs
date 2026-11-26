---
title: "AltaAnalyticsDispatcher"
description: "Analytics dispatcher that posts each analytics event to the Alta API as a generic event with the logged-in user's ID."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaAnalyticsDispatcher

A **class** in `Root.Township`, `ATT.Analytics`.

Analytics dispatcher that posts each analytics event to the Alta API as a generic event with the logged-in user's ID. Runs off the main thread.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AbstractAnalyticsDispatcher`](/mod/game-api/types/assembly-other/abstractanalyticsdispatcher), `IIsolate`
- **Attributes** `Preserve`
- **Documented in** [Alta's web API](/mod/game-api/console-and-utilities/alta-web-api)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaAnalyticsDispatcher("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-stringbuilder" /><code>{"private static readonly StringBuilder stringBuilder"}</code> | <span className="api-desc">Shared builder used by `LogPretty`.</span> |
| <Link id="m-userid" /><code>{"private static int userId"}</code> | <span className="api-desc">Cached user ID, -1 until read.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-userid-2" /><code>{"private static int UserId { get; }"}</code> | <span className="api-desc">Logged-in user's ID, cached after the first read until logout.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onanalyticsevent" /><code>{"protected override void OnAnalyticsEvent("}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> | <span className="api-desc">Sends the event on a background task.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loggedout" /><code>{"private static void LoggedOut()"}</code> | <span className="api-desc">Clears the cached user ID when the user logs out.</span> |
| <Link id="m-logpretty" /><code>{"private static void LogPretty(string dataName, Dictionary<string, object> props)"}</code> | <span className="api-desc">Logs the sent event name and its properties at debug level.</span> |
| <Link id="m-senddata" /><code>{"private static async Task SendData("}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> | <span className="api-desc">Turns the event's properties into a dictionary and posts it with `PostGenericEventAsync`. Errors are logged.</span> |

</details>
