---
title: "SignupAnalyticsReporter"
description: "Obsolete client singleton that posts sign-up and account-linking analytics (screens, flow start, finish, errors and durations) through the old API client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SignupAnalyticsReporter

A **class** in `Root.Township`, `Features.Analytics.Registration`.

Obsolete client singleton that posts sign-up and account-linking analytics (screens, flow start, finish, errors and durations) through the old API client.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SignupAnalyticsReporter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventdata" /><code>{"private readonly Dictionary<string, object> eventData"}</code> | Property bag for the next report, cleared after each one. |
| <Link id="m-eventflowid" /><code>{"private string eventFlowId"}</code> | ID tying the events of one registration or linking flow together. |
| <Link id="m-flowstopwatch" /><code>{"private Stopwatch flowStopWatch"}</code> | Times the current registration or linking flow. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/game-other-namespaces/signupanalyticsreporter">{"SignupAnalyticsReporter"}</Link>{" instance"}</code> | Backing field for `Instance`. |
| <Link id="m-istestmode" /><code>{"private bool isTestMode"}</code> | When true, event names get a "Test" prefix. Never set to true in this code. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-oculususerid" /><code>{"private string oculusUserId"}</code> | The Oculus user ID sent with events on Quest. |
| <Link id="m-screenstopwatch" /><code>{"private Stopwatch screenStopwatch"}</code> | Times the current screen. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/game-other-namespaces/signupanalyticsreporter">{"SignupAnalyticsReporter"}</Link>{" Instance { get; }"}</code> | The singleton, set in `Awake`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addeventdata" /><code>{"void AddEventData(string key, object value)"}</code> | Adds a key and value to the property bag sent with the next report. |
| <Link id="m-reportlinkingerror" /><code>{"void ReportLinkingError(string screenName, string error)"}</code> | Reports a linking error with the screen name and error text. |
| <Link id="m-reportlinkingfinished" /><code>{"void ReportLinkingFinished()"}</code> | Reports linking finished with the flow duration, then clears the flow ID. |
| <Link id="m-reportlinkingstarted" /><code>{"void ReportLinkingStarted()"}</code> | Starts a new flow ID and stopwatch and reports linking started. |
| <Link id="m-reportregistrationerror" /><code>{"void ReportRegistrationError(string screenName, string error)"}</code> | Reports a registration error with the screen name and error text. |
| <Link id="m-reportregistrationfinished" /><code>{"void ReportRegistrationFinished()"}</code> | Reports registration finished with the flow duration, then clears the flow ID. |
| <Link id="m-reportregistrationstarted" /><code>{"void ReportRegistrationStarted()"}</code> | Starts a new flow ID and stopwatch and reports registration started. |
| <Link id="m-reportscreenfinished" /><code>{"void ReportScreenFinished(string screenName)"}</code> | Reports a screen finished, with seconds since the matching `ReportScreenStarted`. |
| <Link id="m-reportscreenstarted" /><code>{"void ReportScreenStarted(string screenName)"}</code> | Reports a screen started and restarts the screen stopwatch. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | Sets the singleton (destroying duplicates), starts the stopwatches and, on Quest, fetches the Oculus user ID. |
| <Link id="m-postreport" /><code>{"private void PostReport(string eventType)"}</code> | Posts a generic analytics event with the Oculus ID and `eventData`, logging any exception. |

</details>
