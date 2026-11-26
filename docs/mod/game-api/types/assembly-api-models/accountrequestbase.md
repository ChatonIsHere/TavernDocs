---
title: "AccountRequestBase"
description: "Web API request body for Oculus account linking: the platform account ID, its proof token and the region."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccountRequestBase

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Web API request body for Oculus account linking: the platform account ID, its proof token and the region. Built by `OculusClient`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`LinkAccountRequest`](/mod/game-api/types/assembly-api-models/linkaccountrequest), [`LoginViaLinkedAccountRequest`](/mod/game-api/types/assembly-api-models/loginvialinkedaccountrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccountRequestBase()"}</code> | Creates an `AccountRequestBase` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"ulong Identifier { get; set; }"}</code> | The platform account ID (`account_id`). The unlink call puts the Alta ID here instead. |
| <Link id="m-linktoken" /><code>{"string LinkToken { get; set; }"}</code> | The platform's proof token for that account (`link_token`). |
| <Link id="m-region" /><code><Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" { get; set; }"}</code> | Global or China (`region`). |

## Used in

Members of other types that take, return or hold a `AccountRequestBase`:

[`ShopPurchase.accountRequestBase`](/mod/game-api/types/assembly-api-client/shoppurchase#m-accountrequestbase), [`LowLevelApiClient.GetLinkedAccountForOculusUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getlinkedaccountforoculususer), [`LowLevelApiClient.GetLinkedAccountForPicoUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getlinkedaccountforpicouser), [`LowLevelApiClient.HasLinkedAccountForOculusUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-haslinkedaccountforoculususer), [`LowLevelApiClient.HasLinkedAccountForPicoUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-haslinkedaccountforpicouser), [`LowLevelApiClient.LinkLoggedInAccountToOculusUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-linkloggedinaccounttooculususer), [`LowLevelApiClient.LinkLoggedInAccountToPicoUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-linkloggedinaccounttopicouser), [`LowLevelApiClient.UnlinkLoggedInAccountToOculusUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-unlinkloggedinaccounttooculususer), [`LowLevelApiClient.UnlinkLoggedInAccountToPicoUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-unlinkloggedinaccounttopicouser), [`PurchaseItemTokenRequest.OculusCredentials`](/mod/game-api/types/assembly-api-models/purchaseitemtokenrequest#m-oculuscredentials).
