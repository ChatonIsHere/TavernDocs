---
title: "AbstractAnalyticsDispatcher"
description: "abstract class AbstractAnalyticsDispatcher in Alta.Analytics.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AbstractAnalyticsDispatcher

An **abstract class** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IInitializable`
- **Derived types** [`AltaAnalyticsDispatcher`](/game-api/types/game-other-namespaces/altaanalyticsdispatcher)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected AbstractAnalyticsDispatcher("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-analyticsservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |
| <Link id="m-onanalyticsevent" /><code>{"protected abstract void OnAnalyticsEvent("}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{" data)"}</code> |
