---
title: "ISecurityApiClient"
description: "Alta web API calls for bans and identity token checks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISecurityApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for bans and identity token checks. `ApiAccess.ApiClient.SecurityClient`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineSecurityApiClient`](/mod/game-api/types/assembly-api-client/offlinesecurityapiclient), [`SecurityApiClient`](/mod/game-api/types/assembly-api-client/securityapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{"> BanUserAsync(int userId, string reason, float durationInHours, "}<Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" banType, "}<Link to="/mod/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" method, List<int> servers = null, int? callingUserIdentifier = null)"}</code> | <span className="api-desc">Bans a user for a number of hours, of a type and method, optionally on listed servers.</span> |
| <Link id="m-deleteban" /><code>{"Task DeleteBan(int banIdentifier)"}</code> | <span className="api-desc">Removes a ban by id.</span> |
| <Link id="m-getallbans" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBans()"}</code> | <span className="api-desc">Lists every ban.</span> |
| <Link id="m-getallbansaboutuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansAboutUser(int userIdentifier)"}</code> | <span className="api-desc">Lists the bans on a user.</span> |
| <Link id="m-getallbansfrommoderator" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansFromModerator(int moderatorIdentifier)"}</code> | <span className="api-desc">Lists the bans a moderator made.</span> |
| <Link id="m-isvalididentitytokenasync" /><code>{"Task<bool> IsValidIdentityTokenAsync(string identityToken)"}</code> | <span className="api-desc">Asks the API whether an identity token is valid.</span> |

## Used in

Members of other types that take, return or hold a `ISecurityApiClient`:

<div className="api-used-in">

[`HighLevelApiClient.SecurityClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-securityclient), [`IHighLevelApiClient.SecurityClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-securityclient), [`OfflineHighLevelApiClient.SecurityClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-securityclient).

</div>
