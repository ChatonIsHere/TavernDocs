---
title: "IAnalyticsPropertyWriter"
description: "Something you can add analytics properties to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAnalyticsPropertyWriter

An **interface** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

Something you can add analytics properties to. Implemented by `AnalyticsData` and `AnalyticsEvent`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AnalyticsData`](/mod/game-api/types/assembly-other/analyticsdata), [`AnalyticsEvent`](/mod/game-api/types/assembly-other/analyticsevent), [`IAnalyticsData`](/mod/game-api/types/assembly-other/ianalyticsdata), [`IAnalyticsEvent`](/mod/game-api/types/assembly-other/ianalyticsevent)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addproperty" /><code>{"void AddProperty(string name, object value)"}</code> | <span className="api-desc">Adds a name and value property.</span> |
