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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerReportInfo()"}</code> | <span className="api-desc">Creates a `PlayerReportInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actedat" /><code>{"DateTime? ActedAt { get; set; }"}</code> | <span className="api-desc">When a moderator acted on the report, or null if nobody has yet.</span> |
| <Link id="m-actinguser" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ActingUser { get; set; }"}</code> | <span className="api-desc">The moderator who handled the report.</span> |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | <span className="api-desc">When the report was made.</span> |
| <Link id="m-identifier" /><code>{"Guid Identifier { get; set; }"}</code> | <span className="api-desc">The report's GUID.</span> |
| <Link id="m-reporteduser" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportedUser { get; set; }"}</code> | <span className="api-desc">The player being reported.</span> |
| <Link id="m-reportinguser" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" ReportingUser { get; set; }"}</code> | <span className="api-desc">The player who made the report.</span> |
| <Link id="m-server" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfominimal">{"GameServerInfoMinimal"}</Link>{" Server { get; set; }"}</code> | <span className="api-desc">The server the report came from.</span> |
| <Link id="m-status" /><code><Link to="/mod/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{" Status { get; set; }"}</code> | <span className="api-desc">Awaiting action, ignored or acted on.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">What the report is for (griefing, harassment, cheating).</span> |

## Used in

Members of other types that take, return or hold a `PlayerReportInfo`:

<div className="api-used-in">

[`IPlayerReportsClient.ReportPlayer`](/mod/game-api/types/assembly-api-client/iplayerreportsclient#m-reportplayer), [`PlayerReportAdmin.Info`](/mod/game-api/types/assembly-api-client/playerreportadmin#m-info), [`PlayerReportAdmin.PlayerReportAdmin`](/mod/game-api/types/assembly-api-client/playerreportadmin#m-ctor), [`PlayerReportsClient.ReportPlayer`](/mod/game-api/types/assembly-api-client/playerreportsclient#m-reportplayer), [`PlayerReportSummary.PlayerReportSummary`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-ctor), [`LowLevelApiClient.GetPlayerReports`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getplayerreports), [`LowLevelApiClient.ModifyPlayerReport`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-modifyplayerreport), [`LowLevelApiClient.ReportPlayer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-reportplayer), [`ReportPlayers.GetReports`](/mod/game-api/types/global-q-r/reportplayers#m-getreports).

</div>
