---
title: "BanInfo"
description: "class BanInfo in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BanInfo()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bantype" /><code><Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> |  |
| <Link id="m-createdby" /><code>{"int CreatedBy { get; set; }"}</code> |  |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> |  |
| <Link id="m-endtime" /><code>{"DateTime EndTime { get; set; }"}</code> |  |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> |  |
| <Link id="m-ipaddress" /><code>{"IPAddress IpAddress { get; set; }"}</code> |  |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> |  |
| <Link id="m-servers" /><code>{"List<int> Servers { get; set; }"}</code> |  |
| <Link id="m-useridentifier" /><code>{"int? UserIdentifier { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `BanInfo`:

[`ISecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/isecurityapiclient#m-banuserasync), [`ISecurityApiClient.GetAllBans`](/game-api/types/assembly-api-client/isecurityapiclient#m-getallbans), [`ISecurityApiClient.GetAllBansAboutUser`](/game-api/types/assembly-api-client/isecurityapiclient#m-getallbansaboutuser), [`ISecurityApiClient.GetAllBansFromModerator`](/game-api/types/assembly-api-client/isecurityapiclient#m-getallbansfrommoderator), [`OfflineSecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-banuserasync), [`OfflineSecurityApiClient.GetAllBans`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbans), [`OfflineSecurityApiClient.GetAllBansAboutUser`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbansaboutuser), [`OfflineSecurityApiClient.GetAllBansFromModerator`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbansfrommoderator), [`SecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/securityapiclient#m-banuserasync), [`SecurityApiClient.GetAllBans`](/game-api/types/assembly-api-client/securityapiclient#m-getallbans), [`SecurityApiClient.GetAllBansAboutUser`](/game-api/types/assembly-api-client/securityapiclient#m-getallbansaboutuser), [`SecurityApiClient.GetAllBansFromModerator`](/game-api/types/assembly-api-client/securityapiclient#m-getallbansfrommoderator), [`LowLevelApiClient.BanUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-banuserasync), [`LowLevelApiClient.GetAllBans`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbans), [`LowLevelApiClient.GetAllBansForModerator`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbansformoderator), [`LowLevelApiClient.GetAllBansForUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbansforuser).
