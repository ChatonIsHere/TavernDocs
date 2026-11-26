---
title: "VirtualCurrencyPurchaseRequest"
description: "Request body for buying a virtual currency package with a payment method."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VirtualCurrencyPurchaseRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for buying a virtual currency package with a payment method.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`PurchaseRequest`](/game-api/types/assembly-api-models/purchaserequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VirtualCurrencyPurchaseRequest()"}</code> | Creates a `VirtualCurrencyPurchaseRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-virtualcurrencypackageidentifier" /><code>{"int VirtualCurrencyPackageIdentifier { get; set; }"}</code> | Id of the currency package, sent as `currency_package_id`. |
