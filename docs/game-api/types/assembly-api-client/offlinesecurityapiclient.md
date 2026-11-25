---
title: "OfflineSecurityApiClient"
description: "class OfflineSecurityApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineSecurityApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`ISecurityApiClient`](/game-api/types/assembly-api-client/isecurityapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineSecurityApiClient()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{"> BanUserAsync(int userId, string reason, float durationInHours, "}<Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" banType, "}<Link to="/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" method, List<int> servers = null, int? callingUserIdentifier = null)"}</code> |  |
| <Link id="m-deleteban" /><code>{"Task DeleteBan(int banIdentifier)"}</code> |  |
| <Link id="m-getallbans" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBans()"}</code> |  |
| <Link id="m-getallbansaboutuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansAboutUser(int userIdentifier)"}</code> |  |
| <Link id="m-getallbansfrommoderator" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansFromModerator(int moderatorIdentifier)"}</code> |  |
| <Link id="m-isvalididentitytokenasync" /><code>{"async Task<bool> IsValidIdentityTokenAsync(string identityToken)"}</code> |  |
| <Link id="m-validateusersjoinrequestasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/serverjoinresponse">{"ServerJoinResponse"}</Link>{"> ValidateUsersJoinRequestAsync(int serverId, string ipAddress, string deviceId, string identityToken)"}</code> |  |
