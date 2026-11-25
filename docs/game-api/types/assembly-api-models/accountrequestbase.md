---
title: "AccountRequestBase"
description: "class AccountRequestBase in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccountRequestBase

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`LinkAccountRequest`](/game-api/types/assembly-api-models/linkaccountrequest), [`LoginViaLinkedAccountRequest`](/game-api/types/assembly-api-models/loginvialinkedaccountrequest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AccountRequestBase()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-identifier" /><code>{"ulong Identifier { get; set; }"}</code> |
| <Link id="m-linktoken" /><code>{"string LinkToken { get; set; }"}</code> |
| <Link id="m-region" /><code><Link to="/game-api/types/assembly-api-models/region">{"Region"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/region">{"Region"}</Link>{" { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `AccountRequestBase`:

[`ShopPurchase.accountRequestBase`](/game-api/types/assembly-api-client/shoppurchase#m-accountrequestbase), [`LowLevelApiClient.GetLinkedAccountForOculusUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getlinkedaccountforoculususer), [`LowLevelApiClient.GetLinkedAccountForPicoUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getlinkedaccountforpicouser), [`LowLevelApiClient.HasLinkedAccountForOculusUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-haslinkedaccountforoculususer), [`LowLevelApiClient.HasLinkedAccountForPicoUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-haslinkedaccountforpicouser), [`LowLevelApiClient.LinkLoggedInAccountToOculusUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-linkloggedinaccounttooculususer), [`LowLevelApiClient.LinkLoggedInAccountToPicoUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-linkloggedinaccounttopicouser), [`LowLevelApiClient.UnlinkLoggedInAccountToOculusUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-unlinkloggedinaccounttooculususer), [`LowLevelApiClient.UnlinkLoggedInAccountToPicoUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-unlinkloggedinaccounttopicouser), [`PurchaseItemTokenRequest.OculusCredentials`](/game-api/types/assembly-api-models/purchaseitemtokenrequest#m-oculuscredentials).
