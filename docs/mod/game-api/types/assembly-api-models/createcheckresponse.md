---
title: "CreateCheckResponse"
description: "Alta web API reply to CanCreateGroups: how many more groups the user may create on each platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateCheckResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Alta web API reply to `CanCreateGroups`: how many more groups the user may create on each platform.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateCheckResponse()"}</code> | <span className="api-desc">Creates a `CreateCheckResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pcgroupsleft" /><code>{"int PcGroupsLeft { get; set; }"}</code> | <span className="api-desc">PC groups the user can still create.</span> |
| <Link id="m-questgroupsleft" /><code>{"int QuestGroupsLeft { get; set; }"}</code> | <span className="api-desc">Quest groups the user can still create.</span> |
| <Link id="m-value" /><code>{"bool Value { get; set; }"}</code> | <span className="api-desc">Old yes or no flag. Marked obsolete.</span> |

## Used in

Members of other types that take, return or hold a `CreateCheckResponse`:

<div className="api-used-in">

[`LowLevelApiClient.CanCreateGroups`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-cancreategroups).

</div>
