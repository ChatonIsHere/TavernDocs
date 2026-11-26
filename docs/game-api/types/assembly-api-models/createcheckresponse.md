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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CreateCheckResponse()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pcgroupsleft" /><code>{"int PcGroupsLeft { get; set; }"}</code> | PC groups the user can still create. |
| <Link id="m-questgroupsleft" /><code>{"int QuestGroupsLeft { get; set; }"}</code> | Quest groups the user can still create. |
| <Link id="m-value" /><code>{"bool Value { get; set; }"}</code> | Old yes or no flag. Marked obsolete. |

## Used in

Members of other types that take, return or hold a `CreateCheckResponse`:

[`LowLevelApiClient.CanCreateGroups`](/game-api/types/assembly-api-client/lowlevelapiclient#m-cancreategroups).
