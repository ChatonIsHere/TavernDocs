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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserSettingsAnalyticsReporterConfiguration()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enddate" /><code>{"private string endDate"}</code> | <span className="api-desc">Backing field for `EndDate`.</span> |
| <Link id="m-reporttitle" /><code>{"private string reportTitle"}</code> | <span className="api-desc">Backing field for `ReportTitle`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enddate-2" /><code>{"string EndDate { get; }"}</code> | <span className="api-desc">UTC date in YYYY-MM-DD form after which no data is collected. The day itself is excluded.</span> |
| <Link id="m-reporttitle-2" /><code>{"string ReportTitle { get; }"}</code> | <span className="api-desc">Title of the report.</span> |

## Used in

Members of other types that take, return or hold a `UserSettingsAnalyticsReporterConfiguration`:

<div className="api-used-in">

[`UserSettingsAnalyticsReporter.config`](/mod/game-api/types/alta-console/usersettingsanalyticsreporter#m-config), [`UserSettingsAnalyticsReporter.configHandle`](/mod/game-api/types/alta-console/usersettingsanalyticsreporter#m-confighandle).

</div>
