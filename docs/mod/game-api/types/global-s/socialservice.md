---
title: "SocialService"
description: "Static wrappers over the Alta web API for friends, server bans and player reports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialService

A **static class** in `Root.Township`, the global namespace.

Static wrappers over the Alta web API for friends, server bans and player reports. These call the old Alta API (`ApiAccess.ApiClient`).

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for API results and errors.</span> |
| <Link id="m-serverownerpermissions" /><code>{"private static readonly "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] serverOwnerPermissions"}</code> | <span className="api-desc">Permission set (`ControlServer`) that marks a server owner.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-acceptfriendrequest" /><code>{"static async Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AcceptFriendRequest(int identifier)"}</code> | <span className="api-desc">Accepts a friend request by calling the API's add friend for that player.</span> |
| <Link id="m-banplayer" /><code>{"static async Task<"}<Link to="/mod/game-api/types/global-a-b/banrole">{"BanRole"}</Link>{"?> BanPlayer(int playerToBanId, int serverId)"}</code> | <span className="api-desc">Bans a player from the server's group unless they are a server owner; returns whether the banner was owner or moderator, or null.</span> |
| <Link id="m-removefriend" /><code>{"static async Task RemoveFriend(int identifier)"}</code> | <span className="api-desc">Removes a friend through the API.</span> |
| <Link id="m-reportplayer" /><code>{"static async Task ReportPlayer(int playerToReportId, "}<Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportType, int serverId)"}</code> | <span className="api-desc">Sends a player report of the given type for a server.</span> |
| <Link id="m-requestfriend" /><code>{"static async Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> RequestFriend(int identifier)"}</code> | <span className="api-desc">Sends a friend request, or with two IDs creates a friendship between two users directly.</span> |
| <Link id="m-requestfriend-2" /><code>{"static async Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> RequestFriend(int tokenOwnerId, int newFriendId)"}</code> | <span className="api-desc">Sends a friend request, or with two IDs creates a friendship between two users directly.</span> |
| <Link id="m-unbanplayer" /><code>{"static async Task UnbanPlayer(int revokedPlayerId, int serverId)"}</code> | <span className="api-desc">Finds the player's ban in the server's group and revokes it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canbanfromserver" /><code>{"private static async Task<bool> CanBanFromServer("}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | <span className="api-desc">False if the user has the `server_owner` policy or control-server permission on that server.</span> |

</details>
