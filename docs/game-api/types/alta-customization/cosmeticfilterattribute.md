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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `PropertyAttribute`
- **Derived types** [`CosmeticFilterSkuAttribute`](/game-api/types/global-c-d/cosmeticfilterskuattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticFilterAttribute(string category, bool isFree)"}</code> | Creates a `CosmeticFilterAttribute` from `category` and `isFree`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"string Category { get; }"}</code> | Name of the category to filter by, or null for any. |
| <Link id="m-isfree" /><code>{"bool IsFree { get; }"}</code> | Whether only free cosmetics should be offered. |
