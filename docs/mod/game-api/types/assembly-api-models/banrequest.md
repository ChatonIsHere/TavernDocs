---
title: "BanRequest"
description: "Body of an Alta web API request to ban a user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to ban a user.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BanRequest()"}</code> | <span className="api-desc">Creates a `BanRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-banmethod" /><code><Link to="/mod/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" { get; set; }"}</code> | <span className="api-desc">How the ban is applied.</span> |
| <Link id="m-bantype" /><code><Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Kind of ban.</span> |
| <Link id="m-callinguseridentifier" /><code>{"int? CallingUserIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the user issuing the ban, if given.</span> |
| <Link id="m-durationinhours" /><code>{"float DurationInHours { get; set; }"}</code> | <span className="api-desc">How long the ban lasts, in hours.</span> |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> | <span className="api-desc">Reason given for the ban.</span> |
| <Link id="m-servers" /><code>{"List<int> Servers { get; set; }"}</code> | <span className="api-desc">Ids of the servers the ban covers.</span> |
| <Link id="m-useridentifier" /><code>{"int UserIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the user to ban.</span> |

## Used in

Members of other types that take, return or hold a `BanRequest`:

<div className="api-used-in">

[`LowLevelApiClient.BanUserAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-banuserasync).

</div>
