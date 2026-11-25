---
title: "SignupAnalyticsReporter"
description: "class SignupAnalyticsReporter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SignupAnalyticsReporter

A **class** in `Root.Township`, `Features.Analytics.Registration`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SignupAnalyticsReporter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-eventdata" /><code>{"private readonly Dictionary<string, object> eventData"}</code> |  |
| <Link id="m-eventflowid" /><code>{"private string eventFlowId"}</code> |  |
| <Link id="m-flowstopwatch" /><code>{"private Stopwatch flowStopWatch"}</code> |  |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/game-other-namespaces/signupanalyticsreporter">{"SignupAnalyticsReporter"}</Link>{" instance"}</code> |  |
| <Link id="m-istestmode" /><code>{"private bool isTestMode"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-oculususerid" /><code>{"private string oculusUserId"}</code> |  |
| <Link id="m-screenstopwatch" /><code>{"private Stopwatch screenStopwatch"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/game-other-namespaces/signupanalyticsreporter">{"SignupAnalyticsReporter"}</Link>{" Instance { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addeventdata" /><code>{"void AddEventData(string key, object value)"}</code> |  |
| <Link id="m-reportlinkingerror" /><code>{"void ReportLinkingError(string screenName, string error)"}</code> |  |
| <Link id="m-reportlinkingfinished" /><code>{"void ReportLinkingFinished()"}</code> |  |
| <Link id="m-reportlinkingstarted" /><code>{"void ReportLinkingStarted()"}</code> |  |
| <Link id="m-reportregistrationerror" /><code>{"void ReportRegistrationError(string screenName, string error)"}</code> |  |
| <Link id="m-reportregistrationfinished" /><code>{"void ReportRegistrationFinished()"}</code> |  |
| <Link id="m-reportregistrationstarted" /><code>{"void ReportRegistrationStarted()"}</code> |  |
| <Link id="m-reportscreenfinished" /><code>{"void ReportScreenFinished(string screenName)"}</code> |  |
| <Link id="m-reportscreenstarted" /><code>{"void ReportScreenStarted(string screenName)"}</code> |  |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> |  |
| <Link id="m-postreport" /><code>{"private void PostReport(string eventType)"}</code> |  |
