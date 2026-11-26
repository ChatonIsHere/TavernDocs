---
title: "PlayerCommunityAnalytics"
description: "Client helpers that post social analytics events (friend requests, reports, bans, unbans) to Alta's API for the logged-in user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommunityAnalytics

A **static class** in `Root.Township`, no namespace.

Client helpers that post social analytics events (friend requests, reports, bans, unbans) to Alta's API for the logged-in user.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Attributes** `Extension`

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bancreatedinmainmenupagekey" /><code>{"private const string BanCreatedInMainMenuPageKey"}</code> | Event data key for the main menu page a ban came from. |
| <Link id="m-bancreatedinsocialtabletrolekey" /><code>{"private const string BanCreatedInSocialTabletRoleKey"}</code> | Event data key for whether a social tablet ban came from an owner or moderator. |
| <Link id="m-bancreatedoriginkey" /><code>{"private const string BanCreatedOriginKey"}</code> | Event data key for where a ban came from. |
| <Link id="m-banplayerevent" /><code>{"private const string BanPlayerEvent"}</code> | Event name for a ban. |
| <Link id="m-eventdata" /><code>{"private static readonly Dictionary<string, object> EventData"}</code> | Shared event data filled by each helper before posting. |
| <Link id="m-friendrequesttokenfriendlytext" /><code>{"private const string FriendRequestTokenFriendlyText"}</code> | Display text for the friend request token origin. |
| <Link id="m-friendshipstatusactionoriginkey" /><code>{"private const string FriendshipStatusActionOriginKey"}</code> | Event data key for where a friendship action came from. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mainmenufriendlytext" /><code>{"private const string MainMenuFriendlyText"}</code> | Display text for the main menu origin. |
| <Link id="m-mutualfriendshipcreationevent" /><code>{"private const string MutualFriendshipCreationEvent"}</code> | Event name for a new mutual friendship. |
| <Link id="m-mutualfriendshiporiginkey" /><code>{"private const string MutualFriendshipOriginKey"}</code> | Event data key for how a mutual friendship was made. |
| <Link id="m-removefriendevent" /><code>{"private const string RemoveFriendEvent"}</code> | Event name for removing a friend. |
| <Link id="m-requestfriendevent" /><code>{"private const string RequestFriendEvent"}</code> | Event name for a friend request. |
| <Link id="m-respondfriendrequestevent" /><code>{"private const string RespondFriendRequestEvent"}</code> | Event name for answering a friend request. |
| <Link id="m-serverownerpermissiondata" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] serverOwnerPermissionData"}</code> | Permission checked to decide whether a banner is the server owner. |
| <Link id="m-socialtabletfriendlytext" /><code>{"private const string SocialTabletFriendlyText"}</code> | Display text for the social tablet origin. |
| <Link id="m-unbanplayerevent" /><code>{"private const string UnBanPlayerEvent"}</code> | Event name for an unban. |
| <Link id="m-unbanplayeroriginkey" /><code>{"private const string UnBanPlayerOriginKey"}</code> | Event data key for where an unban came from. |
| <Link id="m-userid" /><code>{"private static int userId"}</code> | Backing field for `UserId`, -1 when not cached. |
| <Link id="m-userreportplayerevent" /><code>{"private const string UserReportPlayerEvent"}</code> | Event name for a player report. |
| <Link id="m-userreportplayeroriginkey" /><code>{"private const string UserReportPlayerOriginKey"}</code> | Event data key for where a report came from. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-userid-2" /><code>{"private static int UserId { get; }"}</code> | The logged-in user's ID, cached until logout. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banplayerinmainmenu" /><code>{"static void BanPlayerInMainMenu("}<Link to="/game-api/types/global-s/socialanalyticsbanmenupanelorigin">{"SocialAnalyticsBanMenuPanelOrigin"}</Link>{" mainSocialAnalyticsBanMenuPageUsedFor)"}</code> | Posts a ban event from the main menu, with the page it was made on. |
| <Link id="m-banplayerinsocialtablet" /><code>{"static async void BanPlayerInSocialTablet(int serverId)"}</code> | Posts a ban event from the social tablet, with the player's role (owner or moderator) on the server. |
| <Link id="m-friendlytext" /><code>{"static string FriendlyText("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" reportEventOriginType)"}</code> | Turns a social event origin into its display text. |
| <Link id="m-friendrequestedfrom" /><code>{"static void FriendRequestedFrom("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | Posts a friend request event with its origin. |
| <Link id="m-friendrequesttoken" /><code>{"static void FriendRequestToken()"}</code> | Posts a mutual friendship event made through a friend request token. |
| <Link id="m-reportplayer" /><code>{"static void ReportPlayer("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | Posts a player report event with its origin. |
| <Link id="m-respondfriendrequestfrom" /><code>{"static void RespondFriendRequestFrom("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | Posts a friend request response event with its origin. |
| <Link id="m-unbanplayersocialtablet" /><code>{"static void UnBanPlayerSocialTablet()"}</code> | Posts an unban event from the social tablet. |
| <Link id="m-unfriend" /><code>{"static void UnFriend("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | Posts a remove friend event with its origin. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createanalyticevent" /><code>{"private static async void CreateAnalyticEvent(string eventName)"}</code> | Posts the event with the gathered `EventData`, then clears the data even on failure. |
| <Link id="m-getplayerbanrole" /><code>{"private static async Task<string> GetPlayerBanRole(int serverId)"}</code> | Returns "Owner" if the player can control the server, otherwise "Moderator". |
| <Link id="m-loggedout" /><code>{"private static void LoggedOut()"}</code> | Clears the cached user ID. |

</details>
