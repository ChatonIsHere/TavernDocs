---
title: "IInstancesClient"
description: "Alta web API call that lists running server instances in Alta's hosting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInstancesClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API call that lists running server instances in Alta's hosting. `ApiAccess.ApiClient.Instances`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`InstancesClient`](/mod/game-api/types/assembly-api-client/instancesclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallrunninginstance" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/instanceinfo">{"InstanceInfo"}</Link>{">> GetAllRunningInstance(string region = null, string fleet = null, bool? onlyGetVisibleRegions = null)"}</code> | <span className="api-desc">Lists running instances, optionally by region and fleet.</span> |

## Used in

Members of other types that take, return or hold a `IInstancesClient`:

<div className="api-used-in">

[`HighLevelApiClient.Instances`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-instances), [`IHighLevelApiClient.Instances`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-instances), [`OfflineHighLevelApiClient.Instances`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-instances).

</div>
