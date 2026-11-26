---
title: "IAnalyticsData"
description: "A writable set of analytics properties for one event, which can also be tagged with a user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAnalyticsData

An **interface** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

A writable set of analytics properties for one event, which can also be tagged with a user.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsPropertyWriter`](/mod/game-api/types/assembly-other/ianalyticspropertywriter), [`IReadonlyAnalyticsData`](/mod/game-api/types/assembly-other/ireadonlyanalyticsdata), `IReadOnlyCollection<IAnalyticsProperty>`, `IEnumerable<IAnalyticsProperty>`, `IEnumerable`
- **Derived types** [`AnalyticsData`](/mod/game-api/types/assembly-other/analyticsdata)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setuserid" /><code>{"void SetUserId(int userId)"}</code> | Sets the Alta user id the event belongs to. |

## Used in

Members of other types that take, return or hold a `IAnalyticsData`:

[`AnalyticsEvent.data`](/mod/game-api/types/assembly-other/analyticsevent#m-data), [`IAnalyticsInstrument.AppendResult`](/mod/game-api/types/assembly-other/ianalyticsinstrument#m-appendresult), [`ServerInfoInstrument.AppendResult`](/mod/game-api/types/game-other-namespaces/serverinfoinstrument#m-appendresult).
