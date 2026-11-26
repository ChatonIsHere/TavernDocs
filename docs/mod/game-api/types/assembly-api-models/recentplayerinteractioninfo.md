---
title: "RecentPlayerInteractionInfo"
description: "API response for one recent interaction with another player: who, what kind, when and on which server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerInteractionInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

API response for one recent interaction with another player: who, what kind, when and on which server.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayerInteractionInfo()"}</code> | <span className="api-desc">Creates a `RecentPlayerInteractionInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactiontime" /><code>{"DateTime InteractionTime { get; set; }"}</code> | <span className="api-desc">When the interaction happened.</span> |
| <Link id="m-server" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Server { get; set; }"}</code> | <span className="api-desc">The server it happened on.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">What kind of interaction it was.</span> |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The other player.</span> |

## Used in

Members of other types that take, return or hold a `RecentPlayerInteractionInfo`:

<div className="api-used-in">

[`IRecentPlayersClient.GetAllAsync`](/mod/game-api/types/assembly-api-client/irecentplayersclient#m-getallasync), [`RecentPlayersClient.GetAllAsync`](/mod/game-api/types/assembly-api-client/recentplayersclient#m-getallasync), [`LowLevelApiClient.GetAllRecentPlayerInteractions`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getallrecentplayerinteractions), [`LowLevelApiClient.GetAllRecentPlayerInteractionsOnServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getallrecentplayerinteractionsonserver), [`RecentPlayerPanelListElement.SetupForRecentPlayer`](/mod/game-api/types/alta-menus/recentplayerpanellistelement#m-setupforrecentplayer), [`RecentPlayersListPanel.AddPlayerAsFriend`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-addplayerasfriend), [`RecentPlayersListPanel.ReportPlayer`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-reportplayer), [`RecentPlayersListPanel.ShowOptionsForPlayer`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-showoptionsforplayer), [`RecentPlayersListPanel.ShowReportPlayerPopup`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-showreportplayerpopup), [`RecentPlayersPage.recentPlayers`](/mod/game-api/types/alta-menus/recentplayerspage#m-recentplayers), [`RecentPlayersPage.SetupElement`](/mod/game-api/types/alta-menus/recentplayerspage#m-setupelement), [`RecentPlayerActionPage.recentPlayer`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-recentplayer), [`RecentPlayerActionPage.Setup`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-setup), [`RecentPlayerElement.InteractionInfo`](/mod/game-api/types/global-q-r/recentplayerelement#m-interactioninfo), [`RecentPlayerElement.Setup`](/mod/game-api/types/global-q-r/recentplayerelement#m-setup), [`RecentPlayers.GetAllRecentPlayerInteractions`](/mod/game-api/types/global-q-r/recentplayers#m-getallrecentplayerinteractions), [`RecentPlayers.GetFriendshipType`](/mod/game-api/types/global-q-r/recentplayers#m-getfriendshiptype), [`RecentPlayers.GetRecentPlayerInteractionsForServer`](/mod/game-api/types/global-q-r/recentplayers#m-getrecentplayerinteractionsforserver), [`RecentPlayers.GetStatusTextApprox`](/mod/game-api/types/global-q-r/recentplayers#m-getstatustextapprox), [`RecentPlayers.HasBeenFriendRequestedByMe`](/mod/game-api/types/global-q-r/recentplayers#m-hasbeenfriendrequestedbyme), [`RecentPlayers.HasFriendshipRequestedMe`](/mod/game-api/types/global-q-r/recentplayers#m-hasfriendshiprequestedme), [`RecentPlayers.IsFriend`](/mod/game-api/types/global-q-r/recentplayers#m-isfriend), [`RecentPlayers.IsMuted`](/mod/game-api/types/global-q-r/recentplayers#m-ismuted), [`RecentPlayers.QueryDbForInteractions`](/mod/game-api/types/global-q-r/recentplayers#m-querydbforinteractions), [`RecentPlayers.TimeSince`](/mod/game-api/types/global-q-r/recentplayers#m-timesince).

</div>
