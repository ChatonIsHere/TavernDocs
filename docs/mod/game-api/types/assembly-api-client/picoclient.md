---
title: "PicoClient"
description: "Online client for linking an Alta account to a Pico user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PicoClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Online client for linking an Alta account to a Pico user. Reached as `ApiAccess.ApiClient.Pico`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IPicoClient`](/mod/game-api/types/assembly-api-client/ipicoclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PicoClient("}<Link to="/mod/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> | <span className="api-desc">Creates a `PicoClient` from `highLevelApiClient`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkedaccount" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccount(ulong picoId, string picoToken, "}<Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> | <span className="api-desc">Gets the Alta user linked to a Pico ID, using the Pico token and region.</span> |
| <Link id="m-haslinkedaccount" /><code>{"async Task<bool> HasLinkedAccount(ulong picoId, string picoToken, ulong altaId, "}<Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> | <span className="api-desc">Asks whether the Pico user is linked to the given Alta ID.</span> |
| <Link id="m-linkloggedinaccount" /><code>{"async Task LinkLoggedInAccount(ulong picoId, string userProof, "}<Link to="/mod/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> | <span className="api-desc">Links the logged-in Alta user to the Pico user.</span> |
| <Link id="m-unlinkloggedinaccount" /><code>{"async Task UnlinkLoggedInAccount(ulong altaId)"}</code> | <span className="api-desc">Removes the Pico link from the logged-in user.</span> |
