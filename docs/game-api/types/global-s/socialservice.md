---
title: "SocialService"
description: "static class SocialService in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialService

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-serverownerpermissions" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] serverOwnerPermissions"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-acceptfriendrequest" /><code>{"static async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AcceptFriendRequest(int identifier)"}</code> |
| <Link id="m-banplayer" /><code>{"static async Task<"}<Link to="/game-api/types/global-a-b/banrole">{"BanRole"}</Link>{"?> BanPlayer(int playerToBanId, int serverId)"}</code> |
| <Link id="m-removefriend" /><code>{"static async Task RemoveFriend(int identifier)"}</code> |
| <Link id="m-reportplayer" /><code>{"static async Task ReportPlayer(int playerToReportId, "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportType, int serverId)"}</code> |
| <Link id="m-requestfriend" /><code>{"static async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> RequestFriend(int identifier)"}</code> |
| <Link id="m-requestfriend-2" /><code>{"static async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> RequestFriend(int tokenOwnerId, int newFriendId)"}</code> |
| <Link id="m-unbanplayer" /><code>{"static async Task UnbanPlayer(int revokedPlayerId, int serverId)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-canbanfromserver" /><code>{"private static async Task<bool> CanBanFromServer("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" user, "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |

</details>
