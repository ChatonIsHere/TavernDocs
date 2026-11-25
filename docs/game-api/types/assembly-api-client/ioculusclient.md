---
title: "IOculusClient"
description: "interface IOculusClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IOculusClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OculusClient`](/game-api/types/assembly-api-client/oculusclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkedaccount" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GetLinkedAccount(ulong oculusId, string oculusToken)"}</code> |  |
| <Link id="m-haslinkedaccount" /><code>{"Task<bool> HasLinkedAccount(ulong oculusId, string oculusToken, ulong altaId)"}</code> |  |
| <Link id="m-linkloggedinaccount" /><code>{"Task LinkLoggedInAccount(ulong oculusId, string oculusToken)"}</code> |  |
| <Link id="m-unlinkloggedinaccount" /><code>{"Task UnlinkLoggedInAccount(ulong altaId)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IOculusClient`:

[`HighLevelApiClient.Oculus`](/game-api/types/assembly-api-client/highlevelapiclient#m-oculus), [`IHighLevelApiClient.Oculus`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-oculus), [`OfflineHighLevelApiClient.Oculus`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-oculus).
