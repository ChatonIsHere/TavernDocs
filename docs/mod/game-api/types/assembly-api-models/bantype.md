---
title: "BanType"
description: "Scope of a ban in the web API: one server, global, or public servers (probably)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BanType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

Scope of a ban in the web API: one server, global, or public servers (probably).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-global" /><code>{"Global = 1"}</code> |
| <Link id="m-public" /><code>{"Public = 2"}</code> |
| <Link id="m-server" /><code>{"Server = 0"}</code> |

## Used in

Members of other types that take, return or hold a `BanType`:

<div className="api-used-in">

[`ISecurityApiClient.BanUserAsync`](/mod/game-api/types/assembly-api-client/isecurityapiclient#m-banuserasync), [`OfflineSecurityApiClient.BanUserAsync`](/mod/game-api/types/assembly-api-client/offlinesecurityapiclient#m-banuserasync), [`SecurityApiClient.BanUserAsync`](/mod/game-api/types/assembly-api-client/securityapiclient#m-banuserasync), [`BanRequest.BanType`](/mod/game-api/types/assembly-api-models/banrequest#m-bantype), [`BanInfo.BanType`](/mod/game-api/types/assembly-api-models/baninfo#m-bantype), [`ServerJoinResponse.BanType`](/mod/game-api/types/assembly-api-models/serverjoinresponse#m-bantype).

</div>
