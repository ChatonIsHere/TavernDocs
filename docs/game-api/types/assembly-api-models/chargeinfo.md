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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChargeInfo()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-amount" /><code>{"decimal Amount { get; set; }"}</code> | Price per period. |
| <Link id="m-period" /><code><Link to="/game-api/types/assembly-api-models/duration">{"Duration"}</Link>{" Period { get; set; }"}</code> | Length of one billing period. |

## Used in

Members of other types that take, return or hold a `ChargeInfo`:

[`SubscriptionPlanInfo.Charge`](/game-api/types/assembly-api-models/subscriptionplaninfo#m-charge).
