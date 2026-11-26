---
title: "LogoutRequest"
description: "Request body for logging out, which hands back the refresh token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogoutRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for logging out, which hands back the refresh token.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogoutRequest()"}</code> | <span className="api-desc">Creates a `LogoutRequest` from `refreshToken`.</span> |
| <Link id="m-ctor-2" /><code>{"LogoutRequest(JwtSecurityToken refreshToken)"}</code> | <span className="api-desc">Creates a `LogoutRequest` from `refreshToken`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-refreshtoken" /><code>{"string RefreshToken { get; private set; }"}</code> | <span className="api-desc">The refresh token as an encoded string.</span> |
