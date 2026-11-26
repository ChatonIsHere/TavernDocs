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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerateSignUpCodeRequest()"}</code> | Creates a `GenerateSignUpCodeRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-campaign" /><code>{"string Campaign { get; set; }"}</code> | Campaign the code belongs to. |
| <Link id="m-email" /><code>{"string Email { get; set; }"}</code> | Email of the person the code is for. |
| <Link id="m-firstname" /><code>{"string FirstName { get; set; }"}</code> | First name of the person the code is for. |
| <Link id="m-lastname" /><code>{"string LastName { get; set; }"}</code> | Last name of the person the code is for. |
| <Link id="m-referral" /><code>{"string Referral { get; set; }"}</code> | Referral string. |

## Used in

Members of other types that take, return or hold a `GenerateSignUpCodeRequest`:

[`LowLevelApiClient.RequestSignupCode`](/game-api/types/assembly-api-client/lowlevelapiclient#m-requestsignupcode).
