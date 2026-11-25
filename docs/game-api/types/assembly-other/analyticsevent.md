---
title: "AnalyticsEvent"
description: "abstract class AnalyticsEvent in Alta.Analytics.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsEvent

An **abstract class** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsEvent`](/game-api/types/assembly-other/ianalyticsevent), [`IAnalyticsPropertyWriter`](/game-api/types/assembly-other/ianalyticspropertywriter)
- **Derived types** [`SocialAnalyticsEvent`](/game-api/types/game-other-namespaces/socialanalyticsevent), [`TownshipAnalyticsEvent`](/game-api/types/game-other-namespaces/townshipanalyticsevent), [`ClimbingMovementEvent`](/game-api/types/game-other-namespaces/climbingmovementevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AnalyticsEvent(string eventName, int? userId = null)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedinstruments" /><code>{"private List<"}<Link to="/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{"> cachedInstruments"}</code> |  |
| <Link id="m-data" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsdata">{"IAnalyticsData"}</Link>{" data"}</code> |  |
| <Link id="m-instruments" /><code>{"private Queue<"}<Link to="/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{"> instruments"}</code> |  |
| <Link id="m-resolver" /><code>{"private IObjectResolver resolver"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code><Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" Data { get; }"}</code> |  |
| <Link id="m-eventname" /><code>{"virtual string EventName { get; }"}</code> |  |
| <Link id="m-userid" /><code>{"int? UserId { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinstrument" /><code>{"void AddInstrument("}<Link to="/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{" instrument)"}</code> |  |
| <Link id="m-addproperty" /><code>{"void AddProperty(string propertyName, object value)"}</code> |  |
| <Link id="m-inject" /><code>{"void Inject(IObjectResolver resolver)"}</code> |  |
| <Link id="m-injectcachedinstruments" /><code>{"private void InjectCachedInstruments()"}</code> |  |
