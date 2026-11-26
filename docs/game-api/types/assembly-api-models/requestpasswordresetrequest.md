---
title: "RequestPasswordResetRequest"
description: "Body of an Alta web API request to send a password reset email."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequestPasswordResetRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to send a password reset email.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RequestPasswordResetRequest()"}</code> |
| <Link id="m-ctor-2" /><code>{"RequestPasswordResetRequest(string email)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-email" /><code>{"string Email { get; set; }"}</code> | Email of the account to reset. |

## Used in

Members of other types that take, return or hold a `RequestPasswordResetRequest`:

[`LowLevelApiClient.RequestPasswordResetAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-requestpasswordresetasync).
