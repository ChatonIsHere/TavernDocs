---
title: "IAnalyticsEvent"
description: "interface IAnalyticsEvent in Alta.Analytics.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAnalyticsEvent

An **interface** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsPropertyWriter`](/game-api/types/assembly-other/ianalyticspropertywriter)
- **Derived types** [`AnalyticsEvent`](/game-api/types/assembly-other/analyticsevent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" Data { get; }"}</code> |  |
| <Link id="m-eventname" /><code>{"string EventName { get; }"}</code> |  |
| <Link id="m-userid" /><code>{"int? UserId { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinstrument" /><code>{"void AddInstrument("}<Link to="/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{" instrument)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAnalyticsEvent`:

[`AnalyticsService.Send`](/game-api/types/assembly-other/analyticsservice#m-send), [`IAnalyticsService.Send`](/game-api/types/assembly-other/ianalyticsservice#m-send).
