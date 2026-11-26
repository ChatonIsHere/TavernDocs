---
title: "ChargeInfo"
description: "How much a subscription plan charges and how often."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChargeInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

How much a subscription plan charges and how often.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChargeInfo()"}</code> | <span className="api-desc">Creates a `ChargeInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-amount" /><code>{"decimal Amount { get; set; }"}</code> | <span className="api-desc">Price per period.</span> |
| <Link id="m-period" /><code><Link to="/mod/game-api/types/assembly-api-models/duration">{"Duration"}</Link>{" Period { get; set; }"}</code> | <span className="api-desc">Length of one billing period.</span> |

## Used in

Members of other types that take, return or hold a `ChargeInfo`:

<div className="api-used-in">

[`SubscriptionPlanInfo.Charge`](/mod/game-api/types/assembly-api-models/subscriptionplaninfo#m-charge).

</div>
