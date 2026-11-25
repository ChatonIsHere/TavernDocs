---
title: "IPageBasis"
description: "interface IPageBasis in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPageBasis

An **interface** in `Root.Township`, `Alta.Pages`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`ChiselDefinition`](/game-api/types/alta-crafting/chiseldefinition), [`StewRecipe`](/game-api/types/alta-crafting/stewrecipe), [`GenericCraftingRecipe`](/game-api/types/alta-crafting/genericcraftingrecipe), [`Item`](/game-api/types/alta-items/item), [`Page`](/game-api/types/alta-items/page)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabledonsimpleserver" /><code>{"bool IsDisabledOnSimpleServer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" CreatePage(int preferredProvider)"}</code> |  |
| <Link id="m-gethash" /><code>{"uint GetHash()"}</code> |  |
| <Link id="m-getproviderid" /><code>{"int GetProviderID(int preferredProvider)"}</code> |  |
