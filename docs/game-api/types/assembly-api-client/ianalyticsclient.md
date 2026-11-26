---
title: "IAnalyticsClient"
description: "Alta web API calls for sending analytics events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAnalyticsClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for sending analytics events. `ApiAccess.ApiClient.Analytics`. The API is gone, so each event fails and is logged.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`AnalyticsClient`](/game-api/types/assembly-api-client/analyticsclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postevent" /><code>{"Task PostEvent(string type, string source = null, string version = null, int? userId = null)"}</code> | Obsolete: queues a simple event with a type, source, version and user. |
| <Link id="m-postgenericeventasync" /><code>{"Task PostGenericEventAsync(string eventType, int? userId, string oculusId, Dictionary<string, object> data)"}</code> | Sends an event with an event type, user, Oculus id and key-value data, or a ready-made `AnalyticsEventData`. |
| <Link id="m-postgenericeventasync-2" /><code>{"Task PostGenericEventAsync(string eventType, int? userId, string oculusId, params ValueTuple<string, object>[] data)"}</code> | Sends an event with an event type, user, Oculus id and key-value data, or a ready-made `AnalyticsEventData`. |
| <Link id="m-postgenericeventasync-3" /><code>{"Task PostGenericEventAsync("}<Link to="/game-api/types/assembly-api-models/analyticseventdata">{"AnalyticsEventData"}</Link>{" eventData)"}</code> | Sends an event with an event type, user, Oculus id and key-value data, or a ready-made `AnalyticsEventData`. |

## Used in

Members of other types that take, return or hold a `IAnalyticsClient`:

[`HighLevelApiClient.Analytics`](/game-api/types/assembly-api-client/highlevelapiclient#m-analytics), [`IHighLevelApiClient.Analytics`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-analytics), [`OfflineHighLevelApiClient.Analytics`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-analytics).
