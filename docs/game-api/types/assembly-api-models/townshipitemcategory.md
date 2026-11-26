---
title: "TownshipItemCategory"
description: "A shop item category, which can sit under a parent category."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TownshipItemCategory

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A shop item category, which can sit under a parent category.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/game-api/types/assembly-api-models/iidentifiable)
- **Derived types** [`TownshipItemCategoryModificationRequest`](/game-api/types/assembly-api-models/townshipitemcategorymodificationrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TownshipItemCategory()"}</code> | Creates a `TownshipItemCategory` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-code" /><code>{"string Code { get; set; }"}</code> | Short code for the category. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Category description. |
| <Link id="m-enabled" /><code>{"bool Enabled { get; set; }"}</code> | Whether the category is shown. |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | The category's id; left out of the JSON when 0. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Category name. |
| <Link id="m-parentcategory" /><code><Link to="/game-api/types/assembly-api-models/townshipitemcategory">{"TownshipItemCategory"}</Link>{" ParentCategory { get; set; }"}</code> | The category this one sits under, or null for a top-level category. |
