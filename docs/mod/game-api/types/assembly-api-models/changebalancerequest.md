---
title: "ChangeBalanceRequest"
description: "Request body for changing a balance by an amount, probably a user's virtual currency."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChangeBalanceRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for changing a balance by an amount, probably a user's virtual currency.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChangeBalanceRequest()"}</code> | Creates a `ChangeBalanceRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-change" /><code>{"int Change { get; set; }"}</code> | Amount to add; probably negative to take away. |
