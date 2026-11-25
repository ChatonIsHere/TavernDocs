---
title: "IPicoClient"
description: "interface IPicoClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPicoClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`PicoClient`](/game-api/types/assembly-api-client/picoclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkedaccount" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccount(ulong picoId, string picoToken, "}<Link to="/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> |  |
| <Link id="m-haslinkedaccount" /><code>{"Task<bool> HasLinkedAccount(ulong picoId, string picoToken, ulong altaId, "}<Link to="/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> |  |
| <Link id="m-linkloggedinaccount" /><code>{"Task LinkLoggedInAccount(ulong picoId, string userProof, "}<Link to="/game-api/types/assembly-api-models/region">{"Region"}</Link>{" region)"}</code> |  |
| <Link id="m-unlinkloggedinaccount" /><code>{"Task UnlinkLoggedInAccount(ulong altaId)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPicoClient`:

[`HighLevelApiClient.Pico`](/game-api/types/assembly-api-client/highlevelapiclient#m-pico), [`IHighLevelApiClient.Pico`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-pico), [`OfflineHighLevelApiClient.Pico`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-pico).
