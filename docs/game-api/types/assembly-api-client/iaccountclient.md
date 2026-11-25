---
title: "IAccountClient"
description: "interface IAccountClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAccountClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`AccountClient`](/game-api/types/assembly-api-client/accountclient)

## Methods

| Member |
| --- |
| <Link id="m-getlinkeddiscordaccount" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetLinkedDiscordAccount()"}</code> |
| <Link id="m-getlinkeddiscordaccount-2" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetLinkedDiscordAccount(int userIdentifier)"}</code> |
| <Link id="m-linkdiscordaccount" /><code>{"Task LinkDiscordAccount(string linkToken, ulong discordUserIdentifier)"}</code> |
| <Link id="m-linkdiscordaccountadmin" /><code>{"Task LinkDiscordAccountAdmin(int userIdentifier, ulong discordUserIdentifier)"}</code> |
| <Link id="m-unlinkdiscordaccount" /><code>{"Task UnLinkDiscordAccount(int? userIdentifier)"}</code> |

## Used in

Members of other types that take, return or hold a `IAccountClient`:

[`HighLevelApiClient.Account`](/game-api/types/assembly-api-client/highlevelapiclient#m-account), [`IHighLevelApiClient.Account`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-account), [`OfflineHighLevelApiClient.Account`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-account).
