---
title: "IOculusClient"
description: "Alta web API calls for linking an Oculus account to an Alta account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IOculusClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for linking an Oculus account to an Alta account. `ApiAccess.ApiClient.Oculus`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OculusClient`](/mod/game-api/types/assembly-api-client/oculusclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkedaccount" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccount(ulong oculusId, string oculusToken)"}</code> | <span className="api-desc">Gets the Alta user linked to an Oculus id.</span> |
| <Link id="m-haslinkedaccount" /><code>{"Task<bool> HasLinkedAccount(ulong oculusId, string oculusToken, ulong altaId)"}</code> | <span className="api-desc">Asks whether an Oculus id is linked to a given Alta user.</span> |
| <Link id="m-linkloggedinaccount" /><code>{"Task LinkLoggedInAccount(ulong oculusId, string oculusToken)"}</code> | <span className="api-desc">Links an Oculus account to the logged-in Alta account.</span> |
| <Link id="m-unlinkloggedinaccount" /><code>{"Task UnlinkLoggedInAccount(ulong altaId)"}</code> | <span className="api-desc">Removes the Oculus link from an Alta account.</span> |

## Used in

Members of other types that take, return or hold a `IOculusClient`:

<div className="api-used-in">

[`HighLevelApiClient.Oculus`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-oculus), [`IHighLevelApiClient.Oculus`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-oculus), [`OfflineHighLevelApiClient.Oculus`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-oculus).

</div>
