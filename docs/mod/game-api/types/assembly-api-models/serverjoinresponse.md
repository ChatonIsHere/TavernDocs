---
title: "ServerJoinResponse"
description: "Web API answer to whether a user may join a server, with ban details when they may not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerJoinResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API answer to whether a user may join a server, with ban details when they may not. The offline security client always returns allowed.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerJoinResponse()"}</code> | <span className="api-desc">Creates a `ServerJoinResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-banendtime" /><code>{"DateTime BanEndTime { get; set; }"}</code> | <span className="api-desc">When the user's ban ends.</span> |
| <Link id="m-banreason" /><code>{"string BanReason { get; set; }"}</code> | <span className="api-desc">Reason text for the ban.</span> |
| <Link id="m-bantype" /><code><Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Kind of ban that applies.</span> |
| <Link id="m-isallowed" /><code>{"bool IsAllowed { get; set; }"}</code> | <span className="api-desc">True when the user may join.</span> |

## Used in

Members of other types that take, return or hold a `ServerJoinResponse`:

<div className="api-used-in">

[`OfflineSecurityApiClient.ValidateUsersJoinRequestAsync`](/mod/game-api/types/assembly-api-client/offlinesecurityapiclient#m-validateusersjoinrequestasync).

</div>
