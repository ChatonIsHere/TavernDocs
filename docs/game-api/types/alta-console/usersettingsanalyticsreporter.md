---
title: "UserSettingsAnalyticsReporter"
description: "class UserSettingsAnalyticsReporter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserSettingsAnalyticsReporter

A **class** in `Root.Township`, `Alta.Analytics.UserSettingsAnalytics`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `IInitializable`, `IIsolate`
- **Attributes** `Preserve`, `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserSettingsAnalyticsReporter("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |
| <Link id="m-config" /><code>{"private "}<Link to="/game-api/types/alta-console/usersettingsanalyticsreporterconfiguration">{"UserSettingsAnalyticsReporterConfiguration"}</Link>{" config"}</code> |  |
| <Link id="m-configaddressablename" /><code>{"private const string ConfigAddressableName"}</code> |  |
| <Link id="m-confighandle" /><code>{"private AsyncOperationHandle<"}<Link to="/game-api/types/alta-console/usersettingsanalyticsreporterconfiguration">{"UserSettingsAnalyticsReporterConfiguration"}</Link>{"> configHandle"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-playerprefsprefix" /><code>{"private const string PlayerPrefsPrefix"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-release" /><code>{"void Release()"}</code> |  |
| <Link id="m-getenddate" /><code>{"private DateTime? GetEndDate()"}</code> |  |
| <Link id="m-hasreportbeencompleted" /><code>{"private bool HasReportBeenCompleted()"}</code> |  |
| <Link id="m-iscurrentlybeforeenddate" /><code>{"private bool IsCurrentlyBeforeEndDate()"}</code> |  |
| <Link id="m-isvalidreportparticipant" /><code>{"private bool IsValidReportParticipant()"}</code> |  |
| <Link id="m-loadconfig" /><code>{"private async Task LoadConfig()"}</code> |  |
| <Link id="m-onloggedin" /><code>{"private async void OnLoggedIn()"}</code> |  |
| <Link id="m-report" /><code>{"private async Task Report()"}</code> |  |
