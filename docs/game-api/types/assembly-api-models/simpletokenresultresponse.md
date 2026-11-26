---
title: "SimpleTokenResultResponse"
description: "Web API model that wraps a single JWT."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleTokenResultResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model that wraps a single JWT.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleTokenResultResponse(JwtSecurityToken token)"}</code> | Creates a `SimpleTokenResultResponse` from `token`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-token" /><code>{"JwtSecurityToken Token { get; set; }"}</code> | The JWT. |

## Used in

Members of other types that take, return or hold a `SimpleTokenResultResponse`:

[`LowLevelApiClient.GenerateIdentityTokenAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-generateidentitytokenasync).
