---
title: "UserSettingsReport"
description: "Collects the logged-in player's playtime, platform and many comfort, locomotion and graphics settings, and sends them as one analytics event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserSettingsReport

A **class** in `Root.Township`, `Alta.Analytics.UserSettingsAnalytics`.

Collects the logged-in player's playtime, platform and many comfort, locomotion and graphics settings, and sends them as one analytics event.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserSettingsReport(string reportTitle)"}</code> | Creates an `UserSettingsReport` from `reportTitle`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-usersettingsreportname" /><code>{"const string UserSettingsReportName"}</code> | The event name used for the report. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventdata" /><code>{"private readonly Dictionary<string, object> eventData"}</code> | The collected setting names and values. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-reporttitle" /><code>{"private readonly string reportTitle"}</code> | The report title from the config, included in the data. |
| <Link id="m-userid" /><code>{"private readonly int userId"}</code> | The logged-in user's ID, read when the report is created. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postreport" /><code>{"async Task<bool> PostReport("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Fills the data and sends a `UserSettingsAnalyticsEvent`. Returns false if anything throws. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-populateeventdata" /><code>{"private async Task PopulateEventData()"}</code> | Fetches the user's statistics from the API and fills the event data from them and the current game settings. |

</details>
