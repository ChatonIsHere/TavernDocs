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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayerActionPage()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service injected by VContainer. |
| <Link id="m-banbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" banButton"}</code> | Button shown when you can ban and the player isn't banned. |
| <Link id="m-bansentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" banSentPage"}</code> | Confirmation page shown after a ban. |
| <Link id="m-friendbuttons" /><code>{"private List<"}<Link to="/game-api/types/global-q-r/recentplayeractionpage-friendbuttonmap">{"RecentPlayerActionPage.FriendButtonMap"}</Link>{"> friendButtons"}</code> | Friend buttons mapped to the friendship state each one is shown for. |
| <Link id="m-friendremovalsentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRemovalSentPage"}</code> | Confirmation page shown after unfriending. |
| <Link id="m-friendrequestacceptsentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestAcceptSentPage"}</code> | Confirmation page shown after accepting a friend request. |
| <Link id="m-friendrequestdenysentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestDenySentPage"}</code> | Confirmation page shown after denying a friend request. |
| <Link id="m-friendrequestsentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestSentPage"}</code> | Confirmation page shown after sending a friend request. |
| <Link id="m-groupbanpermissionflags" /><code>{"private static readonly "}<Link to="/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] groupBanPermissionFlags"}</code> | The permission checked by `CanBanPlayersOnServer` (only Ban). |
| <Link id="m-hasbanpermissionresultcache" /><code>{"private bool? hasBanPermissionResultCache"}</code> | Cached result of `CanBanPlayersOnServer`, null until asked. |
| <Link id="m-mutebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" muteButton"}</code> | Button shown while the player is not muted. |
| <Link id="m-origin" /><code>{"private const "}<Link to="/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" Origin"}</code> | Analytics origin for every event this page sends (the social tablet). |
| <Link id="m-recentplayer" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" recentPlayer"}</code> | The recent player this page was set up for. |
| <Link id="m-recentplayerelements" /><code>{"private "}<Link to="/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{"[] recentPlayerElements"}</code> | Elements (name, nameplate and so on) filled in with the recent player on `Setup`. |
| <Link id="m-reportreason" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportReason"}</code> | Reason picked for the next report, set by `SetReportReason`. |
| <Link id="m-reportsentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" reportSentPage"}</code> | Confirmation page shown after a report. |
| <Link id="m-servergroupmanagercache" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" serverGroupManagerCache"}</code> | Cached result of `GetServerGroupManager`. |
| <Link id="m-serverinfocache" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfoCache"}</code> | Cached result of `GetServerInfo`. |
| <Link id="m-socialtablet" /><code>{"private "}<Link to="/game-api/types/global-s/socialtablet">{"SocialTablet"}</Link>{" socialTablet"}</code> | The tablet this page is on; its entity carries the sync messages. |
| <Link id="m-syncfriendshipstatusupdatewithplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncFriendshipStatusUpdateWithPlayer"}</code> | Message (SyncC) for `SyncFriendshipConfirmedWithPlayer`, carrying the other player's user id. |
| <Link id="m-syncsocialtabletaction" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-menus/socialtabletactionsyncstruct">{"SocialTabletActionSyncStruct"}</Link>{"> syncSocialTabletAction"}</code> | Message (SyncD) for `SyncSocialTabletAction`. |
| <Link id="m-tasklock" /><code>{"private "}<Link to="/game-api/types/global-t-x/tasklock">{"TaskLock"}</Link>{" taskLock"}</code> | Stops a second unfriend, deny, report, ban or unban from starting while one is running. |
| <Link id="m-unbanbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" unbanButton"}</code> | Button shown when you can ban and the player is already banned. |
| <Link id="m-unbansentpage" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" unBanSentPage"}</code> | Confirmation page shown after an unban. |
| <Link id="m-unmutebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" unmuteButton"}</code> | Button shown while the player is muted. |

</details>

## Properties

<details>
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isserveridvalid" /><code>{"private static bool IsServerIdValid { get; }"}</code> | False when there is no server id (-1), as on a local test. |
| <Link id="m-playerid" /><code>{"private static int PlayerId { get; }"}</code> | User id of the local player. |
| <Link id="m-recentplayerid" /><code>{"private int RecentPlayerId { get; }"}</code> | User id of the recent player this page is showing. |
| <Link id="m-serverid" /><code>{"private static int ServerId { get; }"}</code> | Current server id: from `ServerHandler` on the server, from `JoinedServerInfo` on a client. |

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

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"private async Task<bool> AddFriend()"}</code> | Sends a friend request through `SocialService`. If that makes you friends, refreshes the list and tells the other player via the server. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the mute and unmute buttons to `ToggleMute`. |
| <Link id="m-banplayertask" /><code>{"private async Task BanPlayerTask()"}</code> | Bans the player from this server through `SocialService`, logs analytics and tells the server so it can raise a console event. |
| <Link id="m-canbanplayersonserver" /><code>{"private async Task<bool> CanBanPlayersOnServer()"}</code> | Asks the API whether you have Ban permission in the server's group. False on local servers; the result is cached. |
| <Link id="m-denyfriendrequesttask" /><code>{"private async Task DenyFriendRequestTask()"}</code> | Removes the pending friendship and shows the deny confirmation page. |
| <Link id="m-getservergroupmanager" /><code>{"private async Task<"}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{"> GetServerGroupManager()"}</code> | Gets (and caches) the API group manager for the server's group, used for the ban list. |
| <Link id="m-getserverinfo" /><code>{"private async Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerInfo()"}</code> | Gets (and caches) this server's info from the API. |
| <Link id="m-isplayerbanned" /><code>{"private async Task<bool> IsPlayerBanned(int playerId)"}</code> | Checks the server group's ban list through the API for the given user id. |
| <Link id="m-removefriend" /><code>{"private async Task<bool> RemoveFriend()"}</code> | Removes the friendship through `SocialService` and tells the other player via the server. |
| <Link id="m-reportplayertask" /><code>{"private async Task ReportPlayerTask()"}</code> | Reports the player with the chosen reason, logs analytics and tells the server so it can raise a console event. |
| <Link id="m-setupbanbutton" /><code>{"private async void SetupBanButton()"}</code> | Shows the ban or unban button depending on permission and whether the player is already banned. Hides both without permission. |
| <Link id="m-setupfriendshipbutton" /><code>{"private void SetupFriendshipButton()"}</code> | Shows only the friend button that matches the current friendship state. |
| <Link id="m-showcorrectmutebutton" /><code>{"private void ShowCorrectMuteButton(bool isMuted)"}</code> | Shows mute or unmute to match whether the player is muted. |
| <Link id="m-syncfriendshipconfirmedwithplayer" /><code>{"private void SyncFriendshipConfirmedWithPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int addedPlayerId)"}</code> | Server relays a friendship change to the named player; the client that gets it reloads its friend list. |
| <Link id="m-syncsocialtabletaction-2" /><code>{"private async void SyncSocialTabletAction("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-menus/socialtabletactionsyncstruct">{"SocialTabletActionSyncStruct"}</Link>{" actionData)"}</code> | Carries a report, ban or unban to the server, which looks the target up and fires the matching `ConsoleEvents` event. |
| <Link id="m-togglemute" /><code>{"private void ToggleMute("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" _)"}</code> | Flips voice chat mute for the player and swaps the buttons. |
| <Link id="m-unbanplayertask" /><code>{"private async Task UnbanPlayerTask()"}</code> | Unbans the player through `SocialService` and tells the server. On a local test it only logs a warning. |
| <Link id="m-unfriendtask" /><code>{"private async Task UnfriendTask()"}</code> | Removes the friendship and shows the removal confirmation page. |

</details>

## Used in

Members of other types that take, return or hold a `RecentPlayerActionPage`:

[`RecentPlayersPage.recentPlayerActionPage`](/game-api/types/alta-menus/recentplayerspage#m-recentplayeractionpage).
