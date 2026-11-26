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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`AnalyticsData`](/game-api/types/assembly-other/analyticsdata), [`AnalyticsEvent`](/game-api/types/assembly-other/analyticsevent), [`IAnalyticsData`](/game-api/types/assembly-other/ianalyticsdata), [`IAnalyticsEvent`](/game-api/types/assembly-other/ianalyticsevent)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addproperty" /><code>{"void AddProperty(string name, object value)"}</code> | Adds a name and value property. |
