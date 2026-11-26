---
title: "EmailValidationRequest"
description: "Body of an Alta web API request to check an email address."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmailValidationRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to check an email address.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmailValidationRequest()"}</code> | <span className="api-desc">Creates an `EmailValidationRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-email" /><code>{"string Email { get; set; }"}</code> | <span className="api-desc">The email address to check.</span> |

## Used in

Members of other types that take, return or hold a `EmailValidationRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ValidateEmail`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-validateemail).

</div>
