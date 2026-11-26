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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidateItemOwnershipResponse()"}</code> | <span className="api-desc">Creates a `ValidateItemOwnershipResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidlist" /><code>{"bool IsValidList { get; set; }"}</code> | <span className="api-desc">True when the user owns every item in the list.</span> |

## Used in

Members of other types that take, return or hold a `ValidateItemOwnershipResponse`:

<div className="api-used-in">

[`LowLevelApiClient.ValidateItemsOwnershipAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-validateitemsownershipasync).

</div>
