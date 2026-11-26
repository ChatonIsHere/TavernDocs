---
title: "BanInfo"
description: "API model for a ban on a user, IP address or device, with its reason, scope and end time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

API model for a ban on a user, IP address or device, with its reason, scope and end time.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BanInfo()"}</code> | Creates a `BanInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bantype" /><code><Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" { get; set; }"}</code> | What kind of ban this is (for example server or global). |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | When the ban was made. |
| <Link id="m-createdby" /><code>{"int CreatedBy { get; set; }"}</code> | User id of whoever made the ban. |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | Banned device id, if the ban is by device. |
| <Link id="m-endtime" /><code>{"DateTime EndTime { get; set; }"}</code> | When the ban runs out. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The ban's id. |
| <Link id="m-ipaddress" /><code>{"IPAddress IpAddress { get; set; }"}</code> | Banned IP address, if the ban is by IP. |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> | Reason given for the ban. |
| <Link id="m-servers" /><code>{"List<int> Servers { get; set; }"}</code> | Ids of the servers the ban applies to. |
| <Link id="m-useridentifier" /><code>{"int? UserIdentifier { get; set; }"}</code> | Banned user's id, or null for an IP or device ban. |

## Used in

Members of other types that take, return or hold a `BanInfo`:

[`ISecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/isecurityapiclient#m-banuserasync), [`ISecurityApiClient.GetAllBans`](/game-api/types/assembly-api-client/isecurityapiclient#m-getallbans), [`ISecurityApiClient.GetAllBansAboutUser`](/game-api/types/assembly-api-client/isecurityapiclient#m-getallbansaboutuser), [`ISecurityApiClient.GetAllBansFromModerator`](/game-api/types/assembly-api-client/isecurityapiclient#m-getallbansfrommoderator), [`OfflineSecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-banuserasync), [`OfflineSecurityApiClient.GetAllBans`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbans), [`OfflineSecurityApiClient.GetAllBansAboutUser`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbansaboutuser), [`OfflineSecurityApiClient.GetAllBansFromModerator`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbansfrommoderator), [`SecurityApiClient.BanUserAsync`](/game-api/types/assembly-api-client/securityapiclient#m-banuserasync), [`SecurityApiClient.GetAllBans`](/game-api/types/assembly-api-client/securityapiclient#m-getallbans), [`SecurityApiClient.GetAllBansAboutUser`](/game-api/types/assembly-api-client/securityapiclient#m-getallbansaboutuser), [`SecurityApiClient.GetAllBansFromModerator`](/game-api/types/assembly-api-client/securityapiclient#m-getallbansfrommoderator), [`LowLevelApiClient.BanUserAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-banuserasync), [`LowLevelApiClient.GetAllBans`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbans), [`LowLevelApiClient.GetAllBansForModerator`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbansformoderator), [`LowLevelApiClient.GetAllBansForUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbansforuser).
