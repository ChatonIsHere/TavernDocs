---
title: "SingleTokenResponse"
description: "An API response holding a single JWT token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SingleTokenResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

An API response holding a single JWT token.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SingleTokenResponse()"}</code> | <span className="api-desc">Creates a `SingleTokenResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-token" /><code>{"JwtSecurityToken Token { get; set; }"}</code> | <span className="api-desc">The token, parsed by `JwtSecurityTokenJsonConverter`.</span> |
