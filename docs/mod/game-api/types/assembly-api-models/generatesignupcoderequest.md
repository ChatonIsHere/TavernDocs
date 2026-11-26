---
title: "GenerateSignUpCodeRequest"
description: "Body of an Alta web API request to generate a sign-up code for someone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerateSignUpCodeRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to generate a sign-up code for someone.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerateSignUpCodeRequest()"}</code> | <span className="api-desc">Creates a `GenerateSignUpCodeRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-campaign" /><code>{"string Campaign { get; set; }"}</code> | <span className="api-desc">Campaign the code belongs to.</span> |
| <Link id="m-email" /><code>{"string Email { get; set; }"}</code> | <span className="api-desc">Email of the person the code is for.</span> |
| <Link id="m-firstname" /><code>{"string FirstName { get; set; }"}</code> | <span className="api-desc">First name of the person the code is for.</span> |
| <Link id="m-lastname" /><code>{"string LastName { get; set; }"}</code> | <span className="api-desc">Last name of the person the code is for.</span> |
| <Link id="m-referral" /><code>{"string Referral { get; set; }"}</code> | <span className="api-desc">Referral string.</span> |

## Used in

Members of other types that take, return or hold a `GenerateSignUpCodeRequest`:

<div className="api-used-in">

[`LowLevelApiClient.RequestSignupCode`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-requestsignupcode).

</div>
