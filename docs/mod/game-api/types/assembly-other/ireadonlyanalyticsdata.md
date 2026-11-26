---
title: "IReadonlyAnalyticsData"
description: "Read-only view of an analytics event: its name, the user it's for and its properties."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IReadonlyAnalyticsData

An **interface** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

Read-only view of an analytics event: its name, the user it's for and its properties.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IReadOnlyCollection<IAnalyticsProperty>`, `IEnumerable<IAnalyticsProperty>`, `IEnumerable`
- **Derived types** [`AnalyticsData`](/mod/game-api/types/assembly-other/analyticsdata), [`AnalyticsService`](/mod/game-api/types/assembly-other/analyticsservice), [`IAnalyticsData`](/mod/game-api/types/assembly-other/ianalyticsdata), [`IAnalyticsService`](/mod/game-api/types/assembly-other/ianalyticsservice)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventname" /><code>{"string EventName { get; }"}</code> | Name of the analytics event. |
| <Link id="m-userid" /><code>{"int? UserId { get; }"}</code> | The user the event is for, or null if none was set. |

## Used in

Members of other types that take, return or hold a `IReadonlyAnalyticsData`:

[`AbstractAnalyticsDispatcher.OnAnalyticsEvent`](/mod/game-api/types/assembly-other/abstractanalyticsdispatcher#m-onanalyticsevent), [`AnalyticsEvent.Data`](/mod/game-api/types/assembly-other/analyticsevent#m-data-2), [`AnalyticsService.AddListener`](/mod/game-api/types/assembly-other/analyticsservice#m-addlistener), [`AnalyticsService.eventBus`](/mod/game-api/types/assembly-other/analyticsservice#m-eventbus), [`AnalyticsService.RemoveListener`](/mod/game-api/types/assembly-other/analyticsservice#m-removelistener), [`IAnalyticsEvent.Data`](/mod/game-api/types/assembly-other/ianalyticsevent#m-data), [`AltaAnalyticsDispatcher.OnAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/altaanalyticsdispatcher#m-onanalyticsevent), [`AltaAnalyticsDispatcher.SendData`](/mod/game-api/types/game-other-namespaces/altaanalyticsdispatcher#m-senddata).
