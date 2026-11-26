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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

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

[`LowLevelApiClient.HasLinkedAccountForOculusUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-haslinkedaccountforoculususer), [`LowLevelApiClient.HasLinkedAccountForPicoUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-haslinkedaccountforpicouser), [`LowLevelApiClient.HasPermissionsInGroup`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-haspermissionsingroup), [`LowLevelApiClient.HasPermissionsInServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-haspermissionsinserver), [`LowLevelApiClient.ValidateIdentityToken`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-validateidentitytoken), [`LowLevelApiClient.ValidateIdentityTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-validateidentitytokenasync).
