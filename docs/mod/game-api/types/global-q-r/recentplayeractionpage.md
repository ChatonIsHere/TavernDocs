---
title: "RecentPlayerActionPage"
description: "Social tablet page for one recent player: friend, unfriend, mute, report, ban and unban buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerActionPage

A **class** in `Root.Township`, the global namespace.

Social tablet page for one recent player: friend, unfriend, mute, report, ban and unban buttons. Actions run on the client through the Alta API; reports and bans are also sent to the server, which raises console events.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`PanelComponent`](/mod/game-api/types/alta-menus/panelcomponent)
- **Nested types** [`FriendButtonMap`](/mod/game-api/types/global-q-r/recentplayeractionpage-friendbuttonmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayerActionPage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service injected by VContainer.</span> |
| <Link id="m-banbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" banButton"}</code> | <span className="api-desc">Button shown when you can ban and the player isn't banned.</span> |
| <Link id="m-bansentpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" banSentPage"}</code> | <span className="api-desc">Confirmation page shown after a ban.</span> |
| <Link id="m-friendbuttons" /><code>{"private List<"}<Link to="/mod/game-api/types/global-q-r/recentplayeractionpage-friendbuttonmap">{"RecentPlayerActionPage.FriendButtonMap"}</Link>{"> friendButtons"}</code> | <span className="api-desc">Friend buttons mapped to the friendship state each one is shown for.</span> |
| <Link id="m-friendremovalsentpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRemovalSentPage"}</code> | <span className="api-desc">Confirmation page shown after unfriending.</span> |
| <Link id="m-friendrequestacceptsentpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestAcceptSentPage"}</code> | <span className="api-desc">Confirmation page shown after accepting a friend request.</span> |
| <Link id="m-friendrequestdenysentpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestDenySentPage"}</code> | <span className="api-desc">Confirmation page shown after denying a friend request.</span> |
| <Link id="m-friendrequestsentpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" friendRequestSentPage"}</code> | <span className="api-desc">Confirmation page shown after sending a friend request.</span> |
| <Link id="m-groupbanpermissionflags" /><code>{"private static readonly "}<Link to="/mod/game-api/types/assembly-api-models/grouppermissions">{"GroupPermissions"}</Link>{"[] groupBanPermissionFlags"}</code> | <span className="api-desc">The permission checked by `CanBanPlayersOnServer` (only Ban).</span> |
| <Link id="m-hasbanpermissionresultcache" /><code>{"private bool? hasBanPermissionResultCache"}</code> | <span className="api-desc">Cached result of `CanBanPlayersOnServer`, null until asked.</span> |
| <Link id="m-mutebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" muteButton"}</code> | <span className="api-desc">Button shown while the player is not muted.</span> |
| <Link id="m-origin" /><code>{"private const "}<Link to="/mod/game-api/types/global-s/socialanalyticseventorigin">{"SocialAnalyticsEventOrigin"}</Link>{" Origin"}</code> | <span className="api-desc">Analytics origin for every event this page sends (the social tablet).</span> |
| <Link id="m-recentplayer" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" recentPlayer"}</code> | <span className="api-desc">The recent player this page was set up for.</span> |
| <Link id="m-recentplayerelements" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/recentplayerelement">{"RecentPlayerElement"}</Link>{"[] recentPlayerElements"}</code> | <span className="api-desc">Elements (name, nameplate and so on) filled in with the recent player on `Setup`.</span> |
| <Link id="m-reportreason" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" reportReason"}</code> | <span className="api-desc">Reason picked for the next report, set by `SetReportReason`.</span> |
| <Link id="m-reportsentpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" reportSentPage"}</code> | <span className="api-desc">Confirmation page shown after a report.</span> |
| <Link id="m-servergroupmanagercache" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" serverGroupManagerCache"}</code> | <span className="api-desc">Cached result of `GetServerGroupManager`.</span> |
| <Link id="m-serverinfocache" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" serverInfoCache"}</code> | <span className="api-desc">Cached result of `GetServerInfo`.</span> |
| <Link id="m-socialtablet" /><code>{"private "}<Link to="/mod/game-api/types/global-s/socialtablet">{"SocialTablet"}</Link>{" socialTablet"}</code> | <span className="api-desc">The tablet this page is on; its entity carries the sync messages.</span> |
| <Link id="m-syncfriendshipstatusupdatewithplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncFriendshipStatusUpdateWithPlayer"}</code> | <span className="api-desc">Message (SyncC) for `SyncFriendshipConfirmedWithPlayer`, carrying the other player's user id.</span> |
| <Link id="m-syncsocialtabletaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-menus/socialtabletactionsyncstruct">{"SocialTabletActionSyncStruct"}</Link>{"> syncSocialTabletAction"}</code> | <span className="api-desc">Message (SyncD) for `SyncSocialTabletAction`.</span> |
| <Link id="m-tasklock" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/tasklock">{"TaskLock"}</Link>{" taskLock"}</code> | <span className="api-desc">Stops a second unfriend, deny, report, ban or unban from starting while one is running.</span> |
| <Link id="m-unbanbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" unbanButton"}</code> | <span className="api-desc">Button shown when you can ban and the player is already banned.</span> |
| <Link id="m-unbansentpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" unBanSentPage"}</code> | <span className="api-desc">Confirmation page shown after an unban.</span> |
| <Link id="m-unmutebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" unmuteButton"}</code> | <span className="api-desc">Button shown while the player is muted.</span> |

</details>

## Properties

<details className="api-private">
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isserveridvalid" /><code>{"private static bool IsServerIdValid { get; }"}</code> | <span className="api-desc">False when there is no server id (-1), as on a local test.</span> |
| <Link id="m-playerid" /><code>{"private static int PlayerId { get; }"}</code> | <span className="api-desc">User id of the local player.</span> |
| <Link id="m-recentplayerid" /><code>{"private int RecentPlayerId { get; }"}</code> | <span className="api-desc">User id of the recent player this page is showing.</span> |
| <Link id="m-serverid" /><code>{"private static int ServerId { get; }"}</code> | <span className="api-desc">Current server id: from `ServerHandler` on the server, from `JoinedServerInfo` on a client.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-banplayer" /><code>{"async void BanPlayer()"}</code> | <span className="api-desc">Bans the player from the current server through the API and tells the server, which raises `SocialTabletPlayerBanned`.</span> |
| <Link id="m-denyfriendrequest" /><code>{"async void DenyFriendRequest()"}</code> | <span className="api-desc">Declines the player's friend request by removing the friendship.</span> |
| <Link id="m-initsync" /><code>{"void InitSync()"}</code> | <span className="api-desc">Creates the friendship and tablet action messages on the social tablet's entity.</span> |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">Receives the analytics service by dependency injection.</span> |
| <Link id="m-makefriendrequest" /><code>{"async void MakeFriendRequest()"}</code> | <span className="api-desc">Sends a friend request (or accepts theirs) and shows the sent page.</span> |
| <Link id="m-reportplayer" /><code>{"async void ReportPlayer()"}</code> | <span className="api-desc">Reports the player with the chosen reason and tells the server, which raises `SocialTabletPlayerReported`.</span> |
| <Link id="m-respondfriendrequest" /><code>{"async void RespondFriendRequest()"}</code> | <span className="api-desc">Accepts the player's friend request.</span> |
| <Link id="m-setreportreason" /><code>{"void SetReportReason(int reason)"}</code> | <span className="api-desc">Sets the report reason from a `ReportType` number.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{" recentPlayer)"}</code> | <span className="api-desc">Shows a recent player: fills the elements and picks the right friend, mute and ban buttons. Ban buttons need the Ban group permission.</span> |
| <Link id="m-unbanplayer" /><code>{"async void UnBanPlayer()"}</code> | <span className="api-desc">Unbans the player from the current server and tells the server.</span> |
| <Link id="m-unfriend" /><code>{"void Unfriend()"}</code> | <span className="api-desc">Removes the friendship and tells the other player to refresh their friends list.</span> |

<details className="api-private">
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"private async Task<bool> AddFriend()"}</code> | <span className="api-desc">Sends a friend request through `SocialService`. If that makes you friends, refreshes the list and tells the other player via the server.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the mute and unmute buttons to `ToggleMute`.</span> |
| <Link id="m-banplayertask" /><code>{"private async Task BanPlayerTask()"}</code> | <span className="api-desc">Bans the player from this server through `SocialService`, logs analytics and tells the server so it can raise a console event.</span> |
| <Link id="m-canbanplayersonserver" /><code>{"private async Task<bool> CanBanPlayersOnServer()"}</code> | <span className="api-desc">Asks the API whether you have Ban permission in the server's group. False on local servers; the result is cached.</span> |
| <Link id="m-denyfriendrequesttask" /><code>{"private async Task DenyFriendRequestTask()"}</code> | <span className="api-desc">Removes the pending friendship and shows the deny confirmation page.</span> |
| <Link id="m-getservergroupmanager" /><code>{"private async Task<"}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{"> GetServerGroupManager()"}</code> | <span className="api-desc">Gets (and caches) the API group manager for the server's group, used for the ban list.</span> |
| <Link id="m-getserverinfo" /><code>{"private async Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetServerInfo()"}</code> | <span className="api-desc">Gets (and caches) this server's info from the API.</span> |
| <Link id="m-isplayerbanned" /><code>{"private async Task<bool> IsPlayerBanned(int playerId)"}</code> | <span className="api-desc">Checks the server group's ban list through the API for the given user id.</span> |
| <Link id="m-removefriend" /><code>{"private async Task<bool> RemoveFriend()"}</code> | <span className="api-desc">Removes the friendship through `SocialService` and tells the other player via the server.</span> |
| <Link id="m-reportplayertask" /><code>{"private async Task ReportPlayerTask()"}</code> | <span className="api-desc">Reports the player with the chosen reason, logs analytics and tells the server so it can raise a console event.</span> |
| <Link id="m-setupbanbutton" /><code>{"private async void SetupBanButton()"}</code> | <span className="api-desc">Shows the ban or unban button depending on permission and whether the player is already banned. Hides both without permission.</span> |
| <Link id="m-setupfriendshipbutton" /><code>{"private void SetupFriendshipButton()"}</code> | <span className="api-desc">Shows only the friend button that matches the current friendship state.</span> |
| <Link id="m-showcorrectmutebutton" /><code>{"private void ShowCorrectMuteButton(bool isMuted)"}</code> | <span className="api-desc">Shows mute or unmute to match whether the player is muted.</span> |
| <Link id="m-syncfriendshipconfirmedwithplayer" /><code>{"private void SyncFriendshipConfirmedWithPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int addedPlayerId)"}</code> | <span className="api-desc">Server relays a friendship change to the named player; the client that gets it reloads its friend list.</span> |
| <Link id="m-syncsocialtabletaction-2" /><code>{"private async void SyncSocialTabletAction("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-menus/socialtabletactionsyncstruct">{"SocialTabletActionSyncStruct"}</Link>{" actionData)"}</code> | <span className="api-desc">Carries a report, ban or unban to the server, which looks the target up and fires the matching `ConsoleEvents` event.</span> |
| <Link id="m-togglemute" /><code>{"private void ToggleMute("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" _)"}</code> | <span className="api-desc">Flips voice chat mute for the player and swaps the buttons.</span> |
| <Link id="m-unbanplayertask" /><code>{"private async Task UnbanPlayerTask()"}</code> | <span className="api-desc">Unbans the player through `SocialService` and tells the server. On a local test it only logs a warning.</span> |
| <Link id="m-unfriendtask" /><code>{"private async Task UnfriendTask()"}</code> | <span className="api-desc">Removes the friendship and shows the removal confirmation page.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RecentPlayerActionPage`:

<div className="api-used-in">

[`RecentPlayersPage.recentPlayerActionPage`](/mod/game-api/types/alta-menus/recentplayerspage#m-recentplayeractionpage).

</div>
