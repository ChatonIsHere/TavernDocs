---
title: "IdentityTokenValidationRequest"
description: "Body of an Alta web API request to check an identity token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IdentityTokenValidationRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to check an identity token.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IdentityTokenValidationRequest(string identityToken)"}</code> | Creates an `IdentityTokenValidationRequest` with default values. |
| <Link id="m-ctor-2" /><code>{"IdentityTokenValidationRequest()"}</code> | Creates an `IdentityTokenValidationRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identitytoken" /><code>{"string IdentityToken { get; private set; }"}</code> | The identity token to check. |

## Used in

Members of other types that take, return or hold a `IdentityTokenValidationRequest`:

[`LowLevelApiClient.ValidateIdentityTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-validateidentitytokenasync).
