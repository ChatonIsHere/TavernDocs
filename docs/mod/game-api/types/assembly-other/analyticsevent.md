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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsEvent`](/mod/game-api/types/assembly-other/ianalyticsevent), [`IAnalyticsPropertyWriter`](/mod/game-api/types/assembly-other/ianalyticspropertywriter)
- **Derived types** [`SocialAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/socialanalyticsevent), [`TownshipAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/townshipanalyticsevent), [`ClimbingMovementEvent`](/mod/game-api/types/game-other-namespaces/climbingmovementevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AnalyticsEvent(string eventName, int? userId = null)"}</code> | <span className="api-desc">Creates an `AnalyticsEvent` from `eventName` and `userId`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedinstruments" /><code>{"private List<"}<Link to="/mod/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{"> cachedInstruments"}</code> | <span className="api-desc">Instruments waiting for the event to be injected.</span> |
| <Link id="m-data" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ianalyticsdata">{"IAnalyticsData"}</Link>{" data"}</code> | <span className="api-desc">The event's `AnalyticsData`.</span> |
| <Link id="m-instruments" /><code>{"private Queue<"}<Link to="/mod/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{"> instruments"}</code> | <span className="api-desc">Unused instrument queue.</span> |
| <Link id="m-resolver" /><code>{"private IObjectResolver resolver"}</code> | <span className="api-desc">VContainer resolver, set by `Inject`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code><Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" Data { get; }"}</code> | <span className="api-desc">The event's data, read only.</span> |
| <Link id="m-eventname" /><code>{"virtual string EventName { get; }"}</code> | <span className="api-desc">The event's name, set by the constructor.</span> |
| <Link id="m-userid" /><code>{"int? UserId { get; }"}</code> | <span className="api-desc">The user ID from the data, or null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addinstrument" /><code>{"void AddInstrument("}<Link to="/mod/game-api/types/assembly-other/ianalyticsinstrument">{"IAnalyticsInstrument"}</Link>{" instrument)"}</code> | <span className="api-desc">Adds an instrument that appends its result to the data. Waits until injection if the event has not been injected yet.</span> |
| <Link id="m-addproperty" /><code>{"void AddProperty(string propertyName, object value)"}</code> | <span className="api-desc">Adds a property to the event's data.</span> |
| <Link id="m-inject" /><code>{"void Inject(IObjectResolver resolver)"}</code> | <span className="api-desc">Called by VContainer (from `AnalyticsService.Send`). Stores the resolver and runs any waiting instruments.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-injectcachedinstruments" /><code>{"private void InjectCachedInstruments()"}</code> | <span className="api-desc">Injects and runs instruments added before the event was injected, then clears them.</span> |

</details>
