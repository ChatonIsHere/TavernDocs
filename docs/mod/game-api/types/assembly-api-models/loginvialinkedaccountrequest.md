---
title: "LoginViaLinkedAccountRequest"
description: "Body for logging in with a linked platform account (used for Oculus and Pico)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginViaLinkedAccountRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body for logging in with a linked platform account (used for Oculus and Pico).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`AccountRequestBase`](/mod/game-api/types/assembly-api-models/accountrequestbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginViaLinkedAccountRequest()"}</code> | Creates a `LoginViaLinkedAccountRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviceidentifier" /><code>{"string DeviceIdentifier { get; set; }"}</code> | Id of the device logging in. |

## Used in

Members of other types that take, return or hold a `LoginViaLinkedAccountRequest`:

[`LowLevelApiClient.LoginWithOculusUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithoculususer), [`LowLevelApiClient.LoginWithPicoUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithpicouser).
