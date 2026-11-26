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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VerificationEmailRequest()"}</code> | <span className="api-desc">Creates a `VerificationEmailRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-email" /><code>{"string Email { get; set; }"}</code> | <span className="api-desc">Address to send the verification email to.</span> |

## Used in

Members of other types that take, return or hold a `VerificationEmailRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ChangeEmail`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-changeemail), [`LowLevelApiClient.SendUserVerificationEmailAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-senduserverificationemailasync).

</div>
