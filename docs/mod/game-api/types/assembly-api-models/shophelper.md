---
title: "ShopHelper"
description: "Helpers for shop SKUs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopHelper

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Helpers`.

Helpers for shop SKUs. Item sets are told apart from single items by a `set_` prefix on the SKU.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-itemsetprefix" /><code>{"const string ItemSetPrefix"}</code> | <span className="api-desc">The SKU prefix that marks an item set, `set_`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ensureitemsetsku" /><code>{"static string EnsureItemSetSku(string sku)"}</code> | <span className="api-desc">Adds the `set_` prefix to a SKU if it doesn't have it yet.</span> |
| <Link id="m-isitemset" /><code>{"static bool IsItemSet(string itemSku)"}</code> | <span className="api-desc">True if the SKU starts with `set_`. Null gives false.</span> |
