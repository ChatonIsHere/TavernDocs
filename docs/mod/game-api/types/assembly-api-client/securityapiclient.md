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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`ISecurityApiClient`](/mod/game-api/types/assembly-api-client/isecurityapiclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal SecurityApiClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `SecurityApiClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{"> BanUserAsync(int userId, string reason, float durationInHours, "}<Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" banType, "}<Link to="/mod/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" method, List<int> servers = null, int? callingUserIdentifier = null)"}</code> | <span className="api-desc">Bans a user for a number of hours, optionally only on some servers, with type, method and reason.</span> |
| <Link id="m-deleteban" /><code>{"Task DeleteBan(int banIdentifier)"}</code> | <span className="api-desc">Removes a ban by its ID.</span> |
| <Link id="m-getallbans" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBans()"}</code> | <span className="api-desc">Lists every ban.</span> |
| <Link id="m-getallbansaboutuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansAboutUser(int userIdentifier)"}</code> | <span className="api-desc">Lists the bans against one user.</span> |
| <Link id="m-getallbansfrommoderator" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansFromModerator(int moderatorIdentifier)"}</code> | <span className="api-desc">Lists the bans one moderator issued.</span> |
| <Link id="m-isvalididentitytokenasync" /><code>{"async Task<bool> IsValidIdentityTokenAsync(string identityToken)"}</code> | <span className="api-desc">Asks the API whether an identity token is valid.</span> |
