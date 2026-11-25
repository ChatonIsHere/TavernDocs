---
title: "AnalyticsClient"
description: "class AnalyticsClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IAnalyticsClient`](/game-api/types/assembly-api-client/ianalyticsclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal AnalyticsClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postevent" /><code>{"Task PostEvent(string type, string source = null, string version = null, int? userId = null)"}</code> |  |
| <Link id="m-postgenericeventasync" /><code>{"Task PostGenericEventAsync(string eventType, int? userId, string oculusId, Dictionary<string, object> data)"}</code> |  |
| <Link id="m-postgenericeventasync-2" /><code>{"Task PostGenericEventAsync(string eventType, int? userId, string oculusId, params ValueTuple<string, object>[] data)"}</code> |  |
| <Link id="m-postgenericeventasync-3" /><code>{"Task PostGenericEventAsync("}<Link to="/game-api/types/assembly-api-models/analyticseventdata">{"AnalyticsEventData"}</Link>{" eventData)"}</code> |  |
