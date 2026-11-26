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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ValidateItemOwnershipRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"IEnumerable<uint> Items { get; set; }"}</code> | Old numeric item ids. Marked obsolete in favour of `ItemSKUs`. |
| <Link id="m-itemskus" /><code>{"IEnumerable<string> ItemSKUs { get; set; }"}</code> | SKUs of the items to check. |
| <Link id="m-useridentifer" /><code>{"int UserIdentifer { get; set; }"}</code> | Id of the user to check (the name is misspelt in the game). |

## Used in

Members of other types that take, return or hold a `ValidateItemOwnershipRequest`:

[`LowLevelApiClient.ValidateItemsOwnershipAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-validateitemsownershipasync).
