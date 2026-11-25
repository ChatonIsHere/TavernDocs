---
title: "IPageBasis"
description: "Something a page can be generated about, such as an item or recipe, so books and notes can describe it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPageBasis

An **interface** in `Root.Township`, `Alta.Pages`.

Something a page can be generated about, such as an item or recipe, so books and notes can describe it.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`ChiselDefinition`](/game-api/types/alta-crafting/chiseldefinition), [`StewRecipe`](/game-api/types/alta-crafting/stewrecipe), [`GenericCraftingRecipe`](/game-api/types/alta-crafting/genericcraftingrecipe), [`Item`](/game-api/types/alta-items/item), [`Page`](/game-api/types/alta-items/page)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabledonsimpleserver" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> | Whether pages about this are left out on simple servers. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> | Makes a page about this, using the preferred page provider if it can. |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> | The hash that identifies this subject in page data. |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> | Which page provider would make the page, given a preferred one. |
