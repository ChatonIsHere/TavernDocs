---
title: "SecurityApiClient"
description: "Online client for bans and identity token checks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SecurityApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for bans and identity token checks. Reached as `ApiAccess.ApiClient.SecurityClient`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`ISecurityApiClient`](/game-api/types/assembly-api-client/isecurityapiclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal SecurityApiClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates a `SecurityApiClient` from `clientManager`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{"> BanUserAsync(int userId, string reason, float durationInHours, "}<Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" banType, "}<Link to="/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" method, List<int> servers = null, int? callingUserIdentifier = null)"}</code> | Bans a user for a number of hours, optionally only on some servers, with type, method and reason. |
| <Link id="m-deleteban" /><code>{"Task DeleteBan(int banIdentifier)"}</code> | Removes a ban by its ID. |
| <Link id="m-getallbans" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBans()"}</code> | Lists every ban. |
| <Link id="m-getallbansaboutuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansAboutUser(int userIdentifier)"}</code> | Lists the bans against one user. |
| <Link id="m-getallbansfrommoderator" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansFromModerator(int moderatorIdentifier)"}</code> | Lists the bans one moderator issued. |
| <Link id="m-isvalididentitytokenasync" /><code>{"async Task<bool> IsValidIdentityTokenAsync(string identityToken)"}</code> | Asks the API whether an identity token is valid. |
