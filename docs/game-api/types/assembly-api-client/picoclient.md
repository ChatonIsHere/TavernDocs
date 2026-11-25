---
title: "PicoClient"
description: "class PicoClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PicoClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IPicoClient`](/game-api/types/assembly-api-client/ipicoclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PicoClient("}<Link to="/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkedaccount" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccount(ulong picoId, string picoToken, "}<Link to="/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> |  |
| <Link id="m-haslinkedaccount" /><code>{"async Task<bool> HasLinkedAccount(ulong picoId, string picoToken, ulong altaId, "}<Link to="/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> |  |
| <Link id="m-linkloggedinaccount" /><code>{"async Task LinkLoggedInAccount(ulong picoId, string userProof, "}<Link to="/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> |  |
| <Link id="m-unlinkloggedinaccount" /><code>{"async Task UnlinkLoggedInAccount(ulong altaId)"}</code> |  |
