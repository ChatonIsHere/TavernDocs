---
title: "IAnalyticsInstrument"
description: "Something that adds data to an analytics event when it is sent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAnalyticsInstrument

An **interface** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

Something that adds data to an analytics event when it is sent. Added to an event with `IAnalyticsEvent.AddInstrument`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`ServerInfoInstrument`](/mod/game-api/types/game-other-namespaces/serverinfoinstrument)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-appendresult" /><code>{"void AppendResult("}<Link to="/mod/game-api/types/assembly-other/ianalyticsdata">{"IAnalyticsData"}</Link>{" data)"}</code> | Writes this instrument's values into the event's data. |

## Used in

Members of other types that take, return or hold a `IAnalyticsInstrument`:

[`AnalyticsEvent.AddInstrument`](/mod/game-api/types/assembly-other/analyticsevent#m-addinstrument), [`AnalyticsEvent.cachedInstruments`](/mod/game-api/types/assembly-other/analyticsevent#m-cachedinstruments), [`AnalyticsEvent.instruments`](/mod/game-api/types/assembly-other/analyticsevent#m-instruments), [`IAnalyticsEvent.AddInstrument`](/mod/game-api/types/assembly-other/ianalyticsevent#m-addinstrument).
