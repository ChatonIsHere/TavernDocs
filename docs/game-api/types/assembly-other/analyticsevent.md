---
title: "AnalyticsEvent"
description: "Base class for analytics events in the current system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsEvent

An **abstract class** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

Base class for analytics events in the current system. Holds the event data and lets instruments add extra properties once VContainer injects the event.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsEvent`](/game-api/types/assembly-other/ianalyticsevent), [`IAnalyticsPropertyWriter`](/game-api/types/assembly-other/ianalyticspropertywriter)
- **Derived types** [`SocialAnalyticsEvent`](/game-api/types/game-other-namespaces/socialanalyticsevent), [`TownshipAnalyticsEvent`](/game-api/types/game-other-namespaces/townshipanalyticsevent), [`ClimbingMovementEvent`](/game-api/types/game-other-namespaces/climbingmovementevent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected AnalyticsEvent(string eventName, int? userId = null)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedinstruments" /><code>{"private List<"}<Link to="/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{"> cachedInstruments"}</code> | Instruments waiting for the event to be injected. |
| <Link id="m-data" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsdata">{"IAnalyticsData"}</Link>{" data"}</code> | The event's `AnalyticsData`. |
| <Link id="m-instruments" /><code>{"private Queue<"}<Link to="/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{"> instruments"}</code> | Unused instrument queue. |
| <Link id="m-resolver" /><code>{"private IObjectResolver resolver"}</code> | VContainer resolver, set by `Inject`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code><Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" Data { get; }"}</code> | The event's data, read only. |
| <Link id="m-eventname" /><code>{"virtual string EventName { get; }"}</code> | The event's name, set by the constructor. |
| <Link id="m-userid" /><code>{"int? UserId { get; }"}</code> | The user ID from the data, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinstrument" /><code>{"void AddInstrument("}<Link to="/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{" instrument)"}</code> | Adds an instrument that appends its result to the data. Waits until injection if the event has not been injected yet. |
| <Link id="m-addproperty" /><code>{"void AddProperty(string propertyName, object value)"}</code> | Adds a property to the event's data. |
| <Link id="m-inject" /><code>{"void Inject(IObjectResolver resolver)"}</code> | Called by VContainer (from `AnalyticsService.Send`). Stores the resolver and runs any waiting instruments. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-injectcachedinstruments" /><code>{"private void InjectCachedInstruments()"}</code> | Injects and runs instruments added before the event was injected, then clears them. |

</details>
