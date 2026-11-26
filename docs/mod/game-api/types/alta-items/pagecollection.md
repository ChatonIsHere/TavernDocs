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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`HashedGeneralValue<PageCollection>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PageCollection`](/mod/game-api/types/alta-items/pagecollection), [`PageCollection.Create`](/mod/game-api/types/alta-items/pagecollection-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-items/pagecollection-create)
- **Attributes** `HashedPath`, `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageCollection()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canremovepagesfrom" /><code>{"private bool canRemovePagesFrom"}</code> | <span className="api-desc">Backing field for `CanRemovePagesFrom`.</span> |
| <Link id="m-flairs" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/flairsettings">{"FlairSettings"}</Link>{" flairs"}</code> | <span className="api-desc">Backing field for `Flairs`.</span> |
| <Link id="m-initialpages" /><code>{"private int[] initialPages"}</code> | <span className="api-desc">Indexes into `pageBases` for the pages the collection starts with.</span> |
| <Link id="m-ishidingmaxcount" /><code>{"private bool isHidingMaxCount"}</code> | <span className="api-desc">Backing field for `IsHidingMaxCount`.</span> |
| <Link id="m-pagebases" /><code>{"private Object[] pageBases"}</code> | <span className="api-desc">Page bases (`IPageBasis` objects) in the collection; a page's index is its position here.</span> |
| <Link id="m-preferredprovider" /><code>{"private int preferredProvider"}</code> | <span className="api-desc">Provider index passed to `CreatePage` when generating a page.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canremovepagesfrom-2" /><code>{"bool CanRemovePagesFrom { get; }"}</code> | <span className="api-desc">If false, pulling a page out of the book makes a duplicate and leaves the page in.</span> |
| <Link id="m-flairs-2" /><code><Link to="/mod/game-api/types/alta-items/flairsettings">{"FlairSettings"}</Link>{" Flairs { get; }"}</code> | <span className="api-desc">Decoration settings for books with this collection.</span> |
| <Link id="m-initialpages-2" /><code>{"IEnumerable<Object> InitialPages { get; }"}</code> | <span className="api-desc">Pages every world starts with already unlocked.</span> |
| <Link id="m-ishidingmaxcount-2" /><code>{"bool IsHidingMaxCount { get; }"}</code> | <span className="api-desc">If true, the book's counter shows only pages found, not found out of total.</span> |
| <Link id="m-pagebases-2" /><code>{"Object[] PageBases { get; }"}</code> | <span className="api-desc">The page assets in order.</span> |
| <Link id="m-preferredprovider-2" /><code>{"int PreferredProvider { get; }"}</code> | <span className="api-desc">Provider id used when creating page data.</span> |
| <Link id="m-size" /><code>{"int Size { get; }"}</code> | <span className="api-desc">Number of pages in the collection.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatepage" /><code><Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GeneratePage(int index)"}</code> | <span className="api-desc">Creates the page data for the page at an index, with the preferred provider.</span> |
| <Link id="m-indexof" /><code>{"int IndexOf(Object pageObject)"}</code> | <span className="api-desc">Position of a page asset in the collection, or -1.</span> |

## Used in

Members of other types that take, return or hold a `PageCollection`:

<div className="api-used-in">

[`ProgressCommandModule.FillBook`](/mod/game-api/types/alta-console/progresscommandmodule#m-fillbook), [`SpawnCommandModule.PageCollectionInfo.op_Implicit`](/mod/game-api/types/alta-console/spawncommandmodule-pagecollectioninfo#m-op-implicit), [`SpawnCommandModule.Pages.DropPackage`](/mod/game-api/types/alta-console/spawncommandmodule-pages#m-droppackage), [`SpawnCommandModule.Pages.SpawnFull`](/mod/game-api/types/alta-console/spawncommandmodule-pages#m-spawnfull), [`Book.collection`](/mod/game-api/types/alta-items/book#m-collection), [`Book.Collection`](/mod/game-api/types/alta-items/book#m-collection-2), [`Book.SetCollection`](/mod/game-api/types/alta-items/book#m-setcollection), [`BookRestrictor.collection`](/mod/game-api/types/alta-items/bookrestrictor#m-collection), [`BookRestrictorSaveData.collection`](/mod/game-api/types/alta-items/bookrestrictorsavedata#m-collection), [`BookSaveData.collection`](/mod/game-api/types/alta-items/booksavedata#m-collection), [`BookSpawner.collections`](/mod/game-api/types/alta-items/bookspawner#m-collections).

</div>
