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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IReadOnlyCollection<IAnalyticsProperty>`, `IEnumerable<IAnalyticsProperty>`, `IEnumerable`
- **Derived types** [`AnalyticsData`](/game-api/types/assembly-other/analyticsdata), [`AnalyticsService`](/game-api/types/assembly-other/analyticsservice), [`IAnalyticsData`](/game-api/types/assembly-other/ianalyticsdata), [`IAnalyticsService`](/game-api/types/assembly-other/ianalyticsservice)
- **Documented in** [Event buses and services](/game-api/console-and-utilities/event-buses-and-services)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-eventname" /><code>{"string EventName { get; }"}</code> | Name of the analytics event. |
| <Link id="m-userid" /><code>{"int? UserId { get; }"}</code> | The user the event is for, or null if none was set. |

## Used in

Members of other types that take, return or hold a `IReadonlyAnalyticsData`:

[`AbstractAnalyticsDispatcher.OnAnalyticsEvent`](/game-api/types/assembly-other/abstractanalyticsdispatcher#m-onanalyticsevent), [`AnalyticsEvent.Data`](/game-api/types/assembly-other/analyticsevent#m-data-2), [`AnalyticsService.AddListener`](/game-api/types/assembly-other/analyticsservice#m-addlistener), [`AnalyticsService.eventBus`](/game-api/types/assembly-other/analyticsservice#m-eventbus), [`AnalyticsService.RemoveListener`](/game-api/types/assembly-other/analyticsservice#m-removelistener), [`IAnalyticsEvent.Data`](/game-api/types/assembly-other/ianalyticsevent#m-data), [`AltaAnalyticsDispatcher.OnAnalyticsEvent`](/game-api/types/game-other-namespaces/altaanalyticsdispatcher#m-onanalyticsevent), [`AltaAnalyticsDispatcher.SendData`](/game-api/types/game-other-namespaces/altaanalyticsdispatcher#m-senddata).
