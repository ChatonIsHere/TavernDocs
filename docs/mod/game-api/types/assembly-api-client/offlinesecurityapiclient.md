---
title: "OfflineSecurityApiClient"
description: "Offline stand-in for the security client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineSecurityApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the security client. Bans are unavailable and every token and join is accepted.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`ISecurityApiClient`](/mod/game-api/types/assembly-api-client/isecurityapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineSecurityApiClient()"}</code> | <span className="api-desc">Creates an `OfflineSecurityApiClient` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{"> BanUserAsync(int userId, string reason, float durationInHours, "}<Link to="/mod/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" banType, "}<Link to="/mod/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" method, List<int> servers = null, int? callingUserIdentifier = null)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-deleteban" /><code>{"Task DeleteBan(int banIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getallbans" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBans()"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getallbansaboutuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansAboutUser(int userIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getallbansfrommoderator" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansFromModerator(int moderatorIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-isvalididentitytokenasync" /><code>{"async Task<bool> IsValidIdentityTokenAsync(string identityToken)"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-validateusersjoinrequestasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/serverjoinresponse">{"ServerJoinResponse"}</Link>{"> ValidateUsersJoinRequestAsync(int serverId, string ipAddress, string deviceId, string identityToken)"}</code> | <span className="api-desc">Always allows the join.</span> |
