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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `IInitializable`, `IIsolate`
- **Attributes** `Preserve`, `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserSettingsAnalyticsReporter("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">The injected analytics service.</span> |
| <Link id="m-config" /><code>{"private "}<Link to="/mod/game-api/types/alta-console/usersettingsanalyticsreporterconfiguration">{"UserSettingsAnalyticsReporterConfiguration"}</Link>{" config"}</code> | <span className="api-desc">The loaded configuration (end date and report title).</span> |
| <Link id="m-configaddressablename" /><code>{"private const string ConfigAddressableName"}</code> | <span className="api-desc">Addressable key of the reporter's configuration asset.</span> |
| <Link id="m-confighandle" /><code>{"private AsyncOperationHandle<"}<Link to="/mod/game-api/types/alta-console/usersettingsanalyticsreporterconfiguration">{"UserSettingsAnalyticsReporterConfiguration"}</Link>{"> configHandle"}</code> | <span className="api-desc">Addressables handle for the config, kept so it can be released.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-playerprefsprefix" /><code>{"private const string PlayerPrefsPrefix"}</code> | <span className="api-desc">PlayerPrefs key prefix for the completion flag; the report title follows it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Subscribes `OnLoggedIn` to `LoginManager.LoggedIn`.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Releases the loaded config asset.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenddate" /><code>{"private DateTime? GetEndDate()"}</code> | <span className="api-desc">Parses the config's `EndDate` (yyyy-MM-dd), or null if it does not parse.</span> |
| <Link id="m-hasreportbeencompleted" /><code>{"private bool HasReportBeenCompleted()"}</code> | <span className="api-desc">Checks PlayerPrefs for the completion flag of this report title.</span> |
| <Link id="m-iscurrentlybeforeenddate" /><code>{"private bool IsCurrentlyBeforeEndDate()"}</code> | <span className="api-desc">True when now is before the end date. False if there is no valid end date.</span> |
| <Link id="m-isvalidreportparticipant" /><code>{"private bool IsValidReportParticipant()"}</code> | <span className="api-desc">True when before the end date and the report has not been sent.</span> |
| <Link id="m-loadconfig" /><code>{"private async Task LoadConfig()"}</code> | <span className="api-desc">Loads the configuration asset from Addressables.</span> |
| <Link id="m-onloggedin" /><code>{"private async void OnLoggedIn()"}</code> | <span className="api-desc">Runs once after the first login: loads the config and sends the report if this player qualifies.</span> |
| <Link id="m-report" /><code>{"private async Task Report()"}</code> | <span className="api-desc">Posts a `UserSettingsReport` and on success saves the completion flag and releases the config.</span> |

</details>
