---
title: "BooleanResponse"
description: "A web API response that wraps a single true or false value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BooleanResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A web API response that wraps a single true or false value.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BooleanResponse(bool value)"}</code> | Creates a `BooleanResponse` from `value`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"bool Value { get; private set; }"}</code> | The returned value. |

## Used in

Members of other types that take, return or hold a `BooleanResponse`:

[`LowLevelApiClient.HasLinkedAccountForOculusUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-haslinkedaccountforoculususer), [`LowLevelApiClient.HasLinkedAccountForPicoUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-haslinkedaccountforpicouser), [`LowLevelApiClient.HasPermissionsInGroup`](/game-api/types/assembly-api-client/lowlevelapiclient#m-haspermissionsingroup), [`LowLevelApiClient.HasPermissionsInServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-haspermissionsinserver), [`LowLevelApiClient.ValidateIdentityToken`](/game-api/types/assembly-api-client/lowlevelapiclient#m-validateidentitytoken), [`LowLevelApiClient.ValidateIdentityTokenAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-validateidentitytokenasync).
