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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ResetPasswordRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-newpasswordhash" /><code>{"string NewPasswordHash { get; set; }"}</code> | Hash of the new password. |
| <Link id="m-resettoken" /><code>{"string ResetToken { get; set; }"}</code> | Token from the password reset email. |

## Used in

Members of other types that take, return or hold a `ResetPasswordRequest`:

[`LowLevelApiClient.ResetPasswordAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-resetpasswordasync).
