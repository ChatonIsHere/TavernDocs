---
title: "RegisterRequest"
description: "Body of an Alta web API request to create an account, with optional Oculus or Pico links."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RegisterRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to create an account, with optional Oculus or Pico links.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`EmailAndUsernameRequest`](/mod/game-api/types/assembly-api-models/emailandusernamerequest), `IRequest<UserInfo>`, `IBaseRequest`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RegisterRequest()"}</code> | Creates a `RegisterRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-oculusaccountlink" /><code><Link to="/mod/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" OculusAccountLink { get; set; }"}</code> | Oculus account to link on sign-up, if any. |
| <Link id="m-passwordhash" /><code>{"string PasswordHash { get; set; }"}</code> | Hash of the chosen password. |
| <Link id="m-picoaccountlink" /><code><Link to="/mod/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" PicoAccountLink { get; set; }"}</code> | Pico account to link on sign-up, if any. |
| <Link id="m-referral" /><code>{"string Referral { get; set; }"}</code> | Referral string. |

## Used in

Members of other types that take, return or hold a `RegisterRequest`:

[`LowLevelApiClient.RegisterAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-registerasync).
