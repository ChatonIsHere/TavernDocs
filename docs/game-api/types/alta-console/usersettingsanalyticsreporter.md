---
title: "UserSettingsAnalyticsReporter"
description: "Sends a one-off report of the player's settings after login, if the addressable config's end date has not passed and this report title was not already sent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserSettingsAnalyticsReporter

A **class** in `Root.Township`, `Alta.Analytics.UserSettingsAnalytics`.

Sends a one-off report of the player's settings after login, if the addressable config's end date has not passed and this report title was not already sent. Client side; built by VContainer.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `IInitializable`, `IIsolate`
- **Attributes** `Preserve`, `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserSettingsAnalyticsReporter("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Built by the game's dependency injection (VContainer), which passes the services in. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | The injected analytics service. |
| <Link id="m-config" /><code>{"private "}<Link to="/game-api/types/alta-console/usersettingsanalyticsreporterconfiguration">{"UserSettingsAnalyticsReporterConfiguration"}</Link>{" config"}</code> | The loaded configuration (end date and report title). |
| <Link id="m-configaddressablename" /><code>{"private const string ConfigAddressableName"}</code> | Addressable key of the reporter's configuration asset. |
| <Link id="m-confighandle" /><code>{"private AsyncOperationHandle<"}<Link to="/game-api/types/alta-console/usersettingsanalyticsreporterconfiguration">{"UserSettingsAnalyticsReporterConfiguration"}</Link>{"> configHandle"}</code> | Addressables handle for the config, kept so it can be released. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-playerprefsprefix" /><code>{"private const string PlayerPrefsPrefix"}</code> | PlayerPrefs key prefix for the completion flag; the report title follows it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Subscribes `OnLoggedIn` to `LoginManager.LoggedIn`. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Releases the loaded config asset. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenddate" /><code>{"private DateTime? GetEndDate()"}</code> | Parses the config's `EndDate` (yyyy-MM-dd), or null if it does not parse. |
| <Link id="m-hasreportbeencompleted" /><code>{"private bool HasReportBeenCompleted()"}</code> | Checks PlayerPrefs for the completion flag of this report title. |
| <Link id="m-iscurrentlybeforeenddate" /><code>{"private bool IsCurrentlyBeforeEndDate()"}</code> | True when now is before the end date. False if there is no valid end date. |
| <Link id="m-isvalidreportparticipant" /><code>{"private bool IsValidReportParticipant()"}</code> | True when before the end date and the report has not been sent. |
| <Link id="m-loadconfig" /><code>{"private async Task LoadConfig()"}</code> | Loads the configuration asset from Addressables. |
| <Link id="m-onloggedin" /><code>{"private async void OnLoggedIn()"}</code> | Runs once after the first login: loads the config and sends the report if this player qualifies. |
| <Link id="m-report" /><code>{"private async Task Report()"}</code> | Posts a `UserSettingsReport` and on success saves the completion flag and releases the config. |

</details>
