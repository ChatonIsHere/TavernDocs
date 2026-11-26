---
title: "TownshipItemCategoryModificationRequest"
description: "A shop category as staff create or edit it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TownshipItemCategoryModificationRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A shop category as staff create or edit it. Same as `TownshipItemCategory` but the parent is sent as an id.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`TownshipItemCategory`](/mod/game-api/types/assembly-api-models/townshipitemcategory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TownshipItemCategoryModificationRequest()"}</code> | Creates a `TownshipItemCategoryModificationRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parentcategory" /><code>{"int ParentCategory { get; set; }"}</code> | Id of the parent category; left out of the JSON when 0. Hides the base class's object property. |
