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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BanInfo()"}</code> | <span className="api-desc">Creates a `BanInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bantype" /><code><Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">What kind of ban this is (for example server or global).</span> |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | <span className="api-desc">When the ban was made.</span> |
| <Link id="m-createdby" /><code>{"int CreatedBy { get; set; }"}</code> | <span className="api-desc">User id of whoever made the ban.</span> |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | <span className="api-desc">Banned device id, if the ban is by device.</span> |
| <Link id="m-endtime" /><code>{"DateTime EndTime { get; set; }"}</code> | <span className="api-desc">When the ban runs out.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The ban's id.</span> |
| <Link id="m-ipaddress" /><code>{"IPAddress IpAddress { get; set; }"}</code> | <span className="api-desc">Banned IP address, if the ban is by IP.</span> |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> | <span className="api-desc">Reason given for the ban.</span> |
| <Link id="m-servers" /><code>{"List<int> Servers { get; set; }"}</code> | <span className="api-desc">Ids of the servers the ban applies to.</span> |
| <Link id="m-useridentifier" /><code>{"int? UserIdentifier { get; set; }"}</code> | <span className="api-desc">Banned user's id, or null for an IP or device ban.</span> |

## Used in

Members of other types that take, return or hold a `BanInfo`:

<div className="api-used-in">

[`ISecurityApiClient.BanUserAsync`](/mod/game-api/types/assembly-api-client/isecurityapiclient#m-banuserasync), [`ISecurityApiClient.GetAllBans`](/mod/game-api/types/assembly-api-client/isecurityapiclient#m-getallbans), [`ISecurityApiClient.GetAllBansAboutUser`](/mod/game-api/types/assembly-api-client/isecurityapiclient#m-getallbansaboutuser), [`ISecurityApiClient.GetAllBansFromModerator`](/mod/game-api/types/assembly-api-client/isecurityapiclient#m-getallbansfrommoderator), [`OfflineSecurityApiClient.BanUserAsync`](/mod/game-api/types/assembly-api-client/offlinesecurityapiclient#m-banuserasync), [`OfflineSecurityApiClient.GetAllBans`](/mod/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbans), [`OfflineSecurityApiClient.GetAllBansAboutUser`](/mod/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbansaboutuser), [`OfflineSecurityApiClient.GetAllBansFromModerator`](/mod/game-api/types/assembly-api-client/offlinesecurityapiclient#m-getallbansfrommoderator), [`SecurityApiClient.BanUserAsync`](/mod/game-api/types/assembly-api-client/securityapiclient#m-banuserasync), [`SecurityApiClient.GetAllBans`](/mod/game-api/types/assembly-api-client/securityapiclient#m-getallbans), [`SecurityApiClient.GetAllBansAboutUser`](/mod/game-api/types/assembly-api-client/securityapiclient#m-getallbansaboutuser), [`SecurityApiClient.GetAllBansFromModerator`](/mod/game-api/types/assembly-api-client/securityapiclient#m-getallbansfrommoderator), [`LowLevelApiClient.BanUserAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-banuserasync), [`LowLevelApiClient.GetAllBans`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbans), [`LowLevelApiClient.GetAllBansForModerator`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbansformoderator), [`LowLevelApiClient.GetAllBansForUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getallbansforuser).

</div>
