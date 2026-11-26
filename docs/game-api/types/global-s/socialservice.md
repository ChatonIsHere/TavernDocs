---
title: "SocialService"
description: "Static wrappers over the Alta web API for friends, server bans and player reports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialService

A **static class** in `Root.Township`, no namespace.

Static wrappers over the Alta web API for friends, server bans and player reports. These call the old Alta API (`ApiAccess.ApiClient`).

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for API results and errors. |
| <Link id="m-serverownerpermissions" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] serverOwnerPermissions"}</code> | Permission set (`ControlServer`) that marks a server owner. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-acceptfriendrequest" /><code>{"static async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AcceptFriendRequest(int identifier)"}</code> | Accepts a friend request by calling the API's add friend for that player. |
| <Link id="m-banplayer" /><code>{"static async Task<"}<Link to="/game-api/types/global-a-b/banrole">{"BanRole"}</Link>{"?> BanPlayer(int playerToBanId, int serverId)"}</code> | Bans a player from the server's group unless they are a server owner; returns whether the banner was owner or moderator, or null. |
| <Link id="m-removefriend" /><code>{"static async Task RemoveFriend(int identifier)"}</code> | Removes a friend through the API. |
| <Link id="m-reportplayer" /><code>{"static async Task ReportPlayer(int playerToReportId, "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportType, int serverId)"}</code> | Sends a player report of the given type for a server. |
| <Link id="m-requestfriend" /><code>{"static async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> RequestFriend(int identifier)"}</code> | Sends a friend request, or with two IDs creates a friendship between two users directly. |
| <Link id="m-requestfriend-2" /><code>{"static async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> RequestFriend(int tokenOwnerId, int newFriendId)"}</code> | Sends a friend request, or with two IDs creates a friendship between two users directly. |
| <Link id="m-unbanplayer" /><code>{"static async Task UnbanPlayer(int revokedPlayerId, int serverId)"}</code> | Finds the player's ban in the server's group and revokes it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canbanfromserver" /><code>{"private static async Task<bool> CanBanFromServer("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | False if the user has the `server_owner` policy or control-server permission on that server. |

</details>
