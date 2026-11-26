---
title: "AccountLinkData"
description: "Platform account details sent when registering an Oculus or Pico user, so the new Alta account is linked to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccountLinkData

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Platform account details sent when registering an Oculus or Pico user, so the new Alta account is linked to it.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccountLinkData()"}</code> | <span className="api-desc">Creates an `AccountLinkData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"ulong Identifier { get; set; }"}</code> | <span className="api-desc">The platform account ID.</span> |
| <Link id="m-region" /><code><Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Global or China.</span> |
| <Link id="m-userproof" /><code>{"string UserProof { get; set; }"}</code> | <span className="api-desc">Proof from the platform that the user owns that account.</span> |

## Used in

Members of other types that take, return or hold a `AccountLinkData`:

<div className="api-used-in">

[`HighLevelApiClient.RegisterOculusUserAsync`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-registeroculususerasync), [`HighLevelApiClient.RegisterPicoUserAsync`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-registerpicouserasync), [`IHighLevelApiClient.RegisterOculusUserAsync`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-registeroculususerasync), [`IHighLevelApiClient.RegisterPicoUserAsync`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-registerpicouserasync), [`OfflineHighLevelApiClient.RegisterOculusUserAsync`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-registeroculususerasync), [`OfflineHighLevelApiClient.RegisterPicoUserAsync`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-registerpicouserasync), [`RegisterRequest.OculusAccountLink`](/mod/game-api/types/assembly-api-models/registerrequest#m-oculusaccountlink), [`RegisterRequest.PicoAccountLink`](/mod/game-api/types/assembly-api-models/registerrequest#m-picoaccountlink).

</div>
