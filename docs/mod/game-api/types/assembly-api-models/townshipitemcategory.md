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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/mod/game-api/types/assembly-api-models/iidentifiable)
- **Derived types** [`TownshipItemCategoryModificationRequest`](/mod/game-api/types/assembly-api-models/townshipitemcategorymodificationrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TownshipItemCategory()"}</code> | <span className="api-desc">Creates a `TownshipItemCategory` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-code" /><code>{"string Code { get; set; }"}</code> | <span className="api-desc">Short code for the category.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Category description.</span> |
| <Link id="m-enabled" /><code>{"bool Enabled { get; set; }"}</code> | <span className="api-desc">Whether the category is shown.</span> |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">The category's id; left out of the JSON when 0.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Category name.</span> |
| <Link id="m-parentcategory" /><code><Link to="/mod/game-api/types/assembly-api-models/townshipitemcategory">{"TownshipItemCategory"}</Link>{" ParentCategory { get; set; }"}</code> | <span className="api-desc">The category this one sits under, or null for a top-level category.</span> |
