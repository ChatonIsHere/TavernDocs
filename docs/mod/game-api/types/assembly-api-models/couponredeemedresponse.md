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
| <Link id="m-ctor" /><code>{"CouponRedeemedResponse()"}</code> | Creates a `CouponRedeemedResponse` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-couponcode" /><code>{"string CouponCode { get; set; }"}</code> | The code that was redeemed. |
| <Link id="m-virtualcurrencyamount" /><code>{"int VirtualCurrencyAmount { get; set; }"}</code> | How much virtual currency the coupon gave. |
| <Link id="m-virtualitems" /><code>{"object[] VirtualItems { get; set; }"}</code> | Items the coupon gave, as untyped objects. |
