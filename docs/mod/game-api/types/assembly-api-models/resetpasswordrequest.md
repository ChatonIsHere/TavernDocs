---
title: "ResetPasswordRequest"
description: "Body of an Alta web API request that sets a new password with a reset token."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ResetPasswordRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request that sets a new password with a reset token.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ResetPasswordRequest()"}</code> | <span className="api-desc">Creates a `ResetPasswordRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-newpasswordhash" /><code>{"string NewPasswordHash { get; set; }"}</code> | <span className="api-desc">Hash of the new password.</span> |
| <Link id="m-resettoken" /><code>{"string ResetToken { get; set; }"}</code> | <span className="api-desc">Token from the password reset email.</span> |

## Used in

Members of other types that take, return or hold a `ResetPasswordRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ResetPasswordAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-resetpasswordasync).

</div>
