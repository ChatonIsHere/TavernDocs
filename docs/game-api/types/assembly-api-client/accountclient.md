---
title: "AccountClient"
description: "class AccountClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccountClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IAccountClient`](/game-api/types/assembly-api-client/iaccountclient)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AccountClient("}<Link to="/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getlinkeddiscordaccount" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetLinkedDiscordAccount()"}</code> |
| <Link id="m-getlinkeddiscordaccount-2" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetLinkedDiscordAccount(int userIdentifier)"}</code> |
| <Link id="m-linkdiscordaccount" /><code>{"Task LinkDiscordAccount(string linkToken, ulong discordUserIdentifier)"}</code> |
| <Link id="m-linkdiscordaccountadmin" /><code>{"Task LinkDiscordAccountAdmin(int userIdentifier, ulong discordUserIdentifier)"}</code> |
| <Link id="m-unlinkdiscordaccount" /><code>{"Task UnLinkDiscordAccount(int? userIdentifier)"}</code> |
