---
title: "IInstancesClient"
description: "interface IInstancesClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IInstancesClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`InstancesClient`](/game-api/types/assembly-api-client/instancesclient)

## Methods

| Member |
| --- |
| <Link id="m-getallrunninginstance" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/instanceinfo">{"InstanceInfo"}</Link>{">> GetAllRunningInstance(string region = null, string fleet = null, bool? onlyGetVisibleRegions = null)"}</code> |

## Used in

Members of other types that take, return or hold a `IInstancesClient`:

[`HighLevelApiClient.Instances`](/game-api/types/assembly-api-client/highlevelapiclient#m-instances), [`IHighLevelApiClient.Instances`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-instances), [`OfflineHighLevelApiClient.Instances`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-instances).
