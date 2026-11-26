---
title: "VerifyUserRequest"
description: "Body of an Alta web API request to verify an account with a token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VerifyUserRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to verify an account with a token.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VerifyUserRequest(string verificationToken)"}</code> | Creates a `VerifyUserRequest` with default values. |
| <Link id="m-ctor-2" /><code>{"VerifyUserRequest()"}</code> | Creates a `VerifyUserRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-verificationtoken" /><code>{"string VerificationToken { get; set; }"}</code> | Token from the verification email. |

## Used in

Members of other types that take, return or hold a `VerifyUserRequest`:

[`LowLevelApiClient.VerifyUserAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-verifyuserasync).
