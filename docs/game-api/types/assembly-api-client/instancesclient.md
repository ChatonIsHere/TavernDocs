---
title: "InstancesClient"
description: "Online client that lists Alta's running game server instances."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstancesClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Online client that lists Alta's running game server instances. Reached as `ApiAccess.ApiClient.Instances`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IInstancesClient`](/game-api/types/assembly-api-client/iinstancesclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstancesClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates an `InstancesClient` from `clientManager`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallrunninginstance" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/instanceinfo">{"InstanceInfo"}</Link>{">> GetAllRunningInstance(string region = null, string fleet = null, bool? onlyGetVisibleRegions = null)"}</code> | Lists running instances, optionally filtered by region and fleet, or only visible regions. |
