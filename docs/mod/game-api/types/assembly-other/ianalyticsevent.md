---
title: "IAnalyticsEvent"
description: "An analytics event: a name, an optional user id and its properties, plus instruments that add extra data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAnalyticsEvent

An **interface** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

An analytics event: a name, an optional user id and its properties, plus instruments that add extra data. Sent through `IAnalyticsService.Send`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsPropertyWriter`](/mod/game-api/types/assembly-other/ianalyticspropertywriter)
- **Derived types** [`AnalyticsEvent`](/mod/game-api/types/assembly-other/analyticsevent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" Data { get; }"}</code> | The event's properties so far, read-only. |
| <Link id="m-eventname" /><code>{"string EventName { get; }"}</code> | Name of the event, such as "Micro Tutorial Enter". |
| <Link id="m-userid" /><code>{"int? UserId { get; }"}</code> | Id of the player the event is about, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinstrument" /><code>{"void AddInstrument("}<Link to="/mod/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{" instrument)"}</code> | Adds an instrument that writes extra properties into the event. It runs straight away if a resolver is set, otherwise when the event is sent. |

## Used in

Members of other types that take, return or hold a `IAnalyticsEvent`:

[`AnalyticsService.Send`](/mod/game-api/types/assembly-other/analyticsservice#m-send), [`IAnalyticsService.Send`](/mod/game-api/types/assembly-other/ianalyticsservice#m-send).
