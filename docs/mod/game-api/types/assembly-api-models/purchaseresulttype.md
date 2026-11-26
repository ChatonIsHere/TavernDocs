---
title: "PurchaseResultType"
description: "Outcome of a shop purchase, such as success, not enough shards, already owned or premium only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchaseResultType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Outcome of a shop purchase, such as success, not enough shards, already owned or premium only.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-alreadyowned" /><code>{"AlreadyOwned = 2"}</code> |
| <Link id="m-faileddeductingshards" /><code>{"FailedDeductingShards = 3"}</code> |
| <Link id="m-failedgivingitem" /><code>{"FailedGivingItem = 4"}</code> |
| <Link id="m-notavailable" /><code>{"NotAvailable = 0"}</code> |
| <Link id="m-notenoughshards" /><code>{"NotEnoughShards = 1"}</code> |
| <Link id="m-premiumonlyitem" /><code>{"PremiumOnlyItem = 6"}</code> |
| <Link id="m-shardsonlyitem" /><code>{"ShardsOnlyItem = 7"}</code> |
| <Link id="m-success" /><code>{"Success = 5"}</code> |

## Used in

Members of other types that take, return or hold a `PurchaseResultType`:

<div className="api-used-in">

[`PurchaseResult.PurchaseResult`](/mod/game-api/types/assembly-api-models/purchaseresult#m-ctor-2), [`PurchaseResult.Result`](/mod/game-api/types/assembly-api-models/purchaseresult#m-result).

</div>
