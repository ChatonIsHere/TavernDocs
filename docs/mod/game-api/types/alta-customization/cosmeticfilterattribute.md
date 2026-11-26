---
title: "CosmeticFilterAttribute"
description: "Inspector attribute that limits a cosmetic definition field to one category and to free or paid items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticFilterAttribute

A **class** in `Root.Township`, `Alta.Customization`.

Inspector attribute that limits a cosmetic definition field to one category and to free or paid items. Editor use only, for example in `ModellingCharacter`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`CosmeticFilterSkuAttribute`](/mod/game-api/types/global-c-d/cosmeticfilterskuattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticFilterAttribute(string category, bool isFree)"}</code> | <span className="api-desc">Creates a `CosmeticFilterAttribute` from `category` and `isFree`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"string Category { get; }"}</code> | <span className="api-desc">Name of the category to filter by, or null for any.</span> |
| <Link id="m-isfree" /><code>{"bool IsFree { get; }"}</code> | <span className="api-desc">Whether only free cosmetics should be offered.</span> |
