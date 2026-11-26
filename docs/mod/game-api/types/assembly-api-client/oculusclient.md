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

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal OculusClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates an `OculusClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkedaccount" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccount(ulong oculusId, string oculusToken)"}</code> | <span className="api-desc">Gets the Alta user linked to an Oculus ID, using the Oculus token as proof.</span> |
| <Link id="m-haslinkedaccount" /><code>{"async Task<bool> HasLinkedAccount(ulong oculusId, string oculusToken, ulong altaId)"}</code> | <span className="api-desc">Asks whether the Oculus user is linked to the given Alta ID.</span> |
| <Link id="m-linkloggedinaccount" /><code>{"async Task LinkLoggedInAccount(ulong oculusId, string oculusToken)"}</code> | <span className="api-desc">Links the logged-in Alta user to the Oculus user.</span> |
| <Link id="m-unlinkloggedinaccount" /><code>{"async Task UnlinkLoggedInAccount(ulong altaId)"}</code> | <span className="api-desc">Removes the Oculus link from the logged-in user.</span> |
