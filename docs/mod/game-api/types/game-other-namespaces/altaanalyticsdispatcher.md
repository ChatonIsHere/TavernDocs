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
| <Link id="m-ctor" /><code>{"AltaAnalyticsDispatcher("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Built by the game's dependency injection (VContainer), which passes the services in. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-stringbuilder" /><code>{"private static readonly StringBuilder stringBuilder"}</code> | Shared builder used by `LogPretty`. |
| <Link id="m-userid" /><code>{"private static int userId"}</code> | Cached user ID, -1 until read. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-userid-2" /><code>{"private static int UserId { get; }"}</code> | Logged-in user's ID, cached after the first read until logout. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onanalyticsevent" /><code>{"protected override void OnAnalyticsEvent("}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> | Sends the event on a background task. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loggedout" /><code>{"private static void LoggedOut()"}</code> | Clears the cached user ID when the user logs out. |
| <Link id="m-logpretty" /><code>{"private static void LogPretty(string dataName, Dictionary<string, object> props)"}</code> | Logs the sent event name and its properties at debug level. |
| <Link id="m-senddata" /><code>{"private static async Task SendData("}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> | Turns the event's properties into a dictionary and posts it with `PostGenericEventAsync`. Errors are logged. |

</details>
