---
title: "ClaimOculusItemsResponse"
description: "Alta web API reply to claiming all of a user's Oculus purchases (ConsumeAllOculusPurchases)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClaimOculusItemsResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Alta web API reply to claiming all of a user's Oculus purchases (`ConsumeAllOculusPurchases`).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClaimOculusItemsResponse()"}</code> | <span className="api-desc">Creates a `ClaimOculusItemsResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-claimeditems" /><code>{"List<string> ClaimedItems { get; set; }"}</code> | <span className="api-desc">Items that were claimed.</span> |
| <Link id="m-value" /><code>{"bool Value { get; set; }"}</code> | <span className="api-desc">Old success flag. Marked obsolete.</span> |

## Used in

Members of other types that take, return or hold a `ClaimOculusItemsResponse`:

<div className="api-used-in">

[`LowLevelApiClient.ConsumeAllOculusPurchases`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-consumealloculuspurchases).

</div>
