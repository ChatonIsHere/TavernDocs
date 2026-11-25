---
title: "UserSettingsReport"
description: "class UserSettingsReport in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserSettingsReport

A **class** in `Root.Township`, `Alta.Analytics.UserSettingsAnalytics`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UserSettingsReport(string reportTitle)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-usersettingsreportname" /><code>{"const string UserSettingsReportName"}</code> |

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-eventdata" /><code>{"private readonly Dictionary<string, object> eventData"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-reporttitle" /><code>{"private readonly string reportTitle"}</code> |
| <Link id="m-userid" /><code>{"private readonly int userId"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-postreport" /><code>{"async Task<bool> PostReport("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-populateeventdata" /><code>{"private async Task PopulateEventData()"}</code> |

</details>
