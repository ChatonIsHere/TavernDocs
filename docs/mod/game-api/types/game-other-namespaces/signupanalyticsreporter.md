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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SignupAnalyticsReporter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventdata" /><code>{"private readonly Dictionary<string, object> eventData"}</code> | <span className="api-desc">Property bag for the next report, cleared after each one.</span> |
| <Link id="m-eventflowid" /><code>{"private string eventFlowId"}</code> | <span className="api-desc">ID tying the events of one registration or linking flow together.</span> |
| <Link id="m-flowstopwatch" /><code>{"private Stopwatch flowStopWatch"}</code> | <span className="api-desc">Times the current registration or linking flow.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/signupanalyticsreporter">{"SignupAnalyticsReporter"}</Link>{" instance"}</code> | <span className="api-desc">Backing field for `Instance`.</span> |
| <Link id="m-istestmode" /><code>{"private bool isTestMode"}</code> | <span className="api-desc">When true, event names get a "Test" prefix. Never set to true in this code.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-oculususerid" /><code>{"private string oculusUserId"}</code> | <span className="api-desc">The Oculus user ID sent with events on Quest.</span> |
| <Link id="m-screenstopwatch" /><code>{"private Stopwatch screenStopwatch"}</code> | <span className="api-desc">Times the current screen.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/signupanalyticsreporter">{"SignupAnalyticsReporter"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The singleton, set in `Awake`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addeventdata" /><code>{"void AddEventData(string key, object value)"}</code> | <span className="api-desc">Adds a key and value to the property bag sent with the next report.</span> |
| <Link id="m-reportlinkingerror" /><code>{"void ReportLinkingError(string screenName, string error)"}</code> | <span className="api-desc">Reports a linking error with the screen name and error text.</span> |
| <Link id="m-reportlinkingfinished" /><code>{"void ReportLinkingFinished()"}</code> | <span className="api-desc">Reports linking finished with the flow duration, then clears the flow ID.</span> |
| <Link id="m-reportlinkingstarted" /><code>{"void ReportLinkingStarted()"}</code> | <span className="api-desc">Starts a new flow ID and stopwatch and reports linking started.</span> |
| <Link id="m-reportregistrationerror" /><code>{"void ReportRegistrationError(string screenName, string error)"}</code> | <span className="api-desc">Reports a registration error with the screen name and error text.</span> |
| <Link id="m-reportregistrationfinished" /><code>{"void ReportRegistrationFinished()"}</code> | <span className="api-desc">Reports registration finished with the flow duration, then clears the flow ID.</span> |
| <Link id="m-reportregistrationstarted" /><code>{"void ReportRegistrationStarted()"}</code> | <span className="api-desc">Starts a new flow ID and stopwatch and reports registration started.</span> |
| <Link id="m-reportscreenfinished" /><code>{"void ReportScreenFinished(string screenName)"}</code> | <span className="api-desc">Reports a screen finished, with seconds since the matching `ReportScreenStarted`.</span> |
| <Link id="m-reportscreenstarted" /><code>{"void ReportScreenStarted(string screenName)"}</code> | <span className="api-desc">Reports a screen started and restarts the screen stopwatch.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | <span className="api-desc">Sets the singleton (destroying duplicates), starts the stopwatches and, on Quest, fetches the Oculus user ID.</span> |
| <Link id="m-postreport" /><code>{"private void PostReport(string eventType)"}</code> | <span className="api-desc">Posts a generic analytics event with the Oculus ID and `eventData`, logging any exception.</span> |

</details>
