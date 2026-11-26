---
title: "ValidateItemOwnershipResponse"
description: "Web API answer to ValidateItemsOwnershipAsync, which checks that a user owns a list of shop items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValidateItemOwnershipResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API answer to `ValidateItemsOwnershipAsync`, which checks that a user owns a list of shop items.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ValidateItemOwnershipResponse()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidlist" /><code>{"bool IsValidList { get; set; }"}</code> | True when the user owns every item in the list. |

## Used in

Members of other types that take, return or hold a `ValidateItemOwnershipResponse`:

[`LowLevelApiClient.ValidateItemsOwnershipAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-validateitemsownershipasync).
