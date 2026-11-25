---
title: "ISecurityApiClient"
description: "interface ISecurityApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISecurityApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineSecurityApiClient`](/game-api/types/assembly-api-client/offlinesecurityapiclient), [`SecurityApiClient`](/game-api/types/assembly-api-client/securityapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banuserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{"> BanUserAsync(int userId, string reason, float durationInHours, "}<Link to="/game-api/types/assembly-api-models/bantype">{"BanType"}</Link>{" banType, "}<Link to="/game-api/types/assembly-api-models/banmethod">{"BanMethod"}</Link>{" method, List<int> servers = null, int? callingUserIdentifier = null)"}</code> |  |
| <Link id="m-deleteban" /><code>{"Task DeleteBan(int banIdentifier)"}</code> |  |
| <Link id="m-getallbans" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBans()"}</code> |  |
| <Link id="m-getallbansaboutuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansAboutUser(int userIdentifier)"}</code> |  |
| <Link id="m-getallbansfrommoderator" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/baninfo">{"BanInfo"}</Link>{">> GetAllBansFromModerator(int moderatorIdentifier)"}</code> |  |
| <Link id="m-isvalididentitytokenasync" /><code>{"Task<bool> IsValidIdentityTokenAsync(string identityToken)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ISecurityApiClient`:

[`HighLevelApiClient.SecurityClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-securityclient), [`IHighLevelApiClient.SecurityClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-securityclient), [`OfflineHighLevelApiClient.SecurityClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-securityclient).
