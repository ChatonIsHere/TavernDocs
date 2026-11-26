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
| <Link id="m-ctor" /><code>{"GetShardsTokenRequest()"}</code> | <span className="api-desc">Creates a `GetShardsTokenRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-quantity" /><code>{"int Quantity { get; set; }"}</code> | <span className="api-desc">How many packages to buy; 1 by default.</span> |
| <Link id="m-shardspackageidentifier" /><code>{"int ShardsPackageIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the shards package, sent as `shards_package_id`.</span> |
