---
title: "ShopTransactionStatus"
description: "State of an Alta shop purchase, from started and processing to successful or refunded, with values for each kind of failure."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopTransactionStatus

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Enums`.

State of an Alta shop purchase, from started and processing to successful or refunded, with values for each kind of failure.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-couponemailfailednotrefunded" /><code>{"CouponEmailFailedNotRefunded = 7"}</code> |
| <Link id="m-itemattributionfailed" /><code>{"ItemAttributionFailed = 3"}</code> |
| <Link id="m-itemattributionfailedfree" /><code>{"ItemAttributionFailedFree = 4"}</code> |
| <Link id="m-itemattributionfailednotrefunded" /><code>{"ItemAttributionFailedNotRefunded = 6"}</code> |
| <Link id="m-itemattributionfailedrefunded" /><code>{"ItemAttributionFailedRefunded = 5"}</code> |
| <Link id="m-processing" /><code>{"Processing = 1"}</code> |
| <Link id="m-refunded" /><code>{"Refunded = 10"}</code> |
| <Link id="m-shardattributionfailed" /><code>{"ShardAttributionFailed = 8"}</code> |
| <Link id="m-sharddeductionfailed" /><code>{"ShardDeductionFailed = 2"}</code> |
| <Link id="m-started" /><code>{"Started = 0"}</code> |
| <Link id="m-successful" /><code>{"Successful = 9"}</code> |

## Used in

Members of other types that take, return or hold a `ShopTransactionStatus`:

<div className="api-used-in">

[`ShopTransactionStatusResponse.Status`](/mod/game-api/types/assembly-api-models/shoptransactionstatusresponse#m-status).

</div>
