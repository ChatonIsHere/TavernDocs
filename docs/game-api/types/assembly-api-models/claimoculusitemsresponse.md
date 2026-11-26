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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClaimOculusItemsResponse()"}</code> | Creates a `ClaimOculusItemsResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-claimeditems" /><code>{"List<string> ClaimedItems { get; set; }"}</code> | Items that were claimed. |
| <Link id="m-value" /><code>{"bool Value { get; set; }"}</code> | Old success flag. Marked obsolete. |

## Used in

Members of other types that take, return or hold a `ClaimOculusItemsResponse`:

[`LowLevelApiClient.ConsumeAllOculusPurchases`](/game-api/types/assembly-api-client/lowlevelapiclient#m-consumealloculuspurchases).
