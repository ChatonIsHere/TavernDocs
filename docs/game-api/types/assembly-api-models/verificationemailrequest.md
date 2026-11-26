---
title: "VerificationEmailRequest"
description: "Body for sending a user a verification email."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VerificationEmailRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body for sending a user a verification email.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VerificationEmailRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-email" /><code>{"string Email { get; set; }"}</code> | Address to send the verification email to. |

## Used in

Members of other types that take, return or hold a `VerificationEmailRequest`:

[`LowLevelApiClient.ChangeEmail`](/game-api/types/assembly-api-client/lowlevelapiclient#m-changeemail), [`LowLevelApiClient.SendUserVerificationEmailAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-senduserverificationemailasync).
