---
title: "IPicoClient"
description: "Alta web API calls for linking a Pico account to an Alta account, per Pico region."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPicoClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for linking a Pico account to an Alta account, per Pico region. `ApiAccess.ApiClient.Pico`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`PicoClient`](/mod/game-api/types/assembly-api-client/picoclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkedaccount" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccount(ulong picoId, string picoToken, "}<Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> | Gets the Alta user linked to a Pico id. |
| <Link id="m-haslinkedaccount" /><code>{"Task<bool> HasLinkedAccount(ulong picoId, string picoToken, ulong altaId, "}<Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> | Asks whether a Pico id is linked to a given Alta user. |
| <Link id="m-linkloggedinaccount" /><code>{"Task LinkLoggedInAccount(ulong picoId, string userProof, "}<Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> | Links a Pico account to the logged-in Alta account using a user proof. |
| <Link id="m-unlinkloggedinaccount" /><code>{"Task UnlinkLoggedInAccount(ulong altaId)"}</code> | Removes the Pico link from an Alta account. |

## Used in

Members of other types that take, return or hold a `IPicoClient`:

[`HighLevelApiClient.Pico`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-pico), [`IHighLevelApiClient.Pico`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-pico), [`OfflineHighLevelApiClient.Pico`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-pico).
