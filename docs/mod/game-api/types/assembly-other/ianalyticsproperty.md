---
title: "IAnalyticsProperty"
description: "One named value on an analytics event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAnalyticsProperty

An **interface** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

One named value on an analytics event.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AnalyticsData`](/mod/game-api/types/assembly-other/analyticsdata), [`AnalyticsProperty`](/mod/game-api/types/assembly-other/analyticsproperty), [`IAnalyticsData`](/mod/game-api/types/assembly-other/ianalyticsdata), [`IReadonlyAnalyticsData`](/mod/game-api/types/assembly-other/ireadonlyanalyticsdata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Property name.</span> |
| <Link id="m-value" /><code>{"object Value { get; }"}</code> | <span className="api-desc">Property value.</span> |

## Used in

Members of other types that take, return or hold a `IAnalyticsProperty`:

<div className="api-used-in">

[`AnalyticsData.GetEnumerator`](/mod/game-api/types/assembly-other/analyticsdata#m-getenumerator), [`AnalyticsData.properties`](/mod/game-api/types/assembly-other/analyticsdata#m-properties).

</div>
