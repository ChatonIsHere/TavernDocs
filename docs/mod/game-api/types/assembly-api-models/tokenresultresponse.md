---
title: "TokenResultResponse"
description: "Web API model holding the three JWTs a login returns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TokenResultResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model holding the three JWTs a login returns.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TokenResultResponse(JwtSecurityToken accessToken, JwtSecurityToken refreshToken, JwtSecurityToken identityToken)"}</code> | Creates a `TokenResultResponse` from `accessToken`, `refreshToken` and `identityToken`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accesstoken" /><code>{"JwtSecurityToken AccessToken { get; set; }"}</code> | Token sent with authorised API calls. |
| <Link id="m-identitytoken" /><code>{"JwtSecurityToken IdentityToken { get; set; }"}</code> | Token that says who the user is, used for example when joining servers. |
| <Link id="m-refreshtoken" /><code>{"JwtSecurityToken RefreshToken { get; set; }"}</code> | Token used to get a new access token when it expires. |

## Used in

Members of other types that take, return or hold a `TokenResultResponse`:

[`LowLevelApiClient.HandleNewAuthenticationTokens`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-handlenewauthenticationtokens).
