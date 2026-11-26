---
title: "BookSaveData"
description: "Save data (version 1) for a Book: its page collection and the pages inside it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BookSaveData

A **internal class** in `Root.Township`, `Alta.Pages`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 1) for a `Book`: its page collection and the pages inside it.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<Book, BookSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Book`](/mod/game-api/types/alta-items/book), [`BookSaveData`](/mod/game-api/types/alta-items/booksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BookSaveData()"}</code> | <span className="api-desc">Creates a `BookSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collection" /><code><Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection"}</code> | <span className="api-desc">The page collection the book belongs to.</span> |
| <Link id="m-pages" /><code><Link to="/mod/game-api/types/alta-items/pageinstancesavedata1">{"PageInstanceSaveData1"}</Link>{"[] pages"}</code> | <span className="api-desc">Saved data for each page in the book.</span> |
