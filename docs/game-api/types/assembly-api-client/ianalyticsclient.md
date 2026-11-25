---
title: "IAnalyticsClient"
description: "interface IAnalyticsClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAnalyticsClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`AnalyticsClient`](/game-api/types/assembly-api-client/analyticsclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postevent" /><code>{"Task PostEvent(string type, string source = null, string version = null, int? userId = null)"}</code> |  |
| <Link id="m-postgenericeventasync" /><code>{"Task PostGenericEventAsync(string eventType, int? userId, string oculusId, Dictionary<string, object> data)"}</code> |  |
| <Link id="m-postgenericeventasync-2" /><code>{"Task PostGenericEventAsync(string eventType, int? userId, string oculusId, params ValueTuple<string, object>[] data)"}</code> |  |
| <Link id="m-postgenericeventasync-3" /><code>{"Task PostGenericEventAsync("}<Link to="/game-api/types/assembly-api-models/analyticseventdata">{"AnalyticsEventData"}</Link>{" eventData)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAnalyticsClient`:

[`HighLevelApiClient.Analytics`](/game-api/types/assembly-api-client/highlevelapiclient#m-analytics), [`IHighLevelApiClient.Analytics`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-analytics), [`OfflineHighLevelApiClient.Analytics`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-analytics).
