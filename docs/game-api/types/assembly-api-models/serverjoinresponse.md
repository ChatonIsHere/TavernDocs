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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerJoinResponse()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-banendtime" /><code>{"DateTime BanEndTime { get; set; }"}</code> | When the user's ban ends. |
| <Link id="m-banreason" /><code>{"string BanReason { get; set; }"}</code> | Reason text for the ban. |
| <Link id="m-bantype" /><code><Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" { get; set; }"}</code> | Kind of ban that applies. |
| <Link id="m-isallowed" /><code>{"bool IsAllowed { get; set; }"}</code> | True when the user may join. |

## Used in

Members of other types that take, return or hold a `ServerJoinResponse`:

[`OfflineSecurityApiClient.ValidateUsersJoinRequestAsync`](/game-api/types/assembly-api-client/offlinesecurityapiclient#m-validateusersjoinrequestasync).
