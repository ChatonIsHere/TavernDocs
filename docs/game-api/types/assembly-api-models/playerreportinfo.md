---
title: "PlayerReportInfo"
description: "A player report as stored by the web API: who reported whom, on which server, its type and what moderators did."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerReportInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A player report as stored by the web API: who reported whom, on which server, its type and what moderators did.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportInfo()"}</code> | Creates a `PlayerReportInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actedat" /><code>{"DateTime? ActedAt { get; set; }"}</code> | When a moderator acted on the report, or null if nobody has yet. |
| <Link id="m-actinguser" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ActingUser { get; set; }"}</code> | The moderator who handled the report. |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | When the report was made. |
| <Link id="m-identifier" /><code>{"Guid Identifier { get; set; }"}</code> | The report's GUID. |
| <Link id="m-reporteduser" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedUser { get; set; }"}</code> | The player being reported. |
| <Link id="m-reportinguser" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportingUser { get; set; }"}</code> | The player who made the report. |
| <Link id="m-server" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Server { get; set; }"}</code> | The server the report came from. |
| <Link id="m-status" /><code><Link to="/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{" Status { get; set; }"}</code> | Awaiting action, ignored or acted on. |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" Type { get; set; }"}</code> | What the report is for (griefing, harassment, cheating). |

## Used in

Members of other types that take, return or hold a `PlayerReportInfo`:

[`IPlayerReportsClient.ReportPlayer`](/game-api/types/assembly-api-client/iplayerreportsclient#m-reportplayer), [`PlayerReportAdmin.Info`](/game-api/types/assembly-api-client/playerreportadmin#m-info), [`PlayerReportAdmin.PlayerReportAdmin`](/game-api/types/assembly-api-client/playerreportadmin#m-ctor), [`PlayerReportsClient.ReportPlayer`](/game-api/types/assembly-api-client/playerreportsclient#m-reportplayer), [`PlayerReportSummary.PlayerReportSummary`](/game-api/types/assembly-api-client/playerreportsummary#m-ctor), [`LowLevelApiClient.GetPlayerReports`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getplayerreports), [`LowLevelApiClient.ModifyPlayerReport`](/game-api/types/assembly-api-client/lowlevelapiclient#m-modifyplayerreport), [`LowLevelApiClient.ReportPlayer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-reportplayer), [`ReportPlayers.GetReports`](/game-api/types/global-q-r/reportplayers#m-getreports).
