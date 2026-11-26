---
title: "AnalyticsClient"
description: "Online client that queues analytics events to Alta's web API, which no longer answers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client that queues analytics events to Alta's web API, which no longer answers. Reached as `ApiAccess.ApiClient.Analytics`; failures are logged with stack traces unless a mod stubs it.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IAnalyticsClient`](/mod/game-api/types/assembly-api-client/ianalyticsclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal AnalyticsClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates an `AnalyticsClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postevent" /><code>{"Task PostEvent(string type, string source = null, string version = null, int? userId = null)"}</code> | <span className="api-desc">Queues a simple event with a type, source, version, user ID and the current UTC time.</span> |
| <Link id="m-postgenericeventasync" /><code>{"Task PostGenericEventAsync(string eventType, int? userId, string oculusId, Dictionary<string, object> data)"}</code> | <span className="api-desc">Queues an event with a type, user ID, Oculus ID and metadata, given as a dictionary, tuples or a ready `AnalyticsEventData`.</span> |
| <Link id="m-postgenericeventasync-2" /><code>{"Task PostGenericEventAsync(string eventType, int? userId, string oculusId, params ValueTuple<string, object>[] data)"}</code> | <span className="api-desc">Queues an event with a type, user ID, Oculus ID and metadata, given as a dictionary, tuples or a ready `AnalyticsEventData`.</span> |
| <Link id="m-postgenericeventasync-3" /><code>{"Task PostGenericEventAsync("}<Link to="/mod/game-api/types/assembly-api-models/analyticseventdata">{"AnalyticsEventData"}</Link>{" eventData)"}</code> | <span className="api-desc">Queues an event with a type, user ID, Oculus ID and metadata, given as a dictionary, tuples or a ready `AnalyticsEventData`.</span> |
