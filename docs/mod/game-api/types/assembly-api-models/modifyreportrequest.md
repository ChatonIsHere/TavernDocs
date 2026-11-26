---
title: "ModifyReportRequest"
description: "Body of an Alta web API request to change a report's status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifyReportRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to change a report's status.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifyReportRequest()"}</code> | <span className="api-desc">Creates a `ModifyReportRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code><Link to="/mod/game-api/types/assembly-api-models/reportstatus">{"ReportStatus"}</Link>{" Status { get; set; }"}</code> | <span className="api-desc">The new report status.</span> |

## Used in

Members of other types that take, return or hold a `ModifyReportRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ModifyPlayerReport`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-modifyplayerreport).

</div>
