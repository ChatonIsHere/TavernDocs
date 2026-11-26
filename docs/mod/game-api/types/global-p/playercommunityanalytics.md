---
title: "PlayerCommunityAnalytics"
description: "Client helpers that post social analytics events (friend requests, reports, bans, unbans) to Alta's API for the logged-in user."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommunityAnalytics

A **static class** in `Root.Township`, the global namespace.

Client helpers that post social analytics events (friend requests, reports, bans, unbans) to Alta's API for the logged-in user.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Attributes** `Extension`

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bancreatedinmainmenupagekey" /><code>{"private const string BanCreatedInMainMenuPageKey"}</code> | <span className="api-desc">Event data key for the main menu page a ban came from.</span> |
| <Link id="m-bancreatedinsocialtabletrolekey" /><code>{"private const string BanCreatedInSocialTabletRoleKey"}</code> | <span className="api-desc">Event data key for whether a social tablet ban came from an owner or moderator.</span> |
| <Link id="m-bancreatedoriginkey" /><code>{"private const string BanCreatedOriginKey"}</code> | <span className="api-desc">Event data key for where a ban came from.</span> |
| <Link id="m-banplayerevent" /><code>{"private const string BanPlayerEvent"}</code> | <span className="api-desc">Event name for a ban.</span> |
| <Link id="m-eventdata" /><code>{"private static readonly Dictionary<string, object> EventData"}</code> | <span className="api-desc">Shared event data filled by each helper before posting.</span> |
| <Link id="m-friendrequesttokenfriendlytext" /><code>{"private const string FriendRequestTokenFriendlyText"}</code> | <span className="api-desc">Display text for the friend request token origin.</span> |
| <Link id="m-friendshipstatusactionoriginkey" /><code>{"private const string FriendshipStatusActionOriginKey"}</code> | <span className="api-desc">Event data key for where a friendship action came from.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mainmenufriendlytext" /><code>{"private const string MainMenuFriendlyText"}</code> | <span className="api-desc">Display text for the main menu origin.</span> |
| <Link id="m-mutualfriendshipcreationevent" /><code>{"private const string MutualFriendshipCreationEvent"}</code> | <span className="api-desc">Event name for a new mutual friendship.</span> |
| <Link id="m-mutualfriendshiporiginkey" /><code>{"private const string MutualFriendshipOriginKey"}</code> | <span className="api-desc">Event data key for how a mutual friendship was made.</span> |
| <Link id="m-removefriendevent" /><code>{"private const string RemoveFriendEvent"}</code> | <span className="api-desc">Event name for removing a friend.</span> |
| <Link id="m-requestfriendevent" /><code>{"private const string RequestFriendEvent"}</code> | <span className="api-desc">Event name for a friend request.</span> |
| <Link id="m-respondfriendrequestevent" /><code>{"private const string RespondFriendRequestEvent"}</code> | <span className="api-desc">Event name for answering a friend request.</span> |
| <Link id="m-serverownerpermissiondata" /><code>{"private static readonly "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] serverOwnerPermissionData"}</code> | <span className="api-desc">Permission checked to decide whether a banner is the server owner.</span> |
| <Link id="m-socialtabletfriendlytext" /><code>{"private const string SocialTabletFriendlyText"}</code> | <span className="api-desc">Display text for the social tablet origin.</span> |
| <Link id="m-unbanplayerevent" /><code>{"private const string UnBanPlayerEvent"}</code> | <span className="api-desc">Event name for an unban.</span> |
| <Link id="m-unbanplayeroriginkey" /><code>{"private const string UnBanPlayerOriginKey"}</code> | <span className="api-desc">Event data key for where an unban came from.</span> |
| <Link id="m-userid" /><code>{"private static int userId"}</code> | <span className="api-desc">Backing field for `UserId`, -1 when not cached.</span> |
| <Link id="m-userreportplayerevent" /><code>{"private const string UserReportPlayerEvent"}</code> | <span className="api-desc">Event name for a player report.</span> |
| <Link id="m-userreportplayeroriginkey" /><code>{"private const string UserReportPlayerOriginKey"}</code> | <span className="api-desc">Event data key for where a report came from.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-userid-2" /><code>{"private static int UserId { get; }"}</code> | <span className="api-desc">The logged-in user's ID, cached until logout.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banplayerinmainmenu" /><code>{"static void BanPlayerInMainMenu("}<Link to="/mod/game-api/types/global-s/socialanalyticsbanmenupanelorigin">{"SocialAnalyticsBanMenuPanelOrigin"}</Link>{" mainSocialAnalyticsBanMenuPageUsedFor)"}</code> | <span className="api-desc">Posts a ban event from the main menu, with the page it was made on.</span> |
| <Link id="m-banplayerinsocialtablet" /><code>{"static async void BanPlayerInSocialTablet(int serverId)"}</code> | <span className="api-desc">Posts a ban event from the social tablet, with the player's role (owner or moderator) on the server.</span> |
| <Link id="m-friendlytext" /><code>{"static string FriendlyText("}<Link to="/mod/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" reportEventOriginType)"}</code> | <span className="api-desc">Turns a social event origin into its display text.</span> |
| <Link id="m-friendrequestedfrom" /><code>{"static void FriendRequestedFrom("}<Link to="/mod/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | <span className="api-desc">Posts a friend request event with its origin.</span> |
| <Link id="m-friendrequesttoken" /><code>{"static void FriendRequestToken()"}</code> | <span className="api-desc">Posts a mutual friendship event made through a friend request token.</span> |
| <Link id="m-reportplayer" /><code>{"static void ReportPlayer("}<Link to="/mod/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | <span className="api-desc">Posts a player report event with its origin.</span> |
| <Link id="m-respondfriendrequestfrom" /><code>{"static void RespondFriendRequestFrom("}<Link to="/mod/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | <span className="api-desc">Posts a friend request response event with its origin.</span> |
| <Link id="m-unbanplayersocialtablet" /><code>{"static void UnBanPlayerSocialTablet()"}</code> | <span className="api-desc">Posts an unban event from the social tablet.</span> |
| <Link id="m-unfriend" /><code>{"static void UnFriend("}<Link to="/mod/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> | <span className="api-desc">Posts a remove friend event with its origin.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createanalyticevent" /><code>{"private static async void CreateAnalyticEvent(string eventName)"}</code> | <span className="api-desc">Posts the event with the gathered `EventData`, then clears the data even on failure.</span> |
| <Link id="m-getplayerbanrole" /><code>{"private static async Task<string> GetPlayerBanRole(int serverId)"}</code> | <span className="api-desc">Returns "Owner" if the player can control the server, otherwise "Moderator".</span> |
| <Link id="m-loggedout" /><code>{"private static void LoggedOut()"}</code> | <span className="api-desc">Clears the cached user ID.</span> |

</details>
