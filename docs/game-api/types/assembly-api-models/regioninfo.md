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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RegionInfo()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-countrycode" /><code>{"string CountryCode { get; set; }"}</code> | Country code of the region. |
| <Link id="m-displayname" /><code>{"string DisplayName { get; set; }"}</code> | Name shown to players. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Internal region name. |
| <Link id="m-pingaddress" /><code>{"IPAddress PingAddress { get; set; }"}</code> | IP address to ping to measure latency to the region. |

## Used in

Members of other types that take, return or hold a `RegionInfo`:

[`IServerApiClient.GetServerRegions`](/game-api/types/assembly-api-client/iserverapiclient#m-getserverregions), [`OfflineServerApiClient.GetServerRegions`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getserverregions), [`ServerApiClient.GetServerRegions`](/game-api/types/assembly-api-client/serverapiclient#m-getserverregions), [`LowLevelApiClient.GetAllRegions`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallregions), [`ServerCreator.regions`](/game-api/types/global-s/servercreator#m-regions).
