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
| <Link id="m-ctor" /><code>{"protected AbstractAnalyticsDispatcher("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Built by the game's dependency injection (VContainer), which passes the services in. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | The injected analytics service. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Registers `OnAnalyticsEvent` as a listener on the analytics service. |
| <Link id="m-onanalyticsevent" /><code>{"protected abstract void OnAnalyticsEvent("}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> | Called with each event's data. Subclasses decide where it goes. |
