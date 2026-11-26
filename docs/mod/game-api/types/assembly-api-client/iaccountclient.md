---
title: "IAccountClient"
description: "Alta web API calls for linking a Discord account to an Alta account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAccountClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for linking a Discord account to an Alta account. `ApiAccess.ApiClient.Account`. The API is gone, so calls fail.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`AccountClient`](/mod/game-api/types/assembly-api-client/accountclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkeddiscordaccount" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetLinkedDiscordAccount()"}</code> | <span className="api-desc">Gets the Discord account linked to the logged-in user, or to a given user.</span> |
| <Link id="m-getlinkeddiscordaccount-2" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetLinkedDiscordAccount(int userIdentifier)"}</code> | <span className="api-desc">Gets the Discord account linked to the logged-in user, or to a given user.</span> |
| <Link id="m-linkdiscordaccount" /><code>{"Task LinkDiscordAccount(string linkToken, ulong discordUserIdentifier)"}</code> | <span className="api-desc">Links a Discord user to the logged-in account using a link token.</span> |
| <Link id="m-linkdiscordaccountadmin" /><code>{"Task LinkDiscordAccountAdmin(int userIdentifier, ulong discordUserIdentifier)"}</code> | <span className="api-desc">Links a Discord user to a given Alta user, without a link token. Probably needs admin rights.</span> |
| <Link id="m-unlinkdiscordaccount" /><code>{"Task UnLinkDiscordAccount(int? userIdentifier)"}</code> | <span className="api-desc">Unlinks the Discord account from a given user, or from the logged-in user when null.</span> |

## Used in

Members of other types that take, return or hold a `IAccountClient`:

<div className="api-used-in">

[`HighLevelApiClient.Account`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-account), [`IHighLevelApiClient.Account`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-account), [`OfflineHighLevelApiClient.Account`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-account).

</div>
