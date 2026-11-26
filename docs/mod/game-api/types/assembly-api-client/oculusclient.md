---
title: "OculusClient"
description: "Online client for linking an Alta account to an Oculus (Meta) user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for linking an Alta account to an Oculus (Meta) user. Reached as `ApiAccess.ApiClient.Oculus`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IOculusClient`](/mod/game-api/types/assembly-api-client/ioculusclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OculusClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates an `OculusClient` from `clientManager`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkedaccount" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccount(ulong oculusId, string oculusToken)"}</code> | Gets the Alta user linked to an Oculus ID, using the Oculus token as proof. |
| <Link id="m-haslinkedaccount" /><code>{"async Task<bool> HasLinkedAccount(ulong oculusId, string oculusToken, ulong altaId)"}</code> | Asks whether the Oculus user is linked to the given Alta ID. |
| <Link id="m-linkloggedinaccount" /><code>{"async Task LinkLoggedInAccount(ulong oculusId, string oculusToken)"}</code> | Links the logged-in Alta user to the Oculus user. |
| <Link id="m-unlinkloggedinaccount" /><code>{"async Task UnlinkLoggedInAccount(ulong altaId)"}</code> | Removes the Oculus link from the logged-in user. |
