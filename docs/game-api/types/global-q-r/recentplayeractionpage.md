---
title: "RecentPlayerActionPage"
description: "Social tablet page for one recent player: friend, unfriend, mute, report, ban and unban buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerActionPage

A **class** in `Root.Township`, no namespace.

Social tablet page for one recent player: friend, unfriend, mute, report, ban and unban buttons. Actions run on the client through the Alta API; reports and bans are also sent to the server, which raises console events.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`PanelComponent`](/game-api/types/alta-menus/panelcomponent)
- **Nested types** [`FriendButtonMap`](/game-api/types/global-q-r/recentplayeractionpage-friendbuttonmap)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RecentPlayerActionPage()"}</code> |

## Fields

<details>
<summary>25 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |
| <Link id="m-banbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" banButton"}</code> |
| <Link id="m-bansentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" banSentPage"}</code> |
| <Link id="m-friendbuttons" /><code>{"private List<"}<Link to="/game-api/types/global-q-r/recentplayeractionpage-friendbuttonmap">{"RecentPlayerActionPage.FriendButtonMap"}</Link>{"> friendButtons"}</code> |
| <Link id="m-friendremovalsentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRemovalSentPage"}</code> |
| <Link id="m-friendrequestacceptsentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestAcceptSentPage"}</code> |
| <Link id="m-friendrequestdenysentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestDenySentPage"}</code> |
| <Link id="m-friendrequestsentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestSentPage"}</code> |
| <Link id="m-groupbanpermissionflags" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] groupBanPermissionFlags"}</code> |
| <Link id="m-hasbanpermissionresultcache" /><code>{"private bool? hasBanPermissionResultCache"}</code> |
| <Link id="m-mutebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" muteButton"}</code> |
| <Link id="m-origin" /><code>{"private const "}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" Origin"}</code> |
| <Link id="m-recentplayer" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" recentPlayer"}</code> |
| <Link id="m-recentplayerelements" /><code>{"private "}<Link to="/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{"[] recentPlayerElements"}</code> |
| <Link id="m-reportreason" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportReason"}</code> |
| <Link id="m-reportsentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" reportSentPage"}</code> |
| <Link id="m-servergroupmanagercache" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" serverGroupManagerCache"}</code> |
| <Link id="m-serverinfocache" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfoCache"}</code> |
| <Link id="m-socialtablet" /><code>{"private "}<Link to="/game-api/types/global-s/socialtablet">{"SocialTablet"}</Link>{" socialTablet"}</code> |
| <Link id="m-syncfriendshipstatusupdatewithplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncFriendshipStatusUpdateWithPlayer"}</code> |
| <Link id="m-syncsocialtabletaction" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-menus/socialtabletactionsyncstruct">{"SocialTabletActionSyncStruct"}</Link>{"> syncSocialTabletAction"}</code> |
| <Link id="m-tasklock" /><code>{"private "}<Link to="/game-api/types/global-t-x/tasklock">{"TaskLock"}</Link>{" taskLock"}</code> |
| <Link id="m-unbanbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" unbanButton"}</code> |
| <Link id="m-unbansentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" unBanSentPage"}</code> |
| <Link id="m-unmutebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" unmuteButton"}</code> |

</details>

## Properties

<details>
<summary>4 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-isserveridvalid" /><code>{"private static bool IsServerIdValid { get; }"}</code> |
| <Link id="m-playerid" /><code>{"private static int PlayerId { get; }"}</code> |
| <Link id="m-recentplayerid" /><code>{"private int RecentPlayerId { get; }"}</code> |
| <Link id="m-serverid" /><code>{"private static int ServerId { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banplayer" /><code>{"async void BanPlayer()"}</code> | Bans the player from the current server through the API and tells the server, which raises `SocialTabletPlayerBanned`. |
| <Link id="m-denyfriendrequest" /><code>{"async void DenyFriendRequest()"}</code> | Declines the player's friend request by removing the friendship. |
| <Link id="m-initsync" /><code>{"void InitSync()"}</code> | Creates the friendship and tablet action messages on the social tablet's entity. |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | Receives the analytics service by dependency injection. |
| <Link id="m-makefriendrequest" /><code>{"async void MakeFriendRequest()"}</code> | Sends a friend request (or accepts theirs) and shows the sent page. |
| <Link id="m-reportplayer" /><code>{"async void ReportPlayer()"}</code> | Reports the player with the chosen reason and tells the server, which raises `SocialTabletPlayerReported`. |
| <Link id="m-respondfriendrequest" /><code>{"async void RespondFriendRequest()"}</code> | Accepts the player's friend request. |
| <Link id="m-setreportreason" /><code>{"void SetReportReason(int reason)"}</code> | Sets the report reason from a `ReportType` number. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" recentPlayer)"}</code> | Shows a recent player: fills the elements and picks the right friend, mute and ban buttons. Ban buttons need the Ban group permission. |
| <Link id="m-unbanplayer" /><code>{"async void UnBanPlayer()"}</code> | Unbans the player from the current server and tells the server. |
| <Link id="m-unfriend" /><code>{"void Unfriend()"}</code> | Removes the friendship and tells the other player to refresh their friends list. |

<details>
<summary>18 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addfriend" /><code>{"private async Task<bool> AddFriend()"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-banplayertask" /><code>{"private async Task BanPlayerTask()"}</code> |
| <Link id="m-canbanplayersonserver" /><code>{"private async Task<bool> CanBanPlayersOnServer()"}</code> |
| <Link id="m-denyfriendrequesttask" /><code>{"private async Task DenyFriendRequestTask()"}</code> |
| <Link id="m-getservergroupmanager" /><code>{"private async Task<"}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{"> GetServerGroupManager()"}</code> |
| <Link id="m-getserverinfo" /><code>{"private async Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerInfo()"}</code> |
| <Link id="m-isplayerbanned" /><code>{"private async Task<bool> IsPlayerBanned(int playerId)"}</code> |
| <Link id="m-removefriend" /><code>{"private async Task<bool> RemoveFriend()"}</code> |
| <Link id="m-reportplayertask" /><code>{"private async Task ReportPlayerTask()"}</code> |
| <Link id="m-setupbanbutton" /><code>{"private async void SetupBanButton()"}</code> |
| <Link id="m-setupfriendshipbutton" /><code>{"private void SetupFriendshipButton()"}</code> |
| <Link id="m-showcorrectmutebutton" /><code>{"private void ShowCorrectMuteButton(bool isMuted)"}</code> |
| <Link id="m-syncfriendshipconfirmedwithplayer" /><code>{"private void SyncFriendshipConfirmedWithPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int addedPlayerId)"}</code> |
| <Link id="m-syncsocialtabletaction-2" /><code>{"private async void SyncSocialTabletAction("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-menus/socialtabletactionsyncstruct">{"SocialTabletActionSyncStruct"}</Link>{" actionData)"}</code> |
| <Link id="m-togglemute" /><code>{"private void ToggleMute("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" _)"}</code> |
| <Link id="m-unbanplayertask" /><code>{"private async Task UnbanPlayerTask()"}</code> |
| <Link id="m-unfriendtask" /><code>{"private async Task UnfriendTask()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RecentPlayerActionPage`:

[`RecentPlayersPage.recentPlayerActionPage`](/game-api/types/alta-menus/recentplayerspage#m-recentplayeractionpage).
