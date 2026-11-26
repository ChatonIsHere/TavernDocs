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
| <Link id="m-ctor" /><code>{"IdentityTokenValidationRequest(string identityToken)"}</code> | <span className="api-desc">Creates an `IdentityTokenValidationRequest` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"IdentityTokenValidationRequest()"}</code> | <span className="api-desc">Creates an `IdentityTokenValidationRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identitytoken" /><code>{"string IdentityToken { get; private set; }"}</code> | <span className="api-desc">The identity token to check.</span> |

## Used in

Members of other types that take, return or hold a `IdentityTokenValidationRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ValidateIdentityTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-validateidentitytokenasync).

</div>
