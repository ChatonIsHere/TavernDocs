---
title: "ValidateItemOwnershipRequest"
description: "Body of an Alta web API request to check whether a user owns some shop items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValidateItemOwnershipRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of an Alta web API request to check whether a user owns some shop items.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValidateItemOwnershipRequest()"}</code> | <span className="api-desc">Creates a `ValidateItemOwnershipRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"IEnumerable<uint> Items { get; set; }"}</code> | <span className="api-desc">Old numeric item ids. Marked obsolete in favour of `ItemSKUs`.</span> |
| <Link id="m-itemskus" /><code>{"IEnumerable<string> ItemSKUs { get; set; }"}</code> | <span className="api-desc">SKUs of the items to check.</span> |
| <Link id="m-useridentifer" /><code>{"int UserIdentifer { get; set; }"}</code> | <span className="api-desc">Id of the user to check (the name is misspelt in the game).</span> |

## Used in

Members of other types that take, return or hold a `ValidateItemOwnershipRequest`:

<div className="api-used-in">

[`LowLevelApiClient.ValidateItemsOwnershipAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-validateitemsownershipasync).

</div>
