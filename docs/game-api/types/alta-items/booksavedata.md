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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<Book, BookSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Book`](/game-api/types/alta-items/book), [`BookSaveData`](/game-api/types/alta-items/booksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BookSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collection" /><code><Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection"}</code> | The page collection the book belongs to. |
| <Link id="m-pages" /><code><Link to="/game-api/types/alta-items/pageinstancesavedata1">{"PageInstanceSaveData1"}</Link>{"[] pages"}</code> | Saved data for each page in the book. |
