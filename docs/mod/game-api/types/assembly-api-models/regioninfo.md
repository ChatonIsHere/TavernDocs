---
title: "RegionInfo"
description: "A server region from the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RegionInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A server region from the Alta API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RegionInfo()"}</code> | <span className="api-desc">Creates a `RegionInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-countrycode" /><code>{"string CountryCode { get; set; }"}</code> | <span className="api-desc">Country code of the region.</span> |
| <Link id="m-displayname" /><code>{"string DisplayName { get; set; }"}</code> | <span className="api-desc">Name shown to players.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Internal region name.</span> |
| <Link id="m-pingaddress" /><code>{"IPAddress PingAddress { get; set; }"}</code> | <span className="api-desc">IP address to ping to measure latency to the region.</span> |

## Used in

Members of other types that take, return or hold a `RegionInfo`:

<div className="api-used-in">

[`IServerApiClient.GetServerRegions`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getserverregions), [`OfflineServerApiClient.GetServerRegions`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getserverregions), [`ServerApiClient.GetServerRegions`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getserverregions), [`LowLevelApiClient.GetAllRegions`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getallregions), [`ServerCreator.regions`](/mod/game-api/types/global-s/servercreator#m-regions).

</div>
