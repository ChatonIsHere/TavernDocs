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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateReportRequest()"}</code> | <span className="api-desc">Creates a `CreateReportRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-reporteduser" /><code>{"int ReportedUser { get; set; }"}</code> | <span className="api-desc">Id of the reported user.</span> |
| <Link id="m-server" /><code>{"int Server { get; set; }"}</code> | <span className="api-desc">Id of the server the report is about.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/reporttype">{"ReportType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">Kind of report.</span> |

## Used in

Members of other types that take, return or hold a `CreateReportRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ReportPlayer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-reportplayer).

</div>
