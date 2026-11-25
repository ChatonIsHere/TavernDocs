---
title: "PageCollection"
description: "Asset listing the pages a kind of book can hold, in order."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageCollection

A **class** in `Root.Township`, `Alta.Pages`.

Asset listing the pages a kind of book can hold, in order. Looked up by hash; a `Book` uses one to know its pages.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`HashedGeneralValue<PageCollection>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PageCollection`](/game-api/types/alta-items/pagecollection), [`PageCollection.Create`](/game-api/types/alta-items/pagecollection-create)
- **Nested types** [`Create`](/game-api/types/alta-items/pagecollection-create)
- **Attributes** `HashedPath`, `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageCollection()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canremovepagesfrom" /><code>{"private bool canRemovePagesFrom"}</code> |  |
| <Link id="m-flairs" /><code>{"private "}<Link to="/game-api/types/alta-items/flairsettings">{"FlairSettings"}</Link>{" flairs"}</code> |  |
| <Link id="m-initialpages" /><code>{"private int[] initialPages"}</code> |  |
| <Link id="m-ishidingmaxcount" /><code>{"private bool isHidingMaxCount"}</code> |  |
| <Link id="m-pagebases" /><code>{"private Object[] pageBases"}</code> |  |
| <Link id="m-preferredprovider" /><code>{"private int preferredProvider"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canremovepagesfrom-2" /><code>{"bool CanRemovePagesFrom { get; }"}</code> | If false, pulling a page out of the book makes a duplicate and leaves the page in. |
| <Link id="m-flairs-2" /><code><Link to="/game-api/types/alta-items/flairsettings">{"FlairSettings"}</Link>{" Flairs { get; }"}</code> | Decoration settings for books with this collection. |
| <Link id="m-initialpages-2" /><code>{"IEnumerable<Object> InitialPages { get; }"}</code> | Pages every world starts with already unlocked. |
| <Link id="m-ishidingmaxcount-2" /><code>{"bool IsHidingMaxCount { get; }"}</code> | If true, the book's counter shows only pages found, not found out of total. |
| <Link id="m-pagebases-2" /><code>{"Object[] PageBases { get; }"}</code> | The page assets in order. |
| <Link id="m-preferredprovider-2" /><code>{"int PreferredProvider { get; }"}</code> | Provider id used when creating page data. |
| <Link id="m-size" /><code>{"int Size { get; }"}</code> | Number of pages in the collection. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code><Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage(int index)"}</code> | Creates the page data for the page at an index, with the preferred provider. |
| <Link id="m-indexof" /><code>{"int IndexOf(Object pageObject)"}</code> | Position of a page asset in the collection, or -1. |

## Used in

Members of other types that take, return or hold a `PageCollection`:

[`ProgressCommandModule.FillBook`](/game-api/types/alta-console/progresscommandmodule#m-fillbook), [`SpawnCommandModule.PageCollectionInfo.op_Implicit`](/game-api/types/alta-console/spawncommandmodule-pagecollectioninfo#m-op-implicit), [`SpawnCommandModule.Pages.DropPackage`](/game-api/types/alta-console/spawncommandmodule-pages#m-droppackage), [`SpawnCommandModule.Pages.SpawnFull`](/game-api/types/alta-console/spawncommandmodule-pages#m-spawnfull), [`Book.collection`](/game-api/types/alta-items/book#m-collection), [`Book.Collection`](/game-api/types/alta-items/book#m-collection-2), [`Book.SetCollection`](/game-api/types/alta-items/book#m-setcollection), [`BookRestrictor.collection`](/game-api/types/alta-items/bookrestrictor#m-collection), [`BookRestrictorSaveData.collection`](/game-api/types/alta-items/bookrestrictorsavedata#m-collection), [`BookSaveData.collection`](/game-api/types/alta-items/booksavedata#m-collection), [`BookSpawner.collections`](/game-api/types/alta-items/bookspawner#m-collections).
