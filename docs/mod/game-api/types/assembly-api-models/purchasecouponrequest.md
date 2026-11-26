---
title: "PurchaseCouponRequest"
description: "Request body for buying coupons for a currency package."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchaseCouponRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for buying coupons for a currency package.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PurchaseCouponRequest()"}</code> | Creates a `PurchaseCouponRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currencypackageid" /><code>{"int CurrencyPackageId { get; set; }"}</code> | Id of the currency package. |
| <Link id="m-quantity" /><code>{"int Quantity { get; set; }"}</code> | How many to buy; 1 by default. |
