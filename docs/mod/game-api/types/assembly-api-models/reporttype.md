---
title: "ReportType"
description: "What a player report is for: griefing, harassment, or cheating and exploits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReportType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

What a player report is for: griefing, harassment, or cheating and exploits.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-cheatingexploits" /><code>{"CheatingExploits = 2"}</code> |
| <Link id="m-griefing" /><code>{"Griefing = 0"}</code> |
| <Link id="m-harrassment" /><code>{"Harrassment = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ReportType`:

[`IPlayerReportsClient.ReportPlayer`](/mod/game-api/types/assembly-api-client/iplayerreportsclient#m-reportplayer), [`PlayerReportsClient.ReportPlayer`](/mod/game-api/types/assembly-api-client/playerreportsclient#m-reportplayer), [`PlayerReportSummary.TypeCounts`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-typecounts), [`CreateReportRequest.Type`](/mod/game-api/types/assembly-api-models/createreportrequest#m-type), [`PlayerReportInfo.Type`](/mod/game-api/types/assembly-api-models/playerreportinfo#m-type), [`RecentPlayersListPanel.ReportPlayer`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-reportplayer), [`RecentPlayerActionPage.reportReason`](/mod/game-api/types/global-q-r/recentplayeractionpage#m-reportreason), [`RecentPlayers.FriendlyText`](/mod/game-api/types/global-q-r/recentplayers#m-friendlytext), [`ReportPlayers.CreateReport`](/mod/game-api/types/global-q-r/reportplayers#m-createreport), [`SocialService.ReportPlayer`](/mod/game-api/types/global-s/socialservice#m-reportplayer).
