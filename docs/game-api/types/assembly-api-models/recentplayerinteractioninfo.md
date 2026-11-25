---
title: "RecentPlayerInteractionInfo"
description: "class RecentPlayerInteractionInfo in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerInteractionInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RecentPlayerInteractionInfo()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactiontime" /><code>{"DateTime InteractionTime { get; set; }"}</code> |  |
| <Link id="m-server" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Server { get; set; }"}</code> |  |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" Type { get; set; }"}</code> |  |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `RecentPlayerInteractionInfo`:

[`IRecentPlayersClient.GetAllAsync`](/game-api/types/assembly-api-client/irecentplayersclient#m-getallasync), [`RecentPlayersClient.GetAllAsync`](/game-api/types/assembly-api-client/recentplayersclient#m-getallasync), [`LowLevelApiClient.GetAllRecentPlayerInteractions`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallrecentplayerinteractions), [`LowLevelApiClient.GetAllRecentPlayerInteractionsOnServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getallrecentplayerinteractionsonserver), [`RecentPlayerPanelListElement.SetupForRecentPlayer`](/game-api/types/alta-menus/recentplayerpanellistelement#m-setupforrecentplayer), [`RecentPlayersListPanel.AddPlayerAsFriend`](/game-api/types/alta-menus/recentplayerslistpanel#m-addplayerasfriend), [`RecentPlayersListPanel.ReportPlayer`](/game-api/types/alta-menus/recentplayerslistpanel#m-reportplayer), [`RecentPlayersListPanel.ShowOptionsForPlayer`](/game-api/types/alta-menus/recentplayerslistpanel#m-showoptionsforplayer), [`RecentPlayersListPanel.ShowReportPlayerPopup`](/game-api/types/alta-menus/recentplayerslistpanel#m-showreportplayerpopup), [`RecentPlayersPage.recentPlayers`](/game-api/types/alta-menus/recentplayerspage#m-recentplayers), [`RecentPlayersPage.SetupElement`](/game-api/types/alta-menus/recentplayerspage#m-setupelement), [`RecentPlayerActionPage.recentPlayer`](/game-api/types/global-q-r/recentplayeractionpage#m-recentplayer), [`RecentPlayerActionPage.Setup`](/game-api/types/global-q-r/recentplayeractionpage#m-setup), [`RecentPlayerElement.InteractionInfo`](/game-api/types/global-q-r/recentplayerelement#m-interactioninfo), [`RecentPlayerElement.Setup`](/game-api/types/global-q-r/recentplayerelement#m-setup), [`RecentPlayers.GetAllRecentPlayerInteractions`](/game-api/types/global-q-r/recentplayers#m-getallrecentplayerinteractions), [`RecentPlayers.GetFriendshipType`](/game-api/types/global-q-r/recentplayers#m-getfriendshiptype), [`RecentPlayers.GetRecentPlayerInteractionsForServer`](/game-api/types/global-q-r/recentplayers#m-getrecentplayerinteractionsforserver), [`RecentPlayers.GetStatusTextApprox`](/game-api/types/global-q-r/recentplayers#m-getstatustextapprox), [`RecentPlayers.HasBeenFriendRequestedByMe`](/game-api/types/global-q-r/recentplayers#m-hasbeenfriendrequestedbyme), [`RecentPlayers.HasFriendshipRequestedMe`](/game-api/types/global-q-r/recentplayers#m-hasfriendshiprequestedme), [`RecentPlayers.IsFriend`](/game-api/types/global-q-r/recentplayers#m-isfriend), [`RecentPlayers.IsMuted`](/game-api/types/global-q-r/recentplayers#m-ismuted), [`RecentPlayers.QueryDbForInteractions`](/game-api/types/global-q-r/recentplayers#m-querydbforinteractions), [`RecentPlayers.TimeSince`](/game-api/types/global-q-r/recentplayers#m-timesince).
