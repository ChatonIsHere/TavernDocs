---
title: "AbstractAnalyticsDispatcher"
description: "Base for classes that receive every analytics event sent through the IAnalyticsService and send it somewhere."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AbstractAnalyticsDispatcher

An **abstract class** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

Base for classes that receive every analytics event sent through the `IAnalyticsService` and send it somewhere. Built by VContainer; `AltaAnalyticsDispatcher` is the game's one.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IInitializable`
- **Derived types** [`AltaAnalyticsDispatcher`](/mod/game-api/types/game-other-namespaces/altaanalyticsdispatcher)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AbstractAnalyticsDispatcher("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">The injected analytics service.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Registers `OnAnalyticsEvent` as a listener on the analytics service.</span> |
| <Link id="m-onanalyticsevent" /><code>{"protected abstract void OnAnalyticsEvent("}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> | <span className="api-desc">Called with each event's data. Subclasses decide where it goes.</span> |
