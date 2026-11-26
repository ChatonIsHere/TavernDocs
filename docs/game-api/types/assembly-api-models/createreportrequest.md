---
title: "CreateReportRequest"
description: "Body of an Alta web API request to report a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateReportRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to report a player.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CreateReportRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-reporteduser" /><code>{"int ReportedUser { get; set; }"}</code> | Id of the reported user. |
| <Link id="m-server" /><code>{"int Server { get; set; }"}</code> | Id of the server the report is about. |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" Type { get; set; }"}</code> | Kind of report. |

## Used in

Members of other types that take, return or hold a `CreateReportRequest`:

[`LowLevelApiClient.ReportPlayer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-reportplayer).
