---
title: "CouponRedeemedResponse"
description: "The API's answer after a coupon is redeemed: what it gave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CouponRedeemedResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

The API's answer after a coupon is redeemed: what it gave.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CouponRedeemedResponse()"}</code> | <span className="api-desc">Creates a `CouponRedeemedResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-couponcode" /><code>{"string CouponCode { get; set; }"}</code> | <span className="api-desc">The code that was redeemed.</span> |
| <Link id="m-virtualcurrencyamount" /><code>{"int VirtualCurrencyAmount { get; set; }"}</code> | <span className="api-desc">How much virtual currency the coupon gave.</span> |
| <Link id="m-virtualitems" /><code>{"object[] VirtualItems { get; set; }"}</code> | <span className="api-desc">Items the coupon gave, as untyped objects.</span> |
