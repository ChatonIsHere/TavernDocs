---
title: "PlayerCommunityAnalytics"
description: "static class PlayerCommunityAnalytics in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCommunityAnalytics

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Attributes** `Extension`

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bancreatedinmainmenupagekey" /><code>{"private const string BanCreatedInMainMenuPageKey"}</code> |
| <Link id="m-bancreatedinsocialtabletrolekey" /><code>{"private const string BanCreatedInSocialTabletRoleKey"}</code> |
| <Link id="m-bancreatedoriginkey" /><code>{"private const string BanCreatedOriginKey"}</code> |
| <Link id="m-banplayerevent" /><code>{"private const string BanPlayerEvent"}</code> |
| <Link id="m-eventdata" /><code>{"private static readonly Dictionary<string, object> EventData"}</code> |
| <Link id="m-friendrequesttokenfriendlytext" /><code>{"private const string FriendRequestTokenFriendlyText"}</code> |
| <Link id="m-friendshipstatusactionoriginkey" /><code>{"private const string FriendshipStatusActionOriginKey"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-mainmenufriendlytext" /><code>{"private const string MainMenuFriendlyText"}</code> |
| <Link id="m-mutualfriendshipcreationevent" /><code>{"private const string MutualFriendshipCreationEvent"}</code> |
| <Link id="m-mutualfriendshiporiginkey" /><code>{"private const string MutualFriendshipOriginKey"}</code> |
| <Link id="m-removefriendevent" /><code>{"private const string RemoveFriendEvent"}</code> |
| <Link id="m-requestfriendevent" /><code>{"private const string RequestFriendEvent"}</code> |
| <Link id="m-respondfriendrequestevent" /><code>{"private const string RespondFriendRequestEvent"}</code> |
| <Link id="m-serverownerpermissiondata" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] serverOwnerPermissionData"}</code> |
| <Link id="m-socialtabletfriendlytext" /><code>{"private const string SocialTabletFriendlyText"}</code> |
| <Link id="m-unbanplayerevent" /><code>{"private const string UnBanPlayerEvent"}</code> |
| <Link id="m-unbanplayeroriginkey" /><code>{"private const string UnBanPlayerOriginKey"}</code> |
| <Link id="m-userid" /><code>{"private static int userId"}</code> |
| <Link id="m-userreportplayerevent" /><code>{"private const string UserReportPlayerEvent"}</code> |
| <Link id="m-userreportplayeroriginkey" /><code>{"private const string UserReportPlayerOriginKey"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-userid-2" /><code>{"private static int UserId { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-banplayerinmainmenu" /><code>{"static void BanPlayerInMainMenu("}<Link to="/game-api/types/global-s/socialanalyticsbanmenupanelorigin">{"SocialAnalyticsBanMenuPanelOrigin"}</Link>{" mainSocialAnalyticsBanMenuPageUsedFor)"}</code> |
| <Link id="m-banplayerinsocialtablet" /><code>{"static async void BanPlayerInSocialTablet(int serverId)"}</code> |
| <Link id="m-friendlytext" /><code>{"static string FriendlyText("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" reportEventOriginType)"}</code> |
| <Link id="m-friendrequestedfrom" /><code>{"static void FriendRequestedFrom("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> |
| <Link id="m-friendrequesttoken" /><code>{"static void FriendRequestToken()"}</code> |
| <Link id="m-reportplayer" /><code>{"static void ReportPlayer("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> |
| <Link id="m-respondfriendrequestfrom" /><code>{"static void RespondFriendRequestFrom("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> |
| <Link id="m-unbanplayersocialtablet" /><code>{"static void UnBanPlayerSocialTablet()"}</code> |
| <Link id="m-unfriend" /><code>{"static void UnFriend("}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" eventOrigin)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-createanalyticevent" /><code>{"private static async void CreateAnalyticEvent(string eventName)"}</code> |
| <Link id="m-getplayerbanrole" /><code>{"private static async Task<string> GetPlayerBanRole(int serverId)"}</code> |
| <Link id="m-loggedout" /><code>{"private static void LoggedOut()"}</code> |

</details>
