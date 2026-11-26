---
title: "ReportStatus"
description: "State of a player report: awaiting action, ignored, or acted on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReportStatus

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

State of a player report: awaiting action, ignored, or acted on.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-actedon" /><code>{"ActedOn = 2"}</code> |
| <Link id="m-awaitingaction" /><code>{"AwaitingAction = 0"}</code> |
| <Link id="m-ignored" /><code>{"Ignored = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ReportStatus`:

[`IPlayerReportsClient.ViewAllReports`](/game-api/types/assembly-api-client/iplayerreportsclient#m-viewallreports), [`IPlayerReportsClient.ViewAllReportsAsSummary`](/game-api/types/assembly-api-client/iplayerreportsclient#m-viewallreportsassummary), [`PlayerReportsClient.ViewAllReports`](/game-api/types/assembly-api-client/playerreportsclient#m-viewallreports), [`PlayerReportsClient.ViewAllReportsAsSummary`](/game-api/types/assembly-api-client/playerreportsclient#m-viewallreportsassummary), [`LowLevelApiClient.GetPlayerReports`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getplayerreports), [`ModifyReportRequest.Status`](/game-api/types/assembly-api-models/modifyreportrequest#m-status), [`PlayerReportInfo.Status`](/game-api/types/assembly-api-models/playerreportinfo#m-status), [`ReportPlayers.GetReports`](/game-api/types/global-q-r/reportplayers#m-getreports).
