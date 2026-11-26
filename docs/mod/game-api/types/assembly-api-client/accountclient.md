---
title: "AccountClient"
description: "Online client for linking an Alta account to Discord."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccountClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Online client for linking an Alta account to Discord. Reached as `ApiAccess.ApiClient.Account`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IAccountClient`](/mod/game-api/types/assembly-api-client/iaccountclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccountClient("}<Link to="/mod/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> | <span className="api-desc">Creates an `AccountClient` from `highLevelApiClient`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlinkeddiscordaccount" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetLinkedDiscordAccount()"}</code> | <span className="api-desc">Gets the Discord account linked to the logged-in user, or to the given user ID.</span> |
| <Link id="m-getlinkeddiscordaccount-2" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/linkedaccountinfo">{"LinkedAccountInfo"}</Link>{"> GetLinkedDiscordAccount(int userIdentifier)"}</code> | <span className="api-desc">Gets the Discord account linked to the logged-in user, or to the given user ID.</span> |
| <Link id="m-linkdiscordaccount" /><code>{"Task LinkDiscordAccount(string linkToken, ulong discordUserIdentifier)"}</code> | <span className="api-desc">Links the logged-in user to a Discord user ID using a link token.</span> |
| <Link id="m-linkdiscordaccountadmin" /><code>{"Task LinkDiscordAccountAdmin(int userIdentifier, ulong discordUserIdentifier)"}</code> | <span className="api-desc">Links a given Alta user to a Discord user ID without a token, an admin call.</span> |
| <Link id="m-unlinkdiscordaccount" /><code>{"Task UnLinkDiscordAccount(int? userIdentifier)"}</code> | <span className="api-desc">Removes the Discord link for the given user, or the logged-in user when null.</span> |
