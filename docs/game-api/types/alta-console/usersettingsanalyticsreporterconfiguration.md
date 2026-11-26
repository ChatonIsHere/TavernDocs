---
title: "UserSettingsAnalyticsReporterConfiguration"
description: "Asset that sets the title and cut-off date of a user settings analytics report."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserSettingsAnalyticsReporterConfiguration

A **class** in `Root.Township`, `Alta.Analytics.UserSettingsAnalytics`.

Asset that sets the title and cut-off date of a user settings analytics report. Read by `UserSettingsAnalyticsReporter`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserSettingsAnalyticsReporterConfiguration()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enddate" /><code>{"private string endDate"}</code> | Backing field for `EndDate`. |
| <Link id="m-reporttitle" /><code>{"private string reportTitle"}</code> | Backing field for `ReportTitle`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enddate-2" /><code>{"string EndDate { get; }"}</code> | UTC date in YYYY-MM-DD form after which no data is collected. The day itself is excluded. |
| <Link id="m-reporttitle-2" /><code>{"string ReportTitle { get; }"}</code> | Title of the report. |

## Used in

Members of other types that take, return or hold a `UserSettingsAnalyticsReporterConfiguration`:

[`UserSettingsAnalyticsReporter.config`](/game-api/types/alta-console/usersettingsanalyticsreporter#m-config), [`UserSettingsAnalyticsReporter.configHandle`](/game-api/types/alta-console/usersettingsanalyticsreporter#m-confighandle).
