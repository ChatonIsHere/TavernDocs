---
title: "GetShardsTokenRequest"
description: "Request body for getting a payment token to buy a shards package."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GetShardsTokenRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for getting a payment token to buy a shards package.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GetShardsTokenRequest()"}</code> | Creates a `GetShardsTokenRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-quantity" /><code>{"int Quantity { get; set; }"}</code> | How many packages to buy; 1 by default. |
| <Link id="m-shardspackageidentifier" /><code>{"int ShardsPackageIdentifier { get; set; }"}</code> | Id of the shards package, sent as `shards_package_id`. |
